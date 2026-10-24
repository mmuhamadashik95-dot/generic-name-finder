# generic-name-finder

A small JavaScript library + CLI that maps medicine **brand names to generic
names** (30+ well-known example pairs — Crocin → Paracetamol, Brufen →
Ibuprofen, Zocor → Simvastatin, and more).

> ⚠️ Educational/demo only — not medical advice. Always consult your pharmacist or doctor.

> The dataset is EXAMPLE/demo data only.

## Usage

```bash
node src/cli.js find Crocin
node src/cli.js search paracetamol
```

As a library: `const { find, search } = require("./src/finder.js");`

## Tests

```bash
node --test tests/test_finder.js
```

## Author

M.Muhamad Ashik — Founder @ Prescripsy · Contact: prescripsy@prescripsy.space
