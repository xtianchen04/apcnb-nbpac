/* ============================================================
   APCNB / NBPAC — Générateur de documents PDF
   Lancer : node generate-pdf.js   (sortie : /telechargements/pdf)
   ============================================================ */
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");
const C = require("./lib-content");

const OUT = path.join(__dirname, "telechargements", "pdf");
fs.mkdirSync(OUT, { recursive: true });
const LOGO = path.join(__dirname, "assets", "img", "logo.png");

const navy = "#15263F", gold = "#B08A3E", grey = "#5B6675", line = "#D8D5CC", ink = "#1B2330";
const PW = 612, PH = 792;
const M = { top: 86, bottom: 66, left: 64, right: 64 };
const CW = PW - M.left - M.right;
const maxY = PH - M.bottom;

// pdfkit core fonts (WinAnsi) lack U+2610 ☐ — render it as a plain ASCII box
const sani = (t) => t.replace(/☐/g, "[  ]");
const strip = (t) => sani(t).replace(/\*\*([^*]+)\*\*/g, "$1").replace(/(?<!_)_([^_]+)_(?!_)/g, "$1");
function parseRuns(text) {
  text = sani(text);
  const runs = []; const re = /(\*\*[^*]+\*\*|(?<!_)_[^_]+_(?!_))/g; let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) runs.push({ t: text.slice(last, m.index) });
    const tk = m[0];
    if (tk.startsWith("**")) runs.push({ t: tk.slice(2, -2), bold: true });
    else runs.push({ t: tk.slice(1, -1), italic: true });
    last = re.lastIndex;
  }
  if (last < text.length) runs.push({ t: text.slice(last) });
  return runs.length ? runs : [{ t: text }];
}

function newDoc() {
  return new PDFDocument({ size: "LETTER", bufferPages: true, autoFirstPage: false,
    margins: { top: M.top, bottom: M.bottom, left: M.left, right: M.right } });
}
function finish(doc, file, outDir) {
  return new Promise((res) => {
    const s = fs.createWriteStream(path.join(outDir || OUT, file));
    doc.pipe(s); s.on("finish", res); doc.end();
  });
}

