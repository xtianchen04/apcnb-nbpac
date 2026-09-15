/* ============================================================
   APCNB / NBPAC — Générateur de documents Word (.docx)
   Lancer : node generate-docs.js   (sortie : /telechargements/word)
   ============================================================ */
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel, BorderStyle,
  WidthType, ShadingType, PageNumber, PageBreak, TabStopType, PageOrientation, VerticalAlign
} = require("docx");
const C = require("./lib-content");

const OUT = path.join(__dirname, "telechargements", "word");
fs.mkdirSync(OUT, { recursive: true });
const LOGO = fs.readFileSync(path.join(__dirname, "assets", "img", "logo.png"));
const CONTENT_WIDTH = 9360;
const { navy, gold, grey, line } = C.COLORS;

// ---------- inline **bold** / _italic_ ----------
function inlineRuns(text, base = {}) {
  const runs = [];
  const re = /(\*\*[^*]+\*\*|(?<!_)_[^_]+_(?!_))/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) runs.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const tok = m[0];
    if (tok.startsWith("**")) runs.push(new TextRun({ text: tok.slice(2, -2), bold: true, ...base }));
    else runs.push(new TextRun({ text: tok.slice(1, -1), italics: true, ...base }));
    last = re.lastIndex;
  }
  if (last < text.length) runs.push(new TextRun({ text: text.slice(last), ...base }));
  return runs.length ? runs : [new TextRun({ text, ...base })];
}

function renderBlock(b) {
  switch (b.type) {
    case "h2":
      return [new Paragraph({ heading: HeadingLevel.HEADING_2, children: inlineRuns(b.text) })];
    case "lead":
      return [new Paragraph({ spacing: { after: 200 },
        children: [new TextRun({ text: b.text, italics: true, color: grey, size: 24 })] })];
    case "p":
      return [new Paragraph({ spacing: { after: 140 }, children: inlineRuns(b.text) })];
    case "gap":
      return [new Paragraph({ spacing: { after: 120 }, children: [new TextRun(" ")] })];
    case "ul":
      return b.items.map((it) => new Paragraph({
        numbering: { reference: "bullets", level: 0 }, spacing: { after: 60 }, children: inlineRuns(it) }));
    case "ol":
      return b.items.map((it) => new Paragraph({
        numbering: { reference: "nums-" + b._id, level: 0 }, spacing: { after: 60 }, children: inlineRuns(it) }));
    case "sign":
      return [new Paragraph({ spacing: { before: 360 },
        tabStops: [{ type: TabStopType.LEFT, position: 5200 }],
        children: [
          new TextRun({ text: "______________________________", color: grey }),
          new TextRun({ text: "\t______________________________", color: grey })
        ] }),
        new Paragraph({ tabStops: [{ type: TabStopType.LEFT, position: 5200 }],
        children: [
          new TextRun({ text: b.a, color: grey, size: 18 }),
          new TextRun({ text: "\t" + b.b, color: grey, size: 18 })
        ] })];
    case "callout":
      return [new Paragraph({ spacing: { before: 120, after: 160 },
        shading: { fill: "F4EEDD", type: ShadingType.CLEAR },
        border: { left: { style: BorderStyle.SINGLE, size: 18, color: gold, space: 8 } },
        children: inlineRuns(b.text) })];
    case "table": {
      const cols = b.header.length;
      const colW = Math.floor(CONTENT_WIDTH / cols);
      const widths = Array(cols).fill(colW); widths[cols - 1] = CONTENT_WIDTH - colW * (cols - 1);
      const border = { style: BorderStyle.SINGLE, size: 1, color: line };
      const borders = { top: border, bottom: border, left: border, right: border };
      const head = new TableRow({ tableHeader: true, children: b.header.map((h, i) => new TableCell({
        borders, width: { size: widths[i], type: WidthType.DXA },
        shading: { fill: navy, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, color: "FFFFFF" })] })] })) });
      const rows = b.rows.map((r, ri) => new TableRow({ children: r.map((c, i) => new TableCell({
        borders, width: { size: widths[i], type: WidthType.DXA },
        shading: { fill: ri % 2 ? "FFFFFF" : "F7F4EC", type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ children: inlineRuns(c) })] })) }));
      return [new Table({ width: { size: CONTENT_WIDTH, type: WidthType.DXA }, columnWidths: widths, rows: [head, ...rows] }),
        new Paragraph({ spacing: { after: 120 }, children: [] })];
    }
    default: return [];
  }
}

function titleBlock(kicker, title) {
  return [
    new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: kicker.toUpperCase(), bold: true, color: gold, size: 18 })] }),
    new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(title)] }),
    new Paragraph({ spacing: { after: 40 }, border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: gold, space: 6 } }, children: [] }),
  ];
}
function metaBlock(orgLabel, org, dateLabel, dateVal) {
  return [
    new Paragraph({ spacing: { before: 60, after: 20 }, children: [
      new TextRun({ text: orgLabel + " : ", bold: true, color: navy }), new TextRun({ text: org, color: grey }) ] }),
    new Paragraph({ spacing: { after: 220 }, children: [
      new TextRun({ text: "Version : ", bold: true, color: navy }), new TextRun({ text: "1.0    ", color: grey }),
      new TextRun({ text: dateLabel + " : ", bold: true, color: navy }), new TextRun({ text: dateVal, color: grey }) ] }),
  ];
}

