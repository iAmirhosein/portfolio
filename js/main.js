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

  function t(key) {
    if (lang() === "en") return en[key] || key;
    var n = document.querySelector('[data-i18n="' + key + '"]');
    return n ? faText.get(n) : (window.I18N_FA_EXTRA || {})[key] || key;
  }

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
    var toggle = document.getElementById("langToggle");
    toggle.setAttribute("lang", l === "en" ? "fa" : "en");
    document.querySelectorAll(".step").forEach(function (s, i) { s.textContent = num(i + 1); });
    document.getElementById("year").textContent = num(new Date().getFullYear());
    renderProjects();
    renderContacts();
  }

  // Strings used only from JS (no element in the page carries them in Persian).
  window.I18N_FA_EXTRA = {
    "work.placeholder": "نمونه",
    "work.appStore": "App Store",
    "work.googlePlay": "Google Play",
    "work.github": "GitHub",
    "work.website": "وب‌سایت",
    "contact.email": "ایمیل",
    "contact.telegram": "تلگرام",
    "contact.whatsapp": "واتس‌اپ",
    "contact.linkedin": "لینکدین",
    "contact.github": "گیت‌هاب",
    "contact.form.copied": "متن پیام کپی شد. آن را در گفت‌وگوی تلگرام بچسبانید.",
    "contact.form.required": "لطفاً نام و چند کلمه درباره‌ی پروژه را بنویسید.",
    "contact.form.subject": "درخواست ساخت اپلیکیشن",
    "contact.form.msgName": "نام",
    "contact.form.msgType": "نوع کار",
    "contact.form.msgBudget": "بودجه",
    "contact.form.msgDetails": "توضیحات"
  };

  // ---------- skills ----------
  var skills = document.getElementById("skills");
  (config.skills || []).forEach(function (s) { skills.appendChild(el("li", null, s)); });

  // ---------- projects ----------
  var palette = ["#0071e3", "#5e5ce6", "#30a46c", "#ff9f0a", "#ff375f", "#64d2ff"];
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
      var card = el("article", { "class": "project reveal" + (p.featured ? " featured" : "") + (p.placeholder ? " is-placeholder" : ""), id: "project-" + p.id });

      var text = el("div", { "class": "text" });
      var meta = el("div", { "class": "meta" });
      if (p.placeholder) meta.appendChild(el("span", { "class": "badge" }, t("work.placeholder")));
      var bits = [p.role && p.role[l], p.year && num(p.year)].filter(Boolean);
      if (bits.length) meta.appendChild(el("span", null, bits.join(" · ")));
      text.appendChild(meta);
      text.appendChild(el("h3", { dir: "auto" }, title));
      if (p.description) text.appendChild(el("p", { "class": "desc" }, p.description[l] || p.description.en || ""));
      if (p.tech && p.tech.length) text.appendChild(el("p", { "class": "tech", dir: "ltr" }, p.tech.join(" · ")));

      var links = el("div", { "class": "project-links" });
      linkKeys.forEach(function (k) {
        var url = p.links && p.links[k[0]];
        if (isSet(url)) links.appendChild(el("a", { "class": "more", href: url, target: "_blank", rel: "noopener" }, t(k[1])));
      });
      if (links.childNodes.length) text.appendChild(links);
      card.appendChild(text);

      var media = el("div", { "class": "media" });
      if (p.image) {
        media.appendChild(el("img", { src: p.image, alt: title, loading: "lazy", width: "1200", height: "750" }));
      } else {
        var c = palette[i % palette.length];
        var art = el("div", { "class": "placeholder-art", "aria-hidden": "true" }, title.trim().charAt(0));
        art.style.background = "linear-gradient(160deg, " + c + ", color-mix(in srgb, " + c + " 55%, #000))";
        media.appendChild(art);
      }
      card.appendChild(media);
      grid.appendChild(card);
    });
    observeReveals();
  }

  // ---------- scroll reveal ----------
  root.classList.add("js");
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

  // ---------- contact links ----------
  var icons = {
    email: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 7 8.5-7"/></svg>',
    telegram: '<svg viewBox="0 0 24 24"><path d="M21 4 3 11.5l6 2.2M21 4l-3 16-8.9-6.3M21 4 9.1 13.7 9 19l3.2-3.4"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24"><path d="M4 20l1.3-4A8.5 8.5 0 1 1 8.4 19z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4.5 4.5 0 0 1-2.3-2.3l.8-1-1-2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.5v.01M12 16v-5.5M12 13a2.5 2.5 0 0 1 5 0v3"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.9-2.4c3-.3 6-1.5 6-6.6a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.6 0C5.7 1 4.6 1.3 4.6 1.3a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3 8.5c0 5.1 3 6.3 6 6.6a3 3 0 0 0-.9 2.4V21"/></svg>'
  };

  function contactEntries() {
    var out = [];
    if (isSet(config.email)) out.push(["email", "mailto:" + config.email, config.email]);
    if (isSet(config.telegram)) out.push(["telegram", "https://t.me/" + config.telegram, "@" + config.telegram]);
    if (isSet(config.whatsapp)) out.push(["whatsapp", "https://wa.me/" + config.whatsapp, "+" + config.whatsapp]);
    if (isSet(config.linkedin)) out.push(["linkedin", config.linkedin, config.linkedin.replace(/^https?:\/\/(www\.)?/, "")]);
    if (isSet(config.github)) out.push(["github", config.github, config.github.replace(/^https?:\/\//, "")]);
    return out;
  }

  function renderContacts() {
    var list = document.getElementById("contactLinks");
    list.textContent = "";
    contactEntries().forEach(function (c) {
      var a = el("a", { href: c[1] });
      if (c[0] !== "email") { a.target = "_blank"; a.rel = "noopener"; }
      a.innerHTML = icons[c[0]];
      a.appendChild(el("span", { "class": "label" }, t("contact." + c[0])));
      a.appendChild(el("span", { "class": "value" }, c[2]));
      var li = el("li");
      li.appendChild(a);
      list.appendChild(li);
    });
    document.getElementById("sendTelegram").hidden = !isSet(config.telegram);
  }

  // ---------- request form ----------
  var form = document.getElementById("requestForm");
  var msg = document.getElementById("formMsg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var via = (e.submitter && e.submitter.value) || "email";
    var name = form.name.value.trim();
    var details = form.details.value.trim();
    if (!name || !details) { msg.textContent = t("contact.form.required"); return; }
    var type = form.type.options[form.type.selectedIndex].textContent;
    var budget = form.budget.value.trim();
    var body = [
      t("contact.form.msgName") + ": " + name,
      t("contact.form.msgType") + ": " + type,
      budget ? t("contact.form.msgBudget") + ": " + budget : null,
      "",
      t("contact.form.msgDetails") + ":",
      details
    ].filter(function (x) { return x !== null; }).join("\n");

    if (via === "telegram" && isSet(config.telegram)) {
      var open = function () { window.open("https://t.me/" + config.telegram, "_blank", "noopener"); };
      msg.textContent = t("contact.form.copied");
      if (navigator.clipboard) navigator.clipboard.writeText(body).then(open, open); else open();
    } else {
      msg.textContent = "";
      location.href = "mailto:" + config.email +
        "?subject=" + encodeURIComponent(t("contact.form.subject") + " | " + name) +
        "&body=" + encodeURIComponent(body);
    }
  });

  // ---------- theme ----------
  document.getElementById("themeToggle").addEventListener("click", function () {
    var current = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store("theme", next);
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

  // project cards are rendered by JS, so jump to #project-… once they exist
  if (location.hash.indexOf("#project-") === 0) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) { target.classList.add("in"); target.scrollIntoView(); }
  }
})();
