import type { Project } from "@/types/types";
export const personalproject: Project[] = [
  {
    title: "Paint",
    image: "/assets/personal-projects/paint.PNG",
    alt: "Paint project preview",
    description:
      "A Paint remake built using React.js and Redux (work in progress)",
    tech: "TS, React.js, Redux, Graphics editors",
    links: [
      { label: "GitHub", url: "https://github.com/mterczynski/paint" },
      { label: "Open", url: "https://www.mter.pl/paint" },
    ],
  },
  {
    title: "Kulki",
    image: "/assets/personal-projects/kulki.PNG",
    alt: "Kulki project preview",
    description:
      "A custom version of the Color Lines game, featuring a custom JavaScript implementation of the A* algorithm",
    tech: "JS, Pathfinding",
    links: [
      { label: "Github", url: "https://github.com/mterczynski/kulki" },
      { label: "Play", url: "https://www.mter.pl/kulki" },
    ],
  },
  {
    title: "Level editor",
    image: "/assets/personal-projects/level-editor.png",
    alt: "Level editor project preview",
    description: "Level Editor for 2D and 3D games",
    tech: "JS, jQuery, Code generation",
    links: [
      { label: "GitHub", url: "https://github.com/mterczynski/level-editor" },
      { label: "Open", url: "https://www.mter.pl/level-editor" },
    ],
  },
  {
    title: "Sudoku solver",
    image: "/assets/personal-projects/sudoku-solver.jpg",
    alt: "Sudoku solver project preview",
    description:
      "A program for solving Sudoku puzzles, either partially or completely",
    tech: "TS, Snowpack, algorithms, unit tests",
    links: [
      { label: "GitHub", url: "https://github.com/mterczynski/sudoku-solver" },
      { label: "Open", url: "https://www.mter.pl/sudoku-solver/" },
    ],
  },
  {
    title: "Mine sweeper",
    image: "/assets/personal-projects/mine-sweeper.PNG",
    alt: "Mine Sweeper project preview",
    description: "Mine sweeper made with React.js",
    tech: "React.js, TS",
    links: [
      { label: "GitHub", url: "https://github.com/mterczynski/mine-sweeper" },
      { label: "Play", url: "https://www.mter.pl/mine-sweeper" },
    ],
  },
  {
    title: "Snake",
    image: "/assets/personal-projects/snake.png",
    alt: "Snake project preview",
    description: "Snake game written with JavaScript",
    tech: "JS",
    links: [
      { label: "GitHub", url: "https://github.com/mterczynski/snake-dom" },
      { label: "Play", url: "https://www.mter.pl/snake" },
    ],
  },
  {
    title: "Joi schema generator",
    image: "/assets/personal-projects/joi-schema-generator.jpg",
    alt: "Joi schema generator project preview",
    description:
      "A tool that helps developers with creating validation schemas by automatically generating them based on example input values",
    tech: "TS, Joi, Snowpack, Unit tests, Jest, Code generation",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/mterczynski/joi-schema-generator",
      },
      { label: "Open", url: "https://www.mter.pl/joi-schema-generator" },
    ],
  },
  {
    title: "Tetris",
    image: "/assets/personal-projects/tetris-dom.png",
    alt: "Tetris project preview",
    description: "Tetris game made with JavaScript, tested with Jest",
    tech: "JS, Jest, Unit tests",
    links: [
      { label: "GitHub", url: "https://github.com/mterczynski/tetris-dom" },
      { label: "Play", url: "https://www.mter.pl/tetris" },
    ],
  },
  {
    title: "Sensors",
    image: "/assets/personal-projects/sensors.gif",
    alt: "Sensors project preview",
    description:
      "A project utilizing custom machine learning solution (work in progress)",
    tech: "TS, Canvas, Neural networks, AI",
    links: [
      { label: "GitHub", url: "https://github.com/mterczynski/sensors" },
      { label: "Open", url: "https://www.mter.pl/sensors" },
    ],
  },
  {
    title: "Space Golf 3D",
    image: "/assets/personal-projects/space-golf-3d.jpg",
    alt: "Space Golf 3D project preview",
    description:
      "A 3D simulation of a golf ball moving through space among planets, featuring custom physics",
    tech: "TS, Three.js, Jest, 3D, physics",
    links: [
      { label: "GitHub", url: "https://github.com/mterczynski/space-golf-3d" },
      { label: "Open", url: "https://www.mter.pl/space-golf-3d" },
    ],
  },
  {
    title: "Chess",
    image: "/assets/personal-projects/chess.jpg",
    alt: "Chess project preview",
    description: "A single and multi player chess game",
    tech: "JS, TS, React.js, Jest, Nest.js",
    links: [
      { label: "GitHub", url: "https://github.com/mterczynski/chess" },
      { label: "Play", url: "http://www.mter.pl/chess" },
    ],
  },
  {
    title: "Code clicker",
    image: "/assets/personal-projects/code-clicker.jpg",
    alt: "Code Clicker project preview",
    description: "Cookie Clicker clone with VS Code theme",
    tech: "JS, React.js",
    links: [
      { label: "GitHub", url: "https://github.com/mterczynski/code-clicker" },
      { label: "Play", url: "https://codesandbox.io/s/1r91j86omj" },
    ],
  },
  {
    title: "Line art generator",
    image: "/assets/personal-projects/pattern-generators.jpg",
    alt: "Line pattern generator project preview",
    description: "Algorithmic line art generator - no AI used",
    tech: "Art generation, TS",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/mterczynski/pattern-generators",
      },
      { label: "Open", url: "https://www.mter.pl/pattern-generators" },
    ],
  },
];

