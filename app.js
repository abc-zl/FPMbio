const clusterDatasets = [
  { dataset: "baron_human", cells: "8569", genes: "20125", labels: "14", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "baron_mouse", cells: "1886", genes: "14878", labels: "13", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "camp1", cells: "777", genes: "19020", labels: "7", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "camp2", cells: "734", genes: "18927", labels: "6", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "chen", cells: "14437", genes: "23284", labels: "47", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "deng_reads", cells: "268", genes: "22431", labels: "10", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "grun", cells: "1502", genes: "23536", labels: "2", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "klein", cells: "2717", genes: "24175", labels: "4", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "kolodziejczyk", cells: "704", genes: "38653", labels: "3", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "li", cells: "561", genes: "55186", labels: "9", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "manno_human", cells: "4029", genes: "20560", labels: "56", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "manno_mouse", cells: "2150", genes: "24378", labels: "32", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "marques", cells: "5053", genes: "23556", labels: "13", object: "SingleCellExperiment", use: "Clustering + embedding" },
  { dataset: "patel", cells: "430", genes: "5948", labels: "5", object: "SingleCellExperiment", use: "Clustering + embedding" },
];

const datasetSourceLinks = {
  baron_human: "https://hemberg-lab.github.io/scRNA.seq.datasets/human/pancreas/",
  baron_mouse: "https://hemberg-lab.github.io/scRNA.seq.datasets/mouse/pancreas/",
  camp1: "https://hemberg-lab.github.io/scRNA.seq.datasets/human/liver/",
  camp2: "https://hemberg-lab.github.io/scRNA.seq.datasets/human/brain/",
  chen: "https://hemberg-lab.github.io/scRNA.seq.datasets/mouse/brain/",
  deng_reads: "https://hemberg-lab.github.io/scRNA.seq.datasets/mouse/edev/",
  grun: "https://hemberg-lab.github.io/scRNA.seq.datasets/mouse/hsc/",
  klein: "https://hemberg-lab.github.io/scRNA.seq.datasets/mouse/esc/",
  kolodziejczyk: "https://hemberg-lab.github.io/scRNA.seq.datasets/mouse/esc/",
  li: "https://hemberg-lab.github.io/scRNA.seq.datasets/human/tissues/",
  manno_human: "https://hemberg-lab.github.io/scRNA.seq.datasets/human/brain/",
  manno_mouse: "https://hemberg-lab.github.io/scRNA.seq.datasets/mouse/brain/",
  marques: "https://hemberg-lab.github.io/scRNA.seq.datasets/mouse/brain/",
  patel: "https://hemberg-lab.github.io/scRNA.seq.datasets/human/tissues/",
};

const trajectoryDatasets = [
  { dataset: "aging-hsc-old_kowalczyk", reference: "kowalczyk", cells: "2863", genes: "873", milestones: "4" },
  { dataset: "aging-hsc-young_kowalczyk", reference: "kowalczyk", cells: "2406", genes: "493", milestones: "4" },
  { dataset: "cell-cycle_buettner", reference: "buettner", cells: "5310", genes: "264", milestones: "3" },
  { dataset: "developing-dendritic-cells_schlitzer", reference: "schlitzer", cells: "1845", genes: "238", milestones: "4" },
  { dataset: "epidermis-hair-IFE_joost", reference: "joost", cells: "1060", genes: "699", milestones: "6" },
  { dataset: "epidermis-hair-uHF_joost", reference: "joost", cells: "1009", genes: "346", milestones: "4" },
  { dataset: "fibroblast-reprogramming_treutlein", reference: "treutlein", cells: "3301", genes: "355", milestones: "8" },
  { dataset: "germline-human-both_guo", reference: "guo", cells: "5708", genes: "272", milestones: "8" },
  { dataset: "germline-human-female_li", reference: "li", cells: "4691", genes: "629", milestones: "4" },
  { dataset: "germline-human-female-weeks_li", reference: "li", cells: "4459", genes: "671", milestones: "13" },
  { dataset: "germline-human-male_guo", reference: "guo", cells: "3457", genes: "166", milestones: "6" },
  { dataset: "germline-human-male_li", reference: "li", cells: "3630", genes: "659", milestones: "4" },
  { dataset: "germline-human-male-weeks_li", reference: "li", cells: "3630", genes: "659", milestones: "8" },
  { dataset: "hematopoiesis-clusters_olsson", reference: "olsson", cells: "2967", genes: "376", milestones: "10" },
  { dataset: "hematopoiesis-gates_olsson", reference: "olsson", cells: "2702", genes: "318", milestones: "4" },
  { dataset: "mesoderm-development_loh", reference: "loh", cells: "3464", genes: "497", milestones: "10" },
  { dataset: "myoblast-differentiation_trapnell", reference: "trapnell", cells: "3582", genes: "291", milestones: "5" },
  { dataset: "NKT-differentiation_engel", reference: "engel", cells: "3982", genes: "197", milestones: "5" },
  { dataset: "olfactory-projection-neurons-DA1_horns", reference: "horns", cells: "1514", genes: "277", milestones: "6" },
  { dataset: "psc-astrocyte-maturation-neuron_sloan", reference: "sloan", cells: "1534", genes: "192", milestones: "5" },
];

