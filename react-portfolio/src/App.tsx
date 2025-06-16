import { ProjectsGrid } from "./components/ProjectGrid";
import type { ProjectCardProps } from "./components/ProjectCard";
import { getTechBadges } from "./data/badges";
import { WorkCard, WorkCardProps } from "./components/WorkCard";

const work: WorkCardProps[] = [
  {
    jobTitle: "Software Engineer Intern",
    companyLogoSrc: process.env.PUBLIC_URL + "/MorganStanleyLogo.jpg",
    companyName: "Morgan Stanley",
    dateRange: "Jan 2025 - Jan 2025",
    bullets: [
      "Optimized Disaster Recovery (DR) failover processes by removing 5 of 7 Terraform modules (≈70% consolidation), eliminating redundant infrastructure code and improving maintainability. Then simplified DR deployment by creating a new, more user friendly Jenkins CI/CD pipeline.",
      "Practiced Agile software development methodologies including participation in stand-up meetings, task tracking through Jira project management, and weekly one-on-one discussions with my manager, fostering effective team communication and alignment on deliverables",
    ],
  },
  {
    jobTitle: "Assistant Coach",
    companyLogoSrc: process.env.PUBLIC_URL + "/SteamChampsLogo.png",
    companyName: "Steam Champs",
    dateRange: "March 2024 - April 2024",
    bullets: [
      "Taught Minecraft Programming and Lego Robotics to kids ages 4-12.",
      "Created promotional materials using Canva.",
    ],
  },
];

const projects: ProjectCardProps[] = [
  {
    title: "EventElf",
    iconSrc: process.env.PUBLIC_URL + "/favico.ico",
    tech: getTechBadges(["python"]),
    description:
      "EventElf saves time by automatically adding events to a user’s google calendar. Coded in python, used OpenAI’s gpt-4o-mini model, and used Google Calendar API v3.",
    subtitle:
      "I love stuff css<br>.subtitle { white-space: pre-line; } big ones :O",
    links: [
      { label: "GitHub", href: "https://github.com/beaulierelindsay/EventElf" },
      { label: "Devpost", href: "https://devpost.com/software/eventelf" },
    ],
  },
  {
    title: "Project Name",
    iconSrc: "../public/favico.ico",
    tech: getTechBadges(["next", "react", "tailwind", "next"]),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum magnam deleniti necessitatibus dignissimos, officia eum earum amet eligendi cumque eveniet ducimus omnis. Cum, doloremque pariatur voluptate eos amet nisi.",
    subtitle: "I love balls  big ones :O",
    links: [
      { label: "GitHub", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { label: "Rickie!", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Project Name",
    iconSrc: "../public/favico.ico",
    tech: getTechBadges(["next", "react", "tailwind", "next"]),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum magnam deleniti necessitatibus dignissimos, officia eum earum amet eligendi cumque eveniet ducimus omnis. Cum, doloremque pariatur voluptate eos amet nisi.",
    subtitle: "I love balls big ones :O",
    links: [
      { label: "GitHub", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { label: "Rickie!", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Project Name",
    iconSrc: "../public/favico.ico",
    tech: getTechBadges(["next", "react", "tailwind", "next"]),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum magnam deleniti necessitatibus dignissimos, officia eum earum amet eligendi cumque eveniet ducimus omnis. Cum, doloremque pariatur voluptate eos amet nisi.",
    subtitle: "I love balls \n big ones :O",
    links: [
      { label: "GitHub", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { label: "Rickie!", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
];

function App() {
  return (
    <main>
      {work.map((w) => (
        <WorkCard key={w.jobTitle} {...w} />
      ))}
      {/* <WorkCard {...work} /> */}
      <ProjectsGrid projects={projects} />
    </main>
  );
}

export default App;