// ---------- standard document machinery ----------
function makeRenderer(doc) {
  function ensure(h) { if (doc.y + h > maxY) doc.addPage(); }
  function fontFor(base, r) {
    if (base === "Times") return r.bold ? "Times-Bold" : r.italic ? "Times-Italic" : "Times-Roman";
    return r.bold ? "Helvetica-Bold" : r.italic ? "Helvetica-Oblique" : "Helvetica";
  }
  function inline(text, x, y, w, { size, color, base = "Helvetica", align = "left" }) {
    const runs = parseRuns(text); doc.fontSize(size);
    runs.forEach((r, i) => {
      doc.font(fontFor(base, r)).fillColor(color);
      const opts = { width: w, align, continued: i < runs.length - 1 };
      if (i === 0) doc.text(r.t, x, y, opts); else doc.text(r.t, opts);
    });
  }
  function para(text, o = {}) {
    const size = o.size || 10.5, gap = o.gap == null ? 7 : o.gap, indent = o.indent || 0;
    const w = CW - indent;
    doc.font(o.base === "Times" ? "Times-Roman" : "Helvetica").fontSize(size);
    const h = doc.heightOfString(strip(text), { width: w, align: o.align || "left" });
    ensure(h);
    inline(text, M.left + indent, doc.y, w, { size, color: o.color || ink, base: o.base || "Helvetica", align: o.align || "left" });
    doc.y += gap;
  }
  function h2(text) {
    ensure(34); doc.y += 8;
    doc.font("Times-Bold").fontSize(13).fillColor(navy).text(text, M.left, doc.y, { width: CW });
    doc.y += 4;
  }
  function bullet(text, ordered, idx) {
    const marker = ordered ? idx + "." : "•";
    const mx = M.left, tx = M.left + 18, w = CW - 18;
    doc.font("Helvetica").fontSize(10.5);
    const h = doc.heightOfString(strip(text), { width: w });
    ensure(h);
    const y = doc.y;
    doc.fillColor(ordered ? navy : gold).font(ordered ? "Helvetica-Bold" : "Helvetica").fontSize(10.5)
      .text(marker, mx, y, { width: 16, align: ordered ? "right" : "left", lineBreak: false });
    inline(text, tx, y, w, { size: 10.5, color: ink, base: "Helvetica" });
    doc.y += 3;
  }
  function table(header, rows) {
    const cols = header.length;
    const widths = cols === 3 ? [CW * 0.26, CW * 0.49, CW * 0.25]
      : cols === 2 ? [CW * 0.62, CW * 0.38]
      : Array(cols).fill(CW / cols);
    const drawRow = (cells, isHead, ri) => {
      const padX = 6, padY = 5;
      const font = isHead ? "Helvetica-Bold" : "Helvetica"; doc.font(font).fontSize(9.3);
      let hgt = 0;
      cells.forEach((c, i) => { hgt = Math.max(hgt, doc.heightOfString(strip(c), { width: widths[i] - 2 * padX })); });
      hgt += 2 * padY; ensure(hgt);
      let x = M.left; const y = doc.y;
      cells.forEach((c, i) => {
        const fill = isHead ? navy : (ri % 2 ? "#FFFFFF" : "#F7F4EC");
        doc.rect(x, y, widths[i], hgt).fill(fill);
        doc.rect(x, y, widths[i], hgt).lineWidth(0.5).stroke(line);
        inline(c, x + padX, y + padY, widths[i] - 2 * padX,
          { size: 9.3, color: isHead ? "#FFFFFF" : ink, base: "Helvetica" });
        x += widths[i];
      });
      doc.y = y + hgt;
    };
    drawRow(header, true, 0);
    rows.forEach((r, i) => drawRow(r, false, i));
    doc.y += 8;
  }
  function callout(text) {
    const padX = 12, padY = 9, w = CW - 2 * padX;
    doc.font("Helvetica").fontSize(10);
    const h = doc.heightOfString(strip(text), { width: w }) + 2 * padY;
    ensure(h + 10); doc.y += 4; const y = doc.y, x = M.left;
    doc.rect(x, y, CW, h).fill("#F4EEDD");
    doc.rect(x, y, 3.5, h).fill(gold);
    inline(text, x + padX, y + padY, w, { size: 10, color: ink, base: "Helvetica" });
    doc.y = y + h + 10;
  }
  function sign(a, b) {
    ensure(50); doc.y += 24; const y = doc.y, half = CW / 2;
    doc.fillColor(grey).font("Helvetica").fontSize(10);
    doc.text("______________________________", M.left, y, { width: half, lineBreak: false });
    doc.text("______________________________", M.left + half, y, { width: half, lineBreak: false });
    doc.fontSize(8.5);
    doc.text(a, M.left, y + 14, { width: half, lineBreak: false });
    doc.text(b, M.left + half, y + 14, { width: half, lineBreak: false });
    doc.y = y + 26;
  }
  function block(b) {
    switch (b.type) {
      case "h2": return h2(b.text);
      case "p": return para(b.text);
      case "lead": return para(b.text, { size: 11.5, color: grey, base: "Times" });
      case "gap": doc.y += 10; return;
      case "ul": return b.items.forEach((it) => bullet(it, false));
      case "ol": return b.items.forEach((it, i) => bullet(it, true, i + 1));
      case "table": return table(b.header, b.rows);
      case "callout": return callout(b.text);
      case "sign": return sign(b.a, b.b);
    }
  }
  function titleBlock(kicker, title) {
    ensure(70);
    doc.font("Helvetica-Bold").fontSize(8.5).fillColor(gold)
      .text(kicker.toUpperCase(), M.left, doc.y, { characterSpacing: 1.5 });
    doc.y += 2;
    doc.font("Times-Bold").fontSize(23).fillColor(navy).text(title, M.left, doc.y, { width: CW });
    doc.y += 6;
    const y = doc.y; doc.moveTo(M.left, y).lineTo(M.left + CW, y).lineWidth(2).stroke(gold);
    doc.y += 10;
  }
  function metaBlock(orgLabel, org, dateLabel, dateVal) {
    doc.font("Helvetica").fontSize(9).fillColor(grey);
    doc.font("Helvetica-Bold").fillColor(navy).text(orgLabel + " : ", { continued: true })
      .font("Helvetica").fillColor(grey).text(org);
    doc.font("Helvetica-Bold").fillColor(navy).text("Version : ", { continued: true })
      .font("Helvetica").fillColor(grey).text("1.0     ", { continued: true })
      .font("Helvetica-Bold").fillColor(navy).text(dateLabel + " : ", { continued: true })
      .font("Helvetica").fillColor(grey).text(dateVal);
    doc.y += 12;
  }
  return { block, titleBlock, metaBlock };
}