const trajectorySourceLinks = Object.fromEntries(
  trajectoryDatasets.map((item) => [item.dataset, "https://zenodo.org/records/1443566"])
);

function numberFormat(value) {
  return Number(value).toLocaleString("en-US");
}

function renderClusterCard(item) {
  return `
    <article class="data-card">
      <div class="card-head">
        <span class="tag">S1 source</span>
        <span>${item.object}</span>
      </div>
      <h3>${item.dataset}</h3>
      <p>${item.use}. Original study, accession, repository, and source URL are listed in S1.</p>
      <dl>
        <div><dt>Cells</dt><dd>${numberFormat(item.cells)}</dd></div>
        <div><dt>Genes</dt><dd>${numberFormat(item.genes)}</dd></div>
        <div><dt>Labels</dt><dd>${item.labels}</dd></div>
      </dl>
      <a class="card-link" href="${datasetSourceLinks[item.dataset] || "data/Supplementary_Table_S1_dimensionality_benchmark_datasets.csv"}" target="_blank" rel="noopener">Open source website</a>
    </article>
  `;
}

function renderTrajectoryCard(item) {
  return `
    <article class="data-card trajectory-card">
      <div class="card-head">
        <span class="tag">S2 source</span>
        <span>${item.reference}</span>
      </div>
      <h3>${item.dataset}</h3>
      <p>Dynverse gold-standard trajectory task for topology, branch recovery, milestone assignment, and pseudotime evaluation.</p>
      <dl>
        <div><dt>Cells</dt><dd>${numberFormat(item.cells)}</dd></div>
        <div><dt>Genes</dt><dd>${numberFormat(item.genes)}</dd></div>
        <div><dt>Milestones</dt><dd>${item.milestones}</dd></div>
      </dl>
      <a class="card-link" href="${trajectorySourceLinks[item.dataset] || "https://zenodo.org/records/1443566"}" target="_blank" rel="noopener">Open source website</a>
    </article>
  `;
}

document.getElementById("clusterGrid").innerHTML = clusterDatasets.map(renderClusterCard).join("");
document.getElementById("trajectoryGrid").innerHTML = trajectoryDatasets.map(renderTrajectoryCard).join("");
document.getElementById("clusterCount").textContent = clusterDatasets.length;
document.getElementById("trajectoryCount").textContent = trajectoryDatasets.length;

document.querySelectorAll(".data-card, .feature-grid article, .workflow article").forEach((card) => {
  card.addEventListener("pointerenter", () => {
    card.style.transform = "translateY(-4px)";
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "translateY(0)";
  });
});

