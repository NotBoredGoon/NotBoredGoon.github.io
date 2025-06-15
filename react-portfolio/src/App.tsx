import { ProjectsGrid } from "./components/ProjectGrid";
import type { ProjectCardProps } from "./components/ProjectCard";
import { getTechBadges } from "./data/badges";

const projects: ProjectCardProps[] = [
  {
    title: "Project Name",
    iconSrc: "../public/favico.ico",
    tech: getTechBadges(["next", "react", "tailwind", "next"]),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum magnam deleniti necessitatibus dignissimos, officia eum earum amet eligendi cumque eveniet ducimus omnis. Cum, doloremque pariatur voluptate eos amet nisi.",
    subtitle: "I love stuff \n big ones :O",
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
    subtitle: "I love balls <br> big ones :O",
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
    // <div className="App">
    //   <header className="App-header">
    //     <img
    //       src="https://img.shields.io/badge/C-00599C?logo=c&logoColor=white"
    //       className="App-logo"
    //       alt="logo"
    //     />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://img.shields.io/badge/C-00599C?logo=c&logoColor=white"
    //       target="_blank"
    //       rel="google.com"
    //     >
    //       Learn Rect
    //     </a>
    //   </header>
    // </div>
    <main>
      <ProjectsGrid projects={projects} />
    </main>
  );
}

export default App;
