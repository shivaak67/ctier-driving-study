# C-TIER Driving Study

Research and participant-registration website for the University of Memphis Center for Transportation Innovations in Education and Research (C-TIER). The study explores how drivers respond to stopped trucks, roadway conditions, and warning systems in a driving simulator.

**Website:** [ctier-driving-study.vercel.app](https://ctier-driving-study.vercel.app)

## App pages

The current `main` branch includes five pages:

| Page | Route | Features |
| --- | --- | --- |
| Overview | `#overview` | Study introduction, project video, V2X research demo, simulator demonstration, and environmental-condition gallery. |
| Road Scenarios | `#scenarios` | Highway and road-type selectors, matching scripted previews, preview details, and optional TDOT SmartWay camera viewer. |
| Equipment | `#equipment` | Driving controls, VR headset, skin-conductance sensor, and expandable eye- and facial-tracking equipment details. |
| Participate | `#participants` | Google Forms registration button, scannable QR code, and session confirmation guidance. |
| Research & Contacts | `#results` | Research focus, investigator contacts, and expandable research-partner information. |

## Features

- **Road exploration:** I-240, I-40, I-55, and SR 385, with nine road types per highway and additional selectors for curves and ramps. Missing recordings show an explicit empty state.
- **Research demonstrations:** Project and simulator videos, plus a V2X research demo featuring framework diagrams, illustrative examples, and recorded simulator footage.
- **Environmental gallery:** 16 conditions grouped by time of day, rain, snow, wind, and fog, with filters, swipe/drag, thumbnails, and keyboard navigation. Captions describe defined simulation settings, not measured weather observations.
- **Traffic-camera reference:** An optional external TDOT SmartWay viewer for Memphis. Camera availability varies; live feeds do not control the simulation.
- **Participant registration:** Google Forms and a QR code collect contact details and preferred session times. The study team emails participants to confirm. Estimated session duration is 50–60 minutes; registration does not replace consent.
- **Equipment information:** Logitech G923 wheel and pedals, VIVE Focus 3 headset, Shimmer3 GSR+ sensor, and VIVE eye- and facial-tracking accessories, with manufacturer links.
- **Responsive interface:** Framer Motion transitions and reduced-motion support, semantic navigation, and a skip-to-content link.

Previews and research demonstrations are not autonomous-driving validation. The website does not launch Unity, operate iMotions, or control research sensors.

## Technology

React · JavaScript/JSX · Responsive CSS · Framer Motion · esbuild · Node.js · Vercel

Navigation uses URL hashes. Registration is handled externally through Google Forms; the public app does not have an account system or application database.

## Run locally

Requires Node.js 20 or newer.

```sh
npm ci
npm start
```

Open **http://127.0.0.1:4173**.

```sh
npm test
npm run build
npm run format:check
```

The build creates a minified static bundle in `dist/` and checks an explicit public-file allowlist.

## Data and privacy

The current app directs participants to the study team's Google Form. The former in-app participant register, CSV download workflow, and local dashboard viewer are no longer part of the page components. Participant records, raw physiological data, and identifiable study exports should remain outside this repository and public deployment.

## Source guide

- `src/main.jsx` — page navigation and rendering
- `src/Content.jsx` — overview, equipment, header, and footer
- `src/RoadScenarios.jsx` — highway and road-type previews
- `src/SmartWayCameras.jsx` — external camera viewer
- `src/Participants.jsx` — registration link and QR code
- `src/Results.jsx` — research and investigator contacts
- `src/Gallery.jsx` — environmental-condition carousel
- `assets/` — public images and demonstration media
- `tests/` — automated checks

See [asset sources](assets/SOURCES.md), [road-scenario notes](ROAD_SCENARIOS.md), and [development notes](DEVELOPMENT.md). Some older notes describe the former register and dashboard; current page components are authoritative for app behavior.

## Deployment

The public website is hosted on Vercel. Verify the production branch in Vercel before publishing: existing development notes name `feature/study-website`, while `main` contains newer app features.

## Design references

- https://memphisregionsltravelsurvey.netlify.app/
- https://www.youtube.com/watch?v=NfMQfq5Bkow
- https://its-asset-management-pctkkzedr7kuguhrmapjvi.streamlit.app/
