import { Partners } from "./Partners.jsx";
import { Reveal } from "./motion.jsx";
import React from "react";
export function Results() {
  return (
    <section
      id={"results"}
      className={"page active"}
      aria-labelledby={"results-title"}
    >
      <div className={"container section-block"}>
        <p className={"eyebrow"}>{"RESEARCH NETWORK"}</p>
        <h1 className={"page-title"} id={"results-title"}>
          {"\n            Research & contacts\n          "}
        </h1>
        <p className={"lead narrow"}>
          {"\n            Meet the team behind the driving study.\n          "}
        </p>
        <section className="research-purpose">
          <h2>What we study</h2>
          <p>
            We examine how roadway conditions and warning systems affect driver
            responses to stopped vehicles.
          </p>
          <ul>
            <li>Driving behavior</li>
            <li>Warning systems</li>
            <li>Roadway conditions</li>
          </ul>
        </section>
        <section
          className="investigator-section"
          aria-labelledby="investigator-title"
        >
          <h2 id="investigator-title">Contact the study team</h2>
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
        <details className="research-partners">
          <summary>Research partners &amp; industry members</summary>
          <Partners />
        </details>
        <div className="simple-contact">
          <p>Interested in participating?</p>
          <a className="button primary" href="#participants">
            Join the study
          </a>
        </div>
      </div>
    </section>
  );
}
