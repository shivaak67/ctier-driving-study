export const columns = [
  ["participantId", "Participant ID"],
  ["sessionDate", "Experiment date"],
  ["experimentTime", "Experiment time (Memphis Central Time)"],
  ["ageGroup", "Age group"],
  ["gender", "Gender"],
  ["drivingYears", "Years driving"],
  ["occupation", "Occupation"],
  ["consentVerified", "Consent verified by researcher"],
  ["notes", "Session notes"],
];
// Spreadsheet formula prefixes can execute when a CSV is opened in Excel.
// Preserve values as text when they are potentially executable or have leading zeros.
export function csvCell(value) {
  let text = String(value ?? "");
  if (
    /^[\s\uFEFF]*[=+@-]/u.test(text) ||
    /^[\t\r\n]/u.test(text) ||
    /^0\d+$/.test(text)
  )
    text = "'" + text;
  return '"' + text.replaceAll('"', '""') + '"';
}
export function makeCsv(records) {
  return (
    "\uFEFF" +
    [
      columns.map(([, label]) => csvCell(label)).join(","),
      ...records.map((record) =>
        columns.map(([key]) => csvCell(record[key])).join(","),
      ),
    ].join("\r\n") +
    "\r\n"
  );
}
