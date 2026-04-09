import { commercialProjects } from "../utils/CommercialProjectData.js";
import { chunkArray } from "../utils/Grid-Logic.js";
import { translations } from "../utils/translations.js";

export class CommercialProject extends HTMLElement {
  constructor() {
    super();
    this.translations = translations;
  }
  connectedCallback() {
    const columns = chunkArray(commercialProjects, [2, 2, 2, 1]);

    this.innerHTML = `   <div style="margin-top: 5rem" class="ui container">  <h2 id="commercial-projects-title">Commercial projects</h2>
      <div class="ui four column doubling stackable grid container">
      
             ${columns
               .map(
                 (col) => `
              <div class="column">
                ${col
                  .map(
                    (project) => `
                  <div class="ui card">
                    
                    <div class="ui slide masked reveal image">
                      <img src="${project.image}" class="visible content" alt="${project.alt}" />

                      <div class="hidden content linkButtons">
                        ${project.links
                          .map(
                            (link) => `
                          <a class="projectLink" href="${link.url}">
                            <button class="ui blue button linkButton">
                              ${link.type === "play" ? "Play" : "Website"}
                            </button>
                          </a>
                        `,
                          )
                          .join("")}
                      </div>
                    </div>

                    <div class="content">
                      <div class="header">${project.title}</div>
                      <div class="meta">${project.description}</div>
                    </div>

                    <div class="extra content">
                      <i class="hashtag icon"></i>
                      ${project.tech.join(", ")}
                    </div>

                  </div>
                `,
                  )
                  .join("")}
              </div>
            `,
               )
               .join("")}
        </div>
        
      <div class="ui message">
        <div class="header" id="access-notice-title"></div>
        <p id="access-notice-description"></p>
      </div>
    </div>`;
    this.applyTranslations();
  }

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

customElements.define("app-commercial", CommercialProject);
