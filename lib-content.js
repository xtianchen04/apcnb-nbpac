/* ============================================================
   APCNB / NBPAC — Bibliothèque de contenu partagée
   Utilisée par generate-docs.js (Word) et generate-pdf.js (PDF).
   ============================================================ */

const NAME_FR = "Association professionnelle de criminologie du Nouveau-Brunswick";
const NAME_EN = "New Brunswick Professional Association of Criminology";
const ACRO = "APCNB · NBPAC";
const ADDR = "C.P. 0000, Fredericton (Nouveau-Brunswick) E3B 0A0";
const EMAIL = "info@apcnb-nbpac.ca";
const SITE = "www.apcnb.ca";

const COLORS = { navy: "15263F", gold: "B08A3E", grey: "5B6675", line: "CCCCCC",
  paper: "FAF8F3", paperRow: "F7F4EC", goldSoft: "D9BE83", ink: "1B2330" };

// ---------- block helpers ----------
const H2 = (t) => ({ type: "h2", text: t });
const P  = (t) => ({ type: "p", text: t });
const LEAD = (t) => ({ type: "lead", text: t });
const UL = (items) => ({ type: "ul", items });
const OL = (items) => ({ type: "ol", items });
const TABLE = (header, rows) => ({ type: "table", header, rows });
const CALLOUT = (t) => ({ type: "callout", text: t });
const GAP = () => ({ type: "gap" });
const SIGN = (a, b) => ({ type: "sign", a, b });

// ============================================================
//  DOCUMENTS STANDARD  (rendus FR puis EN)
// ============================================================
const DOCS = [];

// 1 — Statuts / Bylaws
DOCS.push({
  file: "1-Statuts-reglements-Bylaws",
  headerRight: "Statuts et règlements / Bylaws",
  fr: { title: "Statuts et règlements généraux", blocks: [
    H2("Article 1 — Dénomination"),
    P("L'association est constituée sous le nom d'**Association professionnelle de criminologie du Nouveau-Brunswick** (ci-après « l'APCNB » ou « l'Association »). Sa désignation anglaise officielle est _New Brunswick Professional Association of Criminology (NBPAC)_. Les deux dénominations ont valeur égale."),
    H2("Article 2 — Siège social"),
    P("Le siège social de l'Association est situé dans la province du Nouveau-Brunswick, à l'adresse déterminée de temps à autre par le conseil d'administration."),
    H2("Article 3 — Nature et statut"),
    P("L'Association est une personne morale sans but lucratif. Elle ne distribue aucun bénéfice à ses membres; ses revenus sont affectés exclusivement à la poursuite de ses objets."),
    H2("Article 4 — Objets"),
    OL([
      "Promouvoir l'avancement, la reconnaissance et l'intégrité de la profession de criminologue au Nouveau-Brunswick.",
      "Établir et maintenir des normes de compétence et de conduite professionnelle.",
      "Protéger l'intérêt public dans l'exercice de la criminologie.",
      "Offrir de la formation continue et favoriser le perfectionnement des membres.",
      "Représenter la profession auprès du public, des gouvernements et des partenaires.",
      "Assurer la prestation de tous les services dans les deux langues officielles."
    ]),
    H2("Article 5 — Langues officielles"),
    P("Le français et l'anglais sont les langues officielles de l'Association. Tous les statuts, politiques, communications, avis et services sont offerts dans les deux langues, qui ont une valeur juridique égale. En cas de divergence d'interprétation, les deux versions doivent être conciliées de bonne foi."),
    H2("Article 6 — Membres"),
    P("L'Association compte les catégories suivantes : **membre régulier**, **membre étudiant**, **membre associé** et **membre honoraire**. Seuls les membres réguliers en règle ont le droit de vote et d'éligibilité. Les cotisations sont fixées par le conseil et ratifiées à l'assemblée générale annuelle. La qualité de membre prend fin par démission, non-paiement ou radiation."),
    H2("Article 7 — Assemblées des membres"),
    P("L'assemblée générale annuelle (AGA) se tient au plus tard six mois après la fin de l'exercice. Le quorum est de 20 % des membres réguliers en règle. Chaque membre régulier dispose d'une voix. Les assemblées peuvent se tenir en personne ou par moyen électronique."),
    H2("Article 8 — Conseil d'administration"),
    P("Le conseil compte de cinq à neuf administrateurs élus par les membres réguliers, dont une présidence, une vice-présidence, un secrétariat et une trésorerie. La composition reflète la dualité linguistique. Le mandat est de deux ans, renouvelable et échelonné. Le conseil administre les affaires, adopte les politiques et approuve le budget."),
    H2("Article 9 — Comités"),
    P("Le conseil peut créer des comités, notamment un comité d'admission, un comité de déontologie et un comité de formation continue, et en définir le mandat."),
    H2("Article 10 — Exercice financier"),
    P("L'exercice financier se termine le 31 mars. Les livres sont tenus selon les principes comptables reconnus et les états financiers sont présentés à l'AGA. Les signataires autorisés sont désignés par résolution du conseil."),
    H2("Article 11 — Déontologie et discipline"),
    P("Tout membre est lié par le Code de déontologie. Les manquements sont traités selon la Politique de traitement des plaintes, pouvant mener à la radiation."),
    H2("Article 12 — Modification des statuts"),
    P("Les présents statuts ne peuvent être modifiés que par résolution adoptée aux deux tiers des voix exprimées à une assemblée générale, l'avis ayant été transmis au moins 21 jours à l'avance."),
    H2("Article 13 — Dissolution"),
    P("En cas de dissolution, l'actif résiduel, après acquittement des dettes, est versé à un organisme sans but lucratif poursuivant des objets analogues."),
    CALLOUT("Note : Ce modèle de statuts devrait être révisé par un conseiller juridique du Nouveau-Brunswick avant la constitution officielle.")
  ]},
  en: { title: "Bylaws and General Regulations", blocks: [
    H2("Article 1 — Name"),
    P("The association is established under the name **New Brunswick Professional Association of Criminology** (hereinafter “the NBPAC” or “the Association”). Its official French designation is _Association professionnelle de criminologie du Nouveau-Brunswick (APCNB)_. Both names have equal standing."),
    H2("Article 2 — Head Office"),
    P("The Association's head office is located in the Province of New Brunswick, at the address determined from time to time by the Board of Directors."),
    H2("Article 3 — Nature and Status"),
    P("The Association is a not-for-profit corporation. It distributes no profit to its members; its revenues are applied exclusively to the pursuit of its objects."),
    H2("Article 4 — Objects"),
    OL([
      "To promote the advancement, recognition and integrity of the criminology profession in New Brunswick.",
      "To set and maintain standards of competence and professional conduct.",
      "To protect the public interest in the practice of criminology.",
      "To provide continuing education and foster member development.",
      "To represent the profession to the public, governments and partners.",
      "To deliver all services in both official languages."
    ]),
    H2("Article 5 — Official Languages"),
    P("French and English are the official languages of the Association. All bylaws, policies, communications, notices and services are offered in both languages, which have equal legal standing. In the event of any difference in interpretation, the two versions shall be reconciled in good faith."),
    H2("Article 6 — Members"),
    P("The Association has the following categories: **regular member**, **student member**, **associate member** and **honorary member**. Only regular members in good standing may vote and stand for election. Dues are set by the Board and ratified at the Annual General Meeting. Membership ends by resignation, non-payment or removal."),
    H2("Article 7 — Meetings of Members"),
    P("The Annual General Meeting (AGM) is held no later than six months after the end of the financial year. Quorum is 20% of regular members in good standing. Each regular member has one vote. Meetings may be held in person or electronically."),
    H2("Article 8 — Board of Directors"),
    P("The Board consists of five to nine directors elected by regular members, including a President, Vice-President, Secretary and Treasurer. Composition reflects linguistic duality. The term is two years, renewable and staggered. The Board manages affairs, adopts policies and approves the budget."),
    H2("Article 9 — Committees"),
    P("The Board may establish committees — including admissions, ethics and continuing-education committees — and define their mandates."),
    H2("Article 10 — Financial Year"),
    P("The financial year ends on March 31. Books are kept according to recognized accounting principles and financial statements are presented at the AGM. Authorized signatories are designated by Board resolution."),
    H2("Article 11 — Ethics and Discipline"),
    P("Every member is bound by the Code of Ethics. Breaches are handled under the Complaints-Handling Policy and may lead to removal."),
    H2("Article 12 — Amendment of Bylaws"),
    P("These bylaws may be amended only by resolution carried by two-thirds of the votes cast at a general meeting, notice having been given at least 21 days in advance."),
    H2("Article 13 — Dissolution"),
    P("Upon dissolution, any remaining assets, after payment of debts, shall be transferred to a not-for-profit organization with similar objects."),
    CALLOUT("Note: This bylaw template should be reviewed by New Brunswick legal counsel before formal incorporation.")
  ]}
});

// 2 — Code de déontologie / Code of Ethics
DOCS.push({
  file: "2-Code-deontologie-Code-of-Ethics",
  headerRight: "Code de déontologie / Code of Ethics",
  fr: { title: "Code de déontologie", blocks: [
    LEAD("Le présent code énonce les obligations éthiques de tout membre de l'APCNB. Il vise à protéger le public, à préserver la confiance envers la profession et à guider la conduite des criminologues."),
    H2("1. Champ d'application"),
    P("Le code s'applique à tous les membres, quelle que soit leur catégorie, dans l'ensemble de leurs activités professionnelles : recherche, évaluation, intervention, enseignement et consultation."),
    H2("2. Intégrité et honnêteté"),
    UL(["Agir avec honnêteté, probité et bonne foi.", "Ne participer à aucune fraude ni fausse représentation de ses qualifications.", "Ne présenter comme siens que les travaux réellement accomplis."]),
    H2("3. Compétence et champ d'exercice"),
    UL(["N'exercer que dans les limites de sa compétence, de sa formation et de son expérience.", "Maintenir ses connaissances à jour conformément à la Politique de formation continue.", "Fonder ses avis sur des données probantes et des méthodes reconnues.", "Respecter les limites de son champ d'exercice; ne poser aucun acte réservé à une profession réglementée (travail social, psychologie, counseling, droit, médecine) sans en détenir le titre, et diriger la personne vers la profession compétente au besoin."]),
    H2("4. Confidentialité"),
    UL(["Protéger les renseignements confidentiels obtenus dans l'exercice de ses fonctions.", "Ne les divulguer qu'avec consentement ou lorsque la loi l'exige.", "Prendre les mesures raisonnables pour assurer la sécurité des données."]),
    H2("5. Objectivité et conflits d'intérêts"),
    UL(["Demeurer objectif et impartial.", "Déclarer sans délai tout conflit d'intérêts réel, potentiel ou apparent.", "Ne pas abuser de sa position pour obtenir un avantage indu."]),
    H2("6. Respect de la dignité humaine"),
    UL(["Respecter les droits et la dignité de toute personne, sans discrimination.", "S'abstenir de tout harcèlement, abus de pouvoir ou exploitation.", "Tenir compte des contextes culturels, linguistiques et sociaux."]),
    H2("7. Responsabilité envers le public et la profession"),
    UL(["Faire passer l'intérêt public avant son intérêt personnel.", "Contribuer à la réputation et à l'avancement de la profession.", "Signaler tout manquement déontologique grave."]),
    H2("8. Service dans les deux langues officielles"),
    P("Dans la mesure du possible, le membre facilite l'accès à ses services en français ou en anglais selon le choix de la personne."),
    H2("9. Manquements et mesures"),
    P("Tout manquement peut donner lieu à des mesures disciplinaires conformément à la Politique de traitement des plaintes, pouvant aller de l'avertissement à la radiation."),
    CALLOUT("Engagement : En adhérant à l'APCNB, chaque membre s'engage à respecter le présent code et à en promouvoir les principes.")
  ]},
  en: { title: "Code of Ethics", blocks: [
    LEAD("This code sets out the ethical obligations of every NBPAC member. It is intended to protect the public, preserve trust in the profession and guide the conduct of criminologists."),
    H2("1. Scope"),
    P("The code applies to all members, regardless of category, across all professional activities: research, assessment, intervention, teaching and consulting."),
    H2("2. Integrity and Honesty"),
    UL(["Act with honesty, probity and good faith.", "Take part in no fraud or misrepresentation of qualifications.", "Claim as one's own only work actually performed."]),
    H2("3. Competence and scope of practice"),
    UL(["Practise only within the limits of one's competence, training and experience.", "Keep knowledge current under the Continuing Professional Development Policy.", "Base opinions on evidence and recognized methods.", "Respect the limits of one's scope of practice; perform no act reserved to a regulated profession (social work, psychology, counselling therapy, law, medicine) without holding the title, and refer the person to the competent profession when needed."]),
    H2("4. Confidentiality"),
    UL(["Protect confidential information obtained in the course of duties.", "Disclose it only with consent or where required by law.", "Take reasonable measures to ensure data security."]),
    H2("5. Objectivity and Conflicts of Interest"),
    UL(["Remain objective and impartial.", "Promptly declare any actual, potential or apparent conflict of interest.", "Not misuse one's position for undue advantage."]),
    H2("6. Respect for Human Dignity"),
    UL(["Respect the rights and dignity of every person, without discrimination.", "Refrain from harassment, abuse of power or exploitation.", "Account for cultural, linguistic and social contexts."]),
    H2("7. Accountability to the Public and the Profession"),
    UL(["Place the public interest ahead of personal interest.", "Contribute to the reputation and advancement of the profession.", "Report any serious ethical breach."]),
    H2("8. Service in Both Official Languages"),
    P("Wherever possible, the member facilitates access to their services in French or English according to the person's choice."),
    H2("9. Breaches and Measures"),
    P("Any breach may lead to disciplinary measures under the Complaints-Handling Policy, ranging from a warning to removal."),
    CALLOUT("Commitment: By joining the NBPAC, each member undertakes to respect this code and to promote its principles.")
  ]}
});

