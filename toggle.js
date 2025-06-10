// navbarToggle.js
export function initNavbarToggle() {
  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle");
    const navbarRight = document.querySelector(".navbar-right");
    const closeButton = document.querySelector(".close");

    const toggleMenu = () => {
      console.log("clciked");
      navbarRight.classList.toggle("active");
    };

    if (toggleButton) {
      toggleButton.addEventListener("click", toggleMenu);
    }

    if (closeButton) {
      closeButton.addEventListener("click", toggleMenu);
    }
  });
}
