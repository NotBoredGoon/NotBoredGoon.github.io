import React from "react";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import styles from "./ProjectsGrid.module.css";

interface ProjectsGridProps {
  projects: ProjectCardProps[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <section className={styles.grid}>
      {projects.map((proj) => (
        <ProjectCard key={proj.title} {...proj} />
      ))}
    </section>
  );
};
