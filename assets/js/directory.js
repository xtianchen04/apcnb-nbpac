/* ============================================================
   APCNB / NBPAC — Bottin des membres (démonstration)
   Données fictives. Recherche + filtres + rendu bilingue.
   ============================================================ */
(function () {
  "use strict";

  var searched = false;      // n'affiche rien tant qu'une recherche n'a pas été lancée
  var MAXRESULTS = 50;       // limite d'affichage (utile si des milliers de membres)

  // Régions du Nouveau-Brunswick (bilingue)
  var REGIONS = {
    "sud-est":   { fr: "Sud-Est (Moncton, Dieppe)", en: "South-East (Moncton, Dieppe)" },
    "capitale":  { fr: "Capitale (Fredericton)", en: "Capital (Fredericton)" },
    "fundy":     { fr: "Fundy (Saint John)", en: "Fundy (Saint John)" },
    "nord-ouest":{ fr: "Nord-Ouest (Edmundston)", en: "North-West (Edmundston)" },
    "nord-est":  { fr: "Nord-Est (Bathurst, Péninsule acadienne)", en: "North-East (Bathurst, Acadian Peninsula)" },
    "centre":    { fr: "Centre (Miramichi)", en: "Centre (Miramichi)" }
  };

  // Domaines de pratique (bilingue)
  var AREAS = {
    "justice-penale":  { fr: "Justice pénale", en: "Criminal justice" },
    "reinsertion":     { fr: "Réinsertion sociale", en: "Social reintegration" },
    "victimologie":    { fr: "Victimologie", en: "Victimology" },
    "jeunesse":        { fr: "Délinquance juvénile", en: "Youth justice" },
    "mediation":       { fr: "Médiation et justice réparatrice", en: "Mediation & restorative justice" },
    "evaluation":      { fr: "Évaluation du risque", en: "Risk assessment" },
    "dependances":     { fr: "Dépendances", en: "Addictions" },
    "recherche":       { fr: "Recherche et politiques", en: "Research & policy" },
    "carceral":        { fr: "Milieu carcéral", en: "Correctional settings" },
    "crime-financier": { fr: "Criminalité économique et financière", en: "Economic & financial crime" },
    "analyse-donnees": { fr: "Analyse de données", en: "Data analysis" },
    "renseignement":   { fr: "Analyse de renseignement criminel", en: "Criminal intelligence analysis" }
  };

  var CAT = {
    "regulier": { fr: "Membre régulier", en: "Regular member" },
    "associe":  { fr: "Membre associé", en: "Associate member" }
  };

  // Membres fictifs
  var MEMBERS = [
    { first: "Christian", last: "Chendjou", city: "Grand Moncton, Shediac, Memramcook", region: "sud-est", cat: "regulier", langs: "FR/EN/DE/ES", areas: ["crime-financier", "analyse-donnees", "renseignement"] },
    { first: "Marie-Claude", last: "Bourque", city: "Moncton", region: "sud-est", cat: "regulier", langs: "FR/EN", areas: ["justice-penale", "victimologie"] },
    { first: "Jonathan", last: "LeBlanc", city: "Dieppe", region: "sud-est", cat: "regulier", langs: "FR/EN", areas: ["reinsertion", "carceral"] },
    { first: "Sarah", last: "Thompson", city: "Fredericton", region: "capitale", cat: "regulier", langs: "EN", areas: ["evaluation", "recherche"] },
    { first: "Alexandre", last: "Roy", city: "Edmundston", region: "nord-ouest", cat: "regulier", langs: "FR", areas: ["jeunesse", "mediation"] },
    { first: "Émilie", last: "Cormier", city: "Bathurst", region: "nord-est", cat: "regulier", langs: "FR/EN", areas: ["victimologie", "dependances"] },
    { first: "David", last: "MacIntyre", city: "Saint John", region: "fundy", cat: "regulier", langs: "EN", areas: ["justice-penale", "evaluation"] },
    { first: "Nadia", last: "Haché", city: "Tracadie", region: "nord-est", cat: "associe", langs: "FR/EN", areas: ["jeunesse", "reinsertion"] },
    { first: "Robert", last: "Doucet", city: "Miramichi", region: "centre", cat: "regulier", langs: "FR/EN", areas: ["mediation", "recherche"] },
    { first: "Jessica", last: "Arsenault", city: "Moncton", region: "sud-est", cat: "associe", langs: "FR/EN", areas: ["dependances", "victimologie"] },
    { first: "Liam", last: "O'Neill", city: "Fredericton", region: "capitale", cat: "regulier", langs: "EN", areas: ["carceral", "justice-penale"] }
  ];

  function lang() { return document.documentElement.getAttribute("lang") === "en" ? "en" : "fr"; }
  function t(key) {
    var d = (window.APCNB_TRANSLATIONS || {})[lang()] || {};
    return d[key] || key;
  }

  function fillSelect(sel, map) {
    var cur = sel.value;
    var opts = ['<option value="">' + t("dir.f.all") + "</option>"];
    Object.keys(map).forEach(function (k) {
      opts.push('<option value="' + k + '">' + map[k][lang()] + "</option>");
    });
    sel.innerHTML = opts.join("");
    sel.value = cur;
  }

  function card(m) {
    var L = lang();
    var areas = m.areas.map(function (a) { return AREAS[a][L]; }).join(", ");
    var initials = (m.first[0] + m.last[0]).toUpperCase();
    return (
      '<article class="mem-card">' +
        '<div class="mem-head">' +
          '<span class="mem-avatar" aria-hidden="true">' + initials + "</span>" +
          "<div>" +
            '<h3 class="mem-name">' + m.first + " " + m.last + "</h3>" +
            '<p class="mem-cat">' + CAT[m.cat][L] + "</p>" +
          "</div>" +
          '<span class="mem-badge" title="' + t("dir.card.status") + '">✓</span>' +
        "</div>" +
        '<dl class="mem-meta">' +
          "<dt>" + t("dir.card.region") + "</dt><dd>" + m.city + " · " + REGIONS[m.region][L] + "</dd>" +
          "<dt>" + t("dir.card.areas") + "</dt><dd>" + areas + "</dd>" +
          "<dt>" + t("dir.card.langs") + "</dt><dd>" + m.langs + "</dd>" +
        "</dl>" +
      "</article>"
    );
  }

  function render() {
    var grid = document.getElementById("dir-results");
    var count = document.getElementById("dir-count");
    if (!searched) {
      grid.innerHTML = '<p class="dir-empty">' + t("dir.hint") + "</p>";
      count.textContent = "";
      return;
    }
    var q = (document.getElementById("dir-search").value || "").trim().toLowerCase();
    var region = document.getElementById("dir-region").value;
    var area = document.getElementById("dir-area").value;
    var lg = document.getElementById("dir-lang").value;
    var cat = document.getElementById("dir-category").value;

    var list = MEMBERS.filter(function (m) {
      if (region && m.region !== region) return false;
      if (area && m.areas.indexOf(area) === -1) return false;
      if (cat && m.cat !== cat) return false;
      if (lg && m.langs.indexOf(lg) === -1) return false;
      if (q) {
        var hay = (m.first + " " + m.last + " " + m.city).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });

    count.textContent = list.length + " " + t("dir.results");
    var shown = list.slice(0, MAXRESULTS);
    grid.innerHTML = list.length
      ? shown.map(card).join("") + (list.length > MAXRESULTS ? '<p class="dir-empty">' + t("dir.more") + "</p>" : "")
      : '<p class="dir-empty">' + t("dir.empty") + "</p>";
  }

  function init() {
    fillSelect(document.getElementById("dir-region"), REGIONS);
    fillSelect(document.getElementById("dir-area"), AREAS);
    fillSelect(document.getElementById("dir-category"), CAT);

    function doSearch() { searched = true; render(); }
    ["dir-search", "dir-region", "dir-area", "dir-lang", "dir-category"].forEach(function (id) {
      var el = document.getElementById(id);
      el.addEventListener("input", doSearch);
      el.addEventListener("change", doSearch);
    });
    var form = document.querySelector(".dir-filters");
    if (form) form.addEventListener("submit", function (e) { e.preventDefault(); doSearch(); });

    // Re-render (and relabel selects) when the language changes
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () {
        setTimeout(function () {
          fillSelect(document.getElementById("dir-region"), REGIONS);
          fillSelect(document.getElementById("dir-area"), AREAS);
          fillSelect(document.getElementById("dir-category"), CAT);
          render();
        }, 0);
      });
    });

    render();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
