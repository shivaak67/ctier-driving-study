import { Partners } from "./Partners.jsx";
import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "./motion.jsx";
import { Gallery } from "./Gallery.jsx";
export function Overview() {
  return (
    <section
      id={"overview"}
      className={"page active"}
      aria-labelledby={"overview-title"}
    >
      <div className={"container hero"}>
        <div className={"hero-copy"}>
          <p className={"eyebrow"}>
            {"HUMAN FACTORS \u00b7 DRIVING SIMULATION"}
          </p>
          <h1 id={"overview-title"}>
            {
              "\n              Understanding the driver behind the wheel.\n            "
            }
          </h1>
          <p className="project-code">
            <strong>IRB Approval No: PRO-FY2026-481</strong>
          </p>
          <p className={"lead"}>
            {
              "\n              A controlled environment to explore how drivers respond to stopped\n              trucks, roadway conditions, and warning systems.\n            "
            }
          </p>
          <div className={"actions"}>
            <a className={"button primary"} href={"#participants"}>
              {"Register a participant "}
            </a>
            <a className={"text-link"} href={"#results"}>
              {"Research & contacts \u2192"}
            </a>
          </div>
          <div className={"hero-notes"}>
            <span>{"Unity simulation"}</span>
            <span>{"Vehicle telemetry"}</span>
            <span>{"Skin conductance"}</span>
          </div>
        </div>
        <div className="hero-video">
          <p className="eyebrow">PROJECT OVERVIEW</p>
          <div className="video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/C8hefs8Mqak"
              title="C-TIER project overview video"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <a
            className="text-link"
            href="https://www.youtube.com/watch?v=C8hefs8Mqak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
      <div
        className={"container simulation-demo"}
        aria-labelledby={"demo-title"}
      >
        <p className={"eyebrow"}>{"SIMULATION DEMO"}</p>
        <div className={"section-heading"}>
          <div>
            <h2 id={"demo-title"}>{"See the driving experience."}</h2>
            <p>
              {"Watch a demonstration of the simulation used in the study."}
            </p>
          </div>
          <a
            href={"https://www.youtube.com/watch?v=Ekrv8yEYvl8"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            {"Watch on YouTube"}
          </a>
        </div>
        <div className={"video-frame"}>
          <iframe
            src={"https://www.youtube-nocookie.com/embed/Ekrv8yEYvl8"}
            title={"Driving simulation demonstration"}
            loading={"lazy"}
            referrerPolicy={"strict-origin-when-cross-origin"}
            allow={
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            }
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Gallery />
      <section
        className="container overview-contacts"
        aria-labelledby="overview-contacts-title"
      >
        <h2 id="overview-contacts-title">Study contacts &amp; collaboration</h2>
        <div className="investigator-grid">
          <article className="investigator-card">
            <p className="eyebrow">Principal Investigator</p>
            <h3>Dr. Sabyasachee Mishra</h3>
            <a href="mailto:smishra3@memphis.edu">smishra3@memphis.edu</a>
          </article>
          <article className="investigator-card">
            <p className="eyebrow">Investigator</p>
            <h3>Md Tawkir Ahmed</h3>
            <a href="mailto:mahmed8@memphis.edu">mahmed8@memphis.edu</a>
          </article>
        </div>
        <Partners compact />
      </section>
    </section>
  );
}
export function Equipment() {
  return (
    <section
      id={"equipment"}
      className={"page active"}
      aria-labelledby={"equipment-title"}
    >
      <div className={"container section-block"}>
        <p className={"eyebrow"}>{"EXPERIMENT INSTRUMENTS"}</p>
        <h1 className={"page-title"} id={"equipment-title"}>
          {"\n            Inside the research setup.\n          "}
        </h1>
        <p className={"lead narrow"}>
          {
            "\n            Each instrument captures a different part of the driving experience.\n          "
          }
        </p>
        <div className={"equipment-grid"}>
          <Reveal className={"equipment-card"} as="article">
            <div className={"equipment-photo"}>
              <img
                src={"assets/g923.png"}
                alt={"Logitech G923 steering wheel"}
                loading={"lazy"}
              />
            </div>
            <div className={"card-body"}>
              <span className={"small-index"}>{"DRIVER INPUT"}</span>
              <h2>{"Logitech G923"}</h2>
              <p>
                {
                  "\n                  Steering wheel and pedals provide the driving controls. Unity\n                  logs steering, throttle, and braking during the route.\n                "
                }
              </p>
              <a
                href={
                  "https://www.logitechg.com/en-us/shop/p/g923-trueforce-sim-racing-wheel"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Manufacturer details"}
              </a>
            </div>
          </Reveal>
          <Reveal className={"equipment-card"} as="article">
            <div className={"equipment-photo"}>
              <img
                src={"assets/vive.png"}
                alt={"VIVE Focus 3 virtual reality headset"}
                loading={"lazy"}
              />
            </div>
            <div className={"card-body"}>
              <span className={"small-index"}>{"IMMERSIVE DISPLAY"}</span>
              <h2>{"VIVE Focus 3"}</h2>
              <p>
                {
                  "\n                  The headset provides an immersive view of the simulation when\n                  the VR configuration is used.\n                "
                }
              </p>
              <a
                href={"https://www.vive.com/us/product/vive-focus3/specs/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Manufacturer details"}
              </a>
            </div>
          </Reveal>
          <Reveal className={"equipment-card"} as="article">
            <div className={"equipment-photo"}>
              <img
                src={"assets/shimmer.jpg"}
                alt={"Shimmer3 GSR+ official product photograph"}
                loading={"lazy"}
              />
            </div>
            <div className={"card-body"}>
              <span className={"small-index"}>
                {"PHYSIOLOGICAL MEASUREMENT"}
              </span>
              <h2>{"Shimmer3 GSR+"}</h2>
              <p>
                {
                  "\n                  Finger electrodes measure skin conductance. iMotions records\n                  the sensor stream and incoming simulation markers.\n                "
                }
              </p>
              <a
                href={
                  "https://www.shimmersensing.com/product/shimmer3-gsr-unit/"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Manufacturer image & details"}
              </a>
            </div>
          </Reveal>
          <Reveal className={"equipment-card"} as="article">
            <div className={"equipment-photo"}>
              <img
                src={"assets/vive-eye-tracker.webp"}
                alt={"VIVE Focus 3 Eye Tracker attachment"}
                loading={"lazy"}
              />
            </div>
            <div className={"card-body"}>
              <span className={"small-index"}>{"EYE MOVEMENT"}</span>
              <h2>{"VIVE Focus 3 Eye Tracker"}</h2>
              <p>
                {
                  "\n                  The headset attachment measures gaze direction, pupil size,\n                  and eye openness, supporting analysis of where a driver looks\n                  during a VR scenario.\n                "
                }
              </p>
              <a
                href={
                  "https://business.vive.com/us/product/vive-focus-3-eye-tracker/"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Manufacturer details"}
              </a>
            </div>
          </Reveal>
          <Reveal className={"equipment-card"} as="article">
            <div className={"equipment-photo"}>
              <img
                src={"assets/vive-facial-tracker.png"}
                alt={"VIVE Focus series facial tracker compatible with Focus 3"}
                loading={"lazy"}
              />
            </div>
            <div className={"card-body"}>
              <span className={"small-index"}>{"FACIAL MOVEMENT"}</span>
              <h2>{"VIVE Focus 3 Facial Tracker"}</h2>
              <p>
                {
                  "\n                  The facial-tracking accessory captures movements of the lips,\n                  jaw, cheeks, and lower face during the immersive driving\n                  experience.\n                "
                }
              </p>
              <a
                href={
                  "https://developer.vive.com/us/hardware/focus-3-facial-tracker/"
                }
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {"Manufacturer details"}
              </a>
            </div>
          </Reveal>
        </div>
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
                {p === "results"
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
