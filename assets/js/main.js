/* ============================================================
   APCNB / NBPAC — Comportement du site
   - Bascule de langue (FR / EN) avec persistance
   - Menu mobile
   - Formulaire de contact (démonstration)
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "apcnb-lang";
  var SUPPORTED = ["fr", "en"];
  var dict = window.APCNB_TRANSLATIONS || {};

  function getInitialLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || "fr").toLowerCase();
    return nav.indexOf("en") === 0 ? "en" : "fr";
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "fr";
    var table = dict[lang] || {};

    document.documentElement.setAttribute("lang", lang);

    // Text nodes / attributes flagged with data-i18n
    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = table[key];
      if (value == null) return;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) {
        el.setAttribute(attr, value);
      } else if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else if (el.hasAttribute("placeholder") && el.getAttribute("data-i18n-ph")) {
        el.setAttribute("placeholder", value);
      } else {
        el.textContent = value;
      }
    });

    // Update the language buttons' active state
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var list = document.getElementById("nav-list");
    if (!toggle || !list) return;
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      list.classList.toggle("is-open", !open);
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        list.classList.remove("is-open");
      }
    });
  }

  function initContactForm() {
    var form = document.querySelector(".contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var note = form.querySelector(".form-note");
      if (note) note.hidden = false;
      form.querySelectorAll("input, textarea").forEach(function (f) { f.value = ""; });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getInitialLang());
    initLangSwitch();
    initMobileNav();
    initContactForm();
  });
})();