function makeHeader(right) {
  return new Header({ children: [new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }],
    spacing: { after: 60 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: line, space: 6 } },
    children: [
      new ImageRun({ type: "png", data: LOGO, transformation: { width: 30, height: 30 },
        altText: { title: "APCNB", description: "Sceau", name: "logo" } }),
      new TextRun({ text: "  " + C.ACRO, bold: true, color: navy, size: 18 }),
      new TextRun({ text: "\t" + right, color: grey, size: 16 })
    ] })] });
}
function makeFooter() {
  return new Footer({ children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    border: { top: { style: BorderStyle.SINGLE, size: 6, color: line, space: 6 } },
    children: [
      new TextRun({ text: C.ADDR + "   ·   " + C.EMAIL + "   ·   ", color: grey, size: 15 }),
      new TextRun({ children: [PageNumber.CURRENT], color: grey, size: 15 }),
      new TextRun({ text: "/", color: grey, size: 15 }),
      new TextRun({ children: [PageNumber.TOTAL_PAGES], color: grey, size: 15 })
    ] })] });
}

const STYLES = {
  default: { document: { run: { font: "Calibri", size: 22, color: C.COLORS.ink } } },
  paragraphStyles: [
    { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { size: 34, bold: true, color: navy, font: "Georgia" },
      paragraph: { spacing: { before: 120, after: 80 }, outlineLevel: 0 } },
    { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { size: 26, bold: true, color: navy, font: "Georgia" },
      paragraph: { spacing: { before: 240, after: 100 }, outlineLevel: 1 } },
  ]
};

function numberingConfig(olCount) {
  return { config: [
    { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 560, hanging: 280 } } } }] },
    ...Array.from({ length: olCount }, (_, i) => ({ reference: "nums-" + (i + 1),
      levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 560, hanging: 280 } } } }] }))
  ] };
}

const PAGE_PORTRAIT = { size: { width: 12240, height: 15840 },
  margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } };

// ---------- standard document (mode: 'both' | 'fr' | 'en') ----------
function buildStandard(spec, mode) {
  mode = mode || "both";
  let olCount = 0;
  const tag = (blocks) => blocks.forEach((b) => { if (b.type === "ol") b._id = ++olCount; });
  if (mode !== "en") tag(spec.fr.blocks);
  if (mode !== "fr") tag(spec.en.blocks);

  const children = [];
  if (mode !== "en") {
    children.push(
      ...titleBlock("Français", spec.fr.title),
      ...metaBlock("Organisme", C.NAME_FR + " (APCNB)", "Adopté le", "2 juin 2026"),
      ...spec.fr.blocks.flatMap(renderBlock));
  }
  if (mode === "both") children.push(new Paragraph({ children: [new PageBreak()] }));
  if (mode !== "fr") {
    children.push(
      ...titleBlock("English", spec.en.title),
      ...metaBlock("Organization", C.NAME_EN + " (NBPAC)", "Adopted", "June 2, 2026"),
      ...spec.en.blocks.flatMap(renderBlock));
  }

  return new Document({
    creator: "APCNB / NBPAC", title: spec.fr.title + " / " + spec.en.title,
    styles: STYLES, numbering: numberingConfig(olCount),
    sections: [{ properties: { page: PAGE_PORTRAIT },
      headers: { default: makeHeader(spec.headerRight) }, footers: { default: makeFooter() }, children }]
  });
}

