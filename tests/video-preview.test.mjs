import { test, after } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createStudyServer } from "../server.mjs";
const catalog = JSON.parse(
  await readFile(new URL("../src/road-scenarios.json", import.meta.url)),
);
const server = createStudyServer();
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}`;
after(() => new Promise((resolve) => server.close(resolve)));
test("All four highways expose nine road types across four categories without hidden videos", async () => {
  assert.equal(catalog.scenarios.length, 4);
  assert.equal(catalog.roadTypes.length, 9);
  assert.equal(catalog.recordings.length, 36);
  assert.equal(new Set(catalog.recordings.map((r) => r.src)).size, 36);
  for (const highway of catalog.highways) {
    assert.deepEqual(
      catalog.recordings
        .filter((r) => r.highway === highway.id)
        .map((r) => r.roadType)
        .sort(),
      catalog.roadTypes.map((s) => s.id).sort(),
    );
  }
  for (const r of catalog.recordings) {
    assert.ok(catalog.highways.some((highway) => highway.id === r.highway));
    assert.equal(
      catalog.roadTypes.find((type) => type.id === r.roadType).category,
      r.scenario,
    );
    assert.ok(catalog.scenarios.some((group) => group.id === r.scenario));
    const response = await fetch(base + "/" + r.src, { method: "HEAD" });
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("content-type"), "video/mp4");
    assert.ok(Number(response.headers.get("content-length")) > 10000);
    assert.equal(response.headers.get("accept-ranges"), "bytes");
  }
});
test("Video seeking returns the requested byte slice and rejects impossible ranges", async () => {
  const url = base + "/" + catalog.recordings[0].src;
  const full = Buffer.from(await (await fetch(url)).arrayBuffer());
  const response = await fetch(url, { headers: { range: "bytes=16-47" } });
  assert.equal(response.status, 206);
  assert.deepEqual(
    Buffer.from(await response.arrayBuffer()),
    full.subarray(16, 48),
  );
  const tail = await fetch(url, { headers: { range: "bytes=-16" } });
  assert.deepEqual(Buffer.from(await tail.arrayBuffer()), full.subarray(-16));
  assert.equal(
    (await fetch(url, { headers: { range: `bytes=${full.length}-` } })).status,
    416,
  );
});
