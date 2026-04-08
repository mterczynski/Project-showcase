import { translations } from "./TranslatorData.js";
export class Personal extends HTMLElement {
  constructor() {
    super();
    this.translations = translations;
  }
  connectedCallback() {
    this.innerHTML = `   <div style="margin-top: 10rem" class="ui container">  <div class="projects-personal ui container">
      <h2 id="personal-projects-title">Personal projects</h2>
      <div class="ui four column doubling stackable grid container">
        <div class="column">
          <!-- Paint -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/paint.PNG"
                class="visible content"
                alt="Paint project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/paint">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>

                <a
                  class="projectLink"
                  href="https://www.mter.pl/paint"
                  aria-label="View Paint project"
                  title="View Paint project">
                  <button class="ui blue button linkButton">Open</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Paint</div>
              <div class="meta" id="paint-description">
                A Paint remake built using React.js and Redux (work in progress)
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              TS, React.js, Redux, Graphics editors
            </div>
          </div>

          <!-- Kulki -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/kulki.PNG"
                class="visible content"
                alt="Kulki project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/kulki">
                  <button class="ui blue button linkButton">Github</button>
                </a>

                <a
                  class="projectLink"
                  href="https://www.mter.pl/kulki"
                  aria-label="Play Kulki game"
                  title="Play Kulki game">
                  <button class="ui blue button linkButton">Play</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Kulki</div>
              <div class="meta" id="kulki-description">
                A custom version of the Color Lines game, featuring a custom
                JavaScript implementation of the A* algorithm
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              JS, Pathfinding
            </div>
          </div>

          <!-- Level editor -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/level-editor.png"
                class="visible content"
                alt="Level editor project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/level-editor">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>
                <a
                  class="projectLink"
                  href="https://www.mter.pl/level-editor"
                  aria-label="View Level Editor project"
                  title="View Level Editor project">
                  <button class="ui blue button linkButton">Open</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Level editor</div>
              <div class="meta" id="level-editor-description">
                Level Editor for 2D and 3D games
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              JS, jQuery, Code generation
            </div>
          </div>

          <!-- Sudoku solver -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/sudoku-solver.jpg"
                class="visible content"
                alt="Sudoku solver project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/sudoku-solver">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>
                <a
                  class="projectLink"
                  href="https://www.mter.pl/sudoku-solver/">
                  <button class="ui blue button linkButton">Open</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Sudoku solver</div>
              <div class="meta" id="sudoku-solver-description">
                A program for solving Sudoku puzzles, either partially or
                completely
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              TS, Snowpack, algorithms, unit tests
            </div>
          </div>
        </div>

        <div class="column">
          <!-- Mine sweeper -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/mine-sweeper.PNG"
                class="visible content"
                alt="Mine Sweeper project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/mine-sweeper">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>

                <a
                  class="projectLink"
                  href="https://www.mter.pl/mine-sweeper"
                  aria-label="Play Mine Sweeper game"
                  title="Play Mine Sweeper game">
                  <button class="ui blue button linkButton">Play</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Mine sweeper</div>
              <div class="meta" id="mine-sweeper-description">
                Mine sweeper made with React.js
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              React.js, TS
            </div>
          </div>
          <!-- Snake -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/snake.png"
                class="visible content"
                alt="Snake project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/snake-dom">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>
                <a
                  class="projectLink"
                  href="https://www.mter.pl/snake"
                  aria-label="Play Snake game"
                  title="Play Snake game">
                  <button class="ui blue button linkButton">Play</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Snake</div>
              <div class="meta" id="snake-description">
                Snake game written with JavaScript with Xbox360 gamepad support
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              JS, Gamepad API
            </div>
          </div>
          <!-- Joi schema generator -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/joi-schema-generator.jpg"
                class="visible content"
                alt="Joi schema generator project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/joi-schema-generator">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>
                <a
                  class="projectLink"
                  href="https://www.mter.pl/joi-schema-generator"
                  aria-label="View Joi Schema Generator project"
                  title="View Joi Schema Generator project">
                  <button class="ui blue button linkButton">Open</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Joi schema generator</div>
              <div class="meta" id="joi-schema-generator-description">
                A tool that helps developers with creating validation schemas by
                automatically generating them based on example input values
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              TS, Joi, Snowpack, Unit tests, Jest, Code generation
            </div>
          </div>
        </div>

        <div class="column">
          <!-- Tetris -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/tetris-dom.png"
                class="visible content"
                alt="Tetris project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/tetris-dom">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>
                <a
                  class="projectLink"
                  href="https://www.mter.pl/tetris"
                  aria-label="Play Tetris game"
                  title="Play Tetris game">
                  <button class="ui blue button linkButton">Play</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Tetris</div>
              <div class="meta" id="tetris-description">
                Tetris game made with JavaScript, tested with Jest
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              JS, Jest, Unit tests
            </div>
          </div>

          <!-- Sensors -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/sensors.gif"
                class="visible content"
                alt="Sensors project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/sensors">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>
                <a
                  class="projectLink"
                  href="https://www.mter.pl/sensors"
                  aria-label="View Sensors project"
                  title="View Sensors project">
                  <button class="ui blue button linkButton">Open</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Sensors</div>
              <div class="meta" id="sensors-description">
                A project utilizing custom machine learning solution (work in
                progress)
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              TS, Canvas, Neural networks, AI
            </div>
          </div>

          <!-- Space golf 3d -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/space-golf-3d.jpg"
                class="visible content"
                alt="Space Golf 3D project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/space-golf-3d">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>
                <a
                  class="projectLink"
                  href="https://www.mter.pl/space-golf-3d-v2"
                  aria-label="Play Space Golf 3D game"
                  title="Play Space Golf 3D game">
                  <button class="ui blue button linkButton">Open</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Space Golf 3D</div>
              <div class="meta" id="space-golf-3d-description">
                A 3D simulation of a golf ball moving through space among
                planets, featuring custom physics
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              TS, Three.js, Jest, 3D, physics
            </div>
          </div>
        </div>

        <div class="column">
          <!-- Chess -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/chess.jpg"
                class="visible content"
                alt="Chess project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/chess">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>
                <a class="projectLink" href="http://www.mter.pl/chess">
                  <button class="ui blue button linkButton">Play</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Chess</div>
              <div class="meta" id="chess-description">
                A single and multi player chess game
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              JS, TS, React.js, Jest, Nest.js
            </div>
          </div>
          <!-- Code clicker -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/code-clicker.jpg"
                class="visible content"
                alt="Code Clicker project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/code-clicker">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>
                <a
                  class="projectLink"
                  href="https://codesandbox.io/s/1r91j86omj">
                  <button class="ui blue button linkButton">Play</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Code clicker</div>
              <div class="meta" id="code-clicker-description">
                Cookie Clicker clone with VS Code theme
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              JS, React.js
            </div>
          </div>
          <!-- Pattern generators -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/personal-projects/pattern-generators.jpg"
                class="visible content"
                alt="Line pattern generator project preview" />
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://github.com/mterczynski/pattern-generators">
                  <button class="ui blue button linkButton">GitHub</button>
                </a>
                <a
                  class="projectLink"
                  href="https://www.mter.pl/pattern-generators"
                  aria-label="View Pattern Generators project"
                  title="View Pattern Generators project">
                  <button class="ui blue button linkButton">Open</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Line art generator</div>
              <div class="meta" id="line-art-generator-description">
                Algorithmic line art generator - no AI used
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              Art generation, TS
            </div>
          </div>
        </div>
      </div>
    </div></div>`;
  }

  applyTranslations() {
    const userLang = navigator.language || navigator.userLanguage;
    console.log(userLang.slice(0, 2));
    const shortLang = userLang.slice(0, 2);
    const selectedLang = shortLang === "pl" ? "pl" : "en";
    const t = this.translations[selectedLang];
    const get = (id) => this.querySelector(`#${id}`);
    document.title = t.title;

    get("commercial-projects-title").innerText = t.projects.commercial;

    // Apply translations to personal project descriptions
    if (t.projectDescriptions && t.projectDescriptions.personal) {
      Object.keys(t.projectDescriptions.personal).forEach((projectId) => {
        const element = get(projectId + "-description");
        if (element) {
          element.innerText = t.projectDescriptions.personal[projectId];
        }
      });
    }
  }
}

customElements.define("app-personal", Personal);
