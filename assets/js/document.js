/* ============================================================
   APCNB / NBPAC — Bascule de langue pour les pages de documents
   Affiche les blocs [data-lang-block="fr"] ou [="en"].
   Synchronise avec la préférence du site (clé apcnb-lang).
   ============================================================ */
(function () {
  "use strict";
  var KEY = "apcnb-lang";
  var SUPPORTED = ["fr", "en"];

  function initialLang() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    var nav = (navigator.language || "fr").toLowerCase();
    return nav.indexOf("en") === 0 ? "en" : "fr";
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "fr";
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    // Update <title> if bilingual titles are present
    var t = document.querySelector('title');
    var alt = document.querySelector('meta[data-title-' + lang + ']');
    if (alt) { t.textContent = alt.getAttribute('data-title-' + lang); }
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(initialLang());
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
    });
  });
})();
