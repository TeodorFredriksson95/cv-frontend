import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" end className="active-link" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="active-link" activeclassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active-link" activeclassname="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/skillset" className="active-link" activeclassname="active">
            Skill Set
          </NavLink>
        </li>
        <li>
          <NavLink to="/apipage" className="active-link" activeclassname="active">
            API
          </NavLink>
        </li>
        <li onMouseEnter={() => setIsDropdownVisible(true)} onMouseLeave={() => setIsDropdownVisible(false)}>
          <a href="#" className="active-link">
            Other
          </a>

          {isDropdownVisible && (
            <ul className="dropdown">
              <li className="dropdown-li">
                <NavLink to="/privacypolicy" className="active-link" activeclassname="active">
                  Privacy Policy
                </NavLink>
              </li>
              <li className="dropdown-li">
                <NavLink to="/credits" className="active-link" activeclassname="active">
                  Credits
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
