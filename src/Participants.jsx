import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { makeCsv } from "../csv.js";
function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
export function Participants() {
  const [records, setRecords] = useState([]);
  const [status, setStatus] = useState("");
  const [exportStatus, setExportStatus] = useState("");
  const [exportFile, setExportFile] = useState(null);
  const [downloaded, setDownloaded] = useState(true);
  const downloadLink = useRef(null);
  useEffect(() => {
    const listener = (e) => {
      if (records.length && !downloaded) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", listener);
    return () => window.removeEventListener("beforeunload", listener);
  }, [records, downloaded]);
  useEffect(() => {
    if (exportFile) downloadLink.current?.click();
  }, [exportFile]);
  function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const record = Object.fromEntries(new FormData(form));
    record.participantId = record.participantId.trim();
    record.consentVerified = "Yes";
    if (
      records.some(
        (r) =>
          r.participantId.toLowerCase() ===
            record.participantId.toLowerCase() &&
          r.sessionDate === record.sessionDate,
      )
    ) {
      setStatus(
        "That participant ID already has a record on this date. Use a distinct session ID for a second run.",
      );
      return;
    }
    setRecords([...records, record]);
    setDownloaded(false);
    setExportFile(null);
    form.reset();
    setStatus(
      `${record.participantId} added. Download the spreadsheet to save your register.`,
    );
    setExportStatus("");
    form.elements.participantId.focus();
  }
  function remove(record) {
    setRecords(records.filter((r) => r !== record));
    setDownloaded(false);
    setExportFile(null);
    setExportStatus(
      "Record removed. Download again to save the current register.",
    );
  }
  function download(rows, name) {
    setExportFile({
      name,
      href: "data:text/csv;charset=utf-8," + encodeURIComponent(makeCsv(rows)),
    });
    if (rows === records) setDownloaded(true);
    setExportStatus(
      "Spreadsheet download started. Check your Downloads folder.",
    );
  }
  return (
    <section
      id={"participants"}
      className={"page active"}
      aria-labelledby={"participants-title"}
    >
      <div className={"container section-block"}>
        <p className={"eyebrow"}>{"RESEARCHER WORKSPACE"}</p>
        <div className={"section-heading"}>
          <div>
            <h1 className={"page-title"} id={"participants-title"}>
              {"\n                Participant register.\n              "}
            </h1>
            <p className={"lead"}>
              {
                "\n                Prepare session details and download a spreadsheet.\n              "
              }
            </p>
          </div>
          <span className={"privacy-pill"}>{"Stored in this tab only"}</span>
        </div>
        <div className={"notice"}>
          <strong>{"Download before closing this page."}</strong>
          {
            " Entries are kept\n            in memory and disappear on refresh. Use participant IDs instead of\n            names. This register does not replace your study's consent process.\n          "
          }
        </div>
        <div className={"registration-layout"}>
          <form
            id={"participant-form"}
            className={"form-card"}
            onSubmit={submit}
          >
            <h2>{"Add a participant"}</h2>
            <p className={"muted"}>{"Fields marked * are required."}</p>
            <div className={"form-grid"}>
              <label>
                {"Participant ID *"}
                <input
                  name={"participantId"}
                  required
                  maxLength={"64"}
                  placeholder={"e.g. P001"}
                  autoComplete={"off"}
                  pattern={"[A-Za-z0-9_-]+"}
                  title={"Use letters, numbers, hyphens, or underscores."}
                />
              </label>
              <label>
                {"Session date *"}
                <input
                  name={"sessionDate"}
                  type={"date"}
                  required
                  defaultValue={today()}
                />
              </label>
              <label>
                {"Age group"}
                <select name={"ageGroup"}>
                  <option value={""}>{"Not recorded"}</option>
                  <option>{"18\u201324"}</option>
                  <option>{"25\u201334"}</option>
                  <option>{"35\u201344"}</option>
                  <option>{"45\u201354"}</option>
                  <option>{"55\u201364"}</option>
                  <option>{"65+"}</option>
                  <option>{"Prefer not to say"}</option>
                </select>
              </label>
              <label>
                {"Gender"}
                <select name={"gender"}>
                  <option value={""}>{"Not recorded"}</option>
                  <option>{"Woman"}</option>
                  <option>{"Man"}</option>
                  <option>{"Non-binary"}</option>
                  <option>{"Self-described"}</option>
                  <option>{"Prefer not to say"}</option>
                </select>
              </label>
              <label>
                {"Years of driving experience"}
                <input
                  name={"drivingYears"}
                  type={"number"}
                  min={"0"}
                  max={"100"}
                  step={"1"}
                  placeholder={"Optional"}
                />
              </label>
              <label>
                {"Scenario *"}
                <select name={"scenario"} required>
                  <option value={""}>{"Select a scenario"}</option>
                  <option>{"Straight roadway \u2014 shoulder stop"}</option>
                  <option>{"Straight roadway \u2014 outer-lane stop"}</option>
                  <option>{"Curve roadway"}</option>
                  <option>{"Uphill roadway"}</option>
                  <option>{"Other / custom route"}</option>
                </select>
              </label>
              <label>
                {"Warning condition"}
                <select name={"warning"}>
                  <option>{"Not assigned"}</option>
                  <option>{"No warning"}</option>
                  <option>{"Triangle"}</option>
                  <option>{"Beacon"}</option>
                  <option>{"LED screen"}</option>
                  <option>{"V2V dashboard"}</option>
                  <option>{"V2V navigation"}</option>
                </select>
              </label>
              <label>
                {"Display mode"}
                <select name={"display"}>
                  <option>{"Desktop"}</option>
                  <option>{"VIVE Focus 3"}</option>
                </select>
              </label>
              <label className={"full"}>
                {"Session notes"}
                <textarea
                  name={"notes"}
                  rows={"3"}
                  maxLength={"500"}
                  placeholder={
                    "Optional session notes. Do not enter names or contact information."
                  }
                ></textarea>
              </label>
              <label className={"full check-label"}>
                <input name={"consentVerified"} type={"checkbox"} required />
                <span>
                  {
                    "I have verified that the required study consent has been\n                    completed. *"
                  }
                </span>
              </label>
            </div>
            <motion.button
              className={"button primary"}
              type={"submit"}
              whileTap={{ scale: 0.97 }}
            >
              {"\n                Add to register "}
              <span aria-hidden={"true"}>{"+"}</span>
            </motion.button>
            <p role="status" className="status">
              {status}
            </p>
          </form>
          <aside className={"register-card"}>
            <div className={"register-title"}>
              <h2>{"Session register"}</h2>
              <span className="count">{records.length}</span>
            </div>
            <p className={"muted"}>
              {"One row per participant and session date."}
            </p>
            <div
              id={"empty-register"}
              className={"empty"}
              hidden={records.length > 0}
            >
              <span aria-hidden={"true"}>{"\u25a4"}</span>
              <h3>{"No participants yet"}</h3>
              <p>{"Add the first participant using the form."}</p>
            </div>
            <ul className="record-list" aria-label="Participant records">
              <AnimatePresence initial={false}>
                {records.map((r) => (
                  <motion.li
                    key={r.participantId + r.sessionDate}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <strong>{r.participantId}</strong>
                      <small>
                        {r.sessionDate} · {r.scenario}
                      </small>
                    </div>
                    <button
                      type="button"
                      className="remove-record"
                      aria-label={"Remove " + r.participantId}
                      onClick={() => remove(r)}
                    >
                      Remove
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
            <motion.button
              id={"download-csv"}
              className={"button primary full-button"}
              whileTap={{ scale: 0.97 }}
              disabled={!records.length}
              onClick={() =>
                download(records, `ctier-participants-${today()}.csv`)
              }
            >
              {"\n                Download spreadsheet \u2193"}
            </motion.button>
            <motion.button
              id={"download-template"}
              className={"text-button"}
              whileTap={{ scale: 0.97 }}
              onClick={() => download([], "ctier-participant-template.csv")}
            >
              {"\n                Download blank CSV template\n              "}
            </motion.button>
            <p className={"fine-print"}>
              {
                "\n                Excel-compatible CSV \u00b7 no account required"
              }
              <br />
              {"Nothing is sent\n                to a server.\n              "}
            </p>
            <p role="status" className="status">
              {exportStatus}
            </p>
            <a
              ref={downloadLink}
              className="text-button"
              hidden={!exportFile}
              href={exportFile?.href}
              download={exportFile?.name}
            >
              {exportFile ? "Save " + exportFile.name : ""}
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
