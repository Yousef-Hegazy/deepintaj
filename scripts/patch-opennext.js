// Patch @opennextjs/cloudflare's bundle-server.js to externalize cloudflare:sockets
// This is a Workerd runtime module used by worker-mailer that esbuild can't resolve.
const fs = require("fs");
const path = require("path");

const filePath = path.join(
  process.cwd(),
  "node_modules",
  "@opennextjs",
  "cloudflare",
  "dist",
  "cli",
  "build",
  "bundle-server.js"
);

const content = fs.readFileSync(filePath, "utf-8");
const patched = content.replace(
  'external: ["./middleware/handler.mjs"]',
  'external: ["./middleware/handler.mjs", "cloudflare:sockets"]'
);

if (content === patched) {
  console.error("ERROR: Pattern not found in bundle-server.js — patch may already be applied or file format changed.");
  process.exit(1);
}

fs.writeFileSync(filePath, patched);
console.log("Patched: added cloudflare:sockets to esbuild externals");
