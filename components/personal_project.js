import { chunkArray } from "../utils/grid-Logic.js";
import { personalProjects } from "../data/personalProjectsData.js";
import { t } from "../utils/language.js";

export class PersonalProject extends HTMLElement {
  constructor() {
    super();
    this.t = t();
  }

  connectedCallback() {
    document.title = this.t.title;
    const columns = chunkArray(personalProjects, [4, 3, 3, 3]);
    this.innerHTML = `   <div style="margin-top: 5rem" class="ui container">  <div class="projects-personal ui container">
      <h2>${this.t.projects.personal}</h2>
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
                          <a class="projectLink" href="${link.url}" target="_blank" rel="noopener noreferrer">
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
                      <div class="meta">${this.getProjectDescription(project)}</div>
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

  getProjectDescription(project) {
    return this.t.projectDescriptions?.personal?.[project.id] ?? project.description;
  }
}

customElements.define("app-personal", PersonalProject);
