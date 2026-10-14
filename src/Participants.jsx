import React from "react";
import { motion } from "framer-motion";

const registrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfJbYrSZwFeICOqD8qS6jszm5v9oPCWeVnhXW5mbEOisKvWkg/viewform?usp=header";

export function Participants() {
  return (
    <section
      id="participants"
      className="page active"
      aria-labelledby="participants-title"
    >
      <div className="container section-block">
        <p className="eyebrow">JOIN THE STUDY</p>
        <h1 className="page-title" id="participants-title">
          Join the driving study
        </h1>
        <p className="lead">
          Help us understand how people respond to roadway warnings.
        </p>
        <div className="registration-layout study-registration">
          <div className="form-card registration-intro">
            <h2>Register for a session</h2>
            <p>
              Complete our short registration form with your contact details and
              preferred experiment date and time.
            </p>
            <p>
              <strong>Estimated experiment duration: 50–60 minutes.</strong>
            </p>
            <motion.a
              className="button primary"
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
            >
              Open registration form
            </motion.a>
            <p className="muted">
              Opens Google Forms. The research team will email you to confirm
              your session.
            </p>
            <p className="fine-print">
              Your registration is shared privately with the study team.
              Registration does not replace the study consent process.
            </p>
          </div>
          <aside
            className="register-card registration-qr"
            aria-labelledby="scan-title"
          >
            <h2 id="scan-title">Scan to register</h2>
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the study registration form"
            >
              <img
                src="assets/registration-qr.svg"
                alt="QR code linking to the C-TIER study registration form"
                width="240"
                height="240"
              />
            </a>
            <p className="muted">Use your phone’s camera to open the form.</p>
          </aside>
        </div>
        <ol className="study-steps">
          <li>Register</li>
          <li>Receive confirmation</li>
          <li>Attend your session</li>
        </ol>
        <p className="simple-contact">
          <a href="#results">Questions? Contact the study team →</a>
        </p>
      </div>
    </section>
  );
}
