(function () {
  "use strict";

  var root = document.documentElement;
  var config = window.SITE_CONFIG || {};
  var projects = window.PROJECTS || [];
  var en = window.I18N_EN || {};
  // index.html and project.html share this script; the home sections only exist on index.html
  var isHome = !!document.getElementById("projects");

  function store(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
  function lang() { return root.lang === "fa" ? "fa" : "en"; }
  function isSet(v) { return typeof v === "string" && v.trim() !== "" && v.indexOf("REPLACE_ME") === -1; }
  function faDigits(s) { return String(s).replace(/\d/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹"[d]; }); }
  function num(s) { return lang() === "fa" ? faDigits(s) : String(s); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    for (var k in attrs || {}) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    return n;
  }

  // ---------- language ----------
  // English is the default and lives in the HTML; snapshot it so Persian can switch back without a reload.
  var fa = window.I18N_FA || {};
  var baseText = new Map();
  document.querySelectorAll("[data-i18n]").forEach(function (n) { baseText.set(n, n.textContent); });
  var baseAttr = [];
  document.querySelectorAll("[data-i18n-attr]").forEach(function (n) {
    n.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
      var p = pair.split(":");
      baseAttr.push({ node: n, attr: p[0], key: p[1], value: n.getAttribute(p[0]) });
    });
  });

  function t(key) { return (lang() === "fa" ? fa[key] : en[key]) || en[key] || key; }

  function applyLanguage(l) {
    root.lang = l;
    root.dir = l === "fa" ? "rtl" : "ltr";
    baseText.forEach(function (text, n) {
      var key = n.getAttribute("data-i18n");
      n.textContent = l === "fa" && fa[key] ? fa[key] : text;
    });
    baseAttr.forEach(function (rec) {
      rec.node.setAttribute(rec.attr, l === "fa" && fa[rec.key] ? fa[rec.key] : rec.value);
    });
    document.getElementById("langToggle").setAttribute("lang", l === "fa" ? "en" : "fa");
    var year = new Date().getFullYear();
    document.getElementById("year").textContent = num(year);
    if (!isHome) { renderDetail(); return; }
    document.getElementById("sideYear").textContent = num(year);
    renderProjects();
    renderExpertise();
    renderExperience();
    renderContacts();
  }

  // ---------- CV button: shown only once assets/cv.pdf exists ----------
  var cvLink = document.getElementById("cvLink");
  if (cvLink) fetch(cvLink.getAttribute("href"), { method: "HEAD" }).then(function (r) { if (r.ok) cvLink.hidden = false; }).catch(function () {});

  // ---------- portrait ----------
  if (isHome && isSet(config.photo)) {
    var portrait = document.getElementById("portrait");
    portrait.textContent = "";
    portrait.classList.add("has-photo");
    portrait.appendChild(el("img", { src: config.photo, alt: "Amirhosein Kohansal", width: "800", height: "1000" }));
  }

  // ---------- marquee (two copies so the loop is seamless) ----------
  var marquee = document.getElementById("marquee");
  for (var copy = 0; marquee && copy < 2; copy++) {
    (config.skills || []).forEach(function (s) { marquee.appendChild(el("span", null, s)); });
  }

  // ---------- spotlight that follows the pointer over project images ----------
  if (isHome) document.getElementById("projects").addEventListener("pointermove", function (e) {
    var media = e.target.closest && e.target.closest(".work-media");
    if (!media) return;
    var r = media.getBoundingClientRect();
    media.style.setProperty("--mx", (e.clientX - r.left) + "px");
    media.style.setProperty("--my", (e.clientY - r.top) + "px");
  });

  // ---------- projects ----------
  var linkKeys = [["appStore", "work.appStore"], ["sibapp", "work.sibapp"], ["anardoni", "work.anardoni"], ["googlePlay", "work.googlePlay"], ["github", "work.github"], ["website", "work.website"]];

  function text(field, l) { return field ? field[l] || field.en || "" : ""; }

  function projectLinks(p) {
    var links = el("div", { "class": "work-links" });
    linkKeys.forEach(function (k) {
      var url = p.links && p.links[k[0]];
      if (isSet(url)) links.appendChild(el("a", { "class": "arrow-link", href: url, target: "_blank", rel: "noopener" }, t(k[1])));
    });
    return links;
  }

  function renderProjects() {
    var grid = document.getElementById("projects");
    var more = document.getElementById("moreProjects");
    grid.textContent = "";
    more.textContent = "";
    var l = lang();

    // selected projects keep the order of projects.js and get a full case study
    projects.filter(function (p) { return p.selected; }).forEach(function (p, i) {
      var title = text(p.title, l) || p.id;
      var item = el("article", { "class": "work reveal" + (p.placeholder ? " is-placeholder" : ""), id: "project-" + p.id });

      var href = "project.html?p=" + p.id;
      var media = el("a", { "class": "work-media", href: href, "aria-label": title });
      if (p.image) {
        media.appendChild(el("img", { src: p.image, alt: title, loading: "lazy", width: "1200", height: "750" }));
      } else {
        media.appendChild(el("span", { "class": "work-initial", "aria-hidden": "true", dir: "ltr" }, title.trim().charAt(0)));
      }
      item.appendChild(media);

      var body = el("div", { "class": "work-body" });
      var head = el("div", { "class": "work-head" });
      head.appendChild(el("span", { "class": "work-index", dir: "ltr" }, pad(i + 1)));
      head.appendChild(el("h3", { dir: "auto" }, title));
      if (p.year) head.appendChild(el("span", { "class": "work-year" }, num(p.year)));
      body.appendChild(head);

      var meta = el("p", { "class": "work-meta" });
      if (p.placeholder) meta.appendChild(el("span", { "class": "badge" }, t("work.placeholder")));
      if (p.role) meta.appendChild(document.createTextNode(text(p.role, l)));
      body.appendChild(meta);
      if (p.description) body.appendChild(el("p", { "class": "work-desc" }, text(p.description, l)));
      if (p.summary) body.appendChild(el("p", { "class": "work-summary" }, text(p.summary, l)));

      if (p.tech && p.tech.length) body.appendChild(el("p", { "class": "work-tech", dir: "ltr" }, p.tech.join(" · ")));
      var links = projectLinks(p);
      links.insertBefore(el("a", { "class": "case-link", href: href }, t("work.caseStudy")), links.firstChild);
      body.appendChild(links);

      item.appendChild(body);
      grid.appendChild(item);
    });

    // the rest stay linkable (#project-<id>, used by the old portfolio/* URLs) as a compact list
    projects.filter(function (p) { return !p.selected; })
      .sort(function (a, b) { return (b.year || 0) - (a.year || 0); })
      .forEach(function (p) {
        var li = el("li", { "class": "more-item reveal", id: "project-" + p.id });
        var head = el("div", { "class": "more-head" });
        head.appendChild(el("h4", { dir: "auto" }, text(p.title, l) || p.id));
        if (p.year) head.appendChild(el("span", { "class": "work-year" }, num(p.year)));
        li.appendChild(head);
        li.appendChild(el("p", { "class": "work-meta" }, text(p.role, l)));
        if (p.description) li.appendChild(el("p", { "class": "more-desc" }, text(p.description, l)));
        var links = projectLinks(p);
        if (links.childNodes.length) li.appendChild(links);
        more.appendChild(li);
      });
    observeReveals();
  }

  // ---------- expertise ----------
  function renderExpertise() {
    var list = document.getElementById("expertiseList");
    list.textContent = "";
    (config.expertise || []).forEach(function (g) {
      var li = el("li", { "class": "reveal" });
      li.appendChild(el("h3", null, text(g.title, lang())));
      var items = el("ul", { "class": "chips", dir: "ltr" });
      (g.items || []).forEach(function (s) { items.appendChild(el("li", null, s)); });
      li.appendChild(items);
      list.appendChild(li);
    });
    observeReveals();
  }

  // ---------- experience ----------
  function renderExperience() {
    var list = document.getElementById("experienceList");
    list.textContent = "";
    var l = lang();
    (config.experience || []).forEach(function (x) {
      var li = el("li", { "class": "reveal" });
      var period = x.to === x.from ? num(x.from) : num(x.from) + " — " + (x.to ? num(x.to) : t("experience.present"));
      li.appendChild(el("p", { "class": "timeline-period" }, period));
      var body = el("div");
      var head = el("h3");
      head.appendChild(document.createTextNode(text(x.role, l) + (x.project ? " — " : "")));
      if (x.project) head.appendChild(el("bdi", null, x.project));
      body.appendChild(head);
      if (x.company && x.company !== x.project) body.appendChild(el("p", { "class": "timeline-org" }, x.company));
      if (x.summary) body.appendChild(el("p", null, text(x.summary, l)));
      var points = x.points ? x.points[l] || x.points.en : [];
      if (points && points.length) {
        var ul = el("ul", { "class": "feature-list timeline-points" });
        points.forEach(function (s) { ul.appendChild(el("li", null, s)); });
        body.appendChild(ul);
      }
      if (x.tech && x.tech.length) {
        var chips = el("ul", { "class": "chips timeline-tech" });
        x.tech.forEach(function (s) { chips.appendChild(el("li", null, s)); });
        body.appendChild(chips);
      }
      li.appendChild(body);
      list.appendChild(li);
    });
    observeReveals();
  }

  // ---------- project detail (project.html?p=<id>) ----------
  function section(label, content) {
    var sec = el("section", { "class": "detail-section split reveal" });
    sec.appendChild(el("h2", { "class": "section-label" }, label));
    var box = el("div");
    content.forEach(function (n) { box.appendChild(n); });
    sec.appendChild(box);
    return sec;
  }

  function renderDetail() {
    var out = document.getElementById("projectDetail");
    var l = lang();
    var selected = projects.filter(function (p) { return p.selected; });
    var id = new URLSearchParams(location.search).get("p");
    var idx = selected.findIndex(function (p) { return p.id === id; });
    if (idx < 0) { location.replace("./#work"); return; }
    var p = selected[idx];
    var title = text(p.title, l);
    document.title = title + " | " + t("meta.title");
    out.textContent = "";

    var head = el("header", { "class": "detail-head" });
    head.appendChild(el("a", { "class": "back-link", href: "./#project-" + p.id }, t("detail.back")));
    head.appendChild(el("h1", { "class": "detail-title" }, title));
    head.appendChild(el("p", { "class": "detail-tagline" }, text(p.description, l)));
    var facts = el("dl", { "class": "detail-facts" });
    [["detail.role", text(p.myRole && p.myRole.title, l)], ["detail.year", p.year ? num(p.year) : ""], ["detail.status", text(p.status, l)]].forEach(function (f) {
      if (!f[1]) return;
      var d = el("div");
      d.appendChild(el("dt", null, t(f[0])));
      d.appendChild(el("dd", null, f[1]));
      facts.appendChild(d);
    });
    head.appendChild(facts);
    var links = projectLinks(p);
    if (links.childNodes.length) head.appendChild(links);
    out.appendChild(head);

    var cover = el("figure", { "class": "detail-cover work-media" });
    if (p.image) cover.appendChild(el("img", { src: p.image, alt: title, width: "1200", height: "750" }));
    else cover.appendChild(el("span", { "class": "work-initial", "aria-hidden": "true", dir: "ltr" }, title.charAt(0)));
    out.appendChild(cover);

    if (p.overview) out.appendChild(section(t("detail.overview"), (p.overview[l] || p.overview.en).map(function (para, i) {
      return el("p", { "class": i === 0 ? "detail-lead" : "detail-p" }, para);
    })));

    if (p.myRole) out.appendChild(section(t("detail.myRole"), [
      el("h3", { "class": "detail-h3" }, text(p.myRole.title, l)),
      el("p", { "class": "detail-p" }, text(p.myRole.body, l))
    ]));

    if (p.features) {
      var ul = el("ul", { "class": "feature-list" });
      (p.features[l] || p.features.en).forEach(function (f) { ul.appendChild(el("li", null, f)); });
      out.appendChild(section(t("detail.features"), [ul]));
    }

    if (p.highlights && p.highlights.length) {
      var grid = el("div", { "class": "highlight-grid" });
      p.highlights.forEach(function (h) {
        var c = el("div", { "class": "tile" });
        c.appendChild(el("h3", null, text(h.title, l)));
        c.appendChild(el("p", null, text(h.body, l)));
        grid.appendChild(c);
      });
      out.appendChild(section(t("detail.highlights"), [grid]));
    }

    if (p.screenshots && p.screenshots.length) {
      var shots = el("div", { "class": "shots", dir: "ltr" });
      p.screenshots.forEach(function (src, i) {
        shots.appendChild(el("img", { src: src, alt: title + " — " + (i + 1), loading: "lazy", width: "600", height: "1300" }));
      });
      out.appendChild(section(t("detail.screens"), [shots]));
    }

    if (p.tech && p.tech.length) {
      var chips = el("ul", { "class": "chips", dir: "ltr" });
      p.tech.forEach(function (s) { chips.appendChild(el("li", null, s)); });
      out.appendChild(section(t("detail.tech"), [chips]));
    }

    var next = selected[(idx + 1) % selected.length];
    var nav = el("a", { "class": "next-project", href: "project.html?p=" + next.id });
    nav.appendChild(el("span", { "class": "section-label" }, t("detail.next")));
    nav.appendChild(el("span", { "class": "next-title" }, text(next.title, l)));
    out.appendChild(nav);

    observeReveals();
  }

  // ---------- contact ----------
  function renderContacts() {
    var email = document.getElementById("emailLink");
    if (isSet(config.email)) { email.href = "mailto:" + config.email; email.textContent = config.email; }
    else email.parentNode.hidden = true;

    var out = [];
    if (isSet(config.telegram)) out.push(["telegram", "https://t.me/" + config.telegram]);
    // a phone number gets a wa.me link; a username has no published link format, so it is copied instead
    if (isSet(config.whatsapp)) out.push(["whatsapp", /^\d+$/.test(config.whatsapp) ? "https://wa.me/" + config.whatsapp : null]);
    if (isSet(config.linkedin)) out.push(["linkedin", config.linkedin]);
    if (isSet(config.github)) out.push(["github", config.github]);

    var list = document.getElementById("contactLinks");
    list.textContent = "";
    out.forEach(function (c) {
      var li = el("li");
      if (c[1]) {
        li.appendChild(el("a", { "class": "arrow-link", href: c[1], target: "_blank", rel: "noopener" }, t("contact." + c[0])));
      } else {
        var label = t("contact." + c[0]) + " · " + config.whatsapp;
        var btn = el("button", { "class": "copy-chip", type: "button", title: t("contact.copy") }, label);
        btn.addEventListener("click", function () {
          var done = function () { btn.textContent = t("contact.copied"); setTimeout(function () { btn.textContent = label; }, 1600); };
          if (navigator.clipboard) navigator.clipboard.writeText(config.whatsapp).then(done, done); else done();
        });
        li.appendChild(btn);
      }
      list.appendChild(li);
    });
  }

  // ---------- copy email (mailto does nothing on machines without a mail app) ----------
  var copyEmail = document.getElementById("copyEmail");
  if (copyEmail) copyEmail.addEventListener("click", function () {
    var label = copyEmail.textContent;
    var done = function () {
      copyEmail.textContent = t("contact.emailCopied");
      setTimeout(function () { copyEmail.textContent = label; }, 1600);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(config.email).then(done, done); else done();
  });

  // ---------- scroll reveal ----------
  var revealer = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); revealer.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" }) : null;
  function observeReveals() {
    document.querySelectorAll(".reveal:not(.in)").forEach(function (n) {
      if (revealer) revealer.observe(n); else n.classList.add("in");
    });
  }

  // ---------- theme ----------
  document.getElementById("themeToggle").addEventListener("click", function (e) {
    var current = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    function swap() { root.setAttribute("data-theme", next); store("theme", next); }
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) { swap(); return; }
    // circular reveal growing out of the toggle button
    var x = e.clientX, y = e.clientY;
    var r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(swap).ready.then(function () {
      root.animate(
        { clipPath: ["circle(0px at " + x + "px " + y + "px)", "circle(" + r + "px at " + x + "px " + y + "px)"] },
        { duration: 600, easing: "cubic-bezier(.2, .7, .2, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  });

  // ---------- language toggle ----------
  document.getElementById("langToggle").addEventListener("click", function () {
    var next = lang() === "en" ? "fa" : "en";
    store("lang", next);
    applyLanguage(next);
  });

  // ---------- mobile menu ----------
  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menuToggle");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  applyLanguage(lang());
  observeReveals();

  // project cards are rendered by JS, so jump to #project-… once they exist
  if (location.hash.indexOf("#project-") === 0) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) { target.classList.add("in"); target.scrollIntoView(); }
  }
})();
