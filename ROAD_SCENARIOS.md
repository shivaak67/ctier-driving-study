# Road scenario recordings

The public Road Scenarios page uses `src/road-scenarios.json` to select a highway and roadway type. It shows an explicit empty state until a matching recording exists; the general I-240 demonstration is not reused as footage of another highway.

After uploading a real recording to YouTube, add an entry to `recordings`:

```json
{
  "highway": "i40",
  "scenario": "horizontal",
  "embedUrl": "https://www.youtube-nocookie.com/embed/ACTUAL_VIDEO_ID",
  "drivingMode": "Manual driving demonstration"
}
```

Highway IDs: `i240`, `i40`, `i55`, `sr385`. Roadway IDs: `straight`, `horizontal` (curve), `weaving`, `entrance` (ramp merge). Match each recording to its actual Unity configuration. These are roadway categories, not a claim that they are the numbered four-segment participant-tour order.

Environment/warning filters and supporting views are deferred until distinct recordings are available. Sponsor/partner assets, registration QR/form, contact and manufacturer links, project videos, and IRB number remain intact.
