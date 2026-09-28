import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
};
const allowed = new Set([
  "index.html",
  "styles.css",
  "app.js",
  "csv.js",
  "private-data/dashboard.html",
]);
export function createStudyServer() {
  return http.createServer(async (req, res) => {
    try {
      if (!["GET", "HEAD"].includes(req.method)) {
        res.writeHead(405).end();
        return;
      }
      const relative =
        decodeURIComponent(
          new URL(req.url, "http://localhost").pathname,
        ).replace(/^\/+/, "") || "index.html";
      if (!allowed.has(relative) && !/^assets\/[\w.-]+$/.test(relative)) {
        res.writeHead(404).end("Not found");
        return;
      }
      const file = path.join(root, relative);
      const meta = await stat(file);
      if (!meta.isFile()) throw new Error("Not a file");
      res.writeHead(200, {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "no-referrer",
      });
      res.end(req.method === "HEAD" ? undefined : await readFile(file));
    } catch {
      res.writeHead(404).end("Not found");
    }
  });
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  createStudyServer().listen(4173, "127.0.0.1", () =>
    console.log("Study website: http://127.0.0.1:4173 (localhost only)"),
  );
}
