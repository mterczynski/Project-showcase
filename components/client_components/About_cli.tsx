import { useTranslations } from "next-intl";
import "../../css/About.css";

function About_cli() {
  const t = useTranslations("about");
  return (
    <main className="about-main">
      <section className="about-section">
        <h1 className="about-heading">{t("title")}</h1>
        <p>{t("intro")}</p>
        <p>{t("details")}</p>
      </section>
    </main>
  );
}

export default About_cli;
