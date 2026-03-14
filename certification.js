const certificationJson = [
  {
    title: "Cloud Practitioner",
    img: "./assets/certificate/aws_cloud_practicioner.png",
    meaning: "AWS Certified Cloud Practitioner certificate",
  },
  {
    title: "AI Practitioner",
    img: "./assets/certificate/aws_ai_practicioner.webp",
    meaning: "AWS Certified AI Practicioner certificate",
  },
  {
    title: "Azure Fundamentals",
    img: "./assets/certificate/microsoft-certified-fundamentals-badge.svg",
    meaning: "Microsoft Certified: Azure Fundamentals",
  },
  {
    title: "Generative AI Leader badge",
    img: "./assets/certificate/gcp-generative-ai-leader.webp",
    meaning: "Google Cloud Certified: Generative AI Leader badge",
  },
];

const articlediv = document.querySelector(".certification_paper");

articlediv.innerHTML = "";
export const certification = () => {
  certificationJson.forEach((item) => {
    const article = document.createElement("article");
    article.className = "certification_list";
    article.innerHTML += `  <img
                src="${item.img}"
                alt="${item.meaning}"
                title="${item.title}"
                aria-label="${item.meaning}" />
              <div class="">
                <h2>${item.title}</h2>
                <p>${item.meaning}</p>
              </div>`;
    articlediv.appendChild(article);
  });

  //   console.log("cerification");
};
