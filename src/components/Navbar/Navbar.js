import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [navbarBg, setNavbarBg] = useState(true);

  const [expandedSection, setExpandedSection] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const { isAuthenticated, logout, accessToken } = useAuth();
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  const handleSectionClick = (sectionName) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
    console.log("mobile menu triggered");
  };

  return (
    <nav className={`navbar ${isVisible ? "" : "navbar-hidden"} ${navbarBg ? "" : "navbar-scrolled"}`}>
      <div className="hamburger-container">
        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuVisible ? <span className="mdi--close"></span> : <span className="quill--hamburger"></span>}
        </div>
        {/* <span class="healthicons--ui-menu-grid"></span> */}
      </div>
      <div className={`overlay ${isMobileMenuVisible ? "overlay-visible" : ""}`} onClick={() => setIsMobileMenuVisible(false)}></div>

      <div className={`mobile-sidebar ${isMobileMenuVisible ? "sidebar-visible" : ""}`}>
        <div className="mobile-sidebar-header">
          <h4 className="section-title-h4">Unidevweb</h4>
          <span className="mingcute--close-line" onClick={() => setIsMobileMenuVisible(false)}></span>
        </div>
        <hr></hr>
        <div className="main-navigation-sidebar">
          <div className="sidebar-main-menu">
            <h3 className="side-bar-main-title">Main Menu</h3>
            <ul onClick={() => setIsMobileMenuVisible(false)}>
              <li>
                <NavLink to="/" end className="active-link">
                  Home
                </NavLink>
              </li>
              {!isAuthenticated && (
                <li>
                  <NavLink to="/login" className="active-link">
                    Login
                  </NavLink>
                </li>
              )}
              {isAuthenticated && (
                <li>
                  <NavLink to="/dashboard" className="active-link" activeclassname="active">
                    Dashboard
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to="/apipage" className="active-link">
                  API
                </NavLink>
              </li>
              <li>
                <NavLink to="/skillset" className="active-link">
                  Skill Set
                </NavLink>
              </li>

              <li>
                <NavLink to="/story" className="active-link">
                  Story
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="active-link">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="active-link">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacypolicy" className="active-link" activeclassname="active">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/credits" className="active-link" activeclassname="active">
                  Credits
                </NavLink>
              </li>
              {isAuthenticated && (
                <li>
                  <a onClick={handleLogout} className="active-link logout">
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="api-navigation-sidebar">
          <h3 className="side-bar-main-title">API Docs</h3>
          <ul onClick={() => setIsMobileMenuVisible(false)}>
            <li>
              <NavLink to="/apipage#introduction" className="active-link" activeclassname="active">
                Introduction
              </NavLink>
            </li>
            <li>
              <NavLink to="/apipage#getting-started" className="active-link" activeclassname="active">
                Getting started
              </NavLink>
            </li>
            <li>
              <NavLink to="/apipage#base-url" className="active-link" activeclassname="active">
                Base URL
              </NavLink>
            </li>
            <li>
              <NavLink to="/apipage#rate-limiting" className="active-link" activeclassname="active">
                Rate Limiting
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <ul className="full-nav">
        <li>
          <NavLink to="/" end className="active-link" activeclassname="active">
            Home
          </NavLink>
        </li>
        {!isAuthenticated && (
          <li>
            <NavLink to="/login" className="active-link">
              Login
            </NavLink>
          </li>
        )}
        <li className="dropdown-li">
          <NavLink to="/apipage" className="active-link">
            API
          </NavLink>
        </li>
        {isAuthenticated && (
          <li>
            <NavLink to="/dashboard" className="active-link" activeclassname="active">
              Dashboard
            </NavLink>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <a onClick={handleLogout} className="active-link logout">
              Logout
            </a>
          </li>
        )}

        <li onMouseEnter={() => setIsDropdownVisible(true)} onMouseLeave={() => setIsDropdownVisible(false)}>
          <a href="#" className="active-link other-link">
            Other ▼
          </a>

          {isDropdownVisible && (
            <ul className="dropdown full-nav-drop">
              <li>
                <NavLink to="/story" className="active-link" activeclassname="active">
                  Story
                </NavLink>
              </li>
              <li>
                <NavLink to="/skillset" className="active-link" activeclassname="active">
                  Skill Set
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
