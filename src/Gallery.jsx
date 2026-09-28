import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import items from "./environments.json";
export function Gallery() {
  const [index, setIndex] = useState(0);
  const [group, setGroup] = useState("All");
  const [direction, setDirection] = useState(1);
  const reduce = useReducedMotion();
  const thumbs = useRef(null);
  const slides =
    group === "All" ? items : items.filter((x) => x.group === group);
  const current = slides[index];
  function go(next) {
    const value = Math.max(0, Math.min(slides.length - 1, next));
    setDirection(value > index ? 1 : -1);
    setIndex(value);
    thumbs.current?.children[value]?.scrollIntoView({
      behavior: reduce ? "instant" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }
  return (
    <section
      className="container environment-gallery"
      aria-labelledby="gallery-title"
      aria-roledescription="carousel"
    >
      <p className="eyebrow">EXPLORE THE ENVIRONMENTS</p>
      <div className="section-heading">
        <div>
          <h2 id="gallery-title">One roadway. Changing conditions.</h2>
          <p>
            Slide through all 16 views from the simulation. Drag, swipe, or use
            the arrows.
          </p>
        </div>
        <span className="gallery-count" aria-live="polite">
          {index + 1} / {slides.length}
        </span>
      </div>
      <div className="gallery-filters" aria-label="Filter environments">
        {["All", "Time of day", "Rain", "Snow", "Wind", "Fog"].map((g) => (
          <motion.button
            key={g}
            type="button"
            aria-pressed={group === g}
            onClick={() => {
              setGroup(g);
              setIndex(0);
            }}
            whileTap={{ scale: 0.96 }}
          >
            {g}
          </motion.button>
        ))}
      </div>
      <div
        className="gallery-stage"
        tabIndex={0}
        aria-label="Environment images. Use left and right arrow keys."
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(index + 1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(index - 1);
          }
          if (e.key === "Home") {
            e.preventDefault();
            go(0);
          }
          if (e.key === "End") {
            e.preventDefault();
            go(slides.length - 1);
          }
        }}
      >
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.figure
            key={current.src}
            custom={direction}
            variants={{
              enter: (d) => ({ opacity: 0, x: reduce ? 0 : d * 35 }),
              center: { opacity: 1, x: 0 },
              exit: (d) => ({ opacity: 0, x: reduce ? 0 : -d * 35 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduce ? 0 : 0.2 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -45) go(index + 1);
              else if (info.offset.x > 45) go(index - 1);
            }}
            style={{ touchAction: "pan-y" }}
          >
            <div className="gallery-image-wrap">
              <img
                src={current.src}
                alt={`${current.title}: simulated highway from the driver's seat`}
                draggable="false"
                width="1280"
                height="720"
              />
              {[-1, 1].map((step) => (
                <motion.button
                  key={step}
                  type="button"
                  className={`gallery-overlay-arrow ${step < 0 ? "left" : "right"}`}
                  aria-label={step < 0 ? "Previous image" : "Next image"}
                  disabled={
                    step < 0 ? index === 0 : index === slides.length - 1
                  }
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={() => go(index + step)}
                  whileTap={reduce ? undefined : { scale: 0.94 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d={step < 0 ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              ))}
            </div>
            <figcaption>
              <div>
                <span className="small-index">{current.group}</span>
                <h3>{current.title}</h3>
                <p>{current.caption}</p>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="gallery-controls">
        <motion.button
          type="button"
          className="button secondary"
          disabled={index === 0}
          onClick={() => go(index - 1)}
          whileTap={{ scale: 0.96 }}
          aria-label="Previous environment"
        >
          ← Previous
        </motion.button>
        <p>Actual Unity screenshots · Defined simulation settings</p>
        <motion.button
          type="button"
          className="button secondary"
          disabled={index === slides.length - 1}
          onClick={() => go(index + 1)}
          whileTap={{ scale: 0.96 }}
          aria-label="Next environment"
        >
          Next →
        </motion.button>
      </div>
      <div
        ref={thumbs}
        className="gallery-thumbnails"
        aria-label="Choose an environment"
      >
        {slides.map((s, i) => (
          <button
            type="button"
            key={s.src}
            aria-label={`Show ${s.title}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => go(i)}
          >
            <img
              src={s.src}
              alt=""
              loading="lazy"
              width="160"
              height="90"
              draggable="false"
            />
            <span>{s.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
