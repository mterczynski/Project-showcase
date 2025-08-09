import { updateLandingPageViews } from "./counter.js";
import { initNavbarToggle } from "./toggle.js";

updateLandingPageViews();
initNavbarToggle();

const translations = {
  pl: {
    about: {
      title: "O mnie",
      intro:
        "Witam, nazywam się Michał Terczyński, jestem Frontend Developerem ze specjalizacją w tworzeniu gier i aplikacji internetowych. Zdobyłem doświadczenie w renomowanych firmach takich jak NetEnt, Yggdrasil Gaming i Software Mind, gdzie poszerzyłem wiedzę w zakresie tworzenia angażujących gier oraz wielomodułowych aplikacji biznesowych z wykorzystaniem TypeScript, React, Angular i PixiJS.",
      details:
        "Moje umiejętności techniczne obejmują nowoczesne frameworki JavaScript, tworzenie gier w PixiJS oraz budowanie skalowalnych aplikacji internetowych. Pasjonuję się tworzeniem wysokiej jakości, wydajnego kodu i chętnie podejmuję się zarówno projektów komercyjnych, jak i autorskich.",
    },
  },
  en: {
    about: {
      title: "About Me",
      intro:
        "Hi, I'm Michał Terczyński, a Frontend Developer with a strong focus on game development and interactive applications. With experience at companies like NetEnt, Yggdrasil Gaming, and Software Mind, I've developed expertise in creating engaging games and robust enterprise applications using TypeScript, React, Angular, and PixiJS.",
      details:
        "My technical skills include modern JavaScript frameworks, game development with PixiJS, and building scalable web applications. I'm passionate about creating high-quality, performant code and enjoy working on both commercial projects and personal game development endeavors.",
    },
  },
};

// Detect browser language
const userLang = navigator.language || navigator.userLanguage;
console.log(userLang.slice(0, 2));
const shortLang = userLang.slice(0, 2);
const selectedLang = shortLang === "pl" ? "pl" : "en";

// Apply translation
const t = translations[selectedLang];
document.getElementById("aboutTitle").innerText = t.about.title;
document.getElementById("aboutIntro").innerText = t.about.intro;
document.getElementById("aboutDetails").innerText = t.about.details;
