import { useEffect, useState, useMemo } from "react";
import "./Projects.css";

const Projects = () => {
  const projectsData = useMemo(() => [
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
        "A full-stack e-commerce platform built with the MERN stack, featuring secure authentication and role-based access for buyers, sellers, and admin. Sellers can add and manage products, while the admin dashboard provides full control over users, orders, and inventory. .",
      url: "https://fastbasket.vercel.app/",
      category: "full stack",
    },
    {
      id: 4,
      title: "Dairy To Home Service",
      description:
        "Dairy To Home Service is a full-stack Django project that enables users to order fresh dairy products online with real-time order management. It includes secure authentication, smooth checkout, and an admin dashboard for managing products, orders, and deliveries.",
      url: "http://dairyfarmmilk-service.netlify.app/",
      category: "full stack",
    },
    {
      id: 5,
      title: "JunkyBites",
      description:
        "JunkyBites is a React-based restaurant website designed with a clean and modern UI. It allows users to explore the menu and place online food orders with ease. The site is fully responsive, providing a seamless experience across all devices.",
      url: "https://junkybites.netlify.app/",
      category: "frontend",
    },
    {
      id: 6,
      title: "Trippy Travels",
      description:
        "Trippy Travels is a React-based tourism website offering destination highlights and curated travel packages. It provides a user-friendly interface with smooth navigation and modern responsive design. The platform ensures a seamless booking experience across all devices.",
      url: "https://trippytours-travels.netlify.app/",
      category: "frontend",
    },
    {
      id: 7,
      title: "Color Craft",
      description:
        "ColorCraft is a creative React project designed for exploring and managing color palettes. It provides an interactive and responsive interface for selecting, customizing, and previewing colors. The platform helps designers and developers simplify their workflow with modern UI features.",
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
        "Designed and developed a responsive frontend dashboard using React.js and Tailwind CSS, featuring interactive charts, data tables, and filtering options. The dashboard provides a clean and user-friendly interface for managing and visualizing data efficiently",
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

    {
      id: 11,
      title: "ShanadEstate",
      description:
        "A full-stack real estate platform built with the MERN stack, enabling users to browse, search, and filter properties easily. It features secure authentication, property listings with images and details, and responsive design.",
      url: "https://full-stack-projectmernestate-production.up.railway.app/",
      category: "full stack",
    },

  ], []);

  const projectsNav = useMemo(() => [
    "All",
    ...new Set(projectsData.map((project) => project.category))
  ], [projectsData]);

  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
      setShowAll(false); // All me pehle 3 show
    } else {
      setProjects(
        projectsData.filter((project) => project.category === item.name)
      );
      setShowAll(true); // Full stack / Frontend me hamesha sab show
    }
  }, [item, projectsData]);

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
        {item.name === "All" && !showAll && projects.length > 3 && (
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
