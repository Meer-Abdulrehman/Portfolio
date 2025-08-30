import { useEffect, useState } from "react";
import "./Header.css";
import TimeDisplay from "../timedisplay/timedisplay"; 
import AvailableIndicator from "../availableindicator/availableindicator"; // <-- import added

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menu, setMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        {/* Replace Portfolio with TimeDisplay */}
        <a href="#home" className="nav__link active-link">
          <TimeDisplay />
        </a>

        <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon" /> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon" /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-scenery nav__icon" /> Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon" /> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setMenu(false)}
          />
        </div>

        {/* Right side: Available indicator */}
        <div className="header__right">
          <AvailableIndicator />
          <div className="nav__toggle" onClick={() => setMenu(!menu)}>
            <i className="uil uil-apps" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
