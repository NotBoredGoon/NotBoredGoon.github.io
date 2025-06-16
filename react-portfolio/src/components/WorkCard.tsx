import React from "react";
import { TechBadge } from "../data/badges";
import styles from "./WorkCard.module.css";

export interface WorkCardProps {
  jobTitle: string;
  companyName: string;
  companyLogoSrc: string;
  tech?: TechBadge[];
  dateRange: string;
  bullets: string[];
}

export const WorkCard: React.FC<WorkCardProps> = ({
  jobTitle,
  companyName,
  companyLogoSrc,
  tech = [],
  dateRange,
  bullets,
}) => {
  return (
    <div className={styles.container}>
      <article className={styles.wrapper}>
        <div>
          <h3>{jobTitle}</h3>
          <div className={styles.company}>
            <img src={companyLogoSrc} alt={`${jobTitle} icon`} />
            <h5>{companyName}</h5>
          </div>
          <h5 className={styles.date}>{dateRange}</h5>
        </div>
        {tech.length > 0 && (
          <div className={styles.badges}>
            {tech.map((badge) => (
              <img key={badge.src} src={badge.src} alt={badge.alt} />
            ))}
          </div>
        )}
        <div className={styles.description}>
          <ul>
            {bullets.map((bullet) => (
              <li>{bullet}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
};