function drawHeader(doc, rightText) {
  const y = 34;
  try { doc.image(LOGO, M.left, y - 2, { width: 26, height: 26 }); } catch (e) {}
  doc.font("Helvetica-Bold").fontSize(9).fillColor(navy)
    .text(C.ACRO, M.left + 32, y + 6, { lineBreak: false });
  doc.font("Helvetica").fontSize(8).fillColor(grey)
    .text(rightText, M.left, y + 7, { width: CW, align: "right", lineBreak: false });
  doc.moveTo(M.left, y + 28).lineTo(PW - M.right, y + 28).lineWidth(0.7).stroke(line);
  doc.x = M.left; doc.y = M.top; // reset cursor below the header for content
}
// Draw text in the bottom-margin region without triggering pdfkit auto-pagination
function inFooterRegion(doc, fn) {
  const b = doc.page.margins.bottom; doc.page.margins.bottom = 0;
  try { fn(); } finally { doc.page.margins.bottom = b; }
}
function drawFooter(doc, n, total) {
  const y = PH - 50;
  doc.moveTo(M.left, y).lineTo(PW - M.right, y).lineWidth(0.7).stroke(line);
  inFooterRegion(doc, () => {
    doc.font("Helvetica").fontSize(7.8).fillColor(grey)
      .text(C.ADDR + "   ·   " + C.EMAIL, M.left, y + 6, { width: CW, align: "left", lineBreak: false });
    doc.text("Page " + n + " / " + total, M.left, y + 6, { width: CW, align: "right", lineBreak: false });
  });
}

function buildStandardPDF(spec, mode, outDir) {
  mode = mode || "both";
  const doc = newDoc();
  doc.on("pageAdded", () => drawHeader(doc, spec.headerRight));
  const R = makeRenderer(doc);
  doc.addPage();
  if (mode !== "en") {
    R.titleBlock("Français", spec.fr.title);
    R.metaBlock("Organisme", C.NAME_FR + " (APCNB)", "Adopté le", "2 juin 2026");
    spec.fr.blocks.forEach(R.block);
  }
  if (mode !== "fr") {
    if (mode === "both") doc.addPage();
    R.titleBlock("English", spec.en.title);
    R.metaBlock("Organization", C.NAME_EN + " (NBPAC)", "Adopted", "June 2, 2026");
    spec.en.blocks.forEach(R.block);
  }
  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i++) { doc.switchToPage(range.start + i); drawFooter(doc, i + 1, range.count); }
  return finish(doc, spec.file + ".pdf", outDir);
}

// ---------- certificate (landscape, ornate) ----------
function buildCertificatePDF(spec, outDir) {
  const doc = new PDFDocument({ size: "LETTER", layout: "landscape", margins: { top: 40, bottom: 40, left: 40, right: 40 } });
  const W = PH, H = PW; // landscape
  // ornate double border
  doc.rect(28, 28, W - 56, H - 56).lineWidth(3).stroke(gold);
  doc.rect(36, 36, W - 72, H - 72).lineWidth(1).stroke(navy);
  try { doc.image(LOGO, W / 2 - 38, 56, { width: 76, height: 76 }); } catch (e) {}
  const cx = 40, cw = W - 80;
  doc.font("Times-Bold").fontSize(15).fillColor(navy).text(C.NAME_FR, cx, 142, { width: cw, align: "center" });
  doc.font("Times-Italic").fontSize(12).fillColor(grey).text(C.NAME_EN, cx, doc.y + 1, { width: cw, align: "center" });
  doc.font("Times-Bold").fontSize(30).fillColor(gold).text(spec.titleFr.toUpperCase(), cx, doc.y + 14, { width: cw, align: "center" });
  doc.font("Times-Bold").fontSize(17).fillColor(gold).text(spec.titleEn.toUpperCase(), cx, doc.y + 2, { width: cw, align: "center" });
  const ex = spec.extraBlank;
  doc.font("Helvetica").fontSize(11).fillColor(ink).text(spec.attest, cx, doc.y + (ex ? 14 : 18), { width: cw, align: "center" });
  doc.font("Times-Italic").fontSize(17).fillColor(navy).text("______________________________________", cx, doc.y + 9, { width: cw, align: "center" });
  doc.font("Helvetica").fontSize(9).fillColor(grey).text(spec.nameLabel, cx, doc.y + 2, { width: cw, align: "center" });
  doc.font("Helvetica").fontSize(11).fillColor(ink).text(spec.bodyFr, cx, doc.y + (ex ? 10 : 12), { width: cw, align: "center" });
  doc.font("Helvetica-Oblique").fontSize(11).fillColor(ink).text(spec.bodyEn, cx, doc.y + 1, { width: cw, align: "center" });
  if (ex) {
    doc.font("Times-Italic").fontSize(15).fillColor(navy).text("______________________________________", cx, doc.y + 8, { width: cw, align: "center" });
    doc.font("Helvetica").fontSize(9).fillColor(grey).text(spec.extraLabel, cx, doc.y + 2, { width: cw, align: "center" });
  }
  doc.font("Helvetica").fontSize(10).fillColor(ink).text(spec.detail, cx, doc.y + 12, { width: cw, align: "center" });
  // signatures
  const sy = H - 92;
  doc.fillColor(grey).font("Helvetica").fontSize(10);
  doc.text("__________________________", 110, sy, { lineBreak: false });
  doc.text("__________________________", W - 110 - 150, sy, { width: 150, align: "right", lineBreak: false });
  doc.fontSize(8.5);
  doc.text(spec.sigLeft, 110, sy + 14, { lineBreak: false });
  doc.text(spec.sigRight, W - 110 - 150, sy + 14, { width: 150, align: "right", lineBreak: false });
  return finish(doc, spec.file + ".pdf", outDir);
}