const fpmGeneRecords = {
  Acox1: ["Epithelial repair", "Peroxisomal acyl-CoA oxidase involved in fatty-acid beta-oxidation and lipid metabolic homeostasis.", "Relevant to epithelial metabolic adaptation and oxidative lipid handling in tissue remodeling contexts.", "In the PNX analysis, Acox1 stays closer to the AT2-rich side and may mark metabolic readiness during early epithelial repair."],
  Cbr2: ["Epithelial repair", "Carbonyl reductase family member involved in detoxification and redox-associated metabolism.", "Redox and carbonyl metabolism are frequently linked to epithelial stress responses.", "Cbr2 may indicate an AT2-associated protective program before transition into bridge and AT1-like states."],
  Atp8a1: ["Epithelial repair", "P4-ATPase phospholipid flippase associated with membrane asymmetry and vesicle biology.", "Membrane remodeling is relevant to epithelial plasticity and surface differentiation.", "Atp8a1 may support membrane-state remodeling in AT2-rich epithelial regions after lung resection."],
  Emp1: ["Epithelial bridge", "Epithelial membrane protein implicated in adhesion, differentiation, and tissue remodeling.", "EMP-family genes are often observed in epithelial state changes and wound-response settings.", "Emp1 accumulates in the bridge-to-AT1 window and may mark the transition-state surface."],
  Tspan8: ["Epithelial bridge", "Tetraspanin family member associated with membrane microdomains, adhesion, and epithelial behavior.", "Tetraspanins can shape signaling and migration-like behavior in remodeling epithelia.", "Tspan8 may participate in bridge-state organization as AT2 cells approach AT1 identity."],
  Ly6e: ["Epithelial bridge", "Interferon-responsive Ly6 family gene linked to immune-modulated epithelial states.", "Ly6e often appears in epithelial stress or inflammatory-response programs.", "Ly6e may mark immune-influenced epithelial transition after pneumonectomy."],
  Kcnip4: ["Myeloid remodeling", "Potassium channel-interacting protein family member with roles in calcium-binding regulatory biology.", "Its myeloid role is not fully established, making it a candidate for follow-up validation.", "Kcnip4 is the strongest myeloid candidate in the manuscript, showing pseudotime association and macrophage-rich condition sensitivity."],
  Dst: ["Myeloid remodeling", "Dystonin cytoskeletal linker gene involved in cellular structure and intracellular organization.", "Cytoskeletal remodeling can accompany immune-cell migration and differentiation.", "Dst may reflect structural remodeling along the monocyte-to-macrophage continuum."],
  Bcar3: ["Myeloid remodeling", "Adaptor protein linked to cell adhesion, migration, and signaling.", "BCAR3-like signaling is compatible with state changes requiring motility and niche adaptation.", "Bcar3 appears in late macrophage-directed modules and may support remodeling-state progression."],
  Dip2c: ["Myeloid remodeling", "DIP2 family gene with proposed roles in transcriptional and developmental regulation.", "Its macrophage-specific function remains underexplored.", "Dip2c is highlighted as a late-biased candidate in macrophage-rich postoperative states."],
  Dmxl2: ["Myeloid remodeling", "Scaffold-like gene associated with vesicular and regulatory processes.", "Large scaffold proteins can support cellular reprogramming through trafficking and signaling control.", "Dmxl2 shows late-biased behavior and may mark macrophage-state consolidation after PNX."],
  Plet1: ["Myeloid remodeling", "Placenta-expressed transcript 1, often associated with epithelial progenitor and injury-response contexts.", "Plet1 is better known in epithelial repair, so myeloid-localized signal is a hypothesis-generating finding.", "Plet1 may identify a postoperative remodeling niche or macrophage-associated transition signal."],
};

function fpmParseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  const cleanText = text.replace(/^\uFEFF/, "");
  for (let i = 0; i < cleanText.length; i += 1) {
    const char = cleanText[i];
    const next = cleanText[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  if (cell || row.length) rows.push([...row, cell]);
  const headers = rows.shift().map((h) => h.replace(/^\uFEFF/, "").trim());
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, (values[index] || "").trim()])));
}

function fpmShortStudy(study) {
  return study.replace(/\s*\((Cell Systems|Nature|PNAS|Science|Nature Methods|Genome Biology|Cell|Nature Biotechnology|Bioinformatics|Journal.*?)\,?\s*\d{4}\)/, "");
}

function fpmValue(item, key, fallback = "Not specified") {
  const direct = item[key];
  if (direct !== undefined && direct !== null && String(direct).trim()) return direct;
  const normalizedKey = key.toLowerCase().replace(/[^a-z0-9]/g, "");
  const foundKey = Object.keys(item).find((candidate) => candidate.toLowerCase().replace(/[^a-z0-9]/g, "") === normalizedKey);
  const found = foundKey ? item[foundKey] : "";
  return found !== undefined && found !== null && String(found).trim() ? found : fallback;
}

function fpmOptionalLink(href, label, className = "card-link") {
  if (!href || href === "Not specified") return "";
  return `<a class="${className}" href="${href}" target="_blank" rel="noopener">${label}</a>`;
}

function fpmTrajectorySystem(dataset) {
  const text = String(dataset || "").toLowerCase();
  if (text.includes("aging-hsc")) return "Aging hematopoietic stem cells";
  if (text.includes("cell-cycle")) return "Cell-cycle progression";
  if (text.includes("dendritic-cells")) return "Developing dendritic cells";
  if (text.includes("epidermis-hair")) return "Epidermis and hair follicle";
  if (text.includes("fibroblast-reprogramming")) return "Fibroblast reprogramming";
  if (text.includes("germline-human")) return "Human germline development";
  if (text.includes("hematopoiesis")) return "Hematopoiesis";
  if (text.includes("mesoderm-development")) return "Mesoderm development";
  if (text.includes("myoblast-differentiation")) return "Myoblast differentiation";
  if (text.includes("nkt-differentiation")) return "NKT differentiation";
  if (text.includes("olfactory-projection-neurons")) return "Olfactory projection neurons";
  if (text.includes("psc-astrocyte")) return "PSC astrocyte maturation";
  return fpmValue({ Dataset: dataset }, "Dataset", "Trajectory system");
}

