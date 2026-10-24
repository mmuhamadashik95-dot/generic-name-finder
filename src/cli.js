"use strict";
// CLI entry point (finder.js exports the library; this file runs the CLI).
const { find, search } = require("./finder.js");
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
