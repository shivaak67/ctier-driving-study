import React from "react";
export function Partners({ compact = false }) {
  return (
    <section
      className={
        compact ? "partners-section compact-partners" : "partners-section"
      }
      aria-labelledby={compact ? "overview-partners-title" : "partners-title"}
    >
      <p className="eyebrow">RESEARCH NETWORK</p>
      <h2 id={compact ? "overview-partners-title" : "partners-title"}>
        Research partners
      </h2>
      <div className="partners-summary">
        <div className="partner-collaboration">
          <h3>In collaboration with Purdue University</h3>
          <p className="collaborator-name">Ziran Wang</p>
          <a
            href="https://www.purdue.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets/purdue-logo.jpg"
              alt="Purdue University"
              width="1024"
              height="512"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      {!compact && (
        <section
          className="industry-members"
          aria-labelledby="industry-members-title"
        >
          <h3 id="industry-members-title">Industry members</h3>
          <img
            src="assets/industry-members.png"
            alt="Industry members: Applied Research Institute, FedEx Institute of Technology at the University of Memphis, Tennessee Valley Authority, Start Co., Cummins, Wabash, and FedEx Corporation"
            width="925"
            height="573"
            loading="lazy"
          />
        </section>
      )}
    </section>
  );
}