// ---------- certificate (landscape, ornate) ----------
function buildCertificate(spec) {
  const centered = (children, sp) => new Paragraph({ alignment: AlignmentType.CENTER, spacing: sp || {}, children });
  const ex = spec.extraBlank;
  const children = [
    centered([new ImageRun({ type: "png", data: LOGO, transformation: { width: 90, height: 90 },
      altText: { title: "APCNB", description: "Sceau", name: "logo" } })], { after: 110 }),
    centered([new TextRun({ text: C.NAME_FR, color: navy, size: 20, bold: true })], { after: 20 }),
    centered([new TextRun({ text: C.NAME_EN, color: grey, size: 18, italics: true })], { after: 200 }),
    centered([new TextRun({ text: spec.titleFr.toUpperCase(), color: gold, size: 40, bold: true, font: "Georgia" })], { after: 10 }),
    centered([new TextRun({ text: spec.titleEn.toUpperCase(), color: gold, size: 24, font: "Georgia" })], { after: 240 }),
    centered([new TextRun({ text: spec.attest, color: C.COLORS.ink, size: 20 })], { after: 110 }),
    centered([new TextRun({ text: "______________________________________", color: navy, size: 28 })], { after: 6 }),
    centered([new TextRun({ text: spec.nameLabel, color: grey, size: 16 })], { after: ex ? 110 : 190 }),
    centered([new TextRun({ text: spec.bodyFr, color: C.COLORS.ink, size: 20 })], { after: 6 }),
    centered([new TextRun({ text: spec.bodyEn, color: C.COLORS.ink, size: 20, italics: true })], { after: ex ? 70 : 150 }),
  ];
  if (ex) children.push(
    centered([new TextRun({ text: "______________________________________", color: navy, size: 26 })], { after: 6 }),
    centered([new TextRun({ text: spec.extraLabel, color: grey, size: 16 })], { after: 110 }));
  children.push(
    centered([new TextRun({ text: spec.detail, color: C.COLORS.ink, size: 18 })], { after: ex ? 240 : 340 }),
    new Paragraph({ alignment: AlignmentType.CENTER, tabStops: [{ type: TabStopType.LEFT, position: 3000 }, { type: TabStopType.LEFT, position: 8200 }],
      children: [
        new TextRun({ text: "______________________", color: grey }),
        new TextRun({ text: "\t\t______________________", color: grey })
      ] }),
    new Paragraph({ alignment: AlignmentType.CENTER, tabStops: [{ type: TabStopType.LEFT, position: 3000 }, { type: TabStopType.LEFT, position: 8200 }],
      children: [
        new TextRun({ text: spec.sigLeft, color: grey, size: 16 }),
        new TextRun({ text: "\t\t" + spec.sigRight, color: grey, size: 16 })
      ] }));
  // Ornate page border
  const pageBorder = { display: "allPages", offsetFrom: "page",
    pageBorders: { },
    top: { style: BorderStyle.DOUBLE, size: 12, color: gold, space: 24 },
    bottom: { style: BorderStyle.DOUBLE, size: 12, color: gold, space: 24 },
    left: { style: BorderStyle.DOUBLE, size: 12, color: gold, space: 24 },
    right: { style: BorderStyle.DOUBLE, size: 12, color: gold, space: 24 } };
  return new Document({ creator: "APCNB / NBPAC", title: "Certificat de membre / Certificate of Membership", styles: STYLES,
    sections: [{ properties: {
      page: { size: { width: 12240, height: 15840, orientation: PageOrientation.LANDSCAPE },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }, borders: pageBorder } },
      children }] });
}

// ---------- letterhead (mode: 'both' | 'fr' | 'en') ----------
function buildLetterhead(spec, mode) {
  mode = mode || "both";
  const bodyParas = (txt) => txt.split("\n").map((l) =>
    new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: l || " ", size: 22, color: C.COLORS.ink })] }));
  const lhHeader = new Header({ children: [
    new Paragraph({ tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }], children: [
      new ImageRun({ type: "png", data: LOGO, transformation: { width: 64, height: 64 },
        altText: { title: "APCNB", description: "Sceau", name: "logo" } }),
      new TextRun({ text: "\t" + C.NAME_FR, bold: true, color: navy, size: 20 }) ] }),
    new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { after: 40 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 10, color: gold, space: 8 } },
      children: [new TextRun({ text: C.NAME_EN, italics: true, color: grey, size: 18 })] }),
  ] });
  const lhFooter = new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER,
    border: { top: { style: BorderStyle.SINGLE, size: 6, color: line, space: 6 } },
    children: [new TextRun({ text: C.ADDR + "   ·   " + C.EMAIL + "   ·   " + C.SITE, color: grey, size: 15 })] })] });

  const children = [new Paragraph({ spacing: { before: 200 }, children: [] })];
  if (mode !== "en") children.push(...bodyParas(spec.bodyFr));
  if (mode === "both") children.push(new Paragraph({ children: [new PageBreak()] }));
  if (mode !== "fr") children.push(...bodyParas(spec.bodyEn));
  return new Document({ creator: "APCNB / NBPAC", title: "Papier à en-tête / Letterhead", styles: STYLES,
    sections: [{ properties: { page: PAGE_PORTRAIT }, headers: { default: lhHeader }, footers: { default: lhFooter }, children }] });
}

// ---------- run ----------
async function generateSet(mode, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  for (const spec of C.DOCS) {
    fs.writeFileSync(path.join(outDir, spec.file + ".docx"), await Packer.toBuffer(buildStandard(spec, mode)));
  }
  // Certificates stay bilingual (decorative, FR/EN side by side)
  for (const cert of C.CERTIFICATES) {
    fs.writeFileSync(path.join(outDir, cert.file + ".docx"), await Packer.toBuffer(buildCertificate(cert)));
  }
  fs.writeFileSync(path.join(outDir, C.LETTERHEAD.file + ".docx"), await Packer.toBuffer(buildLetterhead(C.LETTERHEAD, mode)));
  for (const letter of (C.LETTERS || [])) {
    fs.writeFileSync(path.join(outDir, letter.file + ".docx"), await Packer.toBuffer(buildLetterhead(letter, mode)));
  }
}

(async () => {
  await generateSet("both", OUT);
  console.log("✓ Bilingue → telechargements/word");
  await generateSet("fr", path.join(__dirname, "telechargements", "word-fr"));
  console.log("✓ Français → telechargements/word-fr");
  await generateSet("en", path.join(__dirname, "telechargements", "word-en"));
  console.log("✓ English → telechargements/word-en");
  console.log("\nTerminé — Word (bilingue + FR + EN)");
})();
