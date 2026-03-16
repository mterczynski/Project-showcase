const certificationJson = [
  {
    title: "Cloud Practitioner",
    img: "./assets/certificate/aws_cloud_practicioner.png",
    meaning: "AWS Certified Cloud Practitioner",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    link2: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "AI Practitioner",
    img: "./assets/certificate/aws_ai_practicioner.webp",
    meaning: "AWS Certified AI Practicioner",
    link: "https://www.credly.com/badges/6fd3981e-537c-4449-bf5c-880c67d0e2ee/",
    link2: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "Azure Fundamentals",
    img: "./assets/certificate/microsoft-certified-fundamentals-badge.svg",
    meaning: "Microsoft Certified: Azure Fundamentals",
    link: "https://www.credly.com/badges/6fd3981e-537c-4449-bf5c-880c67d0e2ee",
    link2: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "Generative AI Leader",
    img: "./assets/certificate/gcp-generative-ai-leader.webp",
    meaning: "Google Cloud Certified: Generative AI Leader",
    link: "https://www.credly.com/badges/c5e7e87b-f054-40a4-8b75-7ab135bc5120",
    link2: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
];

const articlediv = document.querySelector(".certification_paper");

articlediv.innerHTML = "";
export const certification = () => {
  certificationJson.forEach((item) => {
    const article = document.createElement("div");
    // const link = document.createElement("link");
    article.className = "certification_list";
    article.innerHTML += `   <a href="${item.link}" target="_blank"><img
                src="${item.img}"
                alt="${item.meaning}"
                title="${item.title}"
                aria-label="${item.meaning}" /> </a>
              <div class="">
                <h2>${item.title}</h2>
                <p>   <a href="${item.link2}" target="_blank">${item.meaning}</a></p>
              </div>`;
    articlediv.appendChild(article);
  });
};
