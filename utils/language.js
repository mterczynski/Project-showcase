import { translations } from "../data/translations.js";

export function t() {
  const userLang = navigator.language || navigator.userLanguage;
  const shortLang = userLang.slice(0, 2);
  const lang = shortLang === "pl" ? "pl" : "en";

  return translations[lang];
}