// 3 — Politique d'adhésion / Membership Policy
DOCS.push({
  file: "3-Politique-adhesion-Membership-Policy",
  headerRight: "Politique d'adhésion / Membership Policy",
  fr: { title: "Politique d'adhésion", blocks: [
    H2("1. Objet"),
    P("La présente politique définit les catégories de membres, les critères d'admission, les cotisations et les conditions de maintien de la qualité de membre."),
    H2("2. Catégories et critères d'admission"),
    TABLE(["Catégorie", "Critères", "Cotisation"], [
      ["Membre régulier", "Diplôme universitaire en criminologie ou domaine connexe et fonctions pertinentes.", "125 $"],
      ["Membre étudiant", "Inscription à un programme reconnu de criminologie ou de justice pénale.", "Gratuit"],
      ["Membre associé", "Professionnel d'une discipline connexe appuyant les objets de l'Association.", "90 $"],
      ["Membre honoraire", "Personne nommée par le conseil pour sa contribution exceptionnelle.", "Sans frais"]
    ]),
    P("**Stage et expérience pratique** : pour les candidat·es en début de carrière, l'admission comme membre régulier requiert un stage supervisé d'au minimum 540 heures dans le domaine, ou l'équivalent reconnu par le comité d'admission."),
    H2("3. Processus d'admission"),
    OL(["Soumission du formulaire d'adhésion et des pièces justificatives.", "Examen du dossier par le comité d'admission.", "Engagement écrit à respecter le Code de déontologie.", "Paiement de la cotisation et confirmation de l'adhésion."]),
    H2("4. Droits et obligations"),
    UL(["Tous les membres reçoivent les services dans la langue officielle de leur choix.", "Seuls les membres réguliers en règle votent et sont éligibles.", "Tout membre respecte les statuts, les politiques et le code de déontologie."]),
    H2("5. Renouvellement"),
    P("L'adhésion se renouvelle annuellement. Un avis est transmis 30 jours avant l'échéance. Le non-paiement dans les 60 jours entraîne la suspension."),
    H2("6. Démission et réadmission"),
    P("Un membre peut démissionner par avis écrit. La réadmission est possible sur paiement des cotisations dues et examen du dossier."),
    H2("7. Protection des renseignements"),
    P("Les renseignements recueillis sont traités conformément à la Politique de confidentialité.")
  ]},
  en: { title: "Membership Policy", blocks: [
    H2("1. Purpose"),
    P("This policy defines the membership categories, admission criteria, dues and conditions for maintaining membership."),
    H2("2. Categories and Admission Criteria"),
    TABLE(["Category", "Criteria", "Dues"], [
      ["Regular member", "University degree in criminology or a related field and relevant duties.", "$125"],
      ["Student member", "Enrolment in a recognized criminology or criminal-justice program.", "Free"],
      ["Associate member", "Professional in a related discipline supporting the Association's objects.", "$90"],
      ["Honorary member", "Person appointed by the Board for an exceptional contribution.", "No charge"]
    ]),
    P("**Internship and practical experience**: for early-career applicants, admission as a regular member requires a supervised internship of at least 540 hours in the field, or an equivalent recognized by the admissions committee."),
    H2("3. Admission Process"),
    OL(["Submission of the membership form and supporting documents.", "Review of the file by the admissions committee.", "Written undertaking to abide by the Code of Ethics.", "Payment of dues and confirmation of membership."]),
    H2("4. Rights and Obligations"),
    UL(["All members receive services in the official language of their choice.", "Only regular members in good standing vote and stand for election.", "Every member complies with the bylaws, policies and code of ethics."]),
    H2("5. Renewal"),
    P("Membership renews annually. Notice is sent 30 days before expiry. Non-payment within 60 days results in suspension."),
    H2("6. Resignation and Readmission"),
    P("A member may resign by written notice. Readmission is possible upon payment of dues owed and review of the file."),
    H2("7. Protection of Information"),
    P("Information collected is handled in accordance with the Privacy Policy.")
  ]}
});

// 4 — Formation continue / CPD
DOCS.push({
  file: "4-Formation-continue-CPD-Policy",
  headerRight: "Formation continue / CPD",
  fr: { title: "Politique de formation continue", blocks: [
    LEAD("La formation continue garantit que les membres maintiennent et développent leurs compétences au profit du public et de la profession."),
    H2("1. Exigence annuelle"),
    P("Chaque membre régulier doit accumuler au moins **20 unités de formation continue (UFC)** par année, dont au moins 3 portant sur l'éthique professionnelle. Une UFC équivaut à une heure d'activité reconnue."),
    H2("2. Activités admissibles"),
    TABLE(["Type d'activité", "Plafond annuel"], [
      ["Cours, ateliers et conférences", "20 UFC"], ["Formation en ligne reconnue", "10 UFC"],
      ["Présentation ou enseignement", "8 UFC"], ["Publication ou recherche", "8 UFC"],
      ["Participation à un comité professionnel", "5 UFC"]
    ]),
    H2("3. Déclaration et preuves"),
    P("Les membres consignent leurs activités et conservent les pièces justificatives pendant trois ans. Une déclaration annuelle est soumise au renouvellement."),
    H2("4. Vérification"),
    P("Le comité de formation continue peut vérifier de façon aléatoire les déclarations. Le défaut de satisfaire à l'exigence peut entraîner un plan de redressement ou la suspension."),
    H2("5. Accès bilingue"),
    P("L'Association s'efforce d'offrir ou de reconnaître des activités en français et en anglais, afin que tous les membres satisfassent à leurs exigences dans la langue de leur choix."),
    H2("6. Exemptions"),
    P("Des exemptions partielles peuvent être accordées pour congé parental, maladie prolongée ou autres motifs valables, sur demande au comité.")
  ]},
  en: { title: "Continuing Professional Development Policy", blocks: [
    LEAD("Continuing professional development ensures members maintain and grow their competence for the benefit of the public and the profession."),
    H2("1. Annual Requirement"),
    P("Each regular member must accumulate at least **20 continuing-education units (CEUs)** per year, of which at least 3 address professional ethics. One CEU equals one hour of recognized activity."),
    H2("2. Eligible Activities"),
    TABLE(["Activity type", "Annual cap"], [
      ["Courses, workshops and conferences", "20 CEUs"], ["Recognized online training", "10 CEUs"],
      ["Presenting or teaching", "8 CEUs"], ["Publication or research", "8 CEUs"],
      ["Service on a professional committee", "5 CEUs"]
    ]),
    H2("3. Declaration and Evidence"),
    P("Members log their activities and keep supporting records for three years. An annual declaration is submitted at renewal."),
    H2("4. Verification"),
    P("The continuing-education committee may randomly audit declarations. Failure to meet the requirement may lead to a remediation plan or suspension."),
    H2("5. Bilingual Access"),
    P("The Association strives to offer or recognize activities in both French and English, so that all members can meet their requirements in the language of their choice."),
    H2("6. Exemptions"),
    P("Partial exemptions may be granted for parental leave, extended illness or other valid reasons, on request to the committee.")
  ]}
});

// 5 — Traitement des plaintes / Complaints
DOCS.push({
  file: "5-Traitement-plaintes-Complaints-Policy",
  headerRight: "Traitement des plaintes / Complaints",
  fr: { title: "Politique de traitement des plaintes", blocks: [
    LEAD("Cette politique établit un processus équitable, transparent et bilingue pour traiter les plaintes visant un membre et assurer la protection du public."),
    H2("1. Qui peut déposer une plainte"),
    P("Toute personne — membre du public, client, employeur ou autre membre — peut déposer une plainte concernant la conduite professionnelle d'un membre."),
    H2("2. Dépôt de la plainte"),
    P("La plainte est présentée par écrit, dans la langue officielle du choix du plaignant, au secrétariat. Elle décrit les faits, les dates et les personnes en cause, et joint tout document pertinent."),
    H2("3. Recevabilité"),
    P("Le secrétariat accuse réception dans les 10 jours ouvrables et transmet le dossier au comité de déontologie, qui détermine la recevabilité dans les 30 jours."),
    H2("4. Examen"),
    OL(["Le membre visé est informé et invité à présenter ses observations dans un délai de 21 jours.", "Le comité peut recueillir des renseignements complémentaires et entendre les parties.", "L'instruction respecte l'équité procédurale et la confidentialité."]),
    H2("5. Décisions et mesures"),
    TABLE(["Constat", "Mesure possible"], [
      ["Plainte non fondée", "Fermeture du dossier"], ["Manquement mineur", "Avertissement écrit, formation corrective"],
      ["Manquement sérieux", "Réprimande, conditions d'exercice, suspension"], ["Manquement grave", "Radiation de l'Association"]
    ]),
    H2("6. Appel"),
    P("La partie visée peut interjeter appel par écrit dans les 30 jours. Un comité d'appel indépendant, dont aucun membre n'a participé à la décision initiale, réexamine le dossier."),
    H2("7. Confidentialité et bonne foi"),
    P("Le processus est confidentiel. Les plaintes faites de mauvaise foi ou de manière vexatoire peuvent elles-mêmes faire l'objet de mesures."),
    H2("8. Registre"),
    P("L'Association tient un registre confidentiel des plaintes et de leur issue à des fins de reddition de comptes.")
  ]},
  en: { title: "Complaints-Handling Policy", blocks: [
    LEAD("This policy establishes a fair, transparent and bilingual process for handling complaints against a member and protecting the public."),
    H2("1. Who May File a Complaint"),
    P("Anyone — a member of the public, client, employer or fellow member — may file a complaint concerning the professional conduct of a member."),
    H2("2. Filing a Complaint"),
    P("The complaint is submitted in writing, in the complainant's chosen official language, to the secretariat. It describes the facts, dates and people involved, and attaches any relevant documents."),
    H2("3. Admissibility"),
    P("The secretariat acknowledges receipt within 10 business days and forwards the file to the ethics committee, which determines admissibility within 30 days."),
    H2("4. Review"),
    OL(["The member concerned is informed and invited to respond within 21 days.", "The committee may gather additional information and hear the parties.", "The review respects procedural fairness and confidentiality."]),
    H2("5. Decisions and Measures"),
    TABLE(["Finding", "Possible measure"], [
      ["Unfounded complaint", "File closed"], ["Minor breach", "Written warning, corrective training"],
      ["Serious breach", "Reprimand, conditions of practice, suspension"], ["Grave breach", "Removal from the Association"]
    ]),
    H2("6. Appeal"),
    P("The member concerned may appeal in writing within 30 days. An independent appeal committee, none of whose members took part in the original decision, reviews the file."),
    H2("7. Confidentiality and Good Faith"),
    P("The process is confidential. Complaints made in bad faith or in a vexatious manner may themselves be subject to measures."),
    H2("8. Register"),
    P("The Association keeps a confidential register of complaints and their outcomes for accountability.")
  ]}
});

// 6 — Confidentialité / Privacy
DOCS.push({
  file: "6-Politique-confidentialite-Privacy-Policy",
  headerRight: "Confidentialité / Privacy",
  fr: { title: "Politique de confidentialité", blocks: [
    LEAD("L'APCNB s'engage à protéger les renseignements personnels qu'elle recueille, conformément aux lois applicables."),
    H2("1. Renseignements recueillis"),
    UL(["Coordonnées (nom, adresse, courriel, téléphone).", "Renseignements relatifs à l'admissibilité (formation, expérience).", "Renseignements de cotisation et de formation continue.", "Préférence linguistique officielle."]),
    H2("2. Finalités"),
    P("Les renseignements servent à gérer l'adhésion, communiquer avec les membres, administrer la formation continue et la déontologie, et respecter les obligations légales."),
    H2("3. Consentement"),
    P("En adhérant, le membre consent à la collecte et à l'utilisation de ses renseignements aux fins décrites. Le consentement peut être retiré, sous réserve des obligations légales et contractuelles."),
    H2("4. Communication à des tiers"),
    P("L'Association ne vend ni ne loue les renseignements personnels. Ils ne sont communiqués qu'avec consentement ou lorsque la loi l'exige."),
    H2("5. Sécurité et conservation"),
    P("Des mesures administratives, physiques et techniques raisonnables protègent les renseignements, conservés aussi longtemps que nécessaire puis détruits de façon sécuritaire."),
    H2("6. Accès et rectification"),
    P("Tout membre peut consulter ses renseignements et en demander la correction en écrivant à confidentialite@apcnb.ca."),
    H2("7. Service bilingue"),
    P("Toute demande relative à la vie privée est traitée dans la langue officielle choisie par la personne.")
  ]},
  en: { title: "Privacy Policy", blocks: [
    LEAD("The NBPAC is committed to protecting the personal information it collects, in accordance with applicable legislation."),
    H2("1. Information Collected"),
    UL(["Contact details (name, address, email, telephone).", "Eligibility information (education, experience).", "Dues and continuing-education records.", "Preferred official language."]),
    H2("2. Purposes"),
    P("Information is used to manage membership, communicate with members, administer continuing education and ethics, and meet legal obligations."),
    H2("3. Consent"),
    P("By joining, the member consents to the collection and use of their information for the purposes described. Consent may be withdrawn, subject to legal and contractual obligations."),
    H2("4. Disclosure to Third Parties"),
    P("The Association does not sell or rent personal information. It is disclosed only with consent or where required by law."),
    H2("5. Security and Retention"),
    P("Reasonable administrative, physical and technical measures protect the information, kept only as long as necessary then securely destroyed."),
    H2("6. Access and Correction"),
    P("Any member may review their information and request corrections by writing to confidentialite@apcnb.ca."),
    H2("7. Bilingual Service"),
    P("Any privacy request is handled in the official language chosen by the individual.")
  ]}
});

// 7 — Formulaire d'adhésion / Membership Form
DOCS.push({
  file: "7-Formulaire-adhesion-Membership-Form",
  headerRight: "Formulaire d'adhésion / Membership Form",
  fr: { title: "Demande d'adhésion", blocks: [
    LEAD("Veuillez remplir ce formulaire en lettres moulées et le retourner au secrétariat de l'APCNB, accompagné des pièces justificatives et du paiement."),
    H2("1. Catégorie demandée"),
    UL(["☐  Membre régulier (125 $)", "☐  Membre étudiant (gratuit)", "☐  Membre associé (90 $)"]),
    H2("2. Renseignements personnels"),
    P("Prénom : ______________________________   Nom : ______________________________"),
    P("Courriel : ____________________________   Téléphone : ___________________________"),
    P("Adresse postale : ___________________________________________________________"),
    P("Langue officielle de correspondance :   ☐ Français    ☐ Anglais"),
    H2("3. Formation et expérience"),
    P("Diplôme(s) et établissement : ________________________________________________"),
    P("Emploi ou fonction actuelle : ________________________________________________"),
    H2("4. Engagement"),
    UL(["☐  Je m'engage à respecter le Code de déontologie et les statuts de l'APCNB.", "☐  J'atteste que les renseignements fournis sont exacts.", "☐  Je consens au traitement de mes renseignements selon la Politique de confidentialité."]),
    GAP(),
    P("Signature : _____________________________      Date : _____________________"),
    CALLOUT("Réservé à l'administration : Date de réception ___________  Approuvé par ___________  Catégorie ___________")
  ]},
  en: { title: "Membership Application", blocks: [
    LEAD("Please complete this form in block letters and return it to the NBPAC secretariat, together with supporting documents and payment."),
    H2("1. Category Requested"),
    UL(["☐  Regular member ($125)", "☐  Student member (free)", "☐  Associate member ($90)"]),
    H2("2. Personal Information"),
    P("First name : ___________________________   Last name : ___________________________"),
    P("Email : ______________________________   Telephone : ___________________________"),
    P("Mailing address : ___________________________________________________________"),
    P("Official language of correspondence :   ☐ English    ☐ French"),
    H2("3. Education and Experience"),
    P("Degree(s) and institution : __________________________________________________"),
    P("Current employment or role : ________________________________________________"),
    H2("4. Undertaking"),
    UL(["☐  I undertake to abide by the NBPAC Code of Ethics and bylaws.", "☐  I confirm that the information provided is accurate.", "☐  I consent to the processing of my information under the Privacy Policy."]),
    GAP(),
    P("Signature : _____________________________      Date : _____________________"),
    CALLOUT("For office use only: Date received ___________  Approved by ___________  Category ___________")
  ]}
});

// 8 — Ordre du jour AGA / AGM Agenda
DOCS.push({
  file: "8-Ordre-du-jour-AGA-AGM-Agenda",
  headerRight: "Ordre du jour AGA / AGM Agenda",
  fr: { title: "Ordre du jour — Assemblée générale annuelle", blocks: [
    P("**Date :** ________________     **Heure :** ____________     **Lieu / lien :** ____________________"),
    GAP(),
    OL([
      "Ouverture de l'assemblée et mot de bienvenue.",
      "Vérification du quorum et constatation de la régularité de l'avis de convocation.",
      "Adoption de l'ordre du jour.",
      "Adoption du procès-verbal de l'assemblée générale précédente.",
      "Rapport de la présidence.",
      "Rapport de la trésorerie et présentation des états financiers.",
      "Nomination de la personne vérificatrice pour le prochain exercice.",
      "Rapport du comité de déontologie.",
      "Rapport du comité de formation continue.",
      "Ratification des cotisations annuelles.",
      "Élection des administrateurs.",
      "Affaires nouvelles.",
      "Date de la prochaine assemblée.",
      "Levée de l'assemblée."
    ]),
    GAP(),
    CALLOUT("Les documents de l'assemblée sont fournis dans les deux langues officielles. Toute personne peut s'exprimer en français ou en anglais.")
  ]},
  en: { title: "Agenda — Annual General Meeting", blocks: [
    P("**Date:** ________________     **Time:** ____________     **Location / link:** ____________________"),
    GAP(),
    OL([
      "Call to order and welcome.",
      "Verification of quorum and confirmation that notice was duly given.",
      "Adoption of the agenda.",
      "Adoption of the minutes of the previous general meeting.",
      "President's report.",
      "Treasurer's report and presentation of financial statements.",
      "Appointment of the auditor/reviewer for the next year.",
      "Ethics committee report.",
      "Continuing-education committee report.",
      "Ratification of annual dues.",
      "Election of directors.",
      "New business.",
      "Date of the next meeting.",
      "Adjournment."
    ]),
    GAP(),
    CALLOUT("Meeting documents are provided in both official languages. Anyone may speak in French or English.")
  ]}
});

