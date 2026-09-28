import { Reveal } from "./motion.jsx";
import React, { useState, useEffect } from "react";
export function Results() {
  const [dashboard, setDashboard] = useState("");
  const [dashboardStatus, setDashboardStatus] = useState(
    "Choose a local dashboard HTML file to view results.",
  );
  useEffect(() => {
    if (!["localhost", "127.0.0.1"].includes(location.hostname)) return;
    const controller = new AbortController();
    fetch("private-data/dashboard.html", { signal: controller.signal })
      .then(async (r) => {
        if (r.ok) {
          setDashboard(await r.text());
          setDashboardStatus(
            "Straight-road combined dashboard · local file, not uploaded",
          );
        }
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);
  async function openFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!/\.html?$/i.test(file.name) || file.size > 25 * 1024 * 1024) {
      setDashboardStatus("Choose an HTML dashboard smaller than 25 MB.");
      return;
    }
    try {
      setDashboard(await file.text());
      setDashboardStatus(file.name + " · local file, not uploaded");
    } catch {
      setDashboardStatus("Unable to read this file. Try selecting it again.");
    }
  }
  return (
    <section
      id={"results"}
      className={"page active"}
      aria-labelledby={"results-title"}
    >
      <div className={"container section-block"}>
        <p className={"eyebrow"}>{"SESSION ANALYSIS"}</p>
        <h1 className={"page-title"} id={"results-title"}>
          {"\n            Evidence from the drive.\n          "}
        </h1>
        <p className={"lead narrow"}>
          {
            "\n            Open the combined dashboard to explore driving behavior, surrounding\n            vehicles, and skin conductance.\n          "
          }
        </p>
        <section
          className="investigator-section"
          aria-labelledby="investigator-title"
        >
          <h2 id="investigator-title">Study investigators</h2>
          <div className="investigator-grid">
            <Reveal as="article" className="investigator-card">
              <p className="eyebrow">Principal Investigator</p>
              <h3>Dr. Sabyasachee Mishra</h3>
              <a href="mailto:smishra3@memphis.edu">smishra3@memphis.edu</a>
            </Reveal>
            <Reveal as="article" className="investigator-card">
              <p className="eyebrow">Investigator</p>
              <h3>Md Tawkir Ahmed</h3>
              <a href="mailto:mahmed8@memphis.edu">mahmed8@memphis.edu</a>
            </Reveal>
          </div>
        </section>
        <div className={"notice"}>
          <strong>{"Exploratory results."}</strong>
          {
            " The existing dashboard\n            describes one test session. Its approximate time alignment and\n            observed correlations do not establish causation or validate\n            synchronization accuracy.\n          "
          }
        </div>
        <div className={"result-toolbar"}>
          <div>
            <h2>{"Combined driving dashboard"}</h2>
            <p role="status">{dashboardStatus}</p>
          </div>
          <label className={"button secondary file-button"}>
            {"Open dashboard HTML"}
            <input
              id={"dashboard-file"}
              type={"file"}
              accept={".html,text/html"}
              onChange={openFile}
            />
          </label>
        </div>
        <div
          id={"dashboard-placeholder"}
          className={"dashboard-placeholder"}
          hidden={!!dashboard}
        >
          <img
            src={"assets/truck-scenario.png"}
            alt={"Stopped truck on the shoulder of the simulated highway"}
          />
          <div>
            <h3>{"Your session, in context."}</h3>
            <p>
              {
                "\n                Select your combined dashboard HTML file. It opens only in this\n                tab and is not uploaded.\n              "
              }
            </p>
          </div>
        </div>
        <iframe
          id={"dashboard-frame"}
          title={"Combined straight-road driving analysis"}
          sandbox={"allow-scripts allow-downloads"}
          hidden={!dashboard}
          srcDoc={dashboard}
        ></iframe>
      </div>
    </section>
  );
}
