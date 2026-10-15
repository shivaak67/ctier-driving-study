import React, { useState } from "react";
import catalog from "./road-scenarios.json";

function RoadIcon({ shape = "straight" }) {
  return (
    <svg
      className="road-type-icon"
      viewBox="0 0 64 48"
      aria-hidden="true"
      focusable="false"
    >
      {shape === "straight" && (
        <>
          <path
            d="M7 44 28 5h3L17 44zm40 0L33 5h3l21 39z"
            fill="currentColor"
          />
          <path
            d="M32 42V7"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="7 4"
          />
        </>
      )}
      {shape === "horizontal" && (
        <>
          <path
            d="M10 44C13 22 27 9 56 4 35 17 31 29 32 44Z"
            fill="currentColor"
          />
          <path
            d="M22 44C21 27 33 13 48 7"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeDasharray="6 4"
          />
        </>
      )}
      {shape === "weaving" && (
        <>
          <path
            d="M5 18C26 9 32 33 53 17M5 33C28 22 35 41 54 29"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path d="m49 8 11 4-8 10zm2 13 11 5-9 8z" fill="currentColor" />
          <path
            d="M8 25C24 15 36 32 51 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeDasharray="5 4"
          />
        </>
      )}
      {shape === "entrance" && (
        <>
          <path
            d="M28 44V12M10 44C10 28 28 33 28 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
          />
          <path d="m28 3-10 13h20z" fill="currentColor" />
          <path
            d="M28 43V18"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
        </>
      )}
    </svg>
  );
}

function HighwaySign({ highway }) {
  const number = highway.label.replace(/\D/g, "");
  return (
    <svg
      className="highway-sign"
      viewBox="0 0 64 72"
      aria-hidden="true"
      focusable="false"
    >
      {highway.id === "sr385" ? (
        <>
          <rect
            x="8"
            y="9"
            width="48"
            height="53"
            rx="5"
            fill="white"
            stroke="#242c36"
            strokeWidth="2.5"
          />
          <text
            x="32"
            y="29"
            textAnchor="middle"
            fill="#242c36"
            fontSize="13"
            fontWeight="700"
          >
            SR
          </text>
          <text
            x="32"
            y="51"
            textAnchor="middle"
            fill="#242c36"
            fontSize="22"
            fontWeight="700"
          >
            385
          </text>
        </>
      ) : (
        <>
          <path
            d="M8 5Q18 9 32 3 46 9 56 5L57 35Q56 55 32 67 8 55 7 35Z"
            fill="#084ba8"
            stroke="white"
            strokeWidth="3"
          />
          <path d="M8 5Q18 9 32 3 46 9 56 5L56.5 23H7.5Z" fill="#c52633" />
          <path
            d="M8 5Q18 9 32 3 46 9 56 5L57 35Q56 55 32 67 8 55 7 35Z"
            fill="none"
            stroke="#cad5df"
            strokeWidth="1"
          />
          <path d="M8 23H56" stroke="white" strokeWidth="2" />
          <text
            x="32"
            y="17"
            textAnchor="middle"
            fill="white"
            fontSize="6.7"
            fontWeight="700"
            letterSpacing=".3"
          >
            INTERSTATE
          </text>
          <text
            x="32"
            y="48"
            textAnchor="middle"
            fill="white"
            fontSize={number.length === 3 ? "23" : "27"}
            fontWeight="700"
          >
            {number}
          </text>
        </>
      )}
    </svg>
  );
}