// 9 — Procès-verbal AGA / AGM Minutes
DOCS.push({
  file: "9-Proces-verbal-AGA-AGM-Minutes",
  headerRight: "Procès-verbal AGA / AGM Minutes",
  fr: { title: "Procès-verbal — Assemblée générale annuelle", blocks: [
    P("**Date :** ________________     **Heure :** ____________     **Lieu / lien :** ____________________"),
    P("**Président(e) d'assemblée :** ___________________     **Secrétaire :** ___________________"),
    P("**Membres présents :** ______     **Quorum atteint :** ☐ Oui  ☐ Non"),
    H2("1. Ouverture"),
    P("L'assemblée est ouverte à ______ par ___________________. Le quorum est constaté."),
    H2("2. Adoption de l'ordre du jour"),
    P("Proposé par ___________________, appuyé par ___________________.  Adopté ☐ / Rejeté ☐"),
    H2("3. Adoption du procès-verbal précédent"),
    P("Proposé par ___________________, appuyé par ___________________.  Adopté ☐ / Rejeté ☐"),
    H2("4. Rapports"),
    P("Présidence : ___________________________________________________________________"),
    P("Trésorerie : ___________________________________________________________________"),
    P("Comités : ______________________________________________________________________"),
    H2("5. Résolutions"),
    P("Résolution 2026-01 : ___________________________________________________________"),
    P("Résolution 2026-02 : ___________________________________________________________"),
    H2("6. Élection des administrateurs"),
    P("Personnes élues : ______________________________________________________________"),
    H2("7. Affaires nouvelles"),
    P("________________________________________________________________________________"),
    H2("8. Levée de l'assemblée"),
    P("L'assemblée est levée à ______ sur proposition de ___________________."),
    GAP(),
    SIGN("Secrétaire", "Président(e)")
  ]},
  en: { title: "Minutes — Annual General Meeting", blocks: [
    P("**Date:** ________________     **Time:** ____________     **Location / link:** ____________________"),
    P("**Chair:** ___________________     **Secretary:** ___________________"),
    P("**Members present:** ______     **Quorum met:** ☐ Yes  ☐ No"),
    H2("1. Call to Order"),
    P("The meeting was called to order at ______ by ___________________. Quorum was confirmed."),
    H2("2. Adoption of the Agenda"),
    P("Moved by ___________________, seconded by ___________________.  Carried ☐ / Defeated ☐"),
    H2("3. Adoption of the Previous Minutes"),
    P("Moved by ___________________, seconded by ___________________.  Carried ☐ / Defeated ☐"),
    H2("4. Reports"),
    P("President: ____________________________________________________________________"),
    P("Treasurer: ____________________________________________________________________"),
    P("Committees: ___________________________________________________________________"),
    H2("5. Resolutions"),
    P("Resolution 2026-01: ___________________________________________________________"),
    P("Resolution 2026-02: ___________________________________________________________"),
    H2("6. Election of Directors"),
    P("Persons elected: ______________________________________________________________"),
    H2("7. New Business"),
    P("________________________________________________________________________________"),
    H2("8. Adjournment"),
    P("The meeting was adjourned at ______ on a motion by ___________________."),
    GAP(),
    SIGN("Secretary", "President")
  ]}
});

// 10 — Reçu de cotisation / Dues Receipt
DOCS.push({
  file: "10-Recu-cotisation-Dues-Receipt",
  headerRight: "Reçu de cotisation / Dues Receipt",
  fr: { title: "Reçu officiel de cotisation", blocks: [
    P("**Reçu n° :** __________________________     **Date :** __________________________"),
    GAP(),
    P("Reçu de : ______________________________________________________________________"),
    P("Numéro de membre : ____________________________________________________________"),
    H2("Détail"),
    TABLE(["Description", "Période", "Montant"], [
      ["Cotisation annuelle — catégorie : ____________", "20____ – 20____", "____________ $"],
      ["Autre : __________________________________", "—", "____________ $"],
      ["Total payé", "", "____________ $"]
    ]),
    P("Mode de paiement :   ☐ Chèque   ☐ Virement   ☐ Carte   ☐ Comptant"),
    GAP(),
    P("Reçu par : ___________________________   Signature : ___________________________"),
    CALLOUT("Conservez ce reçu pour vos dossiers. L'APCNB est un organisme sans but lucratif; cette cotisation n'est pas un don de bienfaisance.")
  ]},
  en: { title: "Official Dues Receipt", blocks: [
    P("**Receipt no.:** __________________________     **Date:** __________________________"),
    GAP(),
    P("Received from: _________________________________________________________________"),
    P("Membership number: ____________________________________________________________"),
    H2("Details"),
    TABLE(["Description", "Period", "Amount"], [
      ["Annual dues — category: ____________", "20____ – 20____", "$ ____________"],
      ["Other: __________________________________", "—", "$ ____________"],
      ["Total paid", "", "$ ____________"]
    ]),
    P("Payment method:   ☐ Cheque   ☐ Transfer   ☐ Card   ☐ Cash"),
    GAP(),
    P("Received by: __________________________   Signature: __________________________"),
    CALLOUT("Keep this receipt for your records. The NBPAC is a not-for-profit organization; these dues are not a charitable donation.")
  ]}
});

// 13 — Champ d'exercice / Scope of Practice
DOCS.push({
  file: "13-Champ-exercice-Scope-of-Practice",
  headerRight: "Champ d'exercice / Scope of Practice",
  fr: { title: "Norme de champ d'exercice et de collaboration interprofessionnelle", blocks: [
    LEAD("La présente norme définit la fonction du criminologue au Nouveau-Brunswick, son champ d'exercice et ses limites, afin de protéger le public et d'assurer une collaboration harmonieuse avec les professions réglementées."),
    H2("1. Statut de l'Association"),
    P("L'APCNB est une association professionnelle volontaire. Au Nouveau-Brunswick, la criminologie n'est pas une profession réglementée : ni le titre ni les activités ne sont réservés par une loi. L'Association définit donc la fonction du criminologue par la **compétence et le domaine**, et non par des actes réservés. La présente norme s'applique à ses membres."),
    H2("2. Définition du criminologue"),
    P("Le criminologue étudie le **phénomène criminel, la victimisation et le fonctionnement du système de justice**, et applique ces connaissances à la prévention, à l'évaluation et à l'accompagnement des personnes en contact avec la justice, à l'élaboration et à l'évaluation de programmes, ainsi qu'à la recherche et au conseil en matière de politiques. Son angle distinctif est le crime et la justice, non le traitement clinique de la santé mentale."),
    P("Le criminologue peut aussi exercer autrement dans le domaine de la criminologie : en appui aux forces de l'ordre, il étudie les tendances comportementales des individus et des groupes menant des activités lucratives ou corporatives qualifiées d'illicites, analyse leurs mouvements opérationnels et transactionnels afin d'établir le modus operandi, et développe des méthodes d'intervention aux niveaux stratégique, opérationnel et tactique."),
    H2("3. Champ d'exercice"),
    UL([
      "Analyser le phénomène criminel et la victimisation.",
      "Concevoir et soutenir la prévention de la criminalité et la sécurité communautaire.",
      "Évaluer le risque et les besoins criminogènes en contexte de justice (outils structurés ou actuariels) pour orienter l'intervention, sans poser de diagnostic clinique.",
      "Élaborer, mettre en œuvre et évaluer des plans et programmes d'intervention correctionnelle et communautaire.",
      "Accompagner la réinsertion sociale des personnes contrevenantes.",
      "Offrir de l'accompagnement psychosocial non clinique (soutien dans l'environnement social, orientation vers les ressources, développement du pouvoir d'agir), sans diagnostic ni traitement de la santé mentale.",
      "Soutenir et orienter les personnes victimes (soutien non clinique).",
      "Animer la justice réparatrice et la médiation.",
      "Mener de la recherche et conseiller en matière de politiques de justice et de sécurité.",
      "Offrir expertise, consultation et témoignage, dans les limites de sa compétence.",
      "Former et sensibiliser le public et les partenaires."
    ]),
    P("Champs spécialisés, en appui à la sécurité et à la justice :"),
    UL([
      "**Criminalité économique et financière** : analyser et prévenir la fraude, le blanchiment d'argent, la corruption et les autres crimes financiers, en appui à la détection et à la prévention, sans se substituer aux actes comptables, juridiques ou d'enquête réservés à d'autres professionnels.",
      "**Analyse de données** : collecter, traiter et interpréter des données criminelles et de justice (cartographie de la criminalité, analyse de tendances, indicateurs) pour éclairer une décision fondée sur des données probantes.",
      "**Analyse de renseignement criminel** selon ses quatre volets : **stratégique** (tendances et menaces à long terme, appui aux orientations), **opérationnel** (appui aux opérations et enquêtes visant un réseau ou un phénomène), **tactique** (appui immédiat sur le terrain, pour un dossier en cours) et **prospectif** (veille et anticipation des menaces émergentes)."
    ]),
    H2("4. Limites et professions réglementées au Nouveau-Brunswick"),
    P("Le criminologue exerce en complémentarité, jamais en substitution. Les activités suivantes relèvent de professions réglementées par la loi au Nouveau-Brunswick; le membre ne les exerce pas, à moins de détenir lui-même le titre ou le permis requis."),
    TABLE(["Activité", "Profession compétente au N.-B."], [
      ["Diagnostic de troubles mentaux, évaluation et tests psychologiques", "Psychologue (College of Psychologists of N.B.)"],
      ["Psychothérapie et thérapie par le counseling", "Conseiller thérapeutique agréé (College of Counselling Therapists of N.B.)"],
      ["Travail social clinique, protection de l'enfance, évaluations psychosociales réservées", "Travailleur social (NBASW / ATSNB)"],
      ["Avis et représentation juridiques", "Avocat (Barreau du N.-B.)"],
      ["Diagnostic médical et prescription", "Médecin"]
    ]),
    H2("5. Devoir de collaboration et de référence"),
    P("Le membre reconnaît les limites de son champ d'exercice et dirige sans délai la personne vers la profession compétente lorsque la situation l'exige. Il favorise le travail interdisciplinaire et ne pose aucun acte réservé à une profession réglementée sans en détenir le titre."),
    H2("6. Distinction avec le Québec"),
    P("Au Québec, le criminologue est membre d'un ordre professionnel et détient un titre réservé et des activités réservées prévues par la loi, principalement dans le domaine de la santé mentale et des relations humaines. Cette autorité découle de la loi québécoise et ne s'applique pas au Nouveau-Brunswick."),
    H2("7. Révision et reconnaissance"),
    P("La présente norme est révisée périodiquement. L'Association aspire à une protection du titre par voie législative, élaborée en concertation avec les autres ordres et validée par un conseiller juridique du Nouveau-Brunswick."),
    CALLOUT("Avis : Cette norme oriente la pratique des membres. Elle ne confère aucun droit d'exercice exclusif et devrait être validée par un conseiller juridique avant toute démarche de reconnaissance légale.")
  ]},
  en: { title: "Scope of Practice and Interprofessional Collaboration Standard", blocks: [
    LEAD("This standard defines the function of the criminologist in New Brunswick, their scope of practice and its limits, in order to protect the public and ensure harmonious collaboration with regulated professions."),
    H2("1. Status of the Association"),
    P("The NBPAC is a voluntary professional association. In New Brunswick, criminology is not a regulated profession: neither the title nor the activities are reserved by law. The Association therefore defines the criminologist's function by **competence and domain**, not by reserved acts. This standard applies to its members."),
    H2("2. Definition of the criminologist"),
    P("The criminologist studies the **phenomenon of crime, victimization and the workings of the justice system**, and applies that knowledge to prevention, to the assessment and support of people in contact with justice, to the design and evaluation of programs, and to research and policy advice. Their distinctive lens is crime and justice, not the clinical treatment of mental health."),
    P("The criminologist may also practise in other ways within the field of criminology: in support of law enforcement, they study the behavioural patterns of individuals and groups engaged in lucrative or corporate activities deemed illicit, analyze their operational and transactional movements to establish the modus operandi, and develop intervention methods at the strategic, operational and tactical levels."),
    H2("3. Scope of practice"),
    UL([
      "Analyze the phenomenon of crime and victimization.",
      "Design and support crime prevention and community safety.",
      "Assess criminogenic risk and needs in justice contexts (structured or actuarial tools) to guide intervention, without making a clinical diagnosis.",
      "Develop, implement and evaluate correctional and community intervention plans and programs.",
      "Support the social reintegration of people who have offended.",
      "Provide non-clinical psychosocial support (help within the social environment, referral to resources, empowerment), without diagnosis or mental-health treatment.",
      "Support and guide victims (non-clinical support).",
      "Facilitate restorative justice and mediation.",
      "Conduct research and advise on justice and safety policy.",
      "Provide expertise, consultation and testimony, within the limits of their competence.",
      "Train and raise awareness among the public and partners."
    ]),
    P("Specialized fields, in support of safety and justice:"),
    UL([
      "**Economic and financial crime**: analyzing and preventing fraud, money laundering, corruption and other financial crimes, supporting detection and prevention, without substituting for the accounting, legal or investigative acts reserved to other professionals.",
      "**Data analysis**: collecting, processing and interpreting crime and justice data (crime mapping, trend analysis, indicators) to inform evidence-based decision-making.",
      "**Criminal intelligence analysis** across its four streams: **strategic** (long-term trends and threats, supporting direction-setting), **operational** (support to operations and investigations targeting a network or phenomenon), **tactical** (immediate field support for an ongoing case) and **anticipatory** (foresight and monitoring of emerging threats)."
    ]),
    H2("4. Limits and professions regulated in New Brunswick"),
    P("The criminologist works in complement, never as a substitute. The following activities belong to professions regulated by law in New Brunswick; the member does not perform them unless they hold the required title or licence."),
    TABLE(["Activity", "Competent profession in N.B."], [
      ["Diagnosing mental disorders, psychological assessment and testing", "Psychologist (College of Psychologists of N.B.)"],
      ["Psychotherapy and counselling therapy", "Licensed Counselling Therapist (College of Counselling Therapists of N.B.)"],
      ["Clinical social work, child protection, reserved psychosocial assessments", "Social Worker (NBASW / ATSNB)"],
      ["Legal advice and representation", "Lawyer (Law Society of N.B.)"],
      ["Medical diagnosis and prescription", "Physician"]
    ]),
    H2("5. Duty of collaboration and referral"),
    P("The member recognizes the limits of their scope of practice and promptly refers the person to the competent profession when the situation requires it. They foster interdisciplinary work and perform no act reserved to a regulated profession without holding the title."),
    H2("6. Distinction from Quebec"),
    P("In Quebec, the criminologist is a member of a professional order and holds a reserved title and reserved activities set out in law, mainly in the field of mental health and human relations. That authority arises from Quebec law and does not apply in New Brunswick."),
    H2("7. Review and recognition"),
    P("This standard is reviewed periodically. The Association aims for legislative protection of the title, developed in consultation with the other regulatory bodies and validated by New Brunswick legal counsel."),
    CALLOUT("Note: This standard guides members' practice. It confers no exclusive right to practise and should be validated by legal counsel before any legal-recognition process.")
  ]}
});

