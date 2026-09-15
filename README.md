# APCNB / NBPAC — Site web bilingue

**Association professionnelle de criminologie du Nouveau-Brunswick**
**New Brunswick Professional Association of Criminology**

Site web statique entièrement bilingue (français / anglais) avec bascule de langue.
Le nom de l'association change selon la langue choisie :
- **FR** → Association professionnelle de criminologie du Nouveau-Brunswick (APCNB)
- **EN** → New Brunswick Professional Association of Criminology (NBPAC)

## Structure

```
criminologie-nb/
├── index.html                  # Page principale (FR/EN)
├── le-criminologue.html        # Définition, devoirs et champ d'exercice (N.-B.)
├── trouver-criminologue.html   # Bottin des membres (recherche + filtres)
├── protection-du-public.html   # Plaintes, signalement, registre disciplinaire
├── adhesion.html               # Adhésion détaillée (équivalences, stage, langues)
├── actualites.html             # Actualités / nouvelles
├── evenements.html             # Événements + calendrier de formation continue
├── formation.html              # Formation synchrone/asynchrone + accréditation
├── espace-formateur.html       # Portail formateur (connexion + tableau de bord)
├── sondage.html                # Sondage d'intérêt interactif (adhésion)
├── consultation.html           # Sondage de consultation (définition, exigences, formation)
├── espace-membre.html          # Portail membre (connexion + tableau de bord, maquette)
├── carrieres.html              # Babillard d'emplois + avantages aux membres
├── publications.html           # Rapports annuels, revue, mémoires
├── faq.html                    # Foire aux questions (accordéon)
├── assets/
│   ├── css/styles.css          # Style du site
│   ├── css/document.css        # Style des documents
│   ├── js/i18n.js              # Dictionnaire de traduction FR/EN
│   ├── js/main.js              # Bascule de langue + navigation
│   ├── js/layout.js            # En-tête + pied de page partagés (injectés)
│   ├── js/a11y.js              # Accessibilité : taille du texte + contraste élevé
│   ├── js/document.js          # Bascule de langue des documents
│   ├── js/directory.js         # Moteur du bottin des membres (démo)
│   └── img/favicon.svg
├── documents/                  # Documents de gouvernance (versions web bilingues)
│   ├── statuts-reglements-bylaws.html
│   ├── code-deontologie-code-of-ethics.html
│   ├── politique-adhesion-membership-policy.html
│   ├── formation-continue-cpd-policy.html
│   ├── traitement-plaintes-complaints-policy.html
│   ├── politique-confidentialite-privacy-policy.html
│   └── formulaire-adhesion-membership-form.html
├── telechargements/            # Documents téléchargeables (bilingues FR + EN)
│   ├── word/                   # 12 documents Word (.docx)
│   └── pdf/                    # 12 documents PDF
├── assets/img/logo.svg         # Sceau officiel (source vectorielle)
├── assets/img/logo.png         # Sceau rastérisé (en-têtes Word/PDF)
├── lib-content.js              # Contenu partagé des documents (FR + EN)
├── generate-docs.js            # Génère les .docx (sortie : telechargements/word)
└── generate-pdf.js             # Génère les .pdf  (sortie : telechargements/pdf)
```

## Documents et modèles (Word + PDF)

Chaque document existe en **Word (.docx)** et en **PDF**, bilingue (version française
puis anglaise), avec sceau dans l'en-tête, pied de page numéroté et coordonnées.
Les 7 premiers ont aussi une **page web** consultable (`documents/`).

| # | Document | Web | Word | PDF |
|---|----------|:---:|:----:|:---:|
| 1 | Statuts et règlements généraux | ✓ | ✓ | ✓ |
| 2 | Code de déontologie | ✓ | ✓ | ✓ |
| 3 | Politique d'adhésion | ✓ | ✓ | ✓ |
| 4 | Politique de formation continue | ✓ | ✓ | ✓ |
| 5 | Politique de traitement des plaintes | ✓ | ✓ | ✓ |
| 6 | Politique de confidentialité | ✓ | ✓ | ✓ |
| 7 | Formulaire d'adhésion | ✓ | ✓ | ✓ |
| 13 | Champ d'exercice du criminologue (N.-B.) | ✓ | ✓ | ✓ |
| 14 | Mémoire — reconnaissance du titre (gouvernement) | — | ✓ | ✓ |
| 15 | Lettre de présentation au ministre | — | ✓ | ✓ |
| 16 | Résumé d'une page pour les décideurs | — | ✓ | ✓ |
| 17 | Grille de compétences du criminologue | — | ✓ | ✓ |
| 22 | Politique d'accréditation des formations | ✓ | ✓ | ✓ |
| 23 | Lettre type de partenariat (U. de Moncton) | — | ✓ | ✓ |
| 24 | Protocole d'entente de partenariat (MOU, modèle) | ✓ | ✓ | ✓ |
| 25 | Annexe financière au MOU (modèle) | ✓ | ✓ | ✓ |
| 26 | Certificat de réussite de formation (bilingue) | ✓ | ✓ | ✓ |
| 27 | Lettre à un professeur (collaboration) | — | ✓ | ✓ |
| 28 | Sondage d'intérêt (adhésion) | ✓ | ✓ | ✓ |
| 29 | Registre des formations accréditées (modèle) | — | ✓ | ✓ |
| 30 | Sondage de consultation (orientations) | ✓ | ✓ | ✓ |
| 8 | Ordre du jour (AGA) | — | ✓ | ✓ |
| 9 | Procès-verbal (AGA) | — | ✓ | ✓ |
| 10 | Reçu de cotisation | — | ✓ | ✓ |
| 11 | Certificat de membre (décoratif, paysage) | — | ✓ | ✓ |
| 12 | Papier à en-tête (correspondance) | — | ✓ | ✓ |

## Régénérer les documents

Le contenu de tous les documents vit dans `lib-content.js`. Après modification :

```bash
npm install            # une seule fois (docx, pdfkit, sharp)
node generate-docs.js  # régénère les Word
node generate-pdf.js   # régénère les PDF
```

Pour modifier le **logo**, éditez `assets/img/logo.svg`, puis régénérez le PNG :

```bash
node -e "require('sharp')('assets/img/logo.svg',{density:600}).resize(600,600).png().toFile('assets/img/logo.png')"
```

## Fonctionnement de la bascule de langue

- Boutons **FR / EN** dans l'en-tête.
- La préférence est enregistrée (localStorage) et synchronisée entre la page d'accueil et les documents.
- Page d'accueil : traduction par clés (`data-i18n`) dans `assets/js/i18n.js`.
- Documents : blocs `[data-lang-block="fr"]` / `[data-lang-block="en"]` affichés selon la langue.

## Utilisation

Ouvrir `index.html` dans un navigateur. Aucune dépendance ni serveur requis (les polices sont chargées depuis Google Fonts).

## À personnaliser avant la mise en ligne

- Adresse, courriels (`info@apcnb.ca`, `confidentialite@apcnb.ca`) et numéro de C.P.
- Montants des cotisations.
- Connecter le formulaire de contact et le formulaire d'adhésion à un service réel (courriel ou backend).
- Faire réviser les statuts et politiques par un conseiller juridique du Nouveau-Brunswick avant la constitution officielle.

## Documents de gouvernance fournis

1. Statuts et règlements généraux
2. Code de déontologie
3. Politique d'adhésion
4. Politique de formation continue
5. Politique de traitement des plaintes
6. Politique de confidentialité
7. Formulaire d'adhésion (imprimable / PDF)

© 2026 APCNB / NBPAC
