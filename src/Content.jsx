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
          <p className="project-code">PRO-FY2026-481</p>
          <p className={"lead"}>
            {
              "\n              A controlled environment to explore how drivers respond to stopped\n              trucks, roadway conditions, and warning systems.\n            "
            }
          </p>
          <div className={"actions"}>
            <a className={"button primary"} href={"#participants"}>
              {"Register a participant "}
              <span aria-hidden={"true"}>{"\u2197"}</span>
            </a>
            <a className={"text-link"} href={"#results"}>
              {"Explore session results \u2192"}
            </a>
          </div>
          <div className={"hero-notes"}>
            <span>{"Unity simulation"}</span>
            <span>{"Vehicle telemetry"}</span>
            <span>{"Skin conductance"}</span>
          </div>
        </div>
        <figure className={"hero-visual"}>
          <img
            src={"assets/roadway.png"}
            alt={
              "Aerial view of the study's simulated divided highway with ramps"
            }
            fetchpriority={"high"}
          />
          <div className={"visual-overlay"}>
            <span className={"image-label"}>
              {"THE VIRTUAL TEST ENVIRONMENT"}
            </span>
            <strong>
              {"Real decisions."}
              <br />
              {"Controlled conditions."}
            </strong>
            <span className={"image-caption"}>
              {"Straight roadway \u00b7 shoulder-stop scenario"}
            </span>
          </div>
          <figcaption>
            {
              "\n              Actual simulation environment from the study\n            "
            }
          </figcaption>
        </figure>
      </div>
      <div className={"container research-strip"}>
        <div>
          <span className={"strip-number"}>{"01"}</span>
          <strong>{"Drive the scenario"}</strong>
          <p>{"Complete a goal-oriented route in the simulator."}</p>
        </div>
        <div>
          <span className={"strip-number"}>{"02"}</span>
          <strong>{"Capture the response"}</strong>
          <p>{"Record driving behavior and physiological signals."}</p>
        </div>
        <div>
          <span className={"strip-number"}>{"03"}</span>
          <strong>{"Review the evidence"}</strong>
          <p>{"Explore vehicle, traffic, and skin-conductance data."}</p>
        </div>
      </div>
      <div className={"container section-block"}>
        <div className={"section-heading"}>
          <div>
            <p className={"eyebrow"}>{"THE STUDY"}</p>
            <h2>{"One drive. Multiple perspectives."}</h2>
          </div>
          <p>
            {
              "\n              Bring road conditions, driver actions, and measured responses into\n              the same research workflow.\n            "
            }
          </p>
        </div>
        <Reveal className={"perspectives"} as="div">
          <Reveal as="article">
            <span className={"small-index"}>{"01 / ROADWAY"}</span>
            <h3>{"The driving environment"}</h3>
            <p>
              {
                "\n                Study a stopped-truck encounter within a simulated highway.\n                Route completion provides a clear end to each driving task.\n              "
              }
            </p>
          </Reveal>
          <Reveal as="article">
            <span className={"small-index"}>{"02 / BEHAVIOR"}</span>
            <h3>{"The driver's decisions"}</h3>
            <p>
              {
                "\n                Review speed, steering, throttle, braking, and proximity to the\n                truck alongside surrounding traffic.\n              "
              }
            </p>
          </Reveal>
          <Reveal as="article">
            <span className={"small-index"}>{"03 / RESPONSE"}</span>
            <h3>{"The recorded signal"}</h3>
            <p>
              {
                "\n                Inspect Shimmer skin-conductance measurements and iMotions event\n                markers alongside simulation data.\n              "
              }
            </p>
          </Reveal>
        </Reveal>
      </div>
      <div className={"container support"}>
        <div>
          <p className={"eyebrow"}>{"RESEARCH AT THE UNIVERSITY OF MEMPHIS"}</p>
          <h2>
            {"Connected research."}
            <br />
            {"Safer transportation."}
          </h2>
        </div>
        <div className={"funding"}>
          <span>{"Funding acknowledgement"}</span>
          <strong>{"NSF\u2013IUCRC"}</strong>
          <p>
            {"\n              National Science Foundation"}
            <br />
            {
              "Industry\u2013University Cooperative\n              Research Centers\n            "
            }
          </p>
          <a
            href={"https://iucrc.nsf.gov/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            {"About the program \u2197"}
          </a>
        </div>
      </div>
      <section
        className="container simulation-demo"
        aria-labelledby="project-video-title"
      >
        <p className="eyebrow">PROJECT OVERVIEW</p>
        <div className="section-heading">
          <h2 id="project-video-title">Explore the project.</h2>
          <a
            href="https://www.youtube.com/watch?v=C8hefs8Mqak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube ↗
          </a>
        </div>
        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/C8hefs8Mqak"
            title="C-TIER project overview video"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>
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
            {"Watch on YouTube \u2197"}
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
                {"Manufacturer details \u2197"}
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
                {"Manufacturer details \u2197"}
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
                {"Manufacturer image & details \u2197"}
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
                {"Manufacturer details \u2197"}
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
                {"Manufacturer details \u2197"}
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal className={"workflow"} as="div">
          <div>
            <p className={"eyebrow"}>{"RECORDING WORKFLOW"}</p>
            <h2>{"From simulation to analysis."}</h2>
            <p>
              {
                "\n                Unity sends event markers to iMotions on the collection laptop.\n                Recording and marker checks are required for each session; this\n                website does not control either application.\n              "
              }
            </p>
          </div>
          <ol>
            <li>
              <strong>{"Unity"}</strong>
              <span>{"Route events & vehicle telemetry"}</span>
            </li>
            <li>
              <strong>{"iMotions + Shimmer"}</strong>
              <span>{"Physiological signals & received markers"}</span>
            </li>
            <li>
              <strong>{"Session dashboard"}</strong>
              <span>{"Review recordings and exploratory relationships"}</span>
            </li>
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
export function Header({ page, pages }) {
  return (
    <>
      <div className={"university-bar"}>
        <div className={"container"}>
          <span>{"UNIVERSITY OF MEMPHIS"}</span>
          <span>
            {"Center for Transportation Innovations in Education and Research"}
          </span>
        </div>
      </div>
      <header className={"header"}>
        <div className={"container header-inner"}>
          <a
            href={"#overview"}
            className={"brand"}
            aria-label={"C-TIER Study home"}
          >
            <img
              src={"assets/university.png"}
              alt={"University of Memphis"}
              width={"164"}
            />
            <span className={"brand-divider"}></span>
            <span>
              <strong>{"C-TIER"}</strong>
              <small>{"Driving Research"}</small>
            </span>
          </a>
          <nav aria-label="Main navigation">
            {pages.map((p) => (
              <a
                key={p}
                href={"#" + p}
                aria-current={page === p ? "page" : undefined}
              >
                {p[0].toUpperCase() + p.slice(1)}
                {page === p && (
                  <motion.span
                    className="nav-indicator"
                    layoutId="nav-indicator"
                  />
                )}
              </a>
            ))}
          </nav>
          <span className={"local-badge"}>
            <i></i>
            {"Study workspace"}
          </span>
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
          <span>{"NSF\u2013IUCRC"}</span>
          <a
            href={"https://memphisregionsltravelsurvey.netlify.app/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            {"Related C-TIER research \u2197"}
          </a>
          <a
            href={"https://www.youtube.com/watch?v=NfMQfq5Bkow"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            {"FLEET project video \u2197"}
          </a>
        </div>
      </div>
    </footer>
  );
}
