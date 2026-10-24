"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { find, search, BRAND_TO_GENERIC } = require("../src/finder.js");

test("Crocin maps to Paracetamol", () => assert.equal(find("Crocin"), "Paracetamol"));
test("case-insensitive + trimmed", () => assert.equal(find("  TYLENOL "), "Paracetamol"));
test("unknown brand returns null", () => assert.equal(find("NoSuchBrand999"), null));
test("search by generic finds brands", () => {
  const hits = search("paracetamol").map((r) => r.brand);
  assert.ok(hits.includes("crocin") && hits.includes("dolo"));
});
test("dataset has 30+ pairs", () => assert.ok(Object.keys(BRAND_TO_GENERIC).length >= 30));
