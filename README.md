# C-TIER Driving Study

Study website for the University of Memphis driving-simulation research workflow.

## Website features

- University of Memphis name and logo.
- NSF-IUCRC funding acknowledgement, as requested by the study team.
- Participant information form with downloadable spreadsheet records.
- Experiment equipment images and descriptions.
- Driving, surrounding-vehicle, and skin-conductance dashboard.

## Status

Run locally at **http://127.0.0.1:4173** with `npm ci` then `npm start` (Node.js 20+). Run `npm test` for automated checks. Vercel automatically deploys pushes to `feature/study-website` at https://ctier-driving-study.vercel.app.

Participant records, raw physiological data, and identifiable study exports remain outside this repository. The existing dashboard is loaded locally from the ignored `private-data/dashboard.html` file, or selected using the Results page. Participant entries stay in tab memory and must be downloaded before closing.

See [DEVELOPMENT.md](DEVELOPMENT.md) for architecture, validation and the Git workflow.

## Design references

- https://memphisregionsltravelsurvey.netlify.app/
- https://www.youtube.com/watch?v=NfMQfq5Bkow
- https://its-asset-management-pctkkzedr7kuguhrmapjvi.streamlit.app/

## Interface and motion

React manages the four pages, the in-memory participant register, and the local dashboard viewer. Framer Motion provides page transitions, the active navigation indicator, scroll reveals, card and button feedback, animated register entries, and the horizontal environment carousel. System reduced-motion preferences are respected.

The gallery contains all 16 original images from the supplied environment deck, with filters, swipe/drag, keyboard arrows/Home/End, and a horizontally scrolling thumbnail rail. Settings in captions are defined simulation values, not measured weather observations.

esbuild produces a minified static bundle. The build checks an explicit public-file allowlist; private dashboards and participant data are excluded. React components live in `src/`; `csv.js` retains independently tested spreadsheet serialization.
