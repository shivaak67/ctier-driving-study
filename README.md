# C-TIER Driving Study

Study website for the University of Memphis driving-simulation research workflow.

## Website features

- University of Memphis name and logo.
- NSF-IUCRC funding acknowledgement, as requested by the study team.
- Participant information form with downloadable spreadsheet records.
- Experiment equipment images and descriptions.
- Driving, surrounding-vehicle, and skin-conductance dashboard.

## Status

The first version runs locally at **http://127.0.0.1:4173**. Run `npm start` with Node.js 20 or newer. Run `npm test` for automated checks. No deployment is configured.

Participant records, raw physiological data, and identifiable study exports remain outside this repository. The existing dashboard is loaded locally from the ignored `private-data/dashboard.html` file, or selected using the Results page. Participant entries stay in tab memory and must be downloaded before closing.

See [DEVELOPMENT.md](DEVELOPMENT.md) for architecture, validation and the Git workflow.

## Design references

- https://memphisregionsltravelsurvey.netlify.app/
- https://www.youtube.com/watch?v=NfMQfq5Bkow
- https://its-asset-management-pctkkzedr7kuguhrmapjvi.streamlit.app/
