import { PERSONAL_PROJECT_IDS } from "./projectIds.js";

export const personalProjects = [
  {
    id: PERSONAL_PROJECT_IDS.PAINT,
    title: "Paint",
    image: "assets/personal-projects/paint.jpg",
    alt: "Paint project preview",
    description:
      "A Paint remake built using React.js and Redux (work in progress)",
    links: [
      { name: "github", url: "https://github.com/mterczynski/paint" },
      { name: "open", url: "https://www.mter.pl/paint" },
    ],
    tech: ["TS", "React.js", "Redux", "Graphics editors"],
  },

  {
    id: PERSONAL_PROJECT_IDS.KULKI,
    title: "Kulki",
    image: "assets/personal-projects/kulki.jpg",
    alt: "Kulki project preview",
    description:
      "A custom version of the Color Lines game, featuring a custom JavaScript implementation of the A* algorithm",
    links: [
      { name: "github", url: "https://github.com/mterczynski/kulki" },
      { name: "play", url: "https://www.mter.pl/kulki" },
    ],
    tech: ["JS", "Pathfinding"],
  },

  {
    id: PERSONAL_PROJECT_IDS.LEVEL_EDITOR,
    title: "Level editor",
    image: "assets/personal-projects/level-editor.jpg",
    alt: "Level editor project preview",
    description: "Level Editor for 2D and 3D games",
    links: [
      { name: "github", url: "https://github.com/mterczynski/level-editor" },
      { name: "open", url: "https://www.mter.pl/level-editor" },
    ],
    tech: ["JS", "jQuery", "Code generation"],
  },

  {
    id: PERSONAL_PROJECT_IDS.SUDOKU_SOLVER,
    title: "Sudoku solver",
    image: "assets/personal-projects/sudoku-solver.jpg",
    alt: "Sudoku solver project preview",
    description:
      "A program for solving Sudoku puzzles, either partially or completely",
    links: [
      { name: "github", url: "https://github.com/mterczynski/sudoku-solver" },
      { name: "open", url: "https://www.mter.pl/sudoku-solver/" },
    ],
    tech: ["TS", "Snowpack", "algorithms", "unit tests"],
  },

  {
    id: PERSONAL_PROJECT_IDS.MINE_SWEEPER,
    title: "Mine sweeper",
    image: "assets/personal-projects/mine-sweeper.jpg",
    alt: "Mine Sweeper project preview",
    description: "Mine sweeper made with React.js",
    links: [
      { name: "github", url: "https://github.com/mterczynski/mine-sweeper" },
      { name: "play", url: "https://www.mter.pl/mine-sweeper" },
    ],
    tech: ["React.js", "TS"],
  },

  {
    id: PERSONAL_PROJECT_IDS.SNAKE,
    title: "Snake",
    image: "assets/personal-projects/snake.jpg",
    alt: "Snake project preview",
    description:
      "Snake game written with JavaScript with Xbox360 gamepad support",
    links: [
      { name: "github", url: "https://github.com/mterczynski/snake-dom" },
      { name: "play", url: "https://www.mter.pl/snake" },
    ],
    tech: ["JS", "Gamepad API"],
  },

  {
    id: PERSONAL_PROJECT_IDS.JOI_SCHEMA_GENERATOR,
    title: "Joi schema generator",
    image: "assets/personal-projects/joi-schema-generator.jpg",
    alt: "Joi schema generator project preview",
    description:
      "A tool that helps developers with creating validation schemas by automatically generating them based on example input values",
    links: [
      {
        name: "github",
        url: "https://github.com/mterczynski/joi-schema-generator",
      },
      { name: "open", url: "https://www.mter.pl/joi-schema-generator" },
    ],
    tech: ["TS", "Joi", "Snowpack", "Unit tests", "Jest", "Code generation"],
  },

  {
    id: PERSONAL_PROJECT_IDS.TETRIS,
    title: "Tetris",
    image: "assets/personal-projects/tetris-dom.jpg",
    alt: "Tetris project preview",
    description: "Tetris game made with JavaScript, tested with Jest",
    links: [
      { name: "github", url: "https://github.com/mterczynski/tetris-dom" },
      { name: "play", url: "https://www.mter.pl/tetris" },
    ],
    tech: ["JS", "Jest", "Unit tests"],
  },

  {
    id: PERSONAL_PROJECT_IDS.SENSORS,
    title: "Sensors",
    image: "assets/personal-projects/sensors.gif",
    alt: "Sensors project preview",
    description:
      "A project utilizing custom machine learning solution (work in progress)",
    links: [
      { name: "github", url: "https://github.com/mterczynski/sensors" },
      { name: "open", url: "https://www.mter.pl/sensors" },
    ],
    tech: ["TS", "Canvas", "Neural networks", "AI"],
  },

  {
    id: PERSONAL_PROJECT_IDS.SPACE_GOLF_3D,
    title: "Space Golf 3D",
    image: "assets/personal-projects/space-golf-3d.jpg",
    alt: "Space Golf 3D project preview",
    description:
      "A 3D simulation of a golf ball moving through space among planets, featuring custom physics and a dat.gui interface for tweaking the parameters of the simulation",
    links: [
      {
        name: "github",
        url: "https://github.com/mterczynski/space-golf-3d",
      },
      { name: "open", url: "https://www.mter.pl/space-golf-3d-v2" },
    ],
    tech: ["TS", "Three.js", "Jest", "3D", "physics", "dat.gui"],
  },

  {
    id: PERSONAL_PROJECT_IDS.CHESS,
    title: "Chess",
    image: "assets/personal-projects/chess.jpg",
    alt: "Chess project preview",
    description: "A single and multi player chess game",
    links: [
      { name: "github", url: "https://github.com/mterczynski/chess" },
      { name: "play", url: "http://www.mter.pl/chess" },
    ],
    tech: ["JS", "TS", "React.js", "Jest", "Nest.js"],
  },

  {
    id: PERSONAL_PROJECT_IDS.CODE_CLICKER,
    title: "Code clicker",
    image: "assets/personal-projects/code-clicker.jpg",
    alt: "Code Clicker project preview",
    description: "Cookie Clicker clone with VS Code theme",
    links: [
      { name: "github", url: "https://github.com/mterczynski/code-clicker" },
      { name: "play", url: "https://codesandbox.io/s/1r91j86omj" },
    ],
    tech: ["JS", "React.js"],
  },

  {
    id: PERSONAL_PROJECT_IDS.LINE_ART_GENERATOR,
    title: "Line art generator",
    image: "assets/personal-projects/pattern-generators.jpg",
    alt: "Line pattern generator project preview",
    description: "Algorithmic line art generator - no AI used",
    links: [
      {
        name: "github",
        url: "https://github.com/mterczynski/pattern-generators",
      },
      { name: "open", url: "https://www.mter.pl/pattern-generators" },
    ],
    tech: ["Art generation", "TS"],
  },
];
