/* ============================================================
   APCNB / NBPAC — Outils d'accessibilité
   Taille de texte (A− / A+) et contraste élevé, persistés.
   ============================================================ */
(function () {
  "use strict";
  var STEP_KEY = "apcnb-fontstep", CONTRAST_KEY = "apcnb-contrast";
  var STEPS = [0.9, 1, 1.1, 1.2, 1.35]; // facteurs d'échelle
  var idx = 1;

  function readInt(k, def) { try { var v = parseInt(localStorage.getItem(k), 10); return isNaN(v) ? def : v; } catch (e) { return def; } }
  function applyFont() {
    idx = Math.max(0, Math.min(STEPS.length - 1, idx));
    document.documentElement.style.fontSize = (STEPS[idx] * 100) + "%";
    try { localStorage.setItem(STEP_KEY, String(idx)); } catch (e) {}
  }
  function applyContrast(on) {
    document.documentElement.classList.toggle("hc", on);
    document.querySelectorAll('[data-a11y="contrast"]').forEach(function (b) {
      b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    try { localStorage.setItem(CONTRAST_KEY, on ? "1" : "0"); } catch (e) {}
  }

  function init() {
    idx = readInt(STEP_KEY, 1);
    applyFont();
    applyContrast(readInt(CONTRAST_KEY, 0) === 1);

    document.querySelectorAll("[data-a11y]").forEach(function (b) {
      b.addEventListener("click", function () {
        var a = b.getAttribute("data-a11y");
        if (a === "inc") { idx++; applyFont(); }
        else if (a === "dec") { idx--; applyFont(); }
        else if (a === "contrast") { applyContrast(!document.documentElement.classList.contains("hc")); }
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
