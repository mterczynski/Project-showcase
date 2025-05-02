export function viewCv() {
  console.log("cv");
  let button = document.querySelector(".cv_view");

  button.addEventListener("click", function () {
    // button.style.transform = "scale(0.8)";
    window.open("assets/cv/cv Michal Terczynski.pdf", "_blank");
  });
}
