document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle");
  const navbarRight = document.querySelector(".navbar-right");
  const closeButton = document.querySelector(".close");

  console.log(closeButton);

  // Toggle the menu on clicking the toggle button
  toggleButton.addEventListener("click", () => {
    navbarRight.classList.toggle("active");
  });

  // Toggle the menu on clicking the close button
  const toggleMenu = () => {
    navbarRight.classList.toggle("active");
  };

  closeButton.addEventListener("click", toggleMenu);
});
