import Image from "next/image";
import Link from "next/link";
import "../css/commercial.css";
import React from "react";
import type { ProjectLink } from "@/types/types";

interface ProjectCardProps {
  title: string;
  image: string;
  alt: string;
  description: string;
  tech: string;
  links?: ProjectLink[];
}

export const CommercialProjectCard: React.FC<ProjectCardProps> = ({
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
        minHeight: "420px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "0 !important",
      }}
    >
      <div
        className="ui slide masked reveal image"
        style={{
          position: "relative",
          height: "280px",
          flexShrink: 0,
        }}
      >
        <div
          className="visible content"
          style={{ position: "relative", height: "100%" }}
        >
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized={image.endsWith(".gif")}
          />
        </div>

        <div className="hidden content linkButtons">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              <button className="ui blue button linkButton">
                {link.label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div className="content" style={{ flexGrow: 1 }}>
        <div className="header" style={{ marginBottom: "0.5rem" }}>
          {title}
        </div>
        <div
          className="meta"
          style={{
            fontSize: "1rem",
          }}
        >
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

export const PersonalProjectCard: React.FC<ProjectCardProps> = ({
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
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        margin: "0 !important",
      }}
    >
      <div className="ui slide masked reveal image">
        <div
          className="visible content"
          style={{ position: "relative", height: "100%" }}
        >
          <Image
            src={image}
            alt={alt}
            width={500}
            height={500}
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
          }}
        >
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ui blue button linkButton">
                {link.label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div className="content" style={{ flexGrow: 1, border: 0 }}>
        <div className="header" style={{ marginBottom: "0.5rem" }}>
          {title}
        </div>
        <div
          className="meta"
          style={{
            fontSize: "0.975rem",
            // whiteSpace: "normal",
            // overflow: "hidden",
            // textOverflow: "ellipsis",
            // display: "-webkit-box",
            // WebkitLineClamp: 3,
            // WebkitBoxOrient: "vertical",
            // minHeight: "3.5em",
          }}
        >
          {description}
        </div>
      </div>

      <div className="extra content">
        <i className="hashtag icon"></i>
        {tech}
      </div>
    </div>
  );
};