// 14 — Mémoire : reconnaissance du titre / Title-recognition brief
DOCS.push({
  file: "14-Memoire-reconnaissance-titre-Title-Recognition-Brief",
  headerRight: "Mémoire — reconnaissance du titre / Title-recognition brief",
  fr: { title: "Mémoire en faveur de la reconnaissance et de la protection du titre de criminologue au Nouveau-Brunswick", blocks: [
    LEAD("Mémoire soumis respectueusement par l'Association professionnelle de criminologie du Nouveau-Brunswick (APCNB) à l'appui de la reconnaissance et de la protection du titre de « criminologue » au Nouveau-Brunswick."),
    H2("Sommaire"),
    P("Au Nouveau-Brunswick, toute personne peut aujourd'hui se présenter comme « criminologue », sans formation reconnue ni encadrement déontologique. L'APCNB propose une **protection du titre**, assortie de normes de compétence, d'un code de déontologie et d'un mécanisme de traitement des plaintes, afin de **protéger le public** — sans empiéter sur les professions déjà réglementées. Le présent mémoire expose le contexte, la justification fondée sur la protection du public, et un modèle adapté au Nouveau-Brunswick et à son caractère bilingue."),
    H2("1. Présentation de l'APCNB"),
    P("L'APCNB est une association professionnelle sans but lucratif, bilingue, qui regroupe les criminologues du Nouveau-Brunswick. Elle s'est dotée de statuts et règlements, d'un code de déontologie, de catégories d'adhésion, d'une politique de formation continue, d'une politique de traitement des plaintes et d'une norme de champ d'exercice. L'Association est ainsi déjà structurée pour assumer un rôle d'encadrement."),
    H2("2. Contexte et problématique"),
    UL([
      "Le titre de « criminologue » n'est protégé par aucune loi au Nouveau-Brunswick : n'importe qui peut l'utiliser.",
      "Aucune norme de formation ni de conduite ne s'impose actuellement à ceux qui s'en réclament.",
      "Le public, les employeurs et les tribunaux n'ont aucun moyen fiable de vérifier la compétence d'une personne qui se dit criminologue.",
      "Aucun recours n'existe contre une personne non membre qui exercerait de façon préjudiciable.",
      "Le nombre de diplômé·es en criminologie au Nouveau-Brunswick justifie un encadrement clair de la profession."
    ]),
    H2("3. La protection du public — fondement de la démarche"),
    P("Le seul fondement légitime de l'encadrement d'une profession est la protection du public. Les criminologues interviennent auprès de personnes vulnérables — personnes victimes, personnes contrevenantes, adolescents — et éclairent des décisions ayant des conséquences importantes (évaluation du risque, réinsertion, programmes correctionnels). Des normes de compétence et un mécanisme de reddition de comptes protègent les personnes servies et renforcent la confiance du public."),
    H2("4. Le criminologue : définition et champ d'exercice"),
    P("Le criminologue étudie le phénomène criminel, la victimisation et le système de justice, et applique ces connaissances à la prévention, à l'évaluation et à l'accompagnement des personnes en contact avec la justice, ainsi qu'à la recherche et au conseil. Son champ est défini par la compétence et le domaine de la justice; il ne pose pas d'actes cliniques réservés à d'autres professions. Le champ détaillé figure dans la Norme de champ d'exercice de l'APCNB."),
    H2("5. Complémentarité avec les professions réglementées"),
    P("La présente démarche ne vise aucun empiétement. Le criminologue défère aux professions réglementées du Nouveau-Brunswick : le **travail social** (NBASW / ATSNB), le **counseling thérapeutique** (College of Counselling Therapists of N.B.), la **psychologie** (College of Psychologists of N.B.), le **droit** (Barreau) et la **médecine**. L'APCNB souhaite collaborer avec ces organismes et inscrire un devoir de référence dans sa déontologie, ce qui est déjà fait."),
    H2("6. Contexte canadien et précédents"),
    P("Le Québec reconnaît le criminologue comme profession à titre réservé depuis 2015 (Ordre professionnel des criminologues du Québec). Le Nouveau-Brunswick a, pour sa part, reconnu récemment plusieurs professions des relations humaines : le counseling thérapeutique (loi en vigueur en 2017), la psychologie et le travail social (loi de la NBASW, 2024). La province s'est aussi dotée d'un régime de protection des titres en services financiers. Il existe donc des précédents clairs et un cadre éprouvé."),
    H2("7. Modèle proposé pour le Nouveau-Brunswick"),
    OL([
      "Protéger le titre de « criminologue » (et l'abréviation « crim. ») par voie législative.",
      "Privilégier la voie d'un projet de loi d'intérêt privé déposé à l'Assemblée législative, comme pour le travail social, la psychologie et le counseling thérapeutique.",
      "À titre de variante progressive, envisager un régime de protection du titre (sur le modèle des planificateurs financiers) avec un organisme de reconnaissance des titres.",
      "Confier à l'APCNB l'établissement et le maintien des normes d'admission, de déontologie, de formation continue et de traitement des plaintes — déjà en place.",
      "Garantir la prestation des services et de l'encadrement dans les deux langues officielles.",
      "Prévoir une période de transition et une concertation avec les ordres existants."
    ]),
    H2("8. Bénéfices attendus"),
    UL([
      "Protection accrue du public et des personnes vulnérables.",
      "Clarté pour les employeurs, les tribunaux et les partenaires.",
      "Normes de compétence et de conduite vérifiables.",
      "Services offerts dans les deux langues officielles.",
      "Complémentarité, et non concurrence, avec les professions réglementées.",
      "Aucun coût pour les contribuables : l'encadrement est financé par les cotisations des membres."
    ]),
    H2("9. Recommandations"),
    OL([
      "Que le gouvernement reconnaisse le criminologue comme profession à titre protégé au Nouveau-Brunswick.",
      "Que le titre « criminologue » et l'abréviation « crim. » soient réservés aux personnes répondant aux normes établies.",
      "Que l'APCNB (ou un organisme désigné) soit responsable des normes d'admission, de déontologie et de traitement des plaintes.",
      "Que le champ d'exercice soit défini par la compétence, en complémentarité avec les professions réglementées.",
      "Qu'une période de transition et une consultation des ordres concernés soient prévues."
    ]),
    H2("10. Conclusion"),
    P("L'APCNB remercie le gouvernement de l'attention portée au présent mémoire. L'Association est prête à collaborer avec les autorités et les ordres professionnels pour mettre en place un encadrement qui protège le public, valorise la profession et respecte le caractère bilingue du Nouveau-Brunswick."),
    GAP(),
    SIGN("La présidence — APCNB", "Le secrétariat — APCNB"),
    CALLOUT("Document de travail soumis à des fins de consultation. Il devrait être finalisé avec un conseiller juridique du Nouveau-Brunswick et validé par le conseil d'administration avant tout dépôt officiel.")
  ]},
  en: { title: "Brief in Support of Recognizing and Protecting the Criminologist Title in New Brunswick", blocks: [
    LEAD("Brief respectfully submitted by the New Brunswick Professional Association of Criminology (NBPAC) in support of recognizing and protecting the title of “criminologist” in New Brunswick."),
    H2("Executive summary"),
    P("In New Brunswick, anyone may currently present themselves as a “criminologist”, with no recognized training or ethical oversight. The NBPAC proposes **title protection**, together with competence standards, a code of ethics and a complaints process, in order to **protect the public** — without encroaching on the professions already regulated. This brief sets out the context, the public-protection rationale, and a model suited to New Brunswick and its bilingual character."),
    H2("1. About the NBPAC"),
    P("The NBPAC is a not-for-profit, bilingual professional association bringing together New Brunswick's criminologists. It has adopted bylaws, a code of ethics, membership categories, a continuing-education policy, a complaints-handling policy and a scope-of-practice standard. The Association is therefore already structured to take on an oversight role."),
    H2("2. Context and problem"),
    UL([
      "The title “criminologist” is protected by no law in New Brunswick: anyone may use it.",
      "No training or conduct standard currently applies to those who claim it.",
      "The public, employers and courts have no reliable way to verify the competence of someone calling themselves a criminologist.",
      "No recourse exists against a non-member who practises harmfully.",
      "The number of criminology graduates in New Brunswick warrants clear oversight of the profession."
    ]),
    H2("3. Protection of the public — the basis for action"),
    P("The only legitimate basis for regulating a profession is the protection of the public. Criminologists work with vulnerable people — victims, people who have offended, youth — and inform decisions with significant consequences (risk assessment, reintegration, correctional programs). Competence standards and accountability protect the people served and strengthen public trust."),
    H2("4. The criminologist: definition and scope"),
    P("The criminologist studies the phenomenon of crime, victimization and the justice system, and applies that knowledge to prevention, to the assessment and support of people in contact with justice, and to research and advice. Their scope is defined by competence and the justice domain; they perform no clinical acts reserved to other professions. The detailed scope is set out in the NBPAC Scope-of-Practice Standard."),
    H2("5. Complementarity with regulated professions"),
    P("This initiative seeks no encroachment. The criminologist defers to New Brunswick's regulated professions: **social work** (NBASW / ATSNB), **counselling therapy** (College of Counselling Therapists of N.B.), **psychology** (College of Psychologists of N.B.), **law** (Law Society) and **medicine**. The NBPAC wishes to collaborate with these bodies and has already embedded a duty of referral in its code of ethics."),
    H2("6. Canadian context and precedents"),
    P("Quebec has recognized the criminologist as a reserved-title profession since 2015 (Ordre professionnel des criminologues du Québec). New Brunswick, for its part, has recently recognized several human-relations professions: counselling therapy (in force 2017), psychology, and social work (NBASW Act, 2024). The province has also adopted a title-protection regime in financial services. Clear precedents and a proven framework therefore exist."),
    H2("7. Proposed model for New Brunswick"),
    OL([
      "Protect the title “criminologist” (and the abbreviation “crim.”) through legislation.",
      "Favour a private member's bill introduced in the Legislative Assembly, as for social work, psychology and counselling therapy.",
      "As a phased alternative, consider a title-protection regime (on the financial-planner model) with an approved credentialing body.",
      "Task the NBPAC with setting and maintaining standards of admission, ethics, continuing education and complaints handling — already in place.",
      "Guarantee that services and oversight are delivered in both official languages.",
      "Provide for a transition period and consultation with existing regulators."
    ]),
    H2("8. Expected benefits"),
    UL([
      "Greater protection of the public and of vulnerable people.",
      "Clarity for employers, courts and partners.",
      "Verifiable standards of competence and conduct.",
      "Services offered in both official languages.",
      "Complementarity, not competition, with regulated professions.",
      "No cost to taxpayers: oversight is funded by member dues."
    ]),
    H2("9. Recommendations"),
    OL([
      "That the government recognize the criminologist as a title-protected profession in New Brunswick.",
      "That the title “criminologist” and the abbreviation “crim.” be reserved to those meeting the established standards.",
      "That the NBPAC (or a designated body) be responsible for standards of admission, ethics and complaints handling.",
      "That the scope of practice be defined by competence, in complement to the regulated professions.",
      "That a transition period and consultation of the relevant regulators be provided."
    ]),
    H2("10. Conclusion"),
    P("The NBPAC thanks the government for its attention to this brief. The Association is ready to work with the authorities and professional regulators to establish oversight that protects the public, advances the profession and respects the bilingual character of New Brunswick."),
    GAP(),
    SIGN("The President — NBPAC", "The Secretary — NBPAC"),
    CALLOUT("Working document submitted for consultation. It should be finalized with New Brunswick legal counsel and approved by the Board of Directors before any official submission.")
  ]}
});

// 16 — Résumé à l'intention des décideurs / One-page summary
DOCS.push({
  file: "16-Resume-une-page-One-Page-Summary",
  headerRight: "Résumé à l'intention des décideurs / One-page summary",
  fr: { title: "Reconnaissance du titre de criminologue — résumé à l'intention des décideurs", blocks: [
    LEAD("Feuillet synthèse à l'appui du mémoire de l'Association professionnelle de criminologie du Nouveau-Brunswick (APCNB)."),
    H2("Le problème"),
    P("Au Nouveau-Brunswick, le titre de « criminologue » n'est protégé par aucune loi. Toute personne peut s'en réclamer, sans formation reconnue ni encadrement déontologique, alors même que les criminologues interviennent auprès de personnes vulnérables et éclairent des décisions de justice."),
    H2("La demande"),
    UL([
      "Reconnaître le criminologue comme profession à titre protégé au Nouveau-Brunswick.",
      "Réserver le titre « criminologue » (et l'abréviation « crim. ») aux personnes répondant à des normes établies.",
      "Confier l'encadrement (admission, déontologie, plaintes, formation continue) à l'APCNB."
    ]),
    H2("Pourquoi maintenant"),
    UL([
      "Précédents au N.-B. : counseling thérapeutique (2017), psychologie, travail social (loi de 2024).",
      "Le Québec reconnaît le criminologue depuis 2015.",
      "L'APCNB possède déjà statuts, code de déontologie, norme de champ d'exercice et processus de plaintes."
    ]),
    H2("Bénéfices"),
    UL([
      "Protection accrue du public et des personnes vulnérables.",
      "Clarté pour les employeurs et les tribunaux.",
      "Complémentarité — et non concurrence — avec les professions réglementées.",
      "Services dans les deux langues officielles, sans coût pour les contribuables."
    ]),
    H2("Notre engagement"),
    P("L'APCNB définit le criminologue par la compétence et le domaine de la justice, défère les actes cliniques aux professions réglementées et inscrit un devoir de référence dans sa déontologie. Nous souhaitons collaborer avec le gouvernement et les ordres existants.")
  ]},
  en: { title: "Criminologist title recognition — summary for decision-makers", blocks: [
    LEAD("One-page summary supporting the brief of the New Brunswick Professional Association of Criminology (NBPAC)."),
    H2("The problem"),
    P("In New Brunswick, the title “criminologist” is protected by no law. Anyone may claim it, with no recognized training or ethical oversight, even though criminologists work with vulnerable people and inform justice decisions."),
    H2("The request"),
    UL([
      "Recognize the criminologist as a title-protected profession in New Brunswick.",
      "Reserve the title “criminologist” (and the abbreviation “crim.”) to those meeting established standards.",
      "Task the NBPAC with oversight (admission, ethics, complaints, continuing education)."
    ]),
    H2("Why now"),
    UL([
      "Precedents in N.B.: counselling therapy (2017), psychology, social work (2024 Act).",
      "Quebec has recognized the criminologist since 2015.",
      "The NBPAC already has bylaws, a code of ethics, a scope-of-practice standard and a complaints process."
    ]),
    H2("Benefits"),
    UL([
      "Greater protection of the public and vulnerable people.",
      "Clarity for employers and courts.",
      "Complementarity — not competition — with regulated professions.",
      "Services in both official languages, at no cost to taxpayers."
    ]),
    H2("Our commitment"),
    P("The NBPAC defines the criminologist by competence and the justice domain, defers clinical acts to regulated professions and embeds a duty of referral in its code of ethics. We wish to collaborate with the government and existing regulators.")
  ]}
});

