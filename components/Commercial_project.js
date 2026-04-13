import { commercialProjects } from "../data/commercialProjectData.js";
import { chunkArray } from "../utils/Grid-Logic.js";
import { t } from "../utils/language.js";

export class CommercialProject extends HTMLElement {
  constructor() {
    super();
    this.t = t();
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
                      <img
                class="card-triangle"
                src="assets/commercial-projects/triangle/gamecode.webp"
                alt="Gamecode"
                title="Gamecode"
                loading="lazy"
                decoding="async"
                width="80"
                height="80"
              />
                      <img src="${project.image}" class="visible content" alt="${project.alt}" />

                      <div class="hidden content linkButtons">
                        ${project.links
                          .map(
                            (link) => `
                          <a class="projectLink" href="${link.url}">
                            <button class="ui blue button linkButton">
                              ${link.name === "play" ? "Play" : "Website"}
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
        
 
    </div>`;
    this.applyTranslations();
  }

  applyTranslations() {
    const t = this.t;
    const get = (id) => this.querySelector(`#${id}`);
    document.title = t.title;

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
