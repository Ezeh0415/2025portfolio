import { createContext, useContext, useEffect, useState } from "react";

// Import initial projects from your DB file
import initialProjects from "../../DbFile/ProjectDb";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem("projects");
    return storedProjects ? JSON.parse(storedProjects) : initialProjects;
  });

  // Save to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // skills array to store unique skills
  const techIcons = [
    {
      id: 1,
      src: "https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black",
      alt: "react",
    },
    {
      id: 2,
      src: "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black",
      alt: "javascript",
    },
    {
      id: 3,
      src: "https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white",
      alt: "html",
    },
    {
      id: 4,
      src: "https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white",
      alt: "css",
    },
    {
      id: 5,
      src: "https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white",
      alt: "git",
    },
    {
      id: 6,
      src: "https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white",
      alt: "tailwind",
    },
    {
      id: 7,
      src: "https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white",
      alt: "node.js",
    },
    {
      id: 8,
      src: "https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white",
      alt: "express.js",
    },
    {
      id: 9,
      src: "https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white",
      alt: "mongoDb",
    },
    {
      id: 10,
      src: "https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white",
      alt: "docker",
    },
  ];

  return (
    <ProjectsContext.Provider value={{ projects, setProjects, techIcons }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