// 17 — Grille de compétences / Competency framework
DOCS.push({
  file: "17-Grille-competences-Competency-Framework",
  headerRight: "Grille de compétences / Competency framework",
  fr: { title: "Grille de compétences du criminologue", blocks: [
    LEAD("La présente grille décrit les compétences attendues du criminologue au Nouveau-Brunswick. Elle appuie l'admission, la formation continue et la demande de reconnaissance professionnelle."),
    H2("1. Savoirs fondamentaux"),
    UL([
      "Connaître les théories criminologiques et les facteurs de la criminalité et de la victimisation.",
      "Comprendre le système de justice pénale, le droit applicable et les institutions correctionnelles.",
      "Maîtriser les méthodes de recherche et l'analyse de données en sciences sociales."
    ]),
    H2("2. Évaluation"),
    UL([
      "Évaluer le risque et les besoins criminogènes à l'aide d'outils structurés ou actuariels.",
      "Analyser une situation et formuler des conclusions fondées sur des données probantes.",
      "Reconnaître les limites de son évaluation et s'abstenir de tout diagnostic clinique réservé."
    ]),
    H2("3. Intervention"),
    UL([
      "Élaborer, mettre en œuvre et évaluer des plans et des programmes d'intervention.",
      "Soutenir la réinsertion sociale et accompagner les personnes victimes (soutien non clinique).",
      "Animer des processus de justice réparatrice et de médiation.",
      "Concevoir des stratégies de prévention de la criminalité et de sécurité communautaire."
    ]),
    H2("4. Éthique et professionnalisme"),
    UL([
      "Respecter le code de déontologie et les limites de son champ d'exercice.",
      "Diriger la personne vers la profession compétente au besoin (devoir de référence).",
      "Protéger la confidentialité et gérer les conflits d'intérêts."
    ]),
    H2("5. Communication et collaboration"),
    UL([
      "Rédiger des rapports clairs et témoigner devant les tribunaux dans les limites de sa compétence.",
      "Travailler en interdisciplinarité avec les autres professions.",
      "Offrir ses services dans les deux langues officielles, selon le choix de la personne."
    ]),
    H2("6. Pensée critique et perfectionnement"),
    UL([
      "Évaluer de façon critique les pratiques et les programmes.",
      "Maintenir et actualiser ses compétences par la formation continue.",
      "Contribuer à l'avancement des connaissances et des politiques."
    ])
  ]},
  en: { title: "Criminologist competency framework", blocks: [
    LEAD("This framework describes the competencies expected of the criminologist in New Brunswick. It supports admission, continuing education and the professional-recognition request."),
    H2("1. Foundational knowledge"),
    UL([
      "Know criminological theories and the factors behind crime and victimization.",
      "Understand the criminal-justice system, applicable law and correctional institutions.",
      "Master research methods and data analysis in the social sciences."
    ]),
    H2("2. Assessment"),
    UL([
      "Assess criminogenic risk and needs using structured or actuarial tools.",
      "Analyze a situation and draw evidence-based conclusions.",
      "Recognize the limits of one's assessment and refrain from any reserved clinical diagnosis."
    ]),
    H2("3. Intervention"),
    UL([
      "Develop, implement and evaluate intervention plans and programs.",
      "Support social reintegration and accompany victims (non-clinical support).",
      "Facilitate restorative-justice and mediation processes.",
      "Design crime-prevention and community-safety strategies."
    ]),
    H2("4. Ethics and professionalism"),
    UL([
      "Comply with the code of ethics and the limits of one's scope of practice.",
      "Refer the person to the competent profession when needed (duty of referral).",
      "Protect confidentiality and manage conflicts of interest."
    ]),
    H2("5. Communication and collaboration"),
    UL([
      "Write clear reports and testify before courts within the limits of one's competence.",
      "Work interdisciplinarily with other professions.",
      "Provide services in both official languages, according to the person's choice."
    ]),
    H2("6. Critical thinking and development"),
    UL([
      "Critically appraise practices and programs.",
      "Maintain and update one's competencies through continuing education.",
      "Contribute to the advancement of knowledge and policy."
    ])
  ]}
});

// 18 — Présentation de l'association / About the association
DOCS.push({
  file: "18-Presentation-association-About",
  headerRight: "Présentation / About",
  fr: { title: "Présentation de l'Association", blocks: [
    LEAD("L'Association professionnelle de criminologie du Nouveau-Brunswick (APCNB) regroupe les criminologues de la province et œuvre, dans les deux langues officielles, à des communautés plus sûres et plus justes."),
    H2("Mission"),
    P("Promouvoir l'excellence, l'intégrité et la reconnaissance de la profession de criminologue au Nouveau-Brunswick, et protéger l'intérêt public par des normes de pratique élevées."),
    H2("Vision"),
    P("Une criminologie reconnue, respectée et accessible dans les deux langues officielles, contribuant à des politiques et à des services de justice fondés sur des données probantes."),
    H2("Valeurs"),
    UL(["Rigueur scientifique", "Intégrité et éthique", "Dualité linguistique", "Justice et équité", "Engagement communautaire"]),
    H2("Qui nous sommes"),
    P("L'APCNB est une association professionnelle sans but lucratif qui rassemble les personnes diplômées et praticiennes en criminologie de la province. Nous appuyons nos membres tout au long de leur carrière : encadrement de l'admission, formation continue, code de déontologie, défense de la profession et représentation auprès des instances publiques. Conformément au caractère bilingue du Nouveau-Brunswick, tous nos services, communications et documents sont offerts en français et en anglais."),
    H2("Ce que nous faisons"),
    UL([
      "Établir et maintenir les normes de la pratique professionnelle.",
      "Gérer l'admission et les catégories de membres.",
      "Offrir de la formation continue et des activités de perfectionnement.",
      "Administrer un code de déontologie et un processus de plaintes.",
      "Représenter la criminologie auprès du public et des décideurs.",
      "Favoriser la recherche et le partage des connaissances."
    ])
  ]},
  en: { title: "About the Association", blocks: [
    LEAD("The New Brunswick Professional Association of Criminology (NBPAC) brings together the province's criminologists and works, in both official languages, toward safer and fairer communities."),
    H2("Mission"),
    P("To promote the excellence, integrity and recognition of the criminology profession in New Brunswick, and to protect the public interest through high standards of practice."),
    H2("Vision"),
    P("A criminology that is recognized, respected and accessible in both official languages, contributing to evidence-based justice policy and services."),
    H2("Values"),
    UL(["Scientific rigour", "Integrity and ethics", "Linguistic duality", "Justice and fairness", "Community engagement"]),
    H2("Who we are"),
    P("The NBPAC is a not-for-profit professional association bringing together the province's criminology graduates and practitioners. We support our members throughout their careers: overseeing admission, continuing education, a code of ethics, advocacy for the profession, and representation before public bodies. In keeping with New Brunswick's bilingual character, all of our services, communications and documents are offered in both French and English."),
    H2("What we do"),
    UL([
      "Set and maintain standards of professional practice.",
      "Manage admission and membership categories.",
      "Offer continuing education and professional development.",
      "Administer a code of ethics and a complaints process.",
      "Represent criminology to the public and decision-makers.",
      "Foster research and knowledge sharing."
    ])
  ]}
});

// 19 — Adhésion : guide détaillé / Membership guide
DOCS.push({
  file: "19-Adhesion-guide-Membership-Guide",
  headerRight: "Adhésion — guide / Membership guide",
  fr: { title: "Adhésion — guide détaillé", blocks: [
    LEAD("Tout ce qu'il faut savoir pour devenir membre de l'APCNB."),
    H2("Catégories et cotisations"),
    TABLE(["Catégorie", "Admissibilité", "Cotisation"], [
      ["Membre régulier", "Diplôme universitaire en criminologie ou domaine connexe, exerçant dans le domaine", "125 $"],
      ["Membre étudiant", "Inscription à un programme reconnu de criminologie ou de justice pénale", "Gratuit"],
      ["Membre associé", "Professionnel d'une discipline connexe appuyant nos objectifs", "90 $"],
      ["Membre honoraire", "Personne nommée par le conseil pour sa contribution exceptionnelle", "Sans frais"]
    ]),
    H2("Critères d'admission"),
    UL(["Diplôme pertinent d'un établissement reconnu (ou inscription en cours pour les membres étudiants).", "Engagement écrit à respecter le Code de déontologie et les statuts.", "Renseignements exacts et pièces justificatives.", "Paiement de la cotisation annuelle."]),
    H2("Équivalence des diplômes obtenus hors province"),
    P("Les personnes titulaires d'un diplôme obtenu à l'extérieur du Nouveau-Brunswick peuvent demander une reconnaissance d'équivalence. Le comité d'admission évalue le contenu de la formation, le nombre de crédits en criminologie et l'expérience pertinente. Une formation d'appoint peut être exigée."),
    H2("Stage et expérience pratique"),
    P("Pour les candidat·es en début de carrière, un stage supervisé ou une expérience pratique encadrée fait partie des exigences d'admission. Le stage doit comporter au minimum 540 heures dans le domaine, ou l'équivalent reconnu par le comité d'admission."),
    H2("Exigences linguistiques"),
    P("Les membres offrent leurs services dans la langue officielle choisie par la personne (français ou anglais) dans la mesure du possible. Aucune compétence dans les deux langues n'est exigée pour adhérer."),
    H2("Comment adhérer"),
    OL(["Remplir le formulaire d'adhésion et rassembler les pièces justificatives.", "Soumettre le dossier au secrétariat.", "Examen par le comité d'admission (et équivalence, le cas échéant).", "Accepter l'engagement déontologique et acquitter la cotisation.", "Recevoir la confirmation d'adhésion et le certificat de membre."])
  ]},
  en: { title: "Membership — detailed guide", blocks: [
    LEAD("Everything you need to know to become an NBPAC member."),
    H2("Categories and dues"),
    TABLE(["Category", "Eligibility", "Dues"], [
      ["Regular member", "University degree in criminology or a related field, working in the field", "$125"],
      ["Student member", "Enrolment in a recognized criminology or criminal-justice program", "Free"],
      ["Associate member", "Professional in a related discipline supporting our objectives", "$90"],
      ["Honorary member", "Person appointed by the Board for an exceptional contribution", "No charge"]
    ]),
    H2("Admission criteria"),
    UL(["Relevant degree from a recognized institution (or current enrolment for student members).", "Written undertaking to abide by the Code of Ethics and bylaws.", "Accurate information and supporting documents.", "Payment of annual dues."]),
    H2("Equivalency for out-of-province credentials"),
    P("Holders of a degree earned outside New Brunswick may request recognition of equivalency. The admissions committee assesses the program content, the number of criminology credits and relevant experience. Bridging coursework may be required."),
    H2("Internship and practical experience"),
    P("For early-career applicants, a supervised internship or guided practical experience is part of the admission requirements. The internship must total at least 540 hours in the field, or an equivalent recognized by the admissions committee."),
    H2("Language requirements"),
    P("Members provide services in the official language chosen by the person (French or English) wherever possible. Proficiency in both languages is not required to join."),
    H2("How to join"),
    OL(["Complete the membership form and gather supporting documents.", "Submit the file to the secretariat.", "Review by the admissions committee (and equivalency, if applicable).", "Accept the ethical undertaking and pay the dues.", "Receive membership confirmation and the certificate."])
  ]}
});

// 20 — Guide de protection du public / Public-protection guide
DOCS.push({
  file: "20-Protection-du-public-Public-Protection-Guide",
  headerRight: "Protection du public / Public protection",
  fr: { title: "Guide de protection du public", blocks: [
    LEAD("Comment l'APCNB protège le public, et comment vous pouvez nous aider."),
    H2("Vérifier qu'une personne est membre"),
    P("Avant de retenir les services d'un·e criminologue, vous pouvez confirmer qu'il ou elle est membre en règle de l'APCNB grâce au bottin des membres."),
    H2("Porter une plainte"),
    P("Toute personne peut porter plainte concernant la conduite professionnelle d'un membre. Le processus est confidentiel et équitable."),
    OL(["Préparer une description écrite des faits, des dates et des personnes en cause.", "Soumettre le formulaire ou écrire au secrétariat.", "Le secrétariat accuse réception dans les 10 jours ouvrables.", "Le comité de déontologie évalue la recevabilité dans les 30 jours.", "Une décision motivée est communiquée; un appel est possible."]),
    H2("Signaler une fausse appartenance"),
    P("Le titre de « criminologue » n'est pas encore protégé par la loi au Nouveau-Brunswick; l'APCNB travaille à sa reconnaissance. Vous pouvez toutefois signaler une personne qui se présente faussement comme membre de l'APCNB ou qui utilise le nom de l'Association sans autorisation."),
    H2("Décisions disciplinaires"),
    P("Par souci de transparence, les décisions disciplinaires rendues à l'égard des membres sont publiées par l'Association. Aucune décision n'a été rendue à ce jour.")
  ]},
  en: { title: "Public-protection guide", blocks: [
    LEAD("How the NBPAC protects the public, and how you can help."),
    H2("Confirm that someone is a member"),
    P("Before engaging a criminologist's services, you can confirm they are a member in good standing of the NBPAC using the member directory."),
    H2("File a complaint"),
    P("Anyone may file a complaint about a member's professional conduct. The process is confidential and fair."),
    OL(["Prepare a written description of the facts, dates and people involved.", "Submit the form or write to the secretariat.", "The secretariat acknowledges receipt within 10 business days.", "The ethics committee assesses admissibility within 30 days.", "A reasoned decision is communicated; an appeal is possible."]),
    H2("Report false membership"),
    P("The “criminologist” title is not yet protected by law in New Brunswick; the NBPAC is working toward its recognition. You can, however, report a person who falsely presents themselves as an NBPAC member or uses the Association's name without authorization."),
    H2("Disciplinary decisions"),
    P("In the interest of transparency, disciplinary decisions issued against members are published by the Association. No decisions have been issued to date.")
  ]}
});

// 21 — Foire aux questions / FAQ
DOCS.push({
  file: "21-Foire-aux-questions-FAQ",
  headerRight: "Foire aux questions / FAQ",
  fr: { title: "Foire aux questions", blocks: [
    H2("Qui peut devenir membre de l'APCNB?"),
    P("Toute personne titulaire d'un diplôme en criminologie ou dans un domaine connexe, ou inscrite à un programme reconnu (membre étudiant)."),
    H2("Mes services seront-ils offerts en français et en anglais?"),
    P("Oui. L'Association fonctionne dans les deux langues officielles et ses membres offrent leurs services dans la langue choisie par la personne, dans la mesure du possible."),
    H2("Mon diplôme a été obtenu hors du Nouveau-Brunswick. Suis-je admissible?"),
    P("Possiblement. Vous pouvez demander une reconnaissance d'équivalence; le comité d'admission évalue votre formation et votre expérience. Une formation d'appoint peut être requise."),
    H2("Combien coûte l'adhésion?"),
    P("L'adhésion étudiante est gratuite. Pour les autres catégories : 125 $ pour un membre régulier et 90 $ pour un membre associé, par année. Les membres honoraires sont aussi sans frais."),
    H2("Comment vérifier qu'une personne est réellement membre?"),
    P("Consultez le bottin des membres pour confirmer l'appartenance et le statut « en règle »."),
    H2("Comment porter plainte contre un membre?"),
    P("La page Protection du public décrit le processus confidentiel et propose un formulaire."),
    H2("Qu'est-ce que la formation continue obligatoire?"),
    P("Les membres réguliers cumulent au moins 20 unités de formation continue par année, dont 3 en éthique."),
    H2("L'APCNB est-elle un ordre professionnel reconnu par la loi?"),
    P("Il s'agit d'une association professionnelle. La constitution et la reconnaissance légale formelle devraient être validées par un conseiller juridique du Nouveau-Brunswick.")
  ]},
  en: { title: "Frequently asked questions", blocks: [
    H2("Who can become an NBPAC member?"),
    P("Anyone holding a degree in criminology or a related field, or enrolled in a recognized program (student member)."),
    H2("Will my services be offered in French and English?"),
    P("Yes. The Association operates in both official languages and its members provide services in the language chosen by the person, wherever possible."),
    H2("My degree was earned outside New Brunswick. Am I eligible?"),
    P("Possibly. You may request recognition of equivalency; the admissions committee assesses your training and experience. Bridging coursework may be required."),
    H2("How much does membership cost?"),
    P("Student membership is free. For the other categories: $125 for a regular member and $90 for an associate member, per year. Honorary members also pay no fee."),
    H2("How can I confirm someone is really a member?"),
    P("Use the member directory to confirm membership and “good standing” status."),
    H2("How do I file a complaint against a member?"),
    P("The Public-protection page describes the confidential process and provides a form."),
    H2("What is the mandatory continuing education?"),
    P("Regular members earn at least 20 continuing-education units per year, including 3 in ethics."),
    H2("Is the NBPAC a legally recognized professional order?"),
    P("It is a professional association. Incorporation and formal legal recognition should be validated by New Brunswick legal counsel.")
  ]}
});

