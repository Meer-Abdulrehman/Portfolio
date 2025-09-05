import { useEffect, useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "QuickShow",
    description:
      "QuickShow is a full-stack movie ticket booking platform built with the MERN stack, featuring secure authentication, seat selection, and online payments. It also includes an admin dashboard for managing movies, users, and bookings with automated email notifications for confirmations and reminders",
    url: "https://quickshow.vercel.app/",
    category: "full stack",
  },
  {
    id: 2,
    title: "QuickStay",
    description:
      "QuickStay is a full-stack hotel booking platform built with the MERN stack, offering secure authentication, hotel and room filtering, and seamless online reservations. It features an intuitive admin dashboard to manage hotels, users, and bookings, ensuring a smooth and scalable booking experience",
    url: "https://hb-gs.vercel.app/",
    category: "full stack",
  },
  {
    id: 3,
    title: "CarRental",
    description:
      "CarRental is a full-stack car booking platform developed with the MERN stack, featuring secure JWT-based authentication, car listings with image management, and online booking. It also includes an admin dashboard to manage cars, users, and reservations for a seamless rental experience.",
    url: "https://car-rental-gs.vercel.app/",
    category: "full stack",
  },
  {
    id: 10,
    title: "FastBasket",
    description:
      "A full-stack e-commerce platform built with the MERN stack, featuring secure authentication and role-based access for buyers, sellers, and admin. Sellers can add and manage products, while the admin dashboard provides full control over users, orders, and inventory. The platform includes cart, checkout, and payment integration for a seamless shopping experience.",
    url: "https://fastbasket.vercel.app/",
    category: "full stack",
  },
  {
    id: 4,
    title: "Dairy To Home Service",
    description:
      "A full-featured dairy delivery platform with, real-time order tracking, and secure online payments with real time map integration.",
    url: "http://dairyfarmmilk-service.netlify.app/",
    category: "full stack",
  },
  {
    id: 5,
    title: "JunkyBites",
    description:
      "A modern online food ordering platform for JunkyBites, offering fast delivery, delicious meals, and a seamless user experience.",
    url: "https://junkybites.netlify.app/",
    category: "frontend",
  },
  {
    id: 6,
    title: "Trippy Travels",
    description:
      "A sleek, responsive tourism website offering destination highlights, travel packages, and seamless booking experience.",
    url: "https://trippytours-travels.netlify.app/",
    category: "frontend",
  },
  {
    id: 7,
    title: "Color Craft",
    description:
      "A tool for designers to explore colors, palettes, and transparency effects with ease.",
    url: "https://colorcraft-new.netlify.app/",
    category: "frontend",
  },
  {
    id: 8,
    title: "ManageX",
    description:
      "A full-stack blog application built with the MERN stack, featuring secure authentication, post creation, editing, and deletion with rich text support. It includes an admin dashboard for managing users and content, along with responsive UI for a seamless reading and writing experience",
    url: "https://cms-appwrite.vercel.app",
    category: "full stack",
  },
  {
    id: 9,
    title: "Lamadmin",
    description:
      " Designed and developed a responsive frontend dashboard using React.js and Tailwind CSS, featuring interactive charts, data tables, and filtering options. The dashboard provides a clean and user-friendly interface for managing and visualizing data efficiently",
    url: "https://dashboard-react11.netlify.app/",
    category: "frontend",
  },
  {
    id: 11,
    title: "Coffeco",
    description:
      "A modern coffee shop website designed with a responsive layout, featuring a clean landing page, product showcase, and smooth navigation. Built to provide an engaging user experience with visually appealing design and mobile-friendly performance",
    url: "https://cofee-websitebyahsaan.netlify.app/#home",
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
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter((project) => project.category === item.name)
      );
    }
    setShowAll(false); // jab filter change ho to phir se 3 show kare
  }, [item]);

  return (
    <section className="section portfolio__projects" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>
      <div>
        {/* Filter Buttons */}
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

        {/* Project Cards */}
        <div className="projects__container container grid">
          {(showAll ? projects : projects.slice(0, 3)).map(
            ({ id, title, url, description }) => {
              return (
                <div className="card" key={id}>
                  <div className="content">
                    <div className="h6">{title}</div>
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
            }
          )}
        </div>

        {/* View All Button */}
        {!showAll && projects.length > 3 && (
          <div className="view-all-container">
            <button
              className="view-all-btn"
              onClick={() => setShowAll(true)}
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
