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
        "Witam, nazywam się Michał Terczyński, jestem Frontend Developerem ze specjalizacją w tworzeniu gier i aplikacji internetowych. Zdobyłem doświadczenie w renomowanych firmach takich jak NetEnt, Yggdrasil Gaming i Software Mind, gdzie poszerzyłem wiedzę w zakresie tworzenia angażujących gier oraz wielomodułowych aplikacji biznesowych z wykorzystaniem TypeScript, React, Angular i PixiJS.",
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
        "boom-boom-boom": "Boom Boom Boom™ to amerykański 5-bębnowy, 3-rzędowy automat do gier wideo z dzikimi mnożnikami i funkcją wstrzymania i ponownego obrotu na wielu zestawach bębnów.",
        "gemone-onyx": "Onyx to rozwiązanie do zarządzania flotą dla mieszanych flot przemysłowych, które obsługuje wszystkie marki i modele maszyn oraz integruje różne typy trackerów, zarówno od GemOne, jak i od innych dostawców. Onyx monitoruje mieszane floty w czasie rzeczywistym.",
        "aloha-christmas": "Aloha! Christmas™ to 6-bębnowy, 6-rzędowy automat wideo od NetEnt™ z mechaniką Cluster Pays™, zawierający symbole dzikich mnożników, symbole tajemnicze, ponowne obroty Sticky Win, darmowe obroty Tiki Bar i darmowe obroty Tiki Bar Max.",
        "trickstar-spins": "Gracze, którzy wypełnią wszystkie trzy bębny tym samym symbolem, mogą uzyskać mnożnik do 10x. Możliwe są ponowne obroty z lepkimi symbolami. Gracze, którzy trafią symbol jackpota, mogą mieć szansę na wygranie do x500 zakładu w grze bonusowej jackpota.",
        "super-striker": "Super Striker™ to 3-bębnowy, 3-rzędowy automat wideo od NetEnt™, zawierający wielopoziomowe darmowe obroty, funkcję złotego mnożnika i funkcję kuponu zakładów. Trafienie złotego rozrzutka w grze głównej nagradza natychmiastową wygraną, podczas gdy hat-trick trzech symboli rozrzutka aktywuje 5-poziomowe darmowe obroty z rosnącym mnożnikiem poziomu.",
        "hackers-haven": "Wysokonapięciowe doświadczenie z automatem, gdzie geekowski cyberprzestępca łączy się z dark webem, aby dostarczyć elektryzujące wygrane.",
        "hammer-cash": "Hammer Cash™ to 5-bębnowy, 3-rzędowy automat wideo z natychmiastową funkcją jackpota Hammer, darmowymi obrotami, kupowaniem darmowych obrotów, symbolami błyskawicznymi i rozszerzającymi się bębnami."
      },
      personal: {
        "paint": "Remake programu Paint zbudowany przy użyciu React.js i Redux (w trakcie tworzenia)",
        "kulki": "Niestandardowa wersja gry Color Lines, zawierająca niestandardową implementację algorytmu A* w języku JavaScript",
        "level-editor": "Edytor poziomów dla gier 2D i 3D",
        "sudoku-solver": "Program do rozwiązywania łamigłówek Sudoku, częściowo lub całkowicie",
        "mine-sweeper": "Saper wykonany w React.js",
        "snake": "Gra Snake napisana w JavaScript",
        "joi-schema-generator": "Narzędzie pomagające programistom w tworzeniu schematów walidacji poprzez automatyczne generowanie ich na podstawie przykładowych wartości wejściowych",
        "tetris": "Gra Tetris wykonana w JavaScript, testowana z Jest",
        "sensors": "Projekt wykorzystujący niestandardowe rozwiązanie uczenia maszynowego (w trakcie tworzenia)",
        "space-golf-3d": "Symulacja 3D piłki golfowej poruszającej się przez kosmos wśród planet, z niestandardową fizyką",
        "chess": "Gra w szachy dla jednego i wielu graczy",
        "code-clicker": "Klon Cookie Clicker z motywem VS Code",
        "line-art-generator": "Algorytmiczny generator grafiki liniowej - bez użycia AI"
      }
    }
  },
  en: {
    title: "Mter.pl - web apps",
    about: {
      title: "About Me",
      intro:
        "Hi, I'm Michał Terczyński, a Frontend Developer with a strong focus on game development and interactive applications. With experience at companies like NetEnt, Yggdrasil Gaming, and Software Mind, I've developed expertise in creating engaging games and robust enterprise applications using TypeScript, React, Angular, and PixiJS.",
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
