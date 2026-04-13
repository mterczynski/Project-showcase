import "./components/navbar.js";
import "./components/about.js";
import "./components/commercial_project.js";
import "./components/personal_project.js";
import "./components/notification.js";
import { updateLandingPageViews } from "./utils/counter.js";

// Call the function when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  updateLandingPageViews();
});

