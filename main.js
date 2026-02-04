import { updateLandingPageViews } from "./counter.js";
import { initNavbarToggle } from "./toggle.js";

updateLandingPageViews();
initNavbarToggle();

const translations = {
  pl: {
    title: "Mter.pl - aplikacje internetowe",
    about: {
      title: "O mnie",
      intro:
        "Witam, nazywam się Michał Terczyński, jestem Frontend Developerem ze specjalizacją w tworzeniu gier i aplikacji internetowych. Zdobyłem doświadczenie w renomowanych firmach takich jak NetEnt, Yggdrasil Gaming i Software Mind, gdzie poszerzyłem wiedzę w zakresie tworzenia angażujących gier oraz wielomodułowych aplikacji biznesowych z wykorzystaniem TypeScript, React, Angular i PixiJS. Posiadam certyfikaty AWS Certified Cloud Practitioner, AWS Certified AI Practitioner oraz Microsoft Certified: Azure Fundamentals.",
      details:
        "Moje umiejętności techniczne obejmują nowoczesne frameworki JavaScript, tworzenie gier w PixiJS oraz budowanie skalowalnych aplikacji internetowych. Pasjonuję się tworzeniem wysokiej jakości, wydajnego kodu i chętnie podejmuję się zarówno projektów komercyjnych, jak i autorskich.",
    },
    projects: {
      commercial: "Projekty komercyjne",
      personal: "Projekty osobiste",
    },
    accessNotice: {
      title: "Informacja o dostępności",
      description: "Proszę mieć na uwadze, że niektóre z powyższych stron internetowych mogą być niedostępne w Państwa kraju. W razie potrzeby sugerujemy skorzystanie z usługi VPN."
    },
    projectDescriptions: {
      commercial: {
        "boom-boom-boom": "Boom Boom Boom™ to amerykański automat wideo 5x3 z dzikimi mnożnikami i respinami.",
        "gemone-onyx": "Onyx to system zarządzania flotą dla zróżnicowanych flot przemysłowych, obsługujący wszystkie marki i modele maszyn. Umożliwia integrację różnych typów trackerów – zarówno od GemOne, jak i innych dostawców – i monitoruje flotę w czasie rzeczywistym.",
        "aloha-christmas": "Aloha! Christmas™ to 6x6 automat wideo od NetEnt™ z mechaniką Cluster Pays™. Zawiera symbole dzikich mnożników, symbole tajemnicze, respiny Sticky Win, darmowe spiny Tiki Bar oraz Tiki Bar Max.",
        "trickstar-spins": "Zapełnienie wszystkich trzech rolek tym samym symbolem daje mnożnik do x10. Dostępne są respiny z lepkimi symbolami, a trafienie symbolu jackpota odblokowuje grę bonusową z nagrodą do x500 stawki.",
        "super-striker": "Super Striker™ to automat wideo 3x3 od NetEnt™, oferujący wielopoziomowe darmowe spiny, funkcję Złotego Mnożnika i kupony zakładów. Złoty scatter w grze głównej daje natychmiastową wygraną, a trzy scattery aktywują 5-poziomowe darmowe spiny z rosnącym mnożnikiem.",
        "hackers-haven": "Wysokonapięciowy slot, w którym cyberprzestępca z dark webu dostarcza elektryzujące wygrane.",
        "hammer-cash": "Hammer Cash™ to automat wideo 5x3 z funkcją Hammer Jackpot, darmowymi spinami, opcją zakupu bonusu, symbolami błyskawicy i rozszerzającymi się rolkami."
      },
      personal: {
        "paint": "Remake programu Paint stworzony w React.js i Redux (w trakcie prac).",
        "kulki": "Autorska wersja gry Color Lines z własną implementacją algorytmu A* w JavaScripcie.",
        "level-editor": "Edytor poziomów dla gier 2D i 3D.",
        "sudoku-solver": "Aplikacja do rozwiązywania łamigłówek Sudoku – częściowo lub w pełni.",
        "mine-sweeper": "Gra Saper zbudowana w React.js.",
        "snake": "Gra Snake napisana w JavaScripcie.",
        "joi-schema-generator": "Narzędzie generujące schematy walidacji Joi na podstawie przykładowych danych wejściowych.",
        "tetris": "Gra Tetris napisana w JavaScripcie i testowana z wykorzystaniem Jest.",
        "sensors": "Projekt wykorzystujący autorskie rozwiązania uczenia maszynowego (w trakcie prac).",
        "space-golf-3d": "Symulator 3D lotu piłeczki golfowej przez kosmos z własnym silnikiem fizycznym.",
        "chess": "Gra w szachy dla jednego i wielu graczy.",
        "code-clicker": "Klon Cookie Clicker w klimacie Visual Studio Code.",
        "line-art-generator": "Generator grafiki liniowej oparty na algorytmach – bez użycia AI."
      }
    },
  },
  en: {
    title: "Mter.pl - web apps",
    about: {
      title: "About Me",
      intro:
        "Hi, I'm Michał Terczyński, a Frontend Developer with a strong focus on game development and interactive applications. With experience at companies like NetEnt, Yggdrasil Gaming, and Software Mind, I've developed expertise in creating engaging games and robust enterprise applications using TypeScript, React, Angular, and PixiJS. I am an AWS Certified Cloud Practitioner, AWS Certified AI Practitioner, and hold the Microsoft Certified: Azure Fundamentals credential.",
      details:
        "My technical skills include modern JavaScript frameworks, game development with PixiJS, and building scalable web applications. I'm passionate about creating high-quality, performant code and enjoy working on both commercial projects and personal game development endeavors.",
    },
    projects: {
      commercial: "Commercial Projects",
      personal: "Personal Projects",
    },
    accessNotice: {
      title: "Access notice",
      description: "Please note that some of the websites linked above may not be accessible in your country. If necessary, consider using a VPN service."
    },
    projectDescriptions: {
      commercial: {
        "boom-boom-boom": "Boom Boom Boom™ is an American-themed 5-reel, 3-row video slot featuring Wild Multipliers and the hold and respin feature on multiple reel sets.",
        "gemone-onyx": "Onyx is a fleet management solution for mixed industrial fleets which accommodates all makes and models of machines and integrates different types of trackers, integrating different types of trackers from both GemOne and other suppliers. Onyx monitors mixed fleets in real time.",
        "aloha-christmas": "Aloha! Christmas™ is a 6-reel, 6-row video slot from NetEnt™ with the Cluster Pays™ mechanic, featuring Multiplier Wild symbols, Mystery symbols, the Sticky Win Re-Spins, Tiki Bar Free Spins and Tiki Bar Max Free Spins.",
        "trickstar-spins": "Players who fill all three reels with the same symbol can reap up to a 10x multiplier. Respins with sticky symbols are possible. Players who land a Jackpot Symbol may get a chance at spooking up to an x500 bet in the Jackpot Bonus Game.",
        "super-striker": "Super Striker™ is a 3-reel, 3-row video slot from NetEnt™, featuring multi-level Free Spins, the Golden Multiplier feature and the Bet Slip feature. Striking a Golden Scatter in the main game awards an instant win, while a hat-trick of three Scatter symbols activates 5-level Free Spins with an increasing Level Multiplier.",
        "hackers-haven": "A high-voltage slot experience where a geeky cyber-criminal dials into the dark web to deliver electrifying wins.",
        "hammer-cash": "Hammer Cash™ is a 5-reel, 3-row video slot featuring instant jackpot Hammer Feature, Free Spins, Buy Free Spins, blitz symbols, expanding reels."
      },
      personal: {
        "paint": "A Paint remake built using React.js and Redux (work in progress)",
        "kulki": "A custom version of the Color Lines game, featuring a custom JavaScript implementation of the A* algorithm",
        "level-editor": "Level Editor for 2D and 3D games",
        "sudoku-solver": "A program for solving Sudoku puzzles, either partially or completely",
        "mine-sweeper": "Mine sweeper made with React.js",
        "snake": "Snake game written with JavaScript",
        "joi-schema-generator": "A tool that helps developers with creating validation schemas by automatically generating them based on example input values",
        "tetris": "Tetris game made with JavaScript, tested with Jest",
        "sensors": "A project utilizing custom machine learning solution (work in progress)",
        "space-golf-3d": "A 3D simulation of a golf ball moving through space among planets, featuring custom physics",
        "chess": "A single and multi player chess game",
        "code-clicker": "Cookie Clicker clone with VS Code theme",
        "line-art-generator": "Algorithmic line art generator - no AI used"
      }
    }
  },
};

