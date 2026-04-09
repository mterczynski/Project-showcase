import { translations } from "../utils/translations.js";
export class About extends HTMLElement {
  constructor() {
    super();
    this.translations = translations;

    this.certificationData = [
      {
        title: "Cloud Practitioner",
        img: "./assets/certificate/aws_cloud_practicioner.png",
        subtitle: "AWS Certified Cloud Practitioner",
        link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
        confirmationLink:
          "https://www.credly.com/badges/6fd3981e-537c-4449-bf5c-880c67d0e2ee",
      },
      {
        title: "AI Practitioner",
        img: "./assets/certificate/aws_ai_practicioner.webp",
        subtitle: "AWS Certified AI Practicioner",
        link: "https://aws.amazon.com/certification/certified-ai-practitioner/",
        confirmationLink:
          "https://www.credly.com/badges/cf49935a-0d25-4092-b2af-2e33038dfb1d",
      },
      {
        title: "Azure Fundamentals",
        img: "./assets/certificate/microsoft-certified-fundamentals-badge.svg",
        subtitle: "Microsoft Certified: Azure Fundamentals",
        link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals",
        confirmationLink:
          "https://learn.microsoft.com/en-us/users/michaterczyski-4376/credentials/d58786b7b0016dbf",
      },
      {
        title: "Generative AI Leader",
        img: "./assets/certificate/gcp-generative-ai-leader.webp",
        subtitle: "Google Cloud Certified: Generative AI Leader",
        link: "https://cloud.google.com/learn/certification/generative-ai-leader",
        confirmationLink:
          "https://www.credly.com/badges/c5e7e87b-f054-40a4-8b75-7ab135bc5120",
      },
    ];
  }

  connectedCallback() {
    this.innerHTML = `
      <div style="margin-top: 10rem" class="ui container">
         <div class="ui segment certificate_main">
        <section class="grid_abt">
          <div class="grid_3">
            <h1 class="h2-sized-header" id="aboutTitle"></h1>
            <p id="aboutIntro"></p>

            <p id="aboutDetails"></p>
          </div>
          <main class="certification">
            <h1 id="certification_title"></h1>

            <section class="certification_section">
              <div class="certification_list"></div>
            </section>
          </main>
        </section>
      </div>
      </div>
    `;
    this.initCertifications();
    this.applyTranslations();
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

  applyTranslations() {
    const userLang = navigator.language || navigator.userLanguage;
    console.log(userLang.slice(0, 2));
    const shortLang = userLang.slice(0, 2);
    const selectedLang = shortLang === "pl" ? "pl" : "en";

    const t = this.translations[selectedLang];
    const get = (id) => this.querySelector(`#${id}`);
    document.title = t.title;

    get("aboutTitle").innerText = t.about.title;
    get("aboutIntro").innerText = t.about.intro;

    get("aboutDetails").innerText = t.about.details;
    get("certification_title").innerText = t.about.certifications;
  }
}

customElements.define("app-about", About);