// 22 — Politique d'accréditation des formations / Training-Accreditation Policy
DOCS.push({
  file: "22-Politique-accreditation-formations-Training-Accreditation-Policy",
  headerRight: "Accréditation des formations / Training accreditation",
  fr: { title: "Politique d'accréditation des formations", blocks: [
    LEAD("La présente politique encadre l'accréditation des activités de formation continue et l'attribution des unités de formation continue (UFC), y compris pour les formations offertes par des partenaires externes."),
    H2("1. Objet"),
    P("Assurer la qualité, la pertinence et la rigueur des formations reconnues par l'APCNB, et préciser le rôle des formateurs et partenaires externes."),
    H2("2. Champ d'application"),
    P("La politique s'applique aux formations **synchrones** (en direct : webinaires, ateliers) et **asynchrones** (à votre rythme : cours en ligne, modules enregistrés), qu'elles soient conçues par l'Association ou par des partenaires (universités, organismes, professionnels)."),
    H2("3. Critères d'accréditation"),
    UL([
      "Pertinence au champ d'exercice du criminologue (crime et justice) et aux besoins de la profession.",
      "Objectifs d'apprentissage clairs et mesurables.",
      "Contenu rigoureux, à jour et fondé sur des données probantes.",
      "Qualifications du formateur : expertise universitaire ou professionnelle reconnue.",
      "Méthode de confirmation de la participation (présence, évaluation ou attestation).",
      "Respect de la déontologie et des limites du champ d'exercice; aucun acte réservé à une profession réglementée."
    ]),
    H2("4. Attribution des UFC"),
    P("Une UFC équivaut à une heure d'activité reconnue. Les UFC accordées comptent pour l'exigence annuelle prévue à la Politique de formation continue (20 UFC par année pour les membres réguliers, dont au moins 3 en éthique). Les plafonds par type d'activité s'appliquent."),
    H2("5. Formateurs externes et partenaires"),
    P("L'Association peut reconnaître des formations conçues ou données par des universités — notamment dans le cadre de partenariats visés, comme avec l'Université de Moncton — ainsi que par des professionnels du domaine. Une entente écrite précise les rôles, la propriété du contenu, la langue d'offre et les modalités d'accréditation."),
    H2("6. Processus de demande"),
    OL([
      "Soumission de la proposition (titre, format, objectifs, durée, UFC proposées, qualifications du formateur).",
      "Évaluation par le comité de formation continue selon les critères ci-dessus.",
      "Décision motivée communiquée au demandeur.",
      "Accréditation valide pour une période déterminée (p. ex. trois ans), renouvelable.",
      "Suivi de la qualité et rétroaction des participants."
    ]),
    H2("7. Bilinguisme"),
    P("L'Association favorise l'offre de formations dans les deux langues officielles et encourage les partenaires à rendre leur contenu accessible en français et en anglais."),
    H2("8. Registre et révision"),
    P("L'Association tient un registre des formations accréditées et révise périodiquement la présente politique."),
    CALLOUT("Avis : Cette politique oriente la reconnaissance des formations. Toute entente de partenariat ou d'accréditation devrait être validée par un conseiller juridique du Nouveau-Brunswick.")
  ]},
  en: { title: "Training-Accreditation Policy", blocks: [
    LEAD("This policy governs the accreditation of continuing-education activities and the awarding of continuing-education units (CEUs), including training offered by external partners."),
    H2("1. Purpose"),
    P("To ensure the quality, relevance and rigour of training recognized by the NBPAC, and to clarify the role of external instructors and partners."),
    H2("2. Scope"),
    P("This policy applies to **synchronous** training (live: webinars, workshops) and **asynchronous** training (self-paced: online courses, recorded modules), whether designed by the Association or by partners (universities, organizations, professionals)."),
    H2("3. Accreditation criteria"),
    UL([
      "Relevance to the criminologist's scope of practice (crime and justice) and to the profession's needs.",
      "Clear, measurable learning objectives.",
      "Rigorous, current and evidence-based content.",
      "Instructor qualifications: recognized academic or professional expertise.",
      "A method to confirm participation (attendance, assessment or attestation).",
      "Compliance with ethics and scope-of-practice limits; no act reserved to a regulated profession."
    ]),
    H2("4. Awarding CEUs"),
    P("One CEU equals one hour of recognized activity. CEUs awarded count toward the annual requirement in the Continuing Professional Development Policy (20 CEUs per year for regular members, including at least 3 in ethics). Caps by activity type apply."),
    H2("5. External instructors and partners"),
    P("The Association may recognize training designed or delivered by universities — notably through envisaged partnerships, such as with the Université de Moncton — as well as by field professionals. A written agreement sets out the roles, content ownership, language of delivery and accreditation terms."),
    H2("6. Application process"),
    OL([
      "Submission of the proposal (title, format, objectives, duration, proposed CEUs, instructor qualifications).",
      "Review by the continuing-education committee against the above criteria.",
      "A reasoned decision communicated to the applicant.",
      "Accreditation valid for a set period (e.g. three years), renewable.",
      "Quality monitoring and participant feedback."
    ]),
    H2("7. Bilingualism"),
    P("The Association promotes training in both official languages and encourages partners to make their content available in French and English."),
    H2("8. Register and review"),
    P("The Association keeps a register of accredited training and periodically reviews this policy."),
    CALLOUT("Note: This policy guides the recognition of training. Any partnership or accreditation agreement should be validated by New Brunswick legal counsel.")
  ]}
});

// 24 — Protocole d'entente de partenariat (modèle) / Partnership MOU (template)
DOCS.push({
  file: "24-Protocole-entente-partenariat-Partnership-MOU",
  headerRight: "Protocole d'entente (modèle) / Partnership MOU (template)",
  fr: { title: "Protocole d'entente de partenariat (modèle)", blocks: [
    LEAD("Modèle de protocole d'entente entre l'APCNB et un établissement partenaire (par exemple une université) pour l'élaboration et l'accréditation de formations. À adapter et à faire valider juridiquement avant signature."),
    P("**Entre :** l'Association professionnelle de criminologie du Nouveau-Brunswick (« l'APCNB »),"),
    P("**et :** ______________________________________ (« l'Établissement »),"),
    P("ci-après collectivement désignées « les Parties »."),
    H2("1. Préambule"),
    P("L'APCNB établit des normes professionnelles et accrédite des formations donnant droit à des unités de formation continue (UFC). L'Établissement possède une expertise universitaire et professionnelle pertinente. Les Parties souhaitent collaborer au bénéfice des membres, des étudiants et du public."),
    H2("2. Objet"),
    P("Le présent protocole vise à encadrer l'élaboration, la prestation et l'accréditation de formations continues en criminologie, sous forme synchrone (en direct) et asynchrone (à votre rythme), dans les deux langues officielles."),
    H2("3. Objectifs"),
    UL([
      "Concevoir des formations rigoureuses, à jour et pertinentes au champ d'exercice du criminologue.",
      "Faire accréditer ces formations et leur attribuer des UFC.",
      "Favoriser le transfert des connaissances entre le milieu universitaire et la pratique.",
      "Contribuer à la protection du public au Nouveau-Brunswick."
    ]),
    H2("4. Rôles et responsabilités"),
    P("**L'APCNB s'engage à :**"),
    UL([
      "Évaluer et accréditer les formations selon sa Politique d'accréditation des formations.",
      "Attribuer les UFC et en tenir le registre.",
      "Promouvoir les formations auprès de ses membres.",
      "Veiller au respect de la déontologie et des limites du champ d'exercice."
    ]),
    P("**L'Établissement s'engage à :**"),
    UL([
      "Mettre à disposition des professeur·es ou des professionnel·les qualifié·es.",
      "Concevoir un contenu rigoureux et fondé sur des données probantes.",
      "Assurer la prestation des formations convenues.",
      "Collaborer à l'évaluation de la qualité."
    ]),
    H2("5. Accréditation et UFC"),
    P("L'accréditation et l'attribution des UFC se font conformément à la Politique d'accréditation des formations de l'APCNB. Une UFC équivaut à une heure d'activité reconnue."),
    H2("6. Propriété intellectuelle"),
    P("Chaque Partie conserve la propriété du contenu qu'elle crée. Les Parties s'accordent mutuellement une licence d'utilisation aux fins du présent partenariat. Toute coproduction fait l'objet d'une entente écrite distincte."),
    H2("7. Langues officielles"),
    P("Les Parties s'efforcent d'offrir les formations dans les deux langues officielles, selon les besoins des participants."),
    H2("8. Aspects financiers"),
    P("Les coûts, les frais d'inscription et tout partage de revenus sont précisés dans une annexe au présent protocole. Sauf indication contraire, chaque Partie assume ses propres frais."),
    H2("9. Confidentialité"),
    P("Les Parties protègent les renseignements confidentiels échangés et ne les utilisent qu'aux fins du présent partenariat."),
    H2("10. Durée, renouvellement et résiliation"),
    P("Le présent protocole prend effet à sa signature pour une durée de ______ (p. ex. trois ans), renouvelable par accord écrit. Chaque Partie peut y mettre fin sur préavis écrit de ______ jours."),
    H2("11. Nature de l'entente"),
    P("Le présent protocole exprime l'intention des Parties de collaborer. Sauf disposition contraire convenue par écrit, il ne crée pas d'obligation financière contraignante; les modalités détaillées font l'objet d'ententes ou d'annexes spécifiques."),
    H2("12. Modification et règlement des différends"),
    P("Toute modification doit être faite par écrit et signée par les Parties. Les différends sont d'abord réglés par discussion de bonne foi."),
    H2("13. Signatures"),
    P("Pour l'APCNB : ____________________________   Nom et fonction : ____________________   Date : ____________"),
    P("Pour l'Établissement : ____________________________   Nom et fonction : ____________________   Date : ____________"),
    CALLOUT("Modèle fourni à titre indicatif. Il doit être révisé et adapté par un conseiller juridique du Nouveau-Brunswick avant toute signature.")
  ]},
  en: { title: "Partnership Memorandum of Understanding (Template)", blocks: [
    LEAD("Template memorandum of understanding between the NBPAC and a partner institution (for example a university) to develop and accredit training. To be adapted and legally validated before signing."),
    P("**Between:** the New Brunswick Professional Association of Criminology (“the NBPAC”),"),
    P("**and:** ______________________________________ (“the Institution”),"),
    P("hereinafter collectively referred to as “the Parties”."),
    H2("1. Preamble"),
    P("The NBPAC sets professional standards and accredits training that earns continuing-education units (CEUs). The Institution has relevant academic and professional expertise. The Parties wish to collaborate for the benefit of members, students and the public."),
    H2("2. Purpose"),
    P("This memorandum governs the development, delivery and accreditation of continuing-education training in criminology, in synchronous (live) and asynchronous (self-paced) formats, in both official languages."),
    H2("3. Objectives"),
    UL([
      "Design rigorous, up-to-date training relevant to the criminologist's scope of practice.",
      "Have this training accredited and award CEUs.",
      "Foster knowledge transfer between academia and practice.",
      "Contribute to the protection of the public in New Brunswick."
    ]),
    H2("4. Roles and responsibilities"),
    P("**The NBPAC agrees to:**"),
    UL([
      "Review and accredit training under its Training-Accreditation Policy.",
      "Award CEUs and keep the register.",
      "Promote the training to its members.",
      "Ensure compliance with ethics and scope-of-practice limits."
    ]),
    P("**The Institution agrees to:**"),
    UL([
      "Provide qualified professors or professionals.",
      "Design rigorous, evidence-based content.",
      "Deliver the agreed training.",
      "Collaborate on quality evaluation."
    ]),
    H2("5. Accreditation and CEUs"),
    P("Accreditation and the awarding of CEUs follow the NBPAC Training-Accreditation Policy. One CEU equals one hour of recognized activity."),
    H2("6. Intellectual property"),
    P("Each Party retains ownership of the content it creates. The Parties grant each other a licence to use it for the purposes of this partnership. Any co-production is covered by a separate written agreement."),
    H2("7. Official languages"),
    P("The Parties strive to offer training in both official languages, according to participants' needs."),
    H2("8. Financial matters"),
    P("Costs, registration fees and any revenue sharing are set out in an appendix to this memorandum. Unless otherwise stated, each Party bears its own costs."),
    H2("9. Confidentiality"),
    P("The Parties protect confidential information exchanged and use it only for the purposes of this partnership."),
    H2("10. Term, renewal and termination"),
    P("This memorandum takes effect on signing for a term of ______ (e.g. three years), renewable by written agreement. Either Party may terminate it on ______ days' written notice."),
    H2("11. Nature of the agreement"),
    P("This memorandum expresses the Parties' intention to collaborate. Unless otherwise agreed in writing, it creates no binding financial obligation; detailed terms are set out in specific agreements or appendices."),
    H2("12. Amendment and dispute resolution"),
    P("Any amendment must be made in writing and signed by the Parties. Disputes are first resolved through good-faith discussion."),
    H2("13. Signatures"),
    P("For the NBPAC: ____________________________   Name and title: ____________________   Date: ____________"),
    P("For the Institution: ____________________________   Name and title: ____________________   Date: ____________"),
    CALLOUT("Template provided for guidance. It must be reviewed and adapted by New Brunswick legal counsel before any signing.")
  ]}
});

