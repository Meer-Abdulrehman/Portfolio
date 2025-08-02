import "./Footer.css";

const Footer = () => {
  const footerData = [
    {
      id: 1,
      url: "about",
      text: "About",
    },
    {
      id: 2,
      url: "skills",
      text: "Skills",
    },
    {
      id: 3,
      url: "portfolio",
      text: "Projects",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">AbdulRehman</h1>
        <ul className="footer__list">
          {footerData.map((item) => (
            <li key={item.id} className="footer__item">
              <a href={item.url} className="footer__link">
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/Meer-Abdulrehman"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abdulrehman1057/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
  href="https://twitter.com/"
  className="footer__social-link"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="bx bxl-twitter"></i>
</a>

        </div>
        <span className="footer_copy">
          © {new Date().getFullYear()} AbdulRehman. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
