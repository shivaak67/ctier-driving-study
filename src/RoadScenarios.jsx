import React, { useState } from "react";
import catalog from "./road-scenarios.json";

function RoadIcon({ shape = "straight" }) {
  const paths = {
    straight: "M18 40L26 8M38 40L30 8",
    horizontal: "M15 40C15 20 36 28 36 8M27 40C27 27 48 32 48 8",
    weaving: "M14 40C14 20 40 28 40 8M40 40C40 20 14 28 14 8",
    entrance: "M20 40V8M34 40V8M48 40C48 26 34 28 34 18",
  };
  return (
    <svg viewBox="0 0 60 48" width="52" height="42" aria-hidden="true">
      <path
        d={paths[shape] || paths.straight}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RoadScenarios() {
  const [highwayId, setHighwayId] = useState("i240");
  const [scenarioId, setScenarioId] = useState("straight");
  const highway = catalog.highways.find((item) => item.id === highwayId);
  const scenario = catalog.scenarios.find((item) => item.id === scenarioId);
  const recording = catalog.recordings.find(
    (item) => item.highway === highwayId && item.scenario === scenarioId,
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
        <fieldset className="scenario-picker">
          <legend>
            <span className="step-number">1</span> Choose a highway
          </legend>
          <div className="highway-grid">
            {catalog.highways.map((item) => (
              <button
                type="button"
                key={item.id}
                className="choice-card"
                aria-pressed={highwayId === item.id}
                onClick={() => setHighwayId(item.id)}
              >
                <span className="highway-shield">{item.label}</span>
                <span>Memphis region</span>
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
                onClick={() => setScenarioId(item.id)}
              >
                <RoadIcon shape={item.id} />
                <strong>{item.label}</strong>
              </button>
            ))}
          </div>
        </fieldset>
        <div className="scenario-layout">
          <div aria-live="polite" aria-atomic="true">
            {recording ? (
              <div className="video-frame">
                <iframe
                  key={recording.embedUrl}
                  src={recording.embedUrl}
                  title={`${highway.label}: ${scenario.label}`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="recording-placeholder">
                <RoadIcon shape={scenario.id} />
                <span className="small-index">
                  {highway.label} · {scenario.label}
                </span>
                <h2>Video coming soon</h2>
                <p>
                  A separate driving recording will be added for this route.
                </p>
              </div>
            )}
            <h2 className="selected-scenario">
              {highway.label} — {scenario.label}
            </h2>
            <p>{scenario.description}</p>
          </div>
          <aside className="preview-details" aria-labelledby="preview-title">
            <h2 id="preview-title">About this preview</h2>
            <dl>
              <dt>Highway</dt>
              <dd>{highway.label}</dd>
              <dt>Roadway</dt>
              <dd>{scenario.label}</dd>
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
