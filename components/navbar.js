import { initNavbarToggle } from "../utils/toggle.js";

export class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <nav>
      <div class="main_logo">
        <img
          class="navbar-website-logo"
          src="assets/social-media/logo-v2-initials-only-cropped.png"
          alt="Website logo" />
        <div class="nav-logo-text-container span">
          <span class="nav-logo-text-black">M</span>
          <span class="nav-logo-text-blue">TER</span>
          <span class="nav-logo-text-black">.PL</span>
        </div>
      </div>
      <div class="navbar-right">
        <div class="logo">
          <div class="logo_close">
            <img
              src="assets/social-media/logo-v2-initials-only-cropped.png"
              alt="Website logo" />
            <div class="nav-logo-text-container">
              <span class="nav-logo-text-black_1">M</span>
              <span class="nav-logo-text-blue_2">TER</span>
              <span class="nav-logo-text-black_3">.PL</span>
            </div>
          </div>
          <div>
            <img
              class="close"
              src="./assets/close_24dp_1791C8_FILL0_wght400_GRAD0_opsz24.svg"
              style="pointer-events: auto"
              alt="Close menu" />
          </div>
        </div>
        <ul>
          <li>
            <div class="nav-icon-wrapper">
              <i class="fa-solid fa-envelope" style="color: #1791c8"></i>
            </div>
            <a class="navbar-link" href="mailto:mterczynski1@gmail.com">
              <h3 style="display: inline">mterczynski1@gmail.com</h3></a
            >
          </li>
          <li>
            <div class="nav-icon-wrapper">
              <i class="fa-solid fa-blog" style="color: #1791c8"></i>
            </div>
            <a class="navbar-link" href="https://www.mter.pl/blog">
              <h3 style="display: inline">Blog</h3>
            </a>
          </li>
          <li>
            <div class="nav-icon-wrapper">
              <i class="fa-solid fa-briefcase" style="color: #1791c8"></i>
            </div>

            <a
              class="navbar-link"
              href="https://www.mter.pl/cv_Michal_Terczynski.pdf">
              <h3 style="display: inline">CV</h3></a
            >
          </li>
          <li>
            <div class="nav-icon-wrapper">
              <i class="fa-brands fa-github" style="color: #1791c8"></i>
            </div>
            <a class="navbar-link" href="https://github.com/mterczynski">
              <h3 style="display: inline">GitHub</h3></a
            >
          </li>
          <li>
            <div class="nav-icon-wrapper">
              <i class="fa-brands fa-linkedin" style="color: #1791c8"></i>
            </div>
            <a
              class="navbar-link"
              href="https://www.linkedin.com/in/mterczynski">
              <h3 style="display: inline">LinkedIn</h3></a
            >
          </li>
        </ul>
      </div>
      <!-- toggle -->
      <div class="toggle">
        <img
          src="./assets/menu_30dp_1791C8_FILL0_wght400_GRAD0_opsz24.svg"
          alt="menu" />
      </div>
    </nav>
    `;
    initNavbarToggle(this);
  }
}
customElements.define("app-navbar", Navbar);
