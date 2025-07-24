import { useEffect, useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Dairy To Home Service",
    description:
     "A full-featured dairy delivery platform with, real-time order tracking, and secure online payments with real time map integration.",
    url: "http://dairyfarmmilk-service.netlify.app/",
    category: "fullstack",
  },
  {
    id: 2,
    title: "JunkyBites",
    description:
      "A modern online food ordering platform for JunkyBites, offering fast delivery, delicious meals, and a seamless user experience.",
    url: "https://junkybites.netlify.app/",
    category: "fullstack",
  },
{
    id: 3,
    title: "Trippy Travels",
    description:
      "A sleek, responsive tourism website offering destination highlights, travel packages, and seamless booking experience.",
    url: "https://trippytours-travels.netlify.app/",
    category: "frontend",
  },

  {
    id: 4,
    title: "Color Craft",
    description:
      "A tool for designers to explore colors, palettes, and transparency effects with ease.",
    url: "https://colorcraft-new.netlify.app/",
    category: "frontend",
  },
  
 
  
];

const Projects = () => {
  const projectsNav = [
    "All",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter((project) => project.category === item.name)
      );
    }
  }, [item]);
  return (
    <section className="section portfolio__projects" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>
      <div>
        <div className="projects__filters">
          {projectsNav.map((navText, index) => {
            return (
              <span
                className={
                  item.name === navText
                    ? "active__filters-item projects__filters-item"
                    : "projects__filters-item"
                }
                key={index}
                onClick={() => setItem({ name: navText })}
              >
                {navText}
              </span>
            );
          })}
        </div>
        <div className="projects__container container grid">
          {projects.map(({ id, title, url, description }) => {
            return (
              <div class="card" key={id}>
                <div class="content">
                  <div class="h6">{title}</div>
                  <p>{description}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="project__button"
                  >
                    Demo{" "}
                    <i className="bx bx-right-arrow-alt project__button-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
