(function () {
  "use strict";

  var root = document.documentElement;
  var config = window.SITE_CONFIG || {};
  var projects = window.PROJECTS || [];
  var en = window.I18N_EN || {};

  function store(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
  function lang() { return root.lang === "en" ? "en" : "fa"; }
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
  // Persian lives in the HTML; snapshot it so we can switch back without a reload.
  var faText = new Map();
  document.querySelectorAll("[data-i18n]").forEach(function (n) { faText.set(n, n.innerHTML); });
  var faAttr = [];
  document.querySelectorAll("[data-i18n-attr]").forEach(function (n) {
    n.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
      var p = pair.split(":");
      faAttr.push({ node: n, attr: p[0], key: p[1], value: n.getAttribute(p[0]) });
    });
  });

  // Persian strings used only from JS (no element in the page carries them).
  var faExtra = {
    "work.placeholder": "نمونه",
    "work.appStore": "App Store",
    "work.googlePlay": "Google Play",
    "work.github": "GitHub",
    "work.website": "وب‌سایت",
    "contact.telegram": "تلگرام",
    "contact.whatsapp": "واتس‌اپ",
    "contact.linkedin": "لینکدین",
    "contact.github": "گیت‌هاب"
  };

  function t(key) { return lang() === "en" ? (en[key] || key) : (faExtra[key] || key); }

  function applyLanguage(l) {
    root.lang = l;
    root.dir = l === "en" ? "ltr" : "rtl";
    faText.forEach(function (fa, n) {
      var key = n.getAttribute("data-i18n");
      if (l === "en" && en[key]) n.textContent = en[key]; else n.innerHTML = fa;
    });
    faAttr.forEach(function (rec) {
      rec.node.setAttribute(rec.attr, l === "en" && en[rec.key] ? en[rec.key] : rec.value);
    });
    document.getElementById("langToggle").setAttribute("lang", l === "en" ? "fa" : "en");
    var year = new Date().getFullYear();
    document.getElementById("year").textContent = num(year);
    document.getElementById("sideYear").textContent = num(year);
    renderProjects();
    renderContacts();
  }

  // ---------- portrait ----------
  if (isSet(config.photo)) {
    var portrait = document.getElementById("portrait");
    portrait.textContent = "";
    portrait.classList.add("has-photo");
    portrait.appendChild(el("img", { src: config.photo, alt: "Amirhosein Kohansal", width: "800", height: "1000" }));
  }

  // ---------- skills ----------
  var skills = document.getElementById("skills");
  (config.skills || []).forEach(function (s) { skills.appendChild(el("li", null, s)); });

  // ---------- marquee (two copies so the loop is seamless) ----------
  var marquee = document.getElementById("marquee");
  for (var copy = 0; copy < 2; copy++) {
    (config.skills || []).forEach(function (s) { marquee.appendChild(el("span", null, s)); });
  }

  // ---------- spotlight that follows the pointer over project images ----------
  document.getElementById("projects").addEventListener("pointermove", function (e) {
    var media = e.target.closest && e.target.closest(".work-media");
    if (!media) return;
    var r = media.getBoundingClientRect();
    media.style.setProperty("--mx", (e.clientX - r.left) + "px");
    media.style.setProperty("--my", (e.clientY - r.top) + "px");
  });

  // ---------- projects ----------
  var linkKeys = [["appStore", "work.appStore"], ["googlePlay", "work.googlePlay"], ["github", "work.github"], ["website", "work.website"]];

  function renderProjects() {
    var grid = document.getElementById("projects");
    grid.textContent = "";
    var l = lang();
    var sorted = projects.slice().sort(function (a, b) {
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || (a.placeholder ? 1 : 0) - (b.placeholder ? 1 : 0) || (b.year || 0) - (a.year || 0);
    });
    sorted.forEach(function (p, i) {
      var title = (p.title && p.title[l]) || (p.title && p.title.en) || p.id;
      var item = el("article", { "class": "work reveal" + (p.featured ? " featured" : "") + (p.placeholder ? " is-placeholder" : ""), id: "project-" + p.id });

      var media = el("div", { "class": "work-media" });
      if (p.image) {
        media.appendChild(el("img", { src: p.image, alt: title, loading: "lazy", width: "1200", height: "750" }));
      } else {
        media.appendChild(el("span", { "class": "work-initial", "aria-hidden": "true", dir: "ltr" }, title.trim().charAt(0)));
      }
      item.appendChild(media);

      var head = el("div", { "class": "work-head" });
      head.appendChild(el("span", { "class": "work-index", dir: "ltr" }, pad(i + 1)));
      head.appendChild(el("h3", { dir: "auto" }, title));
      if (p.year) head.appendChild(el("span", { "class": "work-year" }, num(p.year)));
      item.appendChild(head);

      var meta = el("p", { "class": "work-meta" });
      if (p.placeholder) meta.appendChild(el("span", { "class": "badge" }, t("work.placeholder")));
      if (p.role) meta.appendChild(document.createTextNode(p.role[l] || p.role.en || ""));
      item.appendChild(meta);

      if (p.description) item.appendChild(el("p", { "class": "work-desc" }, p.description[l] || p.description.en || ""));
      if (p.tech && p.tech.length) item.appendChild(el("p", { "class": "work-tech", dir: "ltr" }, p.tech.join(" · ")));

      var links = el("div", { "class": "work-links" });
      linkKeys.forEach(function (k) {
        var url = p.links && p.links[k[0]];
        if (isSet(url)) links.appendChild(el("a", { "class": "arrow-link", href: url, target: "_blank", rel: "noopener" }, t(k[1])));
      });
      if (links.childNodes.length) item.appendChild(links);

      grid.appendChild(item);
    });
    observeReveals();
  }

  // ---------- contact ----------
  function renderContacts() {
    var email = document.getElementById("emailLink");
    if (isSet(config.email)) { email.href = "mailto:" + config.email; email.textContent = config.email; }
    else email.hidden = true;

    var out = [];
    if (isSet(config.linkedin)) out.push(["linkedin", config.linkedin]);
    if (isSet(config.github)) out.push(["github", config.github]);
    if (isSet(config.telegram)) out.push(["telegram", "https://t.me/" + config.telegram]);
    if (isSet(config.whatsapp)) out.push(["whatsapp", "https://wa.me/" + config.whatsapp]);

    var list = document.getElementById("contactLinks");
    list.textContent = "";
    out.forEach(function (c) {
      var li = el("li");
      li.appendChild(el("a", { "class": "arrow-link", href: c[1], target: "_blank", rel: "noopener" }, t("contact." + c[0])));
      list.appendChild(li);
    });
  }

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
