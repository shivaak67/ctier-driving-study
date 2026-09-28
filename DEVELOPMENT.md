# Local development

Run with Node.js 20 or newer:

```sh
npm start
npm test
```

The website is at http://127.0.0.1:4173. The server binds only to this computer's loopback interface. The public website is hosted on Vercel; no account system or database is configured.

## Architecture

React renders semantic HTML with responsive CSS. Framer Motion provides page, navigation, card, button, register, and carousel animations with reduced-motion support. esbuild bundles the pinned dependencies locally; no runtime CDN scripts or analytics are required. Node's standard HTTP library serves a small allowlist of files; `node:test` supplies automated tests.

The existing analytics dashboard is preserved as a self-contained document inside a sandboxed iframe. Its metrics are unchanged. Original single-session and approximate-alignment caveats remain visible.

## Participant records

Entries exist only in the active tab's memory. Download before refreshing or closing. An unload warning is requested for undownloaded records, but is not guaranteed in every browser. CSV fields are quoted, Unicode is supported, and formula-like text is neutralized. Leading-zero numeric IDs are exported as text. One ID/date pair is allowed per register; use distinct session IDs for multiple runs on one date.

The consent checkbox is a researcher's verification of a separate consent process, not an online consent form. No institutional approval, eligibility criteria, or recruitment promise is inferred. The website does not launch Unity, control iMotions or change sensor settings.

## Local dashboard

Use Results → Open dashboard HTML, or put the existing dashboard at `private-data/dashboard.html` for automatic local loading. That directory is ignored by Git. The repository contains website code and presentation images only.

## Verification

Automated checks cover CSV quoting, Unicode, leading-zero IDs, formula protection, the export schema, HTTP serving, private-path restrictions and rejected POST requests. Browser checks cover required fields, adding/removing synthetic records, duplicate prevention, embedded dashboard rendering, equipment images and responsive layout.

The generated CSV download link was inspected and contains the expected header and synthetic record. The Codex in-app browser did not report a completed download event; saving to disk in a standard browser remains a manual verification step. Desktop and 390px-wide layouts were inspected, with no horizontal page overflow. No browser console errors were observed.

## Git workflow

Work on `feature/study-website`, based on `main`. Review commits before merging. This branch is configured as the Vercel production branch; pushing it updates the public website after a successful build.

Image sources: `assets/SOURCES.md`. Funding acknowledgement follows the study team's request and does not infer an award number. Review branding and study content before a future public release.

## Vercel deployment

Public URL: https://ctier-driving-study.vercel.app

Vercel is connected to shivaak67/ctier-driving-study. The production branch is feature/study-website. Pushes to that branch trigger a build and update the live site after success; other branches produce previews. Run npm test and npm run build before pushing. The build publishes only an explicit allowlist of static files in dist. Private study dashboards and participant exports are excluded. Hosted Results opens a dashboard chosen locally by the viewer.
