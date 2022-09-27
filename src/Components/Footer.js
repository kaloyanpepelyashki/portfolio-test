import logo from "./logo.svg";

//Import the WeekDay component
import WeekDay from "./Weekday";
//Importing the NavLink
import { NavLink } from "react-router-dom";

//Importing the SoMe icons
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
//Importing the fontawesome component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-topbar">
        <div className="footer-topbar-items-container">
          <h3 className="footer-topbar-logo ">&lt;/&gt;</h3>
          <div className="footer-topbar-mailCV-container">
            <a href="mailto:kaloyan.pepelyashki@gmail.com?body=My custom mail body">
              &lt;mail&gt;
            </a>
            <h4>CV</h4>
          </div>
        </div>
      </nav>
      <section className="footer-main-section">
        <div className="footer-headings-holder">
          <h2 className="footer-heading-big">
            Have a great <WeekDay />
          </h2>
          <h3 className="footer-heading-small">
            {" "}
            See what i{" "}
            <NavLink
              className="nav-bar-link-item main-page-heading-link"
              to="/work"
            >
              <b className="small-heading-coding-symbol">&lt;</b>work /
              <b className="small-heading-coding-symbol-right">&gt;</b>
            </NavLink>{" "}
            &nbsp;with
          </h3>
          <h3 className="footer-heading-small">
            {" "}
            See more{" "}
            <NavLink
              className="nav-bar-link-item main-page-heading-link"
              to="/about"
            >
              <b className="small-heading-coding-symbol">&lt;</b>about /
              <b className="small-heading-coding-symbol-right">&gt;</b>
            </NavLink>{" "}
            &nbsp;me
          </h3>
        </div>
        <div className="footer-bottom-bar">
          <div className="footer-SOME-heading-icons-holder">
            <h2 className="footer-SOME-heading">Let's connect</h2>
            <div className="footer-SOME-icons">
              <a href="https://instagram.com/kalos.professional?igshid=YmMyMTA2M2Y=">
                <FontAwesomeIcon className="SoMe-icon" icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon className="SoMe-icon" icon={faFacebook} />
              </a>
              <a href="https://www.linkedin.com/in/kaloyan-pepelyashki-0a3346220">
                <FontAwesomeIcon className="SoMe-icon" icon={faLinkedin} />
              </a>
              <a href="#">
                <FontAwesomeIcon className="SoMe-icon" icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="footer-bottom-bar-react-crerdit">
            <h4 className="footer-bottom-bar-credit">Created with</h4>
            <img src={logo} className="App-logo react-logo-footer" alt="logo" />
          </div>
        </div>
      </section>
    </footer>
  );
}
