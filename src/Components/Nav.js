import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-logo-holder">
        <h3 className="nav-bar-logo"> &lt;/&gt;</h3>
      </div>
      <ul className="nav-bar-links-holder">
        <li>
          <NavLink className="nav-bar-link-item" to="/home">
            <b className="nav-bar-coding-symbol">&lt;</b>Home /
            <b className="nav-bar-coding-symbol-right">&gt;</b>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link-item" to="/about">
            <b className="nav-bar-coding-symbol">&lt;</b>About /
            <b className="nav-bar-coding-symbol-right">&gt;</b>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link-item" to="/work">
            <b className="nav-bar-coding-symbol">&lt;</b>Work /
            <b className="nav-bar-coding-symbol-right">&gt;</b>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