// ---------- letterhead ----------
function buildLetterheadPDF(spec, mode, outDir) {
  mode = mode || "both";
  const doc = newDoc();
  const BODY_TOP = 112, BODY_BOTTOM = PH - 66;
  const drawLH = () => {
    try { doc.image(LOGO, M.left, 30, { width: 56, height: 56 }); } catch (e) {}
    doc.font("Times-Bold").fontSize(13).fillColor(navy).text(C.NAME_FR, M.left + 68, 36, { width: CW - 68, lineBreak: true });
    doc.font("Times-Italic").fontSize(10).fillColor(grey).text(C.NAME_EN, M.left + 68, doc.y, { width: CW - 68, lineBreak: true });
    doc.moveTo(M.left, 96).lineTo(PW - M.right, 96).lineWidth(1.4).stroke(gold);
    const fy = PH - 48;
    doc.moveTo(M.left, fy).lineTo(PW - M.right, fy).lineWidth(0.7).stroke(line);
    inFooterRegion(doc, () => {
      doc.font("Helvetica").fontSize(8).fillColor(grey)
        .text(C.ADDR + "   ·   " + C.EMAIL + "   ·   " + C.SITE, M.left, fy + 6, { width: CW, align: "center", lineBreak: false });
    });
  };
  const renderBody = (txt) => {
    doc.y = BODY_TOP;
    doc.font("Helvetica").fontSize(11).fillColor(ink);
    txt.split("\n").forEach((l) => {
      const s = l || " ";
      const h = doc.heightOfString(s, { width: CW });
      if (doc.y + h > BODY_BOTTOM) { doc.addPage(); drawLH(); doc.y = BODY_TOP; }
      doc.font("Helvetica").fontSize(11).fillColor(ink).text(s, M.left, doc.y, { width: CW, lineBreak: true });
      doc.y += 3;
    });
  };
  if (mode !== "en") { doc.addPage(); drawLH(); renderBody(spec.bodyFr); }
  if (mode !== "fr") { doc.addPage(); drawLH(); renderBody(spec.bodyEn); }
  return finish(doc, spec.file + ".pdf", outDir);
}

// ---------- run ----------
async function generateSetPDF(mode, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  for (const spec of C.DOCS) await buildStandardPDF(spec, mode, outDir);
  for (const cert of C.CERTIFICATES) await buildCertificatePDF(cert, outDir);
  await buildLetterheadPDF(C.LETTERHEAD, mode, outDir);
  for (const letter of (C.LETTERS || [])) await buildLetterheadPDF(letter, mode, outDir);
}

(async () => {
  await generateSetPDF("both", OUT);
  console.log("✓ Bilingue → telechargements/pdf");
  await generateSetPDF("fr", path.join(__dirname, "telechargements", "pdf-fr"));
  console.log("✓ Français → telechargements/pdf-fr");
  await generateSetPDF("en", path.join(__dirname, "telechargements", "pdf-en"));
  console.log("✓ English → telechargements/pdf-en");
  console.log("\nTerminé — PDF (bilingue + FR + EN)");
})();
