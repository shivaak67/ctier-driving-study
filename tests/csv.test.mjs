import test from "node:test";
import assert from "node:assert/strict";
import { csvCell, makeCsv, columns } from "../csv.js";
test("CSV escapes commas, quotes and multiline notes", () => {
  assert.equal(
    csvCell('turn, "left"\nthen stop'),
    '"turn, ""left""\nthen stop"',
  );
});
test("Spreadsheet formulas are neutralized including whitespace prefixes", () => {
  for (const value of [
    "=1+1",
    "+SUM(A1)",
    "-1+1",
    "@SUM(A1)",
    "  =1",
    "\t=1",
    "\r=1",
  ])
    assert.ok(csvCell(value).startsWith("\"'"));
});
test("Leading zero IDs remain text and Unicode survives", () => {
  assert.equal(csvCell("001"), '"\'001"');
  assert.equal(csvCell("P001"), '"P001"');
  assert.equal(csvCell("José"), '"José"');
});
test("Template and records share a stable schema with BOM and CRLF", () => {
  const template = makeCsv([]);
  assert.ok(template.startsWith("\uFEFF"));
  assert.equal(template.split("\r\n").length, 2);
  const csv = makeCsv([{ participantId: "P001", consentVerified: "Yes" }]);
  assert.ok(csv.includes('"P001"'));
  assert.equal(columns.length, 10);
  assert.equal(csv.split("\r\n").length, 3);
});
