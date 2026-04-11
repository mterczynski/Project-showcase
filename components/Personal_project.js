import { chunkArray } from "../utils/Grid-Logic.js";
import { personalProjects } from "../data/personalProjectsData.js";
import { t } from "../utils/language.js";

export class PersonalProject extends HTMLElement {
  constructor() {
    super();
    this.t = t();
  }
  connectedCallback() {
    const columns = chunkArray(personalProjects, [4, 3, 3, 3]);
    this.innerHTML = `   <div style="margin-top: 5rem" class="ui container">  <div class="projects-personal ui container">
      <h2 id="personal-projects-title">Personal projects</h2>
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
                              ${
                                link.name === "github"
                                  ? "GitHub"
                                  : link.name === "play"
                                    ? "Play"
                                    : "Open"
                              }
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
  }

  applyTranslations() {
    const t = this.t;
    const get = (id) => this.querySelector(`#${id}`);
    document.title = t.title;

    get("commercial-projects-title").innerText = t.projects.commercial;

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

customElements.define("app-personal", PersonalProject);
