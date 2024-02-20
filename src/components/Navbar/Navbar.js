import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" end className="active-link" activeClassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="active-link" activeClassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active-link" activeClassname="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/skillset" className="active-link" activeClassname="active">
            Skill Set
          </NavLink>
        </li>
        <li>
          <NavLink to="/apipage" className="active-link" activeClassname="active">
            API
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" className="active-link" activeClassname="active">
            Resources
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
