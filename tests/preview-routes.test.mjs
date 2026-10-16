import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const evidence = JSON.parse(await readFile(new URL('../src/preview-route-evidence.json', import.meta.url), 'utf8'));
const catalog = JSON.parse(await readFile(new URL('../src/road-scenarios.json', import.meta.url), 'utf8'));

test('Every catalog video has route geometry evidence and no near-identical route under another label', () => {
  assert.equal(evidence.length, catalog.recordings.length);
  for (const clip of catalog.recordings) {
    assert.equal(evidence.filter(route => route.highway === clip.highway && route.roadType === clip.roadType).length, 1);
  }
  for (let i = 0; i < evidence.length; i++) {
    for (const other of evidence.slice(i + 1)) {
      const route = evidence[i];
      if (route.highway !== other.highway) continue;
      const count = Math.min(route.routeSamplesAt10m.length, other.routeSamplesAt10m.length);
      let distance = 0;
      for (let n = 0; n < count; n++) {
        distance += Math.hypot(...route.routeSamplesAt10m[n].map((value, axis) => value - other.routeSamplesAt10m[n][axis]));
      }
      assert.ok(count >= 20 && distance / count > 30, `${route.highway}: ${route.roadType} duplicates ${other.roadType}`);
    }
  }
});

test('Combined-curve previews contain both horizontal curvature and elevation change', () => {
  for (const route of evidence.filter(route => route.roadType === 'combined')) {
    assert.ok(route.elevationRangeM > 2, `${route.highway} combined curve needs elevation change`);
    assert.ok(route.headingChangeDeg > 10, `${route.highway} combined curve needs horizontal curvature`);
  }
});

test('Replacement curved-ramp clips show a bend on a separate motorway ramp', () => {
  for (const route of evidence.filter(route => route.roadType === 'curved_ramp' && route.highway !== 'i240')) {
    assert.equal(route.geometryEvidence.laneType, 'highway.motorway_link');
    assert.ok(route.headingChangeDeg > 30, `${route.highway} ramp must visibly curve`);
    assert.ok(route.clipDistanceM >= route.geometryEvidence.curvePassedByM + 40, `${route.highway} clip ends before passing the curve`);
  }
});

test('Route evidence belongs to the video files actually installed in the catalog', async () => {
  for (const route of evidence) {
    const clip = catalog.recordings.find(clip => clip.highway === route.highway && clip.roadType === route.roadType);
    const file = new URL('../' + clip.src.split('?')[0], import.meta.url);
    const digest = createHash('sha256').update(await readFile(file)).digest('hex');
    assert.equal(digest, route.videoSha256, `${route.highway}/${route.roadType}: footage differs from route evidence`);
  }
});
