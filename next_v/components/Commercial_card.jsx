import Image from "next/image";
import Link from "next/link";
import "../css/commercial.css";

export const ProjectCard = ({
  title,
  image,
  alt,
  description,
  tech,
  links = [],
}) => {
  return (
    <div
      className="ui card "
      style={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <div
        className="ui slide masked reveal image"
        style={{ position: "relative", height: "250px", flexShrink: 0 }}>
        <div
          className="visible content"
          style={{ position: "relative", height: "100%" }}>
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div
          className="hidden content linkButtons"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            gap: "0.5rem",
          }}>
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer">
              <button className="ui blue button linkButton">
                {link.label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div
        className="content"
        style={{
          flexGrow: 1,
          overflow: "hidden",
        }}>
        <div className="header" style={{ marginBottom: "0.5rem" }}>
          {title}
        </div>
        <div className="meta" style={{ fontSize: "0.875rem" }}>
          {description}
        </div>
      </div>

      <div className="extra content" style={{ flexShrink: 0 }}>
        <i className="hashtag icon"></i>
        {tech}
      </div>
    </div>
  );
};

//this card components is for commercial yeah
export const ProjectCard_Two = ({
  title,
  image,
  alt,
  description,
  tech,
  links = [],
}) => {
  return (
    <div
      className="ui card"
      style={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
      <div
        className="ui slide masked reveal image"
        style={{
          position: "relative",
          height: "280px",
          flexShrink: 0,
        }}>
        <div
          className="visible content"
          style={{ position: "relative", height: "100%" }}>
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized={image.endsWith(".gif")}
          />
        </div>

        <div
          className="hidden content linkButtons"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            gap: "0.5rem",
          }}>
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer">
              <button className="ui blue button linkButton">
                {link.label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div
        className="content"
        style={{
          flexGrow: 1,
          overflow: "visible",
        }}>
        <div className="header" style={{ marginBottom: "0.5rem" }}>
          {title}
        </div>
        <div
          className="meta"
          style={{ fontSize: "0.875rem", whiteSpace: "normal" }}>
          {description}
        </div>
      </div>

      <div className="extra content" style={{ flexShrink: 0 }}>
        <i className="hashtag icon"></i>
        {tech}
      </div>
    </div>
  );
};
