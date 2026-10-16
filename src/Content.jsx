import React from "react";
import { motion } from "framer-motion";
import { Gallery } from "./Gallery.jsx";
const instruments = [
  [
    "Steering wheel & pedals",
    "Logitech G923",
    "g923.png",
    "Control steering, acceleration and braking.",
    "https://www.logitechg.com/en-us/shop/p/g923-trueforce-sim-racing-wheel",
  ],
  [
    "VR headset",
    "VIVE Focus 3",
    "vive.png",
    "See the simulated road in virtual reality.",
    "https://www.vive.com/us/product/vive-focus3/specs/",
  ],
  [
    "Skin conductance sensor",
    "Shimmer3 GSR+",
    "shimmer.jpg",
    "Measure changes in skin conductance during the drive.",
    "https://www.shimmersensing.com/product/shimmer3-gsr-unit/",
  ],
  [
    "Eye tracker",
    "VIVE Focus 3 Eye Tracker",
    "vive-eye-tracker.webp",
    "Measure where the driver looks during VR.",
    "https://business.vive.com/us/product/vive-focus-3-eye-tracker/",
  ],
  [
    "Facial tracker",
    "VIVE Focus 3 Facial Tracker",
    "vive-facial-tracker.png",
    "Record facial movement during VR.",
    "https://developer.vive.com/us/hardware/focus-3-facial-tracker/",
  ],
];
function Video({ id, title }) {
  return (
    <div className="video-frame">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
export function Overview() {
  return (
    <section
      id="overview"
      className="page active"
      aria-labelledby="overview-title"
    >
      <div className="container hero simple-hero">
        <div className="hero-copy">
          <p className="eyebrow">C-TIER DRIVING STUDY</p>
          <h1 id="overview-title">Driving safety research</h1>
          <p className="lead">
            How do drivers respond to stopped trucks and warning systems?
          </p>
          <div className="actions">
            <a className="button primary" href="#participants">
              Join the study
            </a>
            <a className="text-link" href="#scenarios">
              Explore the roads →
            </a>
          </div>
          <p className="project-code">
            <strong>IRB Approval No: PRO-FY2026-481</strong>
          </p>
        </div>
        <div className="hero-video">
          <p className="eyebrow">PROJECT OVERVIEW</p>
          <Video id="C8hefs8Mqak" title="C-TIER project overview video" />
          <p className="muted">Learn about the driving study.</p>
        </div>
      </div>
      <section
        className="container simulation-demo research-demo"
        aria-labelledby="research-demo-title"
      >
        <div className="research-demo-heading">
          <div>
            <p className="eyebrow">WATCH THE RESEARCH DEMO · 2 MIN 20 SEC</p>
            <h2 id="research-demo-title">
              V2X warnings in the driving simulator
            </h2>
            <p>
              Explore the SUMO–Unity research framework, simulated hazard
              warnings and a recorded stopped-truck encounter.
            </p>
          </div>
          <a
            href="assets/v2x-research-demo.mp4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the full video ↗
          </a>
        </div>
        <div className="video-frame">
          <video
            src="assets/v2x-research-demo.mp4"
            poster="assets/v2x-research-demo-poster.jpg"
            aria-label="V2X research demonstration: framework diagrams, hazard examples and recorded simulator footage"
            controls
            playsInline
            preload="none"
          >
            Your browser does not support this video.{" "}
            <a href="assets/v2x-research-demo.mp4">Open the research demo</a>.
          </video>
        </div>
        <p className="fine-print research-demo-note">
          Includes illustrative diagrams, proposed research extensions and
          recorded simulator footage. Demonstration, not autonomous-driving
          validation.
        </p>
        <details className="video-credits">
          <summary>Music credit</summary>
          <p>
            “Dream Culture” by Kevin MacLeod ({" "}
            <a
              href="https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1300046"
              target="_blank"
              rel="noopener noreferrer"
            >
              incompetech.com
            </a>
            ), licensed under{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Commons Attribution 4.0
            </a>
            . Edited to 140 seconds, with volume adjustments and fades.
          </p>
        </details>
      </section>
      <div className="container study-highlights">
        <article>
          <span className="highlight-number">01</span>
          <h2>Drive in a simulator</h2>
          <p>Use a steering wheel and pedals to travel a simulated highway.</p>
        </article>
        <article>
          <span className="highlight-number">02</span>
          <h2>Experience roadway conditions</h2>
          <p>
            Explore how lighting, weather and warning systems change the drive.
          </p>
        </article>
        <article>
          <span className="highlight-number">03</span>
          <h2>Help us understand driver responses</h2>
          <p>Driving and sensor measurements support the research.</p>
        </article>
      </div>
      <section
        className="container simulation-demo"
        aria-labelledby="demo-title"
      >
        <h2 id="demo-title">See the driving experience</h2>
        <p>Watch the driving simulator used in the study.</p>
        <Video id="Ekrv8yEYvl8" title="Driving simulation demonstration" />
      </section>
      <section className="container road-intro">
        <div>
          <p className="eyebrow">MEMPHIS REGION</p>
          <h2>Four highways. One place to explore.</h2>
          <p>I-240 · I-40 · I-55 · SR 385</p>
        </div>
        <a className="button primary" href="#scenarios">
          View road scenarios →
        </a>
      </section>
      <div className="container overview-details">
        <details>
          <summary>Explore the 16 environmental conditions</summary>
          <Gallery />
        </details>
      </div>
      <div className="container simple-contact">
        <p>Questions about the study?</p>
        <a href="#results">Contact the research team →</a>
      </div>
    </section>
  );
}
function Instrument({ item }) {
  return (
    <article className="equipment-card">
      <div className="equipment-photo">
        <img src={`assets/${item[2]}`} alt={item[1]} loading="lazy" />
      </div>
      <div className="card-body">
        <h2>{item[0]}</h2>
        <p className="instrument-model">{item[1]}</p>
        <p>{item[3]}</p>
        <a href={item[4]} target="_blank" rel="noopener noreferrer">
          Manufacturer details ↗
        </a>
      </div>
    </article>
  );
}
export function Equipment() {
  return (
    <section
      id="equipment"
      className="page active"
      aria-labelledby="equipment-title"
    >
      <div className="container section-block">
        <h1 className="page-title" id="equipment-title">
          The driving setup
        </h1>
        <p className="lead">
          Each tool helps us understand a different part of the driving
          experience.
        </p>
        <ol className="study-steps">
          <li>Drive</li>
          <li>Experience</li>
          <li>Measure</li>
        </ol>
        <div className="equipment-grid simple-equipment">
          {instruments.slice(0, 3).map((item) => (
            <Instrument key={item[1]} item={item} />
          ))}
        </div>
        <details className="additional-equipment">
          <summary>Additional tracking equipment</summary>
          <div className="equipment-grid">
            {instruments.slice(3).map((item) => (
              <Instrument key={item[1]} item={item} />
            ))}
          </div>
        </details>
        <p className="simple-contact">
          <a href="#results">
            Questions about the equipment? Contact the team →
          </a>
        </p>
      </div>
    </section>
  );
}
export function Header({ page, pages }) {
  return (
    <>
      <header className={"header"}>
        <div className={"container header-inner"}>
          <div className="header-logos">
            <a
              href="https://www.ceat-iucrc.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NSF–IUCRC center"
            >
              <img
                className="network-logo"
                src="assets/nsf-logo.png"
                alt="National Science Foundation"
              />
            </a>
            <a
              href="https://www.ceat-iucrc.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FLEET center"
            >
              <img
                className="network-logo"
                src="assets/fleet-logo.png"
                alt="FLEET — Logistics, Automation, Sustainment"
              />
            </a>
            <a
              href={"#overview"}
              className={"brand"}
              aria-label={"C-TIER Study home"}
            >
              <img
                className="ctier-logo"
                src="assets/ctier-logo.png"
                alt="University of Memphis — Center for Transportation Innovations in Education and Research"
                width="493"
                height="64"
              />
            </a>
          </div>
          <nav aria-label="Main navigation">
            {pages.map((p) => (
              <a
                key={p}
                href={"#" + p}
                aria-current={page === p ? "page" : undefined}
              >
                {p === "scenarios"
                  ? "Road Scenarios"
                  : p === "participants"
                    ? "Participate"
                    : p === "results"
                      ? "Research & Contacts"
                      : p[0].toUpperCase() + p.slice(1)}
                {page === p && (
                  <motion.span
                    className="nav-indicator"
                    layoutId="nav-indicator"
                  />
                )}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer>
      <div className={"container footer-inner"}>
        <div>
          <strong>{"C-TIER \u00b7 University of Memphis"}</strong>
          <p>{"Driving simulation research workspace"}</p>
        </div>
        <div>
          <a
            href="https://www.ceat-iucrc.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NSF–IUCRC
          </a>

          <a
            href={"https://ctier.memphis.edu/projects"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            {"Related C-TIER research"}
          </a>
          <a
            href={"https://www.youtube.com/watch?v=NfMQfq5Bkow"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            {"FLEET project video"}
          </a>
        </div>
      </div>
    </footer>
  );
}
