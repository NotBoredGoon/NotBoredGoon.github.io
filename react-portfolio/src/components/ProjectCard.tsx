import React from "react";
import styles from "./ProjectCard.module.css";
import { TechBadge } from "../data/badges";

export interface ProjectCardProps {
  title: string;
  iconSrc: string;
  tech?: TechBadge[];
  subtitle: string;
  description: string;
  links: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  iconSrc,
  tech = [],
  subtitle,
  description,
  links,
}) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <img src={iconSrc} alt={`${title} icon`} />
        <h3>{title}</h3>
      </header>
      {tech.length > 0 && (
        <div className={styles.badges}>
          {tech.map((badge) => (
            <img key={badge.src} src={badge.src} alt={badge.alt} />
          ))}
        </div>
      )}
      <p className={styles.subtitle}>
        {Array.isArray(subtitle) ? subtitle.join(" · ") : subtitle}
      </p>

      <nav className={styles.links}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p>{description}</p>
    </article>
  );
};
