import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { Header, Footer, Overview, Equipment } from "./Content.jsx";
import { Participants } from "./Participants.jsx";
import { Results } from "./Results.jsx";
const pages = ["overview", "equipment", "participants", "results"];
const getPage = () =>
  pages.includes(location.hash.slice(1)) ? location.hash.slice(1) : "overview";
function App() {
  const [page, setPage] = useState(getPage);
  const main = useRef(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const listener = () => {
      if (location.hash === "#main") {
        main.current?.focus();
        return;
      }
      setPage(getPage());
      window.scrollTo(0, 0);
      main.current?.focus({ preventScroll: true });
    };
    window.addEventListener("hashchange", listener);
    return () => window.removeEventListener("hashchange", listener);
  }, []);
  useEffect(() => {
    document.title =
      page[0].toUpperCase() + page.slice(1) + " · C-TIER Driving Study";
  }, [page]);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header page={page} pages={pages} />
      <main id="main" ref={main} tabIndex={-1}>
        {pages.map((id, i) => (
          <motion.div
            key={id}
            hidden={page !== id}
            initial={false}
            animate={
              page === id
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: reduce ? 0 : 10 }
            }
            transition={{ duration: reduce ? 0 : 0.28 }}
          >
            {[<Overview />, <Equipment />, <Participants />, <Results />][i]}
          </motion.div>
        ))}
      </main>
      <Footer />
    </>
  );
}
createRoot(document.getElementById("root")).render(
  <MotionConfig reducedMotion="user">
    <App />
  </MotionConfig>,
);
