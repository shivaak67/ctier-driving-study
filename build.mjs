import { build } from "esbuild";
import { copyFile, mkdir, readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = fileURLToPath(new URL(".", import.meta.url));
const output = path.join(root, "dist");
await mkdir(path.join(output, "assets"), { recursive: true });
const files = ["index.html", "styles.css", "app.js", "csv.js"];
const environments = JSON.parse(
  await readFile(new URL("./src/environments.json", import.meta.url), "utf8"),
);
const catalog = JSON.parse(
  await readFile(new URL("./src/road-scenarios.json", import.meta.url), "utf8"),
);
const images = [
  "v2x-research-demo.mp4",
  "v2x-research-demo-poster.jpg",
  ...catalog.recordings.map((recording) =>
    path.basename(new URL(recording.src, "https://ctier.invalid/").pathname),
  ),
  "registration-qr.svg",
  ...environments.map((item) => path.basename(item.src)),
  "ctier-logo.png",
  "nsf-logo.png",
  "fleet-logo.png",
  "industry-members.png",
  "purdue-logo.jpg",
  "g923.png",
  "roadway.png",
  "shimmer.jpg",
  "truck-scenario.png",
  "university.png",
  "vive.png",
  "vive-eye-tracker.webp",
  "vive-facial-tracker.png",
];
await build({
  absWorkingDir: root,
  tsconfigRaw: {},
  entryPoints: [path.join(root, "src/main.jsx")],
  bundle: true,
  minify: true,
  outfile: path.join(output, "app.js"),
  define: { "process.env.NODE_ENV": '"production"' },
  legalComments: "none",
});
for (const file of files.filter((file) => file !== "app.js"))
  await copyFile(path.join(root, file), path.join(output, file));
for (const file of images)
  await copyFile(
    path.join(root, "assets", file),
    path.join(output, "assets", file),
  );
const expected = [...files, ...images.map((file) => "assets/" + file)].sort();
async function walk(dir, prefix = "") {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const name = prefix + entry.name;
    if (entry.isDirectory())
      found.push(...(await walk(path.join(dir, entry.name), name + "/")));
    else found.push(name);
  }
  return found;
}
const actual = (await walk(output)).sort();
if (JSON.stringify(actual) !== JSON.stringify(expected))
  throw new Error(
    "Unexpected deployment files; inspect dist before deploying.",
  );
console.log("Verified public build: " + actual.join(", "));
