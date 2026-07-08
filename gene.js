const genes = {
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

const gene = new URLSearchParams(window.location.search).get("gene") || "Acox1";
const record = genes[gene] || genes.Acox1;
document.title = `${gene} | FPMlab Gene Detail`;
document.getElementById("geneDetail").innerHTML = `
  <p class="eyebrow">${record[0]}</p>
  <h1>${gene}</h1>
  <div class="gene-detail-grid">
    <article><h2>Known function</h2><p>${record[1]}</p></article>
    <article><h2>Related literature context</h2><p>${record[2]}</p></article>
    <article><h2>Potential role in mouse PNX</h2><p>${record[3]}</p></article>
  </div>
  <div class="resource-panel compact-panel">
    <div>
      <p class="eyebrow">Next curation step</p>
      <h2>Literature links</h2>
      <p>Formal gene pages can later connect PubMed, marker plots, source figures, and downloadable expression tables.</p>
    </div>
  </div>
`;
