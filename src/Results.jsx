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
          {"\n            Research & Contacts.\n          "}
        </h1>
        <p className={"lead narrow"}>
          {
            "\n            Meet the study team and explore our research collaborations.\n          "
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
        <Partners />
      </div>
    </section>
  );
}
