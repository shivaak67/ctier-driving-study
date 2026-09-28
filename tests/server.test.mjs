import { test, after } from "node:test";
import assert from "node:assert/strict";
import { createStudyServer } from "../server.mjs";
const server = createStudyServer();
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}`;
after(() => new Promise((resolve) => server.close(resolve)));
test("Home and application modules are served with the correct types", async () => {
  const page = await fetch(base);
  assert.equal(page.status, 200);
  assert.match(await page.text(), /Participant register/);
  const script = await fetch(base + "/app.js");
  assert.equal(script.headers.get("content-type"), "text/javascript");
});
test("Repository internals, source tools and path traversal are not served", async () => {
  for (const target of [
    "/.git/config",
    "/README.md",
    "/tools/prepare_assets.py",
    "/assets/../../README.md",
    "/private-data/participants.csv",
  ])
    assert.equal((await fetch(base + target)).status, 404, target);
});
test("The local server does not accept participant submissions", async () => {
  assert.equal(
    (await fetch(base + "/", { method: "POST", body: "synthetic-test" }))
      .status,
    405,
  );
});
