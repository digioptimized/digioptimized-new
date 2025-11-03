import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// expose a mount flag so the page-overlay can inspect it for diagnostics
window.__APP_MOUNTED = false;
try {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  // mark success (may be synchronous); components may set additional state
  window.__APP_MOUNTED = true;
} catch (err) {
  window.__APP_MOUNT_ERROR = (err && err.stack) ? err.stack : String(err);
  // If mounting fails on a deployed site, show the error in the overlay added to index.html
  try {
    console.error('App mount error', err);
    var o = document.getElementById('app-error');
    var d = document.getElementById('app-error-details');
    if (o && d) {
      d.textContent = (err && err.stack) ? err.stack : String(err);
      o.style.display = 'block';
    }
  } catch (e) {
    console.error('Failed to display mount error overlay', e);
  }
  throw err;
}