// Detect browser language
const userLang = navigator.language || navigator.userLanguage;
console.log(userLang.slice(0, 2));
const shortLang = userLang.slice(0, 2);
const selectedLang = shortLang === "pl" ? "pl" : "en";

// Apply translation
const t = translations[selectedLang];

document.title = t.title;

document.getElementById("aboutTitle").innerText = t.about.title;
document.getElementById("aboutIntro").innerText = t.about.intro;
document.getElementById("aboutDetails").innerText = t.about.details;

document.getElementById("commercial-projects-title").innerText = t.projects.commercial;
document.getElementById("personal-projects-title").innerText = t.projects.personal;

document.getElementById("access-notice-title").innerText = t.accessNotice.title;
document.getElementById("access-notice-description").innerText = t.accessNotice.description;

// Apply translations to commercial project descriptions
if (t.projectDescriptions && t.projectDescriptions.commercial) {
  Object.keys(t.projectDescriptions.commercial).forEach(projectId => {
    const element = document.getElementById(projectId + "-description");
    if (element) {
      element.innerText = t.projectDescriptions.commercial[projectId];
    }
  });
}

// Apply translations to personal project descriptions
if (t.projectDescriptions && t.projectDescriptions.personal) {
  Object.keys(t.projectDescriptions.personal).forEach(projectId => {
    const element = document.getElementById(projectId + "-description");
    if (element) {
      element.innerText = t.projectDescriptions.personal[projectId];
    }
  });
}
