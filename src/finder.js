// generic-name-finder: map brand names to generic names (EXAMPLE data).
// Educational/demo only — not medical advice.
"use strict";

// brand (lowercase) -> generic. Well-known EXAMPLE pairs only.
const BRAND_TO_GENERIC = {
  "crocin": "Paracetamol", "tylenol": "Paracetamol", "panadol": "Paracetamol",
  "dolo": "Paracetamol", "calpol": "Paracetamol",
  "brufen": "Ibuprofen", "advil": "Ibuprofen", "nurofen": "Ibuprofen",
  "combiflam": "Ibuprofen + Paracetamol",
  "aspirin": "Acetylsalicylic acid", "disprin": "Acetylsalicylic acid",
  "zocor": "Simvastatin", "lipitor": "Atorvastatin", "crestor": "Rosuvastatin",
  "coumadin": "Warfarin", "zoloft": "Sertraline", "prozac": "Fluoxetine",
  "augmentin": "Amoxicillin + Clavulanic acid", "amoxil": "Amoxicillin",
  "flagyl": "Metronidazole", "cipro": "Ciprofloxacin",
  "ventolin": "Salbutamol (Albuterol)", "seretide": "Fluticasone + Salmeterol",
  "cetirizine": "Cetirizine", "zyrtec": "Cetirizine", "allegra": "Fexofenadine",
  "omeprazole": "Omeprazole", "prilosec": "Omeprazole", "pantop": "Pantoprazole",
  "norvasc": "Amlodipine", "lasix": "Furosemide",
  "glucophage": "Metformin", "januvia": "Sitagliptin",
  "synthroid": "Levothyroxine", "elocon": "Mometasone",
};

function find(brand) {
  if (!brand) return null;
  return BRAND_TO_GENERIC[brand.trim().toLowerCase()] || null;
}

function search(query) {
  const q = query.trim().toLowerCase();
  return Object.entries(BRAND_TO_GENERIC)
    .filter(([brand, generic]) => brand.includes(q) || generic.toLowerCase().includes(q))
    .map(([brand, generic]) => ({ brand, generic }));
}

if (require.main === module) {
  const [cmd, arg] = process.argv.slice(2);
  if (cmd === "find" && arg) {
    const g = find(arg);
    console.log(g ? `${arg} -> ${g}` : `${arg}: not in this EXAMPLE dataset`);
  } else if (cmd === "search" && arg) {
    for (const r of search(arg)) console.log(`${r.brand} -> ${r.generic}`);
  } else {
    console.log("Usage: node src/cli.js find <brand> | search <query>");
    process.exit(1);
  }
}

module.exports = { find, search, BRAND_TO_GENERIC };