// 25 — Annexe financière au protocole d'entente / Financial appendix
DOCS.push({
  file: "25-Annexe-financiere-Financial-Appendix",
  headerRight: "Annexe financière (modèle) / Financial appendix (template)",
  fr: { title: "Annexe financière au protocole d'entente (modèle)", blocks: [
    LEAD("Annexe financière à joindre au protocole d'entente de partenariat. À compléter selon l'entente conclue entre les Parties."),
    P("Annexe au protocole d'entente entre l'APCNB et ______________________________ (« l'Établissement »)."),
    H2("1. Coûts de développement"),
    TABLE(["Poste", "Responsable", "Montant"], [
      ["Conception du contenu", "____________", "____________ $"],
      ["Production (enregistrement, plateforme)", "____________", "____________ $"],
      ["Révision et accréditation", "APCNB", "____________ $"]
    ]),
    H2("2. Frais d'inscription"),
    TABLE(["Type de participant", "Frais par formation"], [
      ["Membre de l'APCNB", "____________ $"],
      ["Membre étudiant", "____________ $"],
      ["Non-membre", "____________ $"]
    ]),
    H2("3. Partage des revenus"),
    P("Les revenus nets (frais perçus moins coûts directs) sont partagés comme suit :"),
    TABLE(["Partie", "Part"], [["APCNB", "______ %"], ["Établissement", "______ %"]]),
    H2("4. Modalités de paiement et facturation"),
    P("Les paiements sont effectués dans les 30 jours suivant la facturation. Une reddition de comptes est transmise après chaque formation."),
    H2("5. Dépenses et remboursements"),
    P("Les dépenses approuvées au préalable (déplacements, matériel) sont remboursées sur présentation de pièces justificatives."),
    H2("6. Taxes"),
    P("Les montants s'entendent hors taxes, sauf indication contraire; les taxes applicables sont ajoutées et facturées conformément à la loi."),
    H2("7. Durée et révision"),
    P("La présente annexe est révisée annuellement et peut être modifiée par accord écrit des Parties."),
    H2("8. Signatures"),
    P("Pour l'APCNB : ____________________________   Date : ____________"),
    P("Pour l'Établissement : ____________________________   Date : ____________"),
    CALLOUT("Modèle indicatif. Les montants et pourcentages sont à négocier; à faire valider par un conseiller juridique et comptable avant signature.")
  ]},
  en: { title: "Financial Appendix to the Memorandum of Understanding (Template)", blocks: [
    LEAD("Financial appendix to attach to the partnership memorandum of understanding. To be completed according to the agreement reached between the Parties."),
    P("Appendix to the memorandum of understanding between the NBPAC and ______________________________ (“the Institution”)."),
    H2("1. Development costs"),
    TABLE(["Item", "Responsible", "Amount"], [
      ["Content design", "____________", "$ ____________"],
      ["Production (recording, platform)", "____________", "$ ____________"],
      ["Review and accreditation", "NBPAC", "$ ____________"]
    ]),
    H2("2. Registration fees"),
    TABLE(["Participant type", "Fee per course"], [
      ["NBPAC member", "$ ____________"],
      ["Student member", "$ ____________"],
      ["Non-member", "$ ____________"]
    ]),
    H2("3. Revenue sharing"),
    P("Net revenue (fees collected less direct costs) is shared as follows:"),
    TABLE(["Party", "Share"], [["NBPAC", "______ %"], ["Institution", "______ %"]]),
    H2("4. Payment and invoicing terms"),
    P("Payments are made within 30 days of invoicing. An accounting is provided after each course."),
    H2("5. Expenses and reimbursements"),
    P("Pre-approved expenses (travel, materials) are reimbursed on presentation of supporting documents."),
    H2("6. Taxes"),
    P("Amounts are exclusive of taxes unless otherwise stated; applicable taxes are added and invoiced in accordance with the law."),
    H2("7. Term and review"),
    P("This appendix is reviewed annually and may be amended by written agreement of the Parties."),
    H2("8. Signatures"),
    P("For the NBPAC: ____________________________   Date: ____________"),
    P("For the Institution: ____________________________   Date: ____________"),
    CALLOUT("Indicative template. Amounts and percentages are to be negotiated; to be validated by legal and accounting counsel before signing.")
  ]}
});

// 28 — Sondage d'intérêt / Membership-interest survey
DOCS.push({
  file: "28-Sondage-interet-Membership-Interest-Survey",
  headerRight: "Sondage d'intérêt / Interest survey",
  fr: { title: "Sondage d'intérêt — future adhésion à l'APCNB", blocks: [
    LEAD("Ce court sondage vise à mieux connaître l'intérêt des étudiant·es et des professionnel·les envers une future adhésion à l'APCNB. Vos réponses sont confidentielles et nous aideront à bâtir des services pertinents."),
    H2("1. Votre profil"),
    UL(["☐  Étudiant·e", "☐  Professionnel·le en exercice", "☐  Diplômé·e en recherche d'emploi", "☐  Autre : ____________"]),
    P("Domaine d'études ou de pratique : ______________________________"),
    P("Région du Nouveau-Brunswick : ______________________________"),
    H2("2. Connaissez-vous l'APCNB?"),
    UL(["☐  Oui, bien", "☐  Un peu", "☐  Non, c'est la première fois"]),
    H2("3. Quel est votre intérêt à devenir membre?"),
    UL(["☐  Très intéressé·e", "☐  Intéressé·e", "☐  Neutre", "☐  Peu intéressé·e", "☐  Pas intéressé·e"]),
    H2("4. Quelle catégorie d'adhésion envisageriez-vous?"),
    UL(["☐  Membre régulier", "☐  Membre étudiant", "☐  Membre associé", "☐  Incertain·e"]),
    H2("5. Quels services seraient les plus utiles pour vous? (plusieurs choix possibles)"),
    UL(["☐  Bottin et reconnaissance professionnelle", "☐  Formation continue accréditée", "☐  Code de déontologie et encadrement", "☐  Réseautage et événements", "☐  Défense de la profession", "☐  Reconnaissance du titre", "☐  Offres d'emploi"]),
    H2("6. Quelle cotisation annuelle vous semblerait raisonnable?"),
    UL(["☐  Moins de 50 $", "☐  50 $ à 100 $", "☐  100 $ à 150 $", "☐  Plus de 150 $"]),
    H2("7. Quels sujets de formation vous intéressent?"),
    P("________________________________________________________________"),
    H2("8. Langue de service préférée"),
    UL(["☐  Français", "☐  Anglais", "☐  Les deux"]),
    H2("9. Commentaires"),
    P("________________________________________________________________"),
    H2("10. Souhaitez-vous être tenu·e informé·e? (facultatif)"),
    P("Nom : ____________________________   Courriel : ____________________________"),
    CALLOUT("Merci! Retournez ce sondage à info@apcnb-nbpac.ca ou répondez en ligne sur notre site (page « Sondage »).")
  ]},
  en: { title: "Interest survey — future NBPAC membership", blocks: [
    LEAD("This short survey helps us understand students' and professionals' interest in future NBPAC membership. Your answers are confidential and will help us build relevant services."),
    H2("1. Your profile"),
    UL(["☐  Student", "☐  Practising professional", "☐  Graduate seeking employment", "☐  Other: ____________"]),
    P("Field of study or practice: ______________________________"),
    P("Region of New Brunswick: ______________________________"),
    H2("2. Do you know the NBPAC?"),
    UL(["☐  Yes, well", "☐  A little", "☐  No, this is the first time"]),
    H2("3. How interested are you in becoming a member?"),
    UL(["☐  Very interested", "☐  Interested", "☐  Neutral", "☐  Slightly interested", "☐  Not interested"]),
    H2("4. Which membership category would you consider?"),
    UL(["☐  Regular member", "☐  Student member", "☐  Associate member", "☐  Unsure"]),
    H2("5. Which services would be most useful to you? (select all that apply)"),
    UL(["☐  Directory and professional recognition", "☐  Accredited continuing education", "☐  Code of ethics and oversight", "☐  Networking and events", "☐  Advocacy for the profession", "☐  Title recognition", "☐  Job postings"]),
    H2("6. What annual dues would seem reasonable to you?"),
    UL(["☐  Under $50", "☐  $50 to $100", "☐  $100 to $150", "☐  Over $150"]),
    H2("7. What training topics interest you?"),
    P("________________________________________________________________"),
    H2("8. Preferred language of service"),
    UL(["☐  French", "☐  English", "☐  Both"]),
    H2("9. Comments"),
    P("________________________________________________________________"),
    H2("10. Would you like to be kept informed? (optional)"),
    P("Name: ____________________________   Email: ____________________________"),
    CALLOUT("Thank you! Return this survey to info@apcnb-nbpac.ca or respond online on our website (“Survey” page).")
  ]}
});

// 29 — Registre des formations accréditées / Accredited-training register
DOCS.push({
  file: "29-Registre-formations-accreditees-Accredited-Training-Register",
  headerRight: "Registre des formations / Training register",
  fr: { title: "Registre des formations accréditées (modèle)", blocks: [
    LEAD("Modèle de registre des formations accréditées par l'APCNB. À tenir à jour par le comité de formation continue, conformément à la Politique d'accréditation des formations."),
    TABLE(["N°", "Titre de la formation", "Formateur / partenaire", "UFC", "Langue", "Accréditée / Échéance"], [
      ["A-001", "____________________", "____________________", "__", "FR/EN", "____ / ____"],
      ["A-002", "____________________", "____________________", "__", "FR", "____ / ____"],
      ["A-003", "____________________", "____________________", "__", "EN", "____ / ____"],
      ["____", "____________________", "____________________", "__", "____", "____ / ____"]
    ]),
    H2("Tenue du registre"),
    P("Chaque formation accréditée reçoit un numéro unique. Le registre indique le formateur ou le partenaire, le nombre d'UFC, la langue d'offre, la date d'accréditation et l'échéance (généralement trois ans). Le comité de formation continue révise le registre au moins une fois l'an."),
    CALLOUT("Les données ci-dessus sont fictives et illustrent la structure du registre.")
  ]},
  en: { title: "Accredited-training register (template)", blocks: [
    LEAD("Template register of training accredited by the NBPAC. To be kept up to date by the continuing-education committee, in accordance with the Training-Accreditation Policy."),
    TABLE(["No.", "Course title", "Instructor / partner", "CEUs", "Language", "Accredited / Expiry"], [
      ["A-001", "____________________", "____________________", "__", "FR/EN", "____ / ____"],
      ["A-002", "____________________", "____________________", "__", "FR", "____ / ____"],
      ["A-003", "____________________", "____________________", "__", "EN", "____ / ____"],
      ["____", "____________________", "____________________", "__", "____", "____ / ____"]
    ]),
    H2("Keeping the register"),
    P("Each accredited course receives a unique number. The register records the instructor or partner, the number of CEUs, the language of delivery, the accreditation date and the expiry (usually three years). The continuing-education committee reviews the register at least once a year."),
    CALLOUT("The data above is fictitious and illustrates the structure of the register.")
  ]}
});

// 30 — Sondage de consultation / Consultation survey
DOCS.push({
  file: "30-Sondage-consultation-Consultation-Survey",
  headerRight: "Sondage de consultation / Consultation survey",
  fr: { title: "Sondage de consultation — orientations de l'APCNB", blocks: [
    LEAD("Avant de finaliser certaines orientations, l'APCNB consulte les étudiant·es, diplômé·es et professionnel·les. Votre avis nous aidera à bâtir une association inclusive dès le départ. Vos réponses sont confidentielles."),
    H2("A. La définition du criminologue"),
    P("Plusieurs conceptions du criminologue existent. Indiquez celle qui correspond le mieux à votre vision (ou proposez la vôtre)."),
    P("1. Selon vous, le criminologue devrait surtout être défini par :"),
    UL([
      "☐  a) Le crime et la justice, approche non clinique (prévention, évaluation du risque, réinsertion, recherche; sans diagnostic ni psychothérapie).",
      "☐  b) Une approche plus large incluant l'évaluation psychosociale ou clinique (comme au Québec).",
      "☐  c) La recherche, l'analyse et les politiques de justice.",
      "☐  d) L'intervention de terrain auprès des personnes contrevenantes et victimes (réinsertion, prévention, médiation).",
      "☐  Autre (précisez) : ________________________________________"
    ]),
    P("2. Selon vous, cette définition est :"),
    UL(["☐  Trop étroite", "☐  Juste", "☐  Trop large"]),
    P("3. Commentaires ou ajouts à la définition : ____________________________________"),
    H2("B. Les exigences annuelles"),
    P("Nous proposons **20 unités de formation continue (UFC) par année**, dont au moins 3 en éthique."),
    P("4. L'exigence de 20 UFC vous semble :"),
    UL(["☐  Trop élevée", "☐  Raisonnable", "☐  Trop faible"]),
    P("5. Pour favoriser l'inclusion au démarrage, faudrait-il une période de transition ou des exigences réduites les premières années?"),
    UL(["☐  Oui", "☐  Non", "☐  Incertain·e"]),
    P("6. Des exemptions devraient-elles être prévues? (plusieurs choix)"),
    UL(["☐  Étudiants", "☐  Personnes retraitées", "☐  Congé parental ou maladie", "☐  Nouveaux diplômés", "☐  Autre : __________"]),
    P("7. Commentaires : ____________________________________"),
    H2("C. Les formations accréditées"),
    P("8. Quels formats préférez-vous?"),
    UL(["☐  Synchrone (en direct)", "☐  Asynchrone (à votre rythme)", "☐  Les deux"]),
    P("9. Quels sujets prioritaires? (plusieurs choix)"),
    UL(["☐  Éthique", "☐  Évaluation du risque", "☐  Victimologie", "☐  Justice réparatrice", "☐  Réinsertion sociale", "☐  Recherche et données", "☐  Autre : __________"]),
    P("10. Qui devrait pouvoir donner des formations accréditées?"),
    UL(["☐  Professeurs universitaires", "☐  Professionnels du milieu", "☐  Les deux"]),
    P("11. Quel coût par formation serait acceptable?"),
    UL(["☐  Gratuit pour les membres", "☐  Moins de 50 $", "☐  50 $ à 100 $", "☐  Plus de 100 $"]),
    P("12. Commentaires : ____________________________________"),
    H2("D. Inclusion et démarrage"),
    P("13. Comment rendre l'APCNB plus inclusive dès le départ? (plusieurs choix)"),
    UL(["☐  Cotisation réduite au démarrage", "☐  Reconnaissance de l'expérience (équivalences)", "☐  Accueil renforcé des étudiants", "☐  Services pleinement bilingues", "☐  Représentation régionale équilibrée", "☐  Autre : __________"]),
    P("14. Autres commentaires : ____________________________________"),
    H2("Pour vous joindre (facultatif)"),
    P("Nom : ____________________   Courriel : ____________________   Profil : ☐ Étudiant·e  ☐ Professionnel·le  ☐ Diplômé·e"),
    CALLOUT("Merci de votre contribution! Retournez ce sondage à info@apcnb-nbpac.ca ou répondez en ligne sur notre site (page « Consultation »).")
  ]},
  en: { title: "Consultation survey — NBPAC directions", blocks: [
    LEAD("Before finalizing certain directions, the NBPAC is consulting students, graduates and professionals. Your input will help us build an inclusive association from the start. Your answers are confidential."),
    H2("A. The definition of the criminologist"),
    P("Several conceptions of the criminologist exist. Indicate the one that best matches your view (or propose your own)."),
    P("1. In your view, the criminologist should mainly be defined by:"),
    UL([
      "☐  a) Crime and justice, a non-clinical approach (prevention, risk assessment, reintegration, research; no diagnosis or psychotherapy).",
      "☐  b) A broader approach including psychosocial or clinical assessment (as in Quebec).",
      "☐  c) Research, analysis and justice policy.",
      "☐  d) Field intervention with offenders and victims (reintegration, prevention, mediation).",
      "☐  Other (specify): ________________________________________"
    ]),
    P("2. In your view, this definition is:"),
    UL(["☐  Too narrow", "☐  Just right", "☐  Too broad"]),
    P("3. Comments or additions to the definition: ____________________________________"),
    H2("B. The annual requirements"),
    P("We propose **20 continuing-education units (CEUs) per year**, including at least 3 in ethics."),
    P("4. The 20-CEU requirement seems:"),
    UL(["☐  Too high", "☐  Reasonable", "☐  Too low"]),
    P("5. To foster inclusion at the start, should there be a transition period or reduced requirements in the first years?"),
    UL(["☐  Yes", "☐  No", "☐  Unsure"]),
    P("6. Should exemptions be provided? (select all)"),
    UL(["☐  Students", "☐  Retired persons", "☐  Parental leave or illness", "☐  New graduates", "☐  Other: __________"]),
    P("7. Comments: ____________________________________"),
    H2("C. Accredited training"),
    P("8. Which formats do you prefer?"),
    UL(["☐  Synchronous (live)", "☐  Asynchronous (self-paced)", "☐  Both"]),
    P("9. Which topics are priorities? (select all)"),
    UL(["☐  Ethics", "☐  Risk assessment", "☐  Victimology", "☐  Restorative justice", "☐  Social reintegration", "☐  Research and data", "☐  Other: __________"]),
    P("10. Who should be able to deliver accredited training?"),
    UL(["☐  University professors", "☐  Field professionals", "☐  Both"]),
    P("11. What cost per course would be acceptable?"),
    UL(["☐  Free for members", "☐  Under $50", "☐  $50 to $100", "☐  Over $100"]),
    P("12. Comments: ____________________________________"),
    H2("D. Inclusion and launch"),
    P("13. How can the NBPAC be more inclusive from the start? (select all)"),
    UL(["☐  Reduced dues at launch", "☐  Recognition of experience (equivalencies)", "☐  Stronger support for students", "☐  Fully bilingual services", "☐  Balanced regional representation", "☐  Other: __________"]),
    P("14. Other comments: ____________________________________"),
    H2("To contact you (optional)"),
    P("Name: ____________________   Email: ____________________   Profile: ☐ Student  ☐ Professional  ☐ Graduate"),
    CALLOUT("Thank you for your input! Return this survey to info@apcnb-nbpac.ca or respond online on our website (“Consultation” page).")
  ]}
});