function fpmStudyCard(item) {
  const sourceUrl = fpmValue(item, "Source URL", "");
  return `
    <article class="data-card study-card">
      <div class="card-head"><span class="tag">${fpmValue(item, "Species")}</span><span>${fpmValue(item, "Repository")}</span></div>
      <h3>${fpmValue(item, "Dataset", "Dataset")}</h3>
      <p class="study-title">${fpmShortStudy(fpmValue(item, "Original study", ""))}</p>
      <dl>
        <div><dt>Tissue/System</dt><dd>${fpmValue(item, "Tissue_or_system")}</dd></div>
        <div><dt>Protocol</dt><dd>${fpmValue(item, "Protocol")}</dd></div>
        <div><dt>Accession</dt><dd>${fpmValue(item, "Accession")}</dd></div>
        <div><dt>Cells</dt><dd>${numberFormat(fpmValue(item, "Cells", "")) || "Not specified"}</dd></div>
        <div><dt>Genes</dt><dd>${numberFormat(fpmValue(item, "Genes", "")) || "Not specified"}</dd></div>
        <div><dt>Labels</dt><dd>${fpmValue(item, "Labels")}</dd></div>
      </dl>
      <div class="card-actions">
        ${fpmOptionalLink(sourceUrl, "Open source website")}
      </div>
    </article>
  `;
}

function fpmTrajectoryCard(item) {
  const sourceRecordUrl = fpmValue(item, "Source record URL", "");
  const sourceUrl = fpmValue(item, "Source URL", "");
  const system = fpmTrajectorySystem(fpmValue(item, "Dataset", ""));
  return `
    <article class="data-card study-card trajectory-card">
      <div class="card-head"><span class="tag">${fpmValue(item, "Benchmark tier")}</span><span>${fpmValue(item, "Reference")}</span></div>
      <h3>${fpmValue(item, "Dataset", "Trajectory task")}</h3>
      <p class="study-title">${fpmValue(item, "Source collection")}</p>
      <dl>
        <div><dt>Cells</dt><dd>${numberFormat(fpmValue(item, "Cells", "")) || "Not specified"}</dd></div>
        <div><dt>Genes</dt><dd>${numberFormat(fpmValue(item, "Genes", "")) || "Not specified"}</dd></div>
        <div><dt>Gold labels</dt><dd>${fpmValue(item, "Milestones")} milestones</dd></div>
        <div><dt>Biological system</dt><dd>${system}</dd></div>
      </dl>
      <div class="card-actions">
        ${fpmOptionalLink(sourceRecordUrl || sourceUrl, "Open source website")}
      </div>
    </article>
  `;
}

function fpmRenderGenes() {
  const target = document.getElementById("geneBubbleMap");
  if (!target) return;
  target.innerHTML = Object.entries(fpmGeneRecords).map(([name, record], index) => {
    const size = index % 3 === 0 ? "large" : index % 3 === 1 ? "medium" : "small";
    return `<a class="gene-bubble ${size}" href="gene.html?gene=${encodeURIComponent(name)}"><strong>${name}</strong><span>${record[0]}</span></a>`;
  }).join("");
}

function fpmSetupCarousel() {
  const slides = [...document.querySelectorAll(".slide")];
  const dots = [...document.querySelectorAll(".dot")];
  if (!slides.length) return;
  let active = 0;
  const show = (index) => {
    active = index;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === active));
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === active));
  };
  dots.forEach((dot, index) => dot.addEventListener("click", () => show(index)));
  slides.forEach((slide) => slide.addEventListener("click", () => {
    document.querySelector(slide.dataset.target)?.scrollIntoView({ behavior: "smooth" });
  }));
  setInterval(() => show((active + 1) % slides.length), 5000);
}

Promise.all([
  fetch("data/Supplementary_Table_S1_dimensionality_benchmark_datasets.csv").then((res) => res.text()),
  fetch("data/Supplementary_Table_S2_trajectory_benchmark_datasets.csv").then((res) => res.text()),
]).then(([s1, s2]) => {
  const s1Rows = fpmParseCsv(s1);
  const s2Rows = fpmParseCsv(s2);
  document.getElementById("clusterGrid").innerHTML = s1Rows.map(fpmStudyCard).join("");
  document.getElementById("trajectoryGrid").innerHTML = s2Rows.map(fpmTrajectoryCard).join("");
  document.getElementById("clusterCount").textContent = s1Rows.length;
  document.getElementById("trajectoryCount").textContent = s2Rows.length;
});

fpmRenderGenes();
fpmSetupCarousel();
