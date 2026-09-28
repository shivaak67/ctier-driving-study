import { copyFile, mkdir, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = fileURLToPath(new URL(".", import.meta.url));
const output = path.join(root, "dist");
await mkdir(path.join(output, "assets"), { recursive: true });
const files = ["index.html", "styles.css", "app.js", "csv.js"];
const images = [
  "g923.png",
  "roadway.png",
  "shimmer.png",
  "truck-scenario.png",
  "university.png",
  "vive.png",
  "vive-eye-tracker.webp",
  "vive-facial-tracker.png",
];
for (const file of files)
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
