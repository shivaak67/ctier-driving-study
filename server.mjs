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
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".mp4": "video/mp4",
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
      const file = path.join(
        root,
        relative === "private-data/dashboard.html"
          ? relative
          : "dist/" + relative,
      );
      const meta = await stat(file);
      if (!meta.isFile()) throw new Error("Not a file");
      const headers = {
        "Content-Type": types[path.extname(file)] || "application/octet-stream",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "no-referrer",
        "Content-Length": meta.size,
      };
      if (path.extname(file) === ".mp4") {
        headers["Accept-Ranges"] = "bytes";
        if (req.headers.range) {
          const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
          let start = match?.[1] ? Number(match[1]) : 0;
          let end = match?.[2] ? Number(match[2]) : meta.size - 1;
          if (match && !match[1] && match[2]) {
            start = Math.max(0, meta.size - end);
            end = meta.size - 1;
          }
          end = Math.min(end, meta.size - 1);
          if (
            !match ||
            (!match[1] && !match[2]) ||
            start > end ||
            start >= meta.size
          ) {
            res
              .writeHead(416, { "Content-Range": `bytes */${meta.size}` })
              .end();
            return;
          }
          res.writeHead(206, {
            ...headers,
            "Content-Length": end - start + 1,
            "Content-Range": `bytes ${start}-${end}/${meta.size}`,
          });
          const bytes =
            req.method === "HEAD"
              ? undefined
              : (await readFile(file)).subarray(start, end + 1);
          res.end(bytes);
          return;
        }
      }
      res.writeHead(200, headers);
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