// Decorative route motifs identify the cards; they are not surveyed route maps.
function RouteMotif({ highwayId }) {
  const paths = {
    i240: "M5 10 18 11 27 19 35 33 48 40 61 39 77 49",
    i40: "M5 44 18 41 28 44 39 32 52 25 64 24 73 14 85 8",
    i55: "M9 53 18 45 24 32 36 29 43 17 58 14 67 4",
    sr385: "M5 30 16 35 24 27 25 17 37 19 50 22 59 29 74 34 86 43",
  };
  return (
    <svg
      className="route-motif"
      viewBox="0 0 92 60"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={paths[highwayId]}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RoadScenarios() {
  const [highwayId, setHighwayId] = useState("i240");
  const [scenarioId, setScenarioId] = useState("straight");
  const [roadTypeId, setRoadTypeId] = useState("straight");
  const highway = catalog.highways.find((item) => item.id === highwayId);
  const scenario = catalog.scenarios.find((item) => item.id === scenarioId);
  const roadTypes = catalog.roadTypes.filter(
    (item) => item.category === scenarioId,
  );
  const roadType =
    roadTypes.find((item) => item.id === roadTypeId) || roadTypes[0];
  const recording = catalog.recordings.find(
    (item) => item.highway === highwayId && item.roadType === roadType.id,
  );
  return (
    <section
      id="scenarios"
      className="page active"
      aria-labelledby="scenarios-title"
    >
      <div className="container section-block scenario-page">
        <h1 className="page-title" id="scenarios-title">
          Explore the road scenarios
        </h1>
        <p className="lead">
          Choose a highway and roadway type to explore the driving study.
        </p>
        <p className="fine-print">
          Nine road types are available for each highway. Curves and ramps
          include a road-type selector.
        </p>
        <fieldset className="scenario-picker">
          <legend>
            <span className="step-number">1</span> Choose a highway
          </legend>
          <div className="highway-grid">
            {catalog.highways.map((item) => (
              <button
                type="button"
                key={item.id}
                className="choice-card highway-choice"
                aria-label={`${item.label} Memphis region`}
                aria-pressed={highwayId === item.id}
                onClick={() => setHighwayId(item.id)}
              >
                <RouteMotif highwayId={item.id} />
                <span className="highway-identity">
                  <HighwaySign highway={item} />
                  <span>Memphis region</span>
                </span>
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="scenario-picker">
          <legend>
            <span className="step-number">2</span> Choose a roadway scenario
          </legend>
          <div className="highway-grid">
            {catalog.scenarios.map((item) => (
              <button
                type="button"
                key={item.id}
                className="choice-card roadway-choice"
                aria-pressed={scenarioId === item.id}
                onClick={() => {
                  setScenarioId(item.id);
                  setRoadTypeId(
                    catalog.roadTypes.find((type) => type.category === item.id)
                      .id,
                  );
                }}
              >
                <RoadIcon shape={item.id} />
                <strong>{item.label}</strong>
              </button>
            ))}
          </div>
        </fieldset>
        {roadTypes.length > 1 && (
          <fieldset className="scenario-picker">
            <legend>
              <span className="step-number">3</span> Choose a road type
            </legend>
            <div className="road-variant-grid">
              {roadTypes.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className="choice-card roadway-variant"
                  aria-pressed={roadType.id === item.id}
                  onClick={() => setRoadTypeId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>
        )}
        <div className="scenario-layout">
          <div aria-live="polite" aria-atomic="true">
            {recording ? (
              <div className="video-frame">
                {recording.src ? (
                  <video
                    key={recording.src}
                    src={recording.src}
                    aria-label={`${highway.label}: ${roadType.label} — scripted route preview`}
                    controls
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support this video.{" "}
                    <a href={recording.src}>Download the preview</a>.
                  </video>
                ) : (
                  <iframe
                    key={recording.embedUrl}
                    src={recording.embedUrl}
                    title={`${highway.label}: ${roadType.label}`}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            ) : (
              <div className="recording-placeholder">
                <RoadIcon shape={scenario.id} />
                <span className="small-index">
                  {highway.label} · {roadType.label}
                </span>
                <h2>Video coming soon</h2>
                <p>
                  A separate driving recording will be added for this route.
                </p>
              </div>
            )}
            <h2 className="selected-scenario">
              {highway.label} — {roadType.label}
            </h2>
            <p>{scenario.description}</p>
            {recording?.description && <p>{recording.description}</p>}
          </div>
          <aside className="preview-details" aria-labelledby="preview-title">
            <h2 id="preview-title">About this preview</h2>
            <dl>
              <dt>Highway</dt>
              <dd>{highway.label}</dd>
              <dt>Roadway</dt>
              <dd>{scenario.label}</dd>
              <dt>Road type</dt>
              <dd>{roadType.label}</dd>
              <dt>Recording</dt>
              <dd>{recording ? recording.drivingMode : "Not uploaded yet"}</dd>
            </dl>
            <p>
              Environment and warning filters will appear when recorded
              variations are available.
            </p>
            <a href="#overview">Watch the existing simulator demo →</a>
          </aside>
        </div>
        <p className="fine-print">
          These are simulation maps of Memphis-region highways. Recordings are
          demonstrations, not autonomous-driving validation.
        </p>
      </div>
    </section>
  );
}
