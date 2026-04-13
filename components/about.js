import { certificationData } from "../data/certificationData.js";
import { t } from "../utils/language.js";

export class About extends HTMLElement {
  constructor() {
    super();
    this.t = t();
    this.certificationData = certificationData;
  }

  connectedCallback() {
    document.title = this.t.title;
    this.innerHTML = `
      <div style="margin-top: 10rem" class="ui container">
         <div class="ui segment certificate_main">
        <section class="grid_abt">
          <div class="grid_3">
            <h1 class="h2-sized-header">${this.t.about.title}</h1>
            <p>${this.t.about.intro}</p>

            <p>${this.t.about.details}</p>
          </div>
          <main class="certification">
            <h1>${this.t.about.certifications}</h1>

            <section class="certification_section">
              <div class="certification_list"></div>
            </section>
          </main>
        </section>
      </div>
      </div>
    `;
    this.initCertifications();
  }

  initCertifications() {
    const certificationSection = this.querySelector(".certification_section");
    certificationSection.innerHTML = "";

    this.certificationData.forEach((item) => {
      const certification_item = document.createElement("div");
      certification_item.className = "certification_list";
      certification_item.innerHTML = `
        <a href="${item.link}" target="_blank">
          <img src="${item.img}" alt="${item.subtitle}" title="${item.title}" aria-label="${item.subtitle}" />
        </a>
        <div>
          <h2>${item.title}</h2>
          <p><a href="${item.confirmationLink}" target="_blank">${item.subtitle}</a></p>
        </div>
      `;
      certificationSection.appendChild(certification_item);
    });
  }
}

customElements.define("app-about", About);
