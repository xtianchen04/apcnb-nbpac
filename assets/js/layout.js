/* ============================================================
   APCNB / NBPAC — En-tête et pied de page partagés
   Injecte le header et le footer dans #site-header / #site-footer
   pour garder une navigation cohérente sur toutes les pages.
   Inclure CE script AVANT i18n.js et main.js.
   ============================================================ */
(function () {
  "use strict";

  var NAV = [
    { href: "le-criminologue.html", key: "nav.profession", fr: "Le criminologue" },
    { href: "trouver-criminologue.html", key: "nav.directory", fr: "Bottin" },
    { href: "protection-du-public.html", key: "nav.public", fr: "Protection du public" },
    { href: "adhesion.html", key: "nav.membership", fr: "Adhésion" },
    { href: "formation.html", key: "nav.training", fr: "Formation" },
    { href: "index.html#documents", key: "nav.documents", fr: "Documents" },
    { href: "index.html#contact", key: "nav.contact", fr: "Contact" }
  ];

  var FOOTER = [
    { titleKey: "footer.col.public", titleFr: "Le public", links: [
      { href: "trouver-criminologue.html", key: "nav.directory", fr: "Bottin des membres" },
      { href: "protection-du-public.html", key: "nav.public", fr: "Protection du public" }
    ]},
    { titleKey: "footer.col.members", titleFr: "Membres", links: [
      { href: "adhesion.html", key: "nav.membership", fr: "Adhésion" },
      { href: "espace-membre.html", key: "nav.member", fr: "Espace membre" },
      { href: "sondage.html", key: "nav.survey", fr: "Sondage" },
      { href: "consultation.html", key: "nav.consultation", fr: "Consultation" },
      { href: "carrieres.html", key: "nav.careers", fr: "Carrières" }
    ]},
    { titleKey: "footer.col.resources", titleFr: "Ressources", links: [
      { href: "formation.html", key: "nav.training", fr: "Formation" },
      { href: "espace-formateur.html", key: "nav.instructor", fr: "Espace formateur" },
      { href: "index.html#documents", key: "nav.documents", fr: "Documents" },
      { href: "publications.html", key: "nav.publications", fr: "Publications" },
      { href: "actualites.html", key: "nav.news", fr: "Actualités" },
      { href: "evenements.html", key: "nav.events", fr: "Événements" },
      { href: "faq.html", key: "nav.faq", fr: "FAQ" }
    ]},
    { titleKey: "footer.col.assoc", titleFr: "L'association", links: [
      { href: "le-criminologue.html", key: "nav.profession", fr: "Le criminologue" },
      { href: "index.html#mission", key: "nav.mission", fr: "Mission" },
      { href: "index.html#ethics", key: "nav.ethics", fr: "Déontologie" },
      { href: "index.html#contact", key: "nav.contact", fr: "Contact" }
    ]}
  ];

  var page = (location.pathname.split("/").pop() || "index.html");

  function navItems() {
    return NAV.map(function (n) {
      var cur = n.href.split("#")[0] === page ? ' aria-current="page"' : "";
      return '<li><a href="' + n.href + '"' + cur + ' data-i18n="' + n.key + '">' + n.fr + "</a></li>";
    }).join("");
  }

  function headerHTML() {
    return (
      '<header class="site-header">' +
        '<div class="container header-inner">' +
          '<a class="brand" href="index.html" aria-label="APCNB">' +
            '<span class="brand-mark" aria-hidden="true"><img src="assets/img/logo.svg" width="46" height="46" alt="" /></span>' +
            '<span class="brand-text">' +
              '<strong class="brand-acronym">APCNB</strong>' +
              '<span class="brand-full" data-i18n="brand.full">Association professionnelle de criminologie du Nouveau-Brunswick</span>' +
            "</span>" +
          "</a>" +
          '<nav class="main-nav" aria-label="Navigation principale">' +
            '<button class="nav-toggle" aria-expanded="false" aria-controls="nav-list">' +
              '<span class="sr-only" data-i18n="nav.menu">Menu</span>' +
              '<span class="nav-toggle-bar" aria-hidden="true"></span>' +
            "</button>" +
            '<ul id="nav-list" class="nav-list">' + navItems() + "</ul>" +
          "</nav>" +
          '<div class="header-tools">' +
            '<div class="a11y-controls" role="group" aria-label="Accessibilité / Accessibility">' +
              '<button class="a11y-btn" type="button" data-a11y="dec" data-i18n="a11y.decrease" data-i18n-attr="title" title="Réduire le texte">A−</button>' +
              '<button class="a11y-btn" type="button" data-a11y="inc" data-i18n="a11y.increase" data-i18n-attr="title" title="Agrandir le texte">A+</button>' +
              '<button class="a11y-btn" type="button" data-a11y="contrast" data-i18n="a11y.contrast" data-i18n-attr="title" title="Contraste élevé"><i data-lucide="contrast" aria-hidden="true"></i></button>' +
            "</div>" +
            '<div class="lang-switch" role="group" aria-label="Language / Langue">' +
              '<button type="button" class="lang-btn is-active" data-lang="fr" aria-pressed="true">FR</button>' +
              '<span aria-hidden="true" class="lang-sep">|</span>' +
              '<button type="button" class="lang-btn" data-lang="en" aria-pressed="false">EN</button>' +
            "</div>" +
            '<a class="btn-portal" href="espace-membre.html" data-i18n="nav.member">Espace membre</a>' +
          "</div>" +
        "</div>" +
      "</header>"
    );
  }

  function footerHTML() {
    var cols = FOOTER.map(function (c) {
      var links = c.links.map(function (l) {
        return '<li><a href="' + l.href + '" data-i18n="' + l.key + '">' + l.fr + "</a></li>";
      }).join("");
      return '<div class="footer-col"><h3 data-i18n="' + c.titleKey + '">' + c.titleFr + "</h3><ul>" + links + "</ul></div>";
    }).join("");
    return (
      '<footer class="site-footer">' +
        '<div class="container footer-inner">' +
          '<div class="footer-top">' +
            '<div class="footer-brand">' +
              '<img src="assets/img/logo.svg" width="48" height="48" alt="" />' +
              "<div><strong>APCNB · NBPAC</strong>" +
              '<span data-i18n="brand.full">Association professionnelle de criminologie du Nouveau-Brunswick</span></div>' +
            "</div>" +
            '<div class="footer-cols">' + cols + "</div>" +
          "</div>" +
          '<p class="footer-legal"><span data-i18n="footer.copyright">© 2026 APCNB. Tous droits réservés.</span></p>' +
        "</div>" +
      "</footer>"
    );
  }

  // Icônes Lucide (SVG) — chargées via CDN et rendues après l'injection.
  function drawIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }
  function loadIcons() {
    if (window.lucide) { drawIcons(); return; }
    if (document.getElementById("lucide-cdn")) { return; }
    var s = document.createElement("script");
    s.id = "lucide-cdn";
    s.src = "https://unpkg.com/lucide@latest";
    s.defer = true;
    s.onload = drawIcons;
    document.head.appendChild(s);
  }

  function inject() {
    var h = document.getElementById("site-header");
    if (h) h.outerHTML = headerHTML();
    var f = document.getElementById("site-footer");
    if (f) f.outerHTML = footerHTML();
    loadIcons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
