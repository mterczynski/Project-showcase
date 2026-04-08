import { translations } from "./TranslatorData.js";

export class Commercial extends HTMLElement {
  constructor() {
    super();
    this.translations = translations;
  }
  connectedCallback() {
    this.innerHTML = `   <div style="margin-top: 10rem" class="ui container">  <h2 id="commercial-projects-title">Commercial projects</h2>
      <div class="ui four column doubling stackable grid container">
        <div class="column">
          <!-- Boom Boom Boom -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/commercial-projects/gamecode-boom-boom-boom.webp"
                class="visible content"
                alt="Boom boom boom project website" />
              <!-- <img
                class="companiesLogo"
                src="assets/commercial-projects/companies-logos/gamecode.png"
                alt=""
              /> -->
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href=" https://slotslaunch.com/gamecode/boom-boom-boom">
                  <button class="ui blue button linkButton">Play</button>
                </a>
                <a
                  class="projectLink"
                  href="https://www.gamecodehq.com/games/"
                  aria-label="Play Boom Boom Boom game"
                  title="Play Boom Boom Boom game">
                  <button class="ui blue button linkButton">Website</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Boom Boom Boom</div>
              <div class="meta" id="boom-boom-boom-description">
                Boom Boom Boom™ is an American-themed 5-reel, 3-row video slot
                featuring Wild Multipliers and the hold and respin feature on
                multiple reel sets.
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              TS, PixiJS, Jest, Spine animations
            </div>
          </div>

          <!-- GemOne Onyx -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/commercial-projects/gemone-onyx.png"
                class="visible content"
                alt="Gem One Onyx project preview" />
              <!-- <img
                class="companiesLogo"
                src="assets/commercial-projects/companies-logos/software-mind.jpg"
                alt=""
              /> -->
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://www.gemone.com/en/products-onyx/">
                  <button class="ui blue button linkButton">Website</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">GemOne Onyx</div>
              <div class="meta" id="gemone-onyx-description">
                <!-- Onyx is a fleet management solution for mixed industrial fleets
                which accommodates different types of trackers, whether they're
                from GemOne or from other suppliers. -->

                Onyx is a fleet management solution for mixed industrial fleets
                which accommodates all makes and models of machines and
                integrates different types of trackers, integrating different
                types of trackers from both GemOne and other suppliers. Onyx
                monitors mixed fleets in real time.
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              TS, Angular, Node.js, Jest, Angular Material
            </div>
          </div>
        </div>

        <div class="column">
          <!-- Aloha Christmas -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/commercial-projects/aloha-christmas-netent.png"
                class="visible content"
                alt="Aloha Christmas project preview" />
              <!-- <img
                class="companiesLogo"
                src="assets/commercial-projects/companies-logos/netent.png"
                alt=""
              /> -->
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://www.bigwinboard.com/aloha-christmas-edition-netent-slot-review/">
                  <button class="ui blue button linkButton">Play</button>
                </a>
                <a
                  class="projectLink"
                  href="https://games.netent.com/video-slots/aloha-christmas-edition/">
                  <button class="ui blue button linkButton">Website</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Aloha! Christmas</div>
              <div class="meta" id="aloha-christmas-description">
                Aloha! Christmas™ is a 6-reel, 6-row video slot from NetEnt™
                with the Cluster Pays™ mechanic, featuring Multiplier Wild
                symbols, Mystery symbols, the Sticky Win Re-Spins, Tiki Bar Free
                Spins and Tiki Bar Max Free Spins.
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              TS, PixiJS, Jest, Spine animations
            </div>
          </div>

          <!-- Trickstar Spins -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/commercial-projects/trickstar-spins.png"
                class="visible content"
                alt="Trickstar Spins project preview" />
              <!-- <img
                class="companiesLogo"
                src="assets/commercial-projects/companies-logos/yggdrasil.png"
                alt=""
              /> -->
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://yggdrasilgaming.com/games/trickstar-spins#tryit">
                  <button class="ui blue button linkButton">Play</button>
                </a>
                <a
                  class="projectLink"
                  href="https://yggdrasilgaming.com/games/trickstar-spins">
                  <button class="ui blue button linkButton">Website</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Trickstar Spins</div>
              <div class="meta" id="trickstar-spins-description">
                Players who fill all three reels with the same symbol can reap
                up to a 10x multiplier. Respins with sticky symbols are
                possible. Players who land a Jackpot Symbol may get a chance at
                spooking up to an x500 bet in the Jackpot Bonus Game.
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              TS, PixiJS, Jest, Spine animations
            </div>
          </div>
        </div>

        <div class="column">
          <!-- Super Striker -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/commercial-projects/super-striker-netent.png"
                class="visible content"
                alt="Super Striker project preview" />
              <!-- <img
                class="companiesLogo"
                src="assets/commercial-projects/companies-logos/netent.png"
                alt=""
              /> -->
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://scatters.com/en/game/netent/super-striker/demo">
                  <button class="ui blue button linkButton">Play</button>
                </a>

                <a
                  class="projectLink"
                  href="https://games.netent.com/video-slots/super-striker/">
                  <button class="ui blue button linkButton">Website</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Super Striker</div>
              <div class="meta" id="super-striker-description">
                Super Striker™ is a 3-reel, 3-row video slot from NetEnt™,
                featuring multi-level Free Spins, the Golden Multiplier feature
                and the Bet Slip feature. Striking a Golden Scatter in the main
                game awards an instant win, while a hat-trick of three Scatter
                symbols activates 5-level Free Spins with an increasing Level
                Multiplier.
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              TS, PixiJS, Jest, Spine animations
            </div>
          </div>

          <!-- Hacker's Haven -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/commercial-projects/hackers-haven.png"
                class="visible content"
                alt="Hacker's Haven project preview" />
              <!-- <img
                class="companiesLogo"
                src="assets/commercial-projects/companies-logos/yggdrasil.png"
                alt=""
              /> -->
              <div class="hidden content linkButtons">
                <a
                  class="projectLink"
                  href="https://yggdrasilgaming.com/games/hackers-haven#tryit">
                  <button class="ui blue button linkButton">Play</button>
                </a>
                <a
                  class="projectLink"
                  href="https://yggdrasilgaming.com/games/hackers-haven">
                  <button class="ui blue button linkButton">Website</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Hacker's Haven</div>
              <div class="meta" id="hackers-haven-description">
                A high-voltage slot experience where a geeky cyber-criminal
                dials into the dark web to deliver electrifying wins.
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              TS, PixiJS, Jest, Spine animations
            </div>
          </div>
        </div>

        <div class="column">
          <!-- HammerCash -->
          <div class="ui card">
            <div class="ui slide masked reveal image">
              <img
                src="assets/commercial-projects/hammer-cash-game_LE_upscale_balanced_x2.jpg"
                class="visible content"
                alt="HammerCash project website" />
              <div class="hidden content linkButtons">
                <a class="projectLink" href="https://www.gamecodehq.com/games/">
                  <button class="ui blue button linkButton">Website</button>
                </a>
              </div>
            </div>
            <div class="content">
              <div class="header">Hammer Cash™</div>
              <div class="meta" id="hammer-cash-description">
                Hammer Cash™ is a 5-reel, 3-row video slot featuring instant
                jackpot Hammer Feature, Free Spins, Buy Free Spins, blitz
                symbols, expanding reels.
              </div>
            </div>
            <div class="extra content">
              <i class="hashtag icon"></i>
              TS, PixiJS, Jest, Spine animations
            </div>
          </div>
        </div>
      </div>

      <div class="ui message">
        <div class="header" id="access-notice-title"></div>
        <p id="access-notice-description"></p>
      </div>
    </div></div>`;
    this.applyTranslations();
  }
  //tranlator
  applyTranslations() {
    const userLang = navigator.language || navigator.userLanguage;
    console.log(userLang.slice(0, 2));
    const shortLang = userLang.slice(0, 2);
    const selectedLang = shortLang === "pl" ? "pl" : "en";
    const t = this.translations[selectedLang];
    const get = (id) => this.querySelector(`#${id}`);
    document.title = t.title;
    get("access-notice-title").innerText = t.accessNotice.title;
    get("access-notice-description").innerText = t.accessNotice.description;
    get("commercial-projects-title").innerText = t.projects.commercial;

    // Apply translations to commercial project descriptions
    if (t.projectDescriptions && t.projectDescriptions.commercial) {
      Object.keys(t.projectDescriptions.commercial).forEach((projectId) => {
        const element = get(projectId + "-description");
        if (element) {
          element.innerText = t.projectDescriptions.commercial[projectId];
        }
      });
    }
  }
}

customElements.define("app-commercial", Commercial);
