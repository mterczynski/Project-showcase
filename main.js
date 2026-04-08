import "./components/Navbar.js";
import "./components/About.js";
import "./components/Commercial_project.js";
import "./components/Personal_project.js";
import { updateLandingPageViews } from "./utils/counter.js";

// Call the function when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  updateLandingPageViews();
});