export const commercialproject: Project[] = [
  {
    title: "Boom Boom Boom",
    image: "/assets/commercial-projects/gamecode-boom-boom-boom.webp",
    description:
      "Boom Boom Boom™ is an American-themed 5-reel, 3-row video slot featuring Wild Multipliers and the hold and respin feature on multiple reel sets.",
    tech: "TS, PixiJS, Jest, Spine animations",
    links: [
      {
        label: "Play",
        url: "https://slotslaunch.com/gamecode/boom-boom-boom",
      },
      {
        label: "Website",
        url: "https://www.gamecodehq.com/games/",
      },
    ],
  },
  {
    title: "Aloha! Christmas",
    image: "/assets/commercial-projects/aloha-christmas-netent.png",
    description:
      "Aloha! Christmas™ is a 6-reel, 6-row video slot from NetEnt™ with the Cluster Pays™ mechanic, featuring Multiplier Wild symbols, Mystery symbols, the Sticky Win Re-Spins, Tiki Bar Free Spins and Tiki Bar Max Free Spins.",
    tech: "TS, PixiJS, Jest, Spine animations",
    links: [
      {
        label: "Play",
        url: "https://www.bigwinboard.com/aloha-christmas-edition-netent-slot-review/",
      },
      {
        label: "Website",
        url: "https://games.netent.com/video-slots/aloha-christmas-edition/",
      },
    ],
  },
  {
    title: "Super Striker",
    image: "/assets/commercial-projects/super-striker-netent.png",
    description:
      "Super Striker™ is a 3-reel, 3-row video slot from NetEnt™, featuring multi-level Free Spins, the Golden Multiplier feature and the Bet Slip feature. Striking a Golden Scatter in the main game awards an instant win, while a hat-trick of three Scatter symbols activates 5-level Free Spins with an increasing Level Multiplier.",
    tech: "TS, PixiJS, Jest, Spine animations",
    links: [
      {
        label: "Play",
        url: "https://scatters.com/en/game/netent/super-striker/demo",
      },
      {
        label: "Website",
        url: "https://games.netent.com/video-slots/super-striker/",
      },
    ],
  },
  {
    title: "Hammer Cash™",
    image:
      "/assets/commercial-projects/hammer-cash-game_LE_upscale_balanced_x2.jpg",
    description:
      "Hammer Cash™ is a 5-reel, 3-row video slot featuring instant jackpot Hammer Feature, Free Spins, Buy Free Spins, blitz symbols, expanding reels.",
    tech: "TS, PixiJS, Jest, Spine animations",
    links: [
      {
        label: "Website",
        url: "https://www.gamecodehq.com/games/",
      },
    ],
  },
  {
    title: "GemOne Onyx",
    image: "/assets/commercial-projects/gemone-onyx.png",
    description:
      "Onyx is a fleet management solution for mixed industrial fleets which accommodates all makes and models of machines and integrates different types of trackers, integrating different types of trackers from both GemOne and other suppliers. Onyx monitors mixed fleets in real time.",
    tech: "TS, Angular, Node.js, Jest, Angular Material",
    links: [
      {
        label: "Website",
        url: "https://www.gemone.com/en/products-onyx/",
      },
    ],
  },
  {
    title: "Trickstar Spins",
    image: "/assets/commercial-projects/trickstar-spins.png",
    description:
      "Players who fill all three reels with the same symbol can reap up to a 10x multiplier. Respins with sticky symbols are possible. Players who land a Jackpot Symbol may get a chance at spooking up to an x500 bet in the Jackpot Bonus Game.",
    tech: "TS, PixiJS, Jest, Spine animations",
    links: [
      {
        label: "Play",
        url: "https://yggdrasilgaming.com/games/trickstar-spins#tryit",
      },
      {
        label: "Website",
        url: "https://yggdrasilgaming.com/games/trickstar-spins",
      },
    ],
  },
];
