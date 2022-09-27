import { NavLink } from "react-router-dom";

//Importing icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

//Importing hooks
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false /*default value */);
  const burgerMenuIcon = (
    <FontAwesomeIcon
      onClick={() => setOpen(!open)}
      className="mobile-nav-burger"
      icon={faBars}
    />
  );

  const closeMenuIcon = (
    <FontAwesomeIcon
      onClick={() => setOpen(!open)}
      className="mobile-nav-burger"
      icon={faXmark}
    />
  );

  return (
    <nav className="mobile-nav">
      <div className="mobil-nav-inner">
        <div className="mobile-nav-logo-holder">
          <h3 className="mobile-nav-logo"> &lt;/&gt;</h3>
        </div>
        {open ? closeMenuIcon : burgerMenuIcon}
        {open && (
          <ul className="nav-bar-links-holder mobile-nav-link-holder">
            <li>
              <NavLink
                className="nav-bar-link-item mobile-nav-link-item"
                to="/home"
              >
                <b className="nav-bar-coding-symbol">&lt;</b>Home /
                <b className="nav-bar-coding-symbol-right">&gt;</b>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-bar-link-item mobile-nav-link-item"
                to="/about"
              >
                <b className="nav-bar-coding-symbol">&lt;</b>About /
                <b className="nav-bar-coding-symbol-right">&gt;</b>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-bar-link-item mobile-nav-link-item"
                to="/work"
              >
                <b className="nav-bar-coding-symbol">&lt;</b>Work /
                <b className="nav-bar-coding-symbol-right">&gt;</b>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
