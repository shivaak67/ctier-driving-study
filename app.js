import { makeCsv } from "./csv.js";
const $ = (selector) => document.querySelector(selector);
const records = [];
let downloaded = true;

function navigate() {
  const id = ["overview", "equipment", "participants", "results"].includes(
    location.hash.slice(1),
  )
    ? location.hash.slice(1)
    : "overview";
  document.querySelectorAll(".page").forEach((page) => {
    page.hidden = page.id !== id;
    page.classList.toggle("active", page.id === id);
  });
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.hash === "#" + id) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  document.title = `${id[0].toUpperCase() + id.slice(1)} · C-TIER Driving Study`;
  window.scrollTo(0, 0);
}
window.addEventListener("hashchange", () => {
  navigate();
  $("#main").focus({ preventScroll: true });
});
$(".skip").addEventListener("click", (event) => {
  event.preventDefault();
  $("#main").focus();
});
navigate();

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
$("#participant-form").elements.sessionDate.value = today();
function renderRecords() {
  $("#export-file").hidden = true;
  $("#export-file").removeAttribute("href");
  $("#record-count").textContent = records.length;
  $("#empty-register").hidden = records.length > 0;
  $("#download-csv").disabled = !records.length;
  $("#record-list").replaceChildren(
    ...records.map((record, index) => {
      const item = document.createElement("li");
      const info = document.createElement("div");
      const name = document.createElement("strong");
      name.textContent = record.participantId;
      const details = document.createElement("small");
      details.textContent = `${record.sessionDate} · ${record.scenario}`;
      info.append(name, details);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "remove-record";
      remove.textContent = "Remove";
      remove.setAttribute("aria-label", `Remove ${record.participantId}`);
      remove.addEventListener("click", () => {
        records.splice(index, 1);
        downloaded = false;
        renderRecords();
        $("#export-status").textContent =
          "Record removed. Download again to save the current register.";
      });
      item.append(info, remove);
      return item;
    }),
  );
}
$("#participant-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const record = Object.fromEntries(new FormData(form));
  record.participantId = record.participantId.trim();
  record.consentVerified = "Yes";
  if (
    records.some(
      (r) =>
        r.participantId.toLowerCase() === record.participantId.toLowerCase() &&
        r.sessionDate === record.sessionDate,
    )
  ) {
    $("#form-status").textContent =
      "That participant ID already has a record on this date. Use a distinct session ID for a second run.";
    return;
  }
  records.push(record);
  downloaded = false;
  renderRecords();
  form.reset();
  form.elements.sessionDate.value = today();
  $("#form-status").textContent =
    `${record.participantId} added. Download the spreadsheet to save your register.`;
  $("#export-status").textContent = "";
  form.elements.participantId.focus();
});
function download(rows, filename) {
  const link = $("#export-file");
  link.href =
    "data:text/csv;charset=utf-8," + encodeURIComponent(makeCsv(rows));
  link.download = filename;
  link.hidden = false;
  link.textContent = "Save " + filename;
  link.click();
}
$("#download-csv").addEventListener("click", () => {
  download(records, `ctier-participants-${today()}.csv`);
  downloaded = true;
  $("#export-status").textContent =
    "Spreadsheet download started. Check your Downloads folder.";
});
$("#download-template").addEventListener("click", () =>
  download([], "ctier-participant-template.csv"),
);
window.addEventListener("beforeunload", (event) => {
  if (records.length && !downloaded) {
    event.preventDefault();
    event.returnValue = "";
  }
});

function showDashboard(html, label) {
  $("#dashboard-frame").srcdoc = html;
  $("#dashboard-frame").hidden = false;
  $("#dashboard-placeholder").hidden = true;
  $("#dashboard-status").textContent = label + " · local file, not uploaded";
}
$("#dashboard-file").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  if (!/\.html?$/i.test(file.name) || file.size > 25 * 1024 * 1024) {
    $("#dashboard-status").textContent =
      "Choose an HTML dashboard smaller than 25 MB.";
    return;
  }
  try {
    showDashboard(await file.text(), file.name);
  } catch {
    $("#dashboard-status").textContent =
      "Unable to read this file. Try selecting it again.";
  }
});
try {
  const response = await fetch("private-data/dashboard.html");
  if (response.ok)
    showDashboard(await response.text(), "Straight-road combined dashboard");
  else
    $("#dashboard-status").textContent =
      "Choose a local dashboard HTML file to view results.";
} catch {
  $("#dashboard-status").textContent =
    "Choose a local dashboard HTML file to view results.";
}