// ============================================================
//  LETTRES  (format papier à en-tête, sans titre ni méta)
// ============================================================
const LETTERS = [
  {
    file: "15-Lettre-presentation-Cover-Letter",
    kind: "letterhead",
    bodyFr: "Le 2 juin 2026\n\nMadame la Ministre, Monsieur le Ministre\nMinistère de la Justice et de la Sécurité publique\nFredericton (Nouveau-Brunswick)\n\nObjet : Reconnaissance et protection du titre de criminologue au Nouveau-Brunswick\n\nMadame la Ministre, Monsieur le Ministre,\n\nAu nom de l'Association professionnelle de criminologie du Nouveau-Brunswick (APCNB), j'ai l'honneur de vous soumettre le mémoire ci-joint à l'appui de la reconnaissance et de la protection du titre de « criminologue » dans notre province.\n\nAu Nouveau-Brunswick, ce titre n'est protégé par aucune loi : toute personne peut s'en réclamer, sans formation reconnue ni encadrement déontologique. Or les criminologues interviennent auprès de personnes vulnérables et éclairent des décisions de justice importantes. La protection du public commande un encadrement clair.\n\nL'APCNB est déjà dotée de statuts, d'un code de déontologie, d'une norme de champ d'exercice et d'un mécanisme de traitement des plaintes. Notre démarche se veut complémentaire des professions déjà réglementées — travail social, psychologie et counseling thérapeutique — et non concurrente.\n\nNous serions honorés de vous rencontrer afin de présenter notre proposition et d'explorer les voies possibles, notamment un projet de loi de protection du titre. Nos services et notre encadrement sont offerts dans les deux langues officielles.\n\nJe vous prie d'agréer, Madame la Ministre, Monsieur le Ministre, l'expression de notre haute considération.\n\n\n______________________________\nLa présidence\nAssociation professionnelle de criminologie du Nouveau-Brunswick\ninfo@apcnb-nbpac.ca",
    bodyEn: "June 2, 2026\n\nThe Honourable Minister\nDepartment of Justice and Public Safety\nFredericton, New Brunswick\n\nRe: Recognizing and protecting the criminologist title in New Brunswick\n\nDear Minister,\n\nOn behalf of the New Brunswick Professional Association of Criminology (NBPAC), I am honoured to submit the attached brief in support of recognizing and protecting the title of “criminologist” in our province.\n\nIn New Brunswick, this title is protected by no law: anyone may claim it, with no recognized training or ethical oversight. Yet criminologists work with vulnerable people and inform important justice decisions. Protection of the public calls for clear oversight.\n\nThe NBPAC already has bylaws, a code of ethics, a scope-of-practice standard and a complaints-handling process. Our initiative is meant to complement the professions already regulated — social work, psychology and counselling therapy — not to compete with them.\n\nWe would be honoured to meet with you to present our proposal and explore possible paths, including a title-protection bill. Our services and oversight are offered in both official languages.\n\nPlease accept, Minister, the expression of our high regard.\n\n\n______________________________\nThe President\nNew Brunswick Professional Association of Criminology\ninfo@apcnb-nbpac.ca"
  },
  {
    file: "23-Lettre-partenariat-UdeM-Partnership-Letter",
    kind: "letterhead",
    bodyFr: "Le 2 juin 2026\n\nÀ la doyenne ou au doyen\nFaculté des arts et des sciences sociales\nUniversité de Moncton\nMoncton (Nouveau-Brunswick)\n\nObjet : Proposition de partenariat pour l'élaboration et l'accréditation de formations en criminologie\n\nMadame la Doyenne, Monsieur le Doyen,\n\nAu nom de l'Association professionnelle de criminologie du Nouveau-Brunswick (APCNB), je vous soumets une proposition de partenariat avec l'Université de Moncton portant sur l'élaboration et l'accréditation de formations continues en criminologie.\n\nL'APCNB regroupe les criminologues de la province et s'est dotée d'une politique de formation continue ainsi que d'une politique d'accréditation des formations. Nous souhaitons offrir à nos membres des formations synchrones (en direct) et asynchrones (à votre rythme), de grande qualité, données par des professeur·es et des professionnel·les du domaine.\n\nUn partenariat avec votre faculté permettrait de concevoir des contenus rigoureux et à jour, d'accréditer des cours donnant droit à des unités de formation continue, et de rapprocher le milieu universitaire et la pratique professionnelle. Les formations seraient offertes, dans la mesure du possible, dans les deux langues officielles.\n\nUne telle collaboration offrirait une visibilité accrue à vos programmes, faciliterait le transfert des connaissances et contribuerait à la protection du public au Nouveau-Brunswick.\n\nNous serions honorés de vous rencontrer afin de présenter cette proposition et d'en discuter les modalités.\n\nJe vous prie d'agréer, Madame la Doyenne, Monsieur le Doyen, l'expression de notre haute considération.\n\n\n______________________________\nLa présidence\nAssociation professionnelle de criminologie du Nouveau-Brunswick\ninfo@apcnb-nbpac.ca",
    bodyEn: "June 2, 2026\n\nTo the Dean\nFaculty of Arts and Social Sciences\nUniversité de Moncton\nMoncton, New Brunswick\n\nRe: Proposed partnership to develop and accredit criminology training\n\nDear Dean,\n\nOn behalf of the New Brunswick Professional Association of Criminology (NBPAC), I am writing to propose a partnership with the Université de Moncton to develop and accredit continuing-education training in criminology.\n\nThe NBPAC brings together the province's criminologists and has adopted a continuing-education policy and a training-accreditation policy. We wish to offer our members high-quality synchronous (live) and asynchronous (self-paced) training, delivered by professors and field professionals.\n\nA partnership with your faculty would allow us to design rigorous, up-to-date content, accredit courses that earn continuing-education units, and bring the academic community and professional practice closer together. Training would be offered, wherever possible, in both official languages.\n\nSuch a collaboration would give your programs greater visibility, facilitate knowledge transfer, and contribute to the protection of the public in New Brunswick.\n\nWe would be honoured to meet with you to present this proposal and discuss the details.\n\nPlease accept, Dean, the expression of our high regard.\n\n\n______________________________\nThe President\nNew Brunswick Professional Association of Criminology\ninfo@apcnb-nbpac.ca"
  },
  {
    file: "27-Lettre-professeur-collaboration-Faculty-Letter",
    kind: "letterhead",
    bodyFr: "Le 2 juin 2026\n\nProfesseure, Professeur [Nom]\nProgramme de criminologie\nUniversité de Moncton\nMoncton (Nouveau-Brunswick)\n\nObjet : Remerciements et collaboration à la mise sur pied de l'APCNB\n\nChère professeure, Cher professeur,\n\nAu nom de l'Association professionnelle de criminologie du Nouveau-Brunswick (APCNB), je tiens à vous remercier sincèrement de l'appui que vous nous apportez dans la finalisation de notre association. Votre expertise et vos conseils sont précieux à une étape déterminante.\n\nGrâce à votre accompagnement, nous avons pu faire progresser nos travaux : adoption des statuts et du code de déontologie, définition du champ d'exercice du criminologue, et préparation des démarches en vue de la reconnaissance du titre.\n\nNous aimerions continuer à compter sur votre soutien, notamment pour la révision de nos documents fondateurs, l'élaboration de formations accréditées et, si vous y consentez, votre participation à un comité consultatif. Votre regard universitaire renforcerait grandement la crédibilité et la rigueur de la démarche.\n\nJe demeure à votre disposition pour en discuter et vous transmettre les documents pertinents. Encore une fois, merci de votre engagement envers l'avancement de la criminologie au Nouveau-Brunswick.\n\nVeuillez agréer, chère professeure, cher professeur, l'expression de ma reconnaissance et de mes salutations distinguées.\n\n\n______________________________\nLa présidence\nAssociation professionnelle de criminologie du Nouveau-Brunswick\ninfo@apcnb-nbpac.ca",
    bodyEn: "June 2, 2026\n\nProfessor [Name]\nCriminology Program\nUniversité de Moncton\nMoncton, New Brunswick\n\nRe: Thanks and collaboration in establishing the NBPAC\n\nDear Professor,\n\nOn behalf of the New Brunswick Professional Association of Criminology (NBPAC), I sincerely thank you for the support you are providing in finalizing our association. Your expertise and advice are invaluable at this decisive stage.\n\nWith your guidance, we have advanced our work: adopting the bylaws and code of ethics, defining the criminologist's scope of practice, and preparing the steps toward title recognition.\n\nWe would like to continue to count on your support — in particular for reviewing our founding documents, developing accredited training and, if you are willing, taking part in an advisory committee. Your academic perspective would greatly strengthen the credibility and rigour of the initiative.\n\nI remain available to discuss this and to send you the relevant documents. Once again, thank you for your commitment to advancing criminology in New Brunswick.\n\nPlease accept, Professor, the expression of my gratitude and high regard.\n\n\n______________________________\nThe President\nNew Brunswick Professional Association of Criminology\ninfo@apcnb-nbpac.ca"
  },
  {
    file: "31-Lettre-diffusion-consultation-Outreach-Request-Letter",
    kind: "letterhead",
    bodyFr: "Le 2 juin 2026\n\nA l'attention de [la direction du programme de criminologie /\nle Bureau des anciens et anciennes / l'association etudiante]\nUniversite de Moncton\nMoncton (Nouveau-Brunswick)\n\nObjet : Demande de diffusion d'une consultation aupres des etudiant.es et des diplome.es\n\nMadame, Monsieur,\n\nDans le cadre de la mise sur pied de l'Association professionnelle de criminologie du Nouveau-Brunswick (APCNB), nous menons une courte consultation (environ cinq minutes) afin de recueillir l'avis des etudiant.es, des diplome.es et des professionnel.les sur des orientations cles : la definition du criminologue, les exigences de formation continue et les formations accreditees.\n\nNous souhaitons que l'association soit inclusive des le depart; la participation du milieu universitaire et des personnes diplomees est essentielle a sa legitimite.\n\nNous vous serions tres reconnaissants de bien vouloir relayer l'invitation ci-jointe, ainsi que le lien vers la consultation, a vos reseaux etudiants et a vos diplome.es, dans le respect de vos politiques de confidentialite. Nous ne demandons aucune liste de coordonnees : il vous suffirait de transmettre le message en notre nom, au moment qui vous convient.\n\nLa consultation est bilingue et accessible en ligne. Nous demeurons a votre disposition pour toute precision et pour vous fournir le texte d'invitation dans le format de votre choix.\n\nJe vous prie d'agreer, Madame, Monsieur, l'expression de notre haute consideration.\n\n\n______________________________\nLa presidence\nAssociation professionnelle de criminologie du Nouveau-Brunswick\ninfo@apcnb-nbpac.ca",
    bodyEn: "June 2, 2026\n\nTo the attention of [the Criminology Program direction /\nthe Alumni Office / the student association]\nUniversite de Moncton\nMoncton, New Brunswick\n\nRe: Request to circulate a consultation among students and graduates\n\nDear Sir or Madam,\n\nAs part of establishing the New Brunswick Professional Association of Criminology (NBPAC), we are conducting a short consultation (about five minutes) to gather the views of students, graduates and professionals on key directions: the definition of the criminologist, continuing-education requirements and accredited training.\n\nWe want the association to be inclusive from the outset; the participation of the academic community and of graduates is essential to its legitimacy.\n\nWe would be very grateful if you would kindly relay the attached invitation, together with the link to the consultation, to your student networks and graduates, in accordance with your privacy policies. We are not requesting any contact list: you would simply forward the message on our behalf, at a time that suits you.\n\nThe consultation is bilingual and available online. We remain at your disposal for any clarification and to provide the invitation text in the format of your choice.\n\nPlease accept, Sir or Madam, the expression of our high regard.\n\n\n______________________________\nThe President\nNew Brunswick Professional Association of Criminology\ninfo@apcnb-nbpac.ca"
  }
];

// ============================================================
//  CERTIFICAT  (mise en page spéciale, bilingue sur une page)
// ============================================================
const CERTIFICATE = {
  file: "11-Certificat-de-membre-Membership-Certificate",
  kind: "certificate",
  titleFr: "Certificat de membre",
  titleEn: "Certificate of Membership",
  attest: "Le présent certificat atteste que  /  This certifies that",
  nameLabel: "Nom du membre  /  Member's name",
  bodyFr: "est membre en règle de l'Association.",
  bodyEn: "is a member in good standing of the Association.",
  extraBlank: false,
  detail: "Catégorie / Category : ____________      Année / Year : 20____ – 20____",
  sigLeft: "Présidence / President",
  sigRight: "Secrétariat / Secretary"
};

const CERTIFICATE_COMPLETION = {
  file: "26-Certificat-reussite-Certificate-of-Completion",
  kind: "certificate",
  titleFr: "Certificat de réussite",
  titleEn: "Certificate of Completion",
  attest: "Le présent certificat atteste que  /  This certifies that",
  nameLabel: "Nom du participant  /  Participant's name",
  bodyFr: "a complété avec succès la formation suivante :",
  bodyEn: "has successfully completed the following training:",
  extraBlank: true,
  extraLabel: "Titre de la formation  /  Course title",
  detail: "Date : ____________      UFC / CEUs : ______      Langue / Language : ______",
  sigLeft: "Formateur / Instructor",
  sigRight: "Présidence / President"
};

const CERTIFICATES = [CERTIFICATE, CERTIFICATE_COMPLETION];

// ============================================================
//  PAPIER À EN-TÊTE  (letterhead)
// ============================================================
const LETTERHEAD = {
  file: "12-Papier-en-tete-Letterhead",
  kind: "letterhead",
  bodyFr: "[ Date ]\n\n[ Destinataire ]\n\nObjet : ________________________\n\nMadame, Monsieur,\n\n[ Corps de la lettre. Ce papier à en-tête est fourni pour la correspondance officielle de l'Association, dans les deux langues officielles. ]\n\nVeuillez agréer, Madame, Monsieur, l'expression de nos salutations distinguées.\n\n\n______________________________\n[ Nom et fonction ]",
  bodyEn: "[ Date ]\n\n[ Recipient ]\n\nRe: ________________________\n\nDear Sir or Madam,\n\n[ Body of the letter. This letterhead is provided for the Association's official correspondence, in both official languages. ]\n\nYours sincerely,\n\n\n______________________________\n[ Name and title ]"
};

module.exports = {
  NAME_FR, NAME_EN, ACRO, ADDR, EMAIL, SITE, COLORS,
  H2, P, LEAD, UL, OL, TABLE, CALLOUT, GAP, SIGN,
  DOCS, CERTIFICATE, CERTIFICATE_COMPLETION, CERTIFICATES, LETTERHEAD, LETTERS
};
