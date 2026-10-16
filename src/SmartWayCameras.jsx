import React, { useState } from "react";

const camerasUrl = "https://smartway.tn.gov/allcams?region=Memphis";

export function SmartWayCameras() {
  const [visible, setVisible] = useState(false);
  return (
    <section
      className="real-world-cameras"
      aria-labelledby="camera-source-title"
    >
      <div className="camera-source-heading">
        <div>
          <p className="eyebrow">TDOT SMARTWAY · MEMPHIS</p>
          <h2 id="camera-source-title">Real-world camera data</h2>
          <p>
            Compare real-world Memphis traffic-camera observations from TDOT
            SmartWay with our simulated highway previews.
          </p>
        </div>
        <div className="camera-source-actions">
          <button
            type="button"
            className="button primary"
            aria-expanded={visible}
            aria-controls="smartway-camera-viewer"
            onClick={() => setVisible(!visible)}
          >
            {visible ? "Close camera viewer" : "View real-world cameras"}
          </button>
          <a href={camerasUrl} target="_blank" rel="noopener noreferrer">
            Open TDOT SmartWay in a new tab ↗
          </a>
        </div>
      </div>
      <p className="camera-source-note">
        External live-camera source, hosted by TDOT. Camera availability varies.
        These feeds are provided for visual reference; the simulator previews
        use simulated traffic and are not controlled by live camera data.
      </p>
      <div id="smartway-camera-viewer" hidden={!visible}>
        {visible && (
          <iframe
            src={camerasUrl}
            title="TDOT SmartWay Memphis real-world traffic cameras"
            loading="lazy"
            referrerPolicy="no-referrer"
            allowFullScreen
          />
        )}
      </div>
    </section>
  );
}
