import { Outlet, Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { useAuth } from "../../context/AuthContext";
import { useScroll } from "../../context/ScrollContext";

const Navbar = () => {
  const location = useLocation();
  const { triggerScroll } = useScroll();

  const isActiveHash = (hash) => {
    return location.hash === hash;
  };
  const [activeHash, setActiveHash] = useState("");

  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [navbarBg, setNavbarBg] = useState(true);

  const [expandedSection, setExpandedSection] = useState(null);
  const [activeLinkColor, setActiveLinkColor] = useState(null);

  const [activeItem, setActiveItem] = useState(null);

  const { isAuthenticated, logout, accessToken } = useAuth();
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  const handleActiveLinkColor = (itemId) => {
    setActiveLinkColor(itemId);
  };

  const handleSectionClick = (sectionName) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  const handleLaggyMenuVisibility = (navigateUrl) => {
    setIsMobileMenuVisible(false);
    setTimeout(() => {
      navigate(navigateUrl);
    }, 500);
  };

  const handleLogin = () => {
    setIsMobileMenuVisible(false);
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  const handleLogout = () => {
    setIsMobileMenuVisible(false);
    setTimeout(() => {
      logout();
      navigate("/");
    }, 500);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const handleAnchorClick = (e, hash) => {
    e.preventDefault();
    navigate(`/docs${hash}`);
    triggerScroll(hash);
  };
  useEffect(() => {});

  return (
    <nav className={`navbar ${isVisible ? "" : "navbar-hidden"} ${navbarBg ? "" : "navbar-scrolled"}`}>
      <div className="hamburger-container">
        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuVisible ? <span className="mdi--close"></span> : <span className="quill--hamburger"></span>}
        </div>
        <div className="horizontal-nav-items">
          <div
            className="top-menu-nav-div"
            onClick={() => {
              setActiveLinkColor("docs");
              handleLaggyMenuVisibility("/docs");
            }}
          >
            <a className={`log ${activeLinkColor === "docs" ? "active" : ""}`}>
              <li>Docs</li>
            </a>
          </div>
          {!isAuthenticated && (
            <div className="top-menu-nav-div">
              <a
                className={`log ${activeLinkColor === "signin" ? "active" : ""}`}
                onClick={() => {
                  handleLaggyMenuVisibility("/login");
                  setActiveLinkColor("signin");
                }}
              >
                <li>Sign in</li>
              </a>
            </div>
          )}
          {isAuthenticated && (
            <div className="top-menu-nav-div">
              <a
                className={`log ${activeLinkColor === "dashboard" ? "active" : ""}`}
                onClick={() => {
                  handleLaggyMenuVisibility("/dashboard");
                  setActiveLinkColor("dashboard");
                }}
              >
                <li>Dashboard</li>
              </a>
            </div>
          )}
          {isAuthenticated && (
            <div className="top-menu-nav-div">
              <a
                className={`log ${activeLinkColor === "logout" ? "active" : ""}`}
                onClick={() => {
                  handleLogout();
                  setActiveLinkColor("logout");
                }}
              >
                <li>Log out</li>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className={`overlay ${isMobileMenuVisible ? "overlay-visible" : ""}`} onClick={() => setIsMobileMenuVisible(false)}></div>

      <div className={`mobile-sidebar ${isMobileMenuVisible ? "sidebar-visible" : ""}`}>
        <div className="mobile-sidebar-header">
          <h4 className="section-title-h4">Unidevweb</h4>
          <span className="mingcute--close-line" onClick={() => setIsMobileMenuVisible(false)}></span>
        </div>
        <div className="main-navigation-sidebar">
          <div className="sidebar-main-menu">
            <div>
              <h3 className="side-bar-main-title">Main Menu</h3>
              <hr className="sidebar-hr"></hr>
              <div>
                <div className="sidebar-dropdown">
                  <ul>
                    <a
                      className={`api-navigation-links ${activeLinkColor === "home" ? "active" : ""}`}
                      onClick={(e) => {
                        setActiveLinkColor("home");
                        handleLaggyMenuVisibility("/");
                      }}
                    >
                      <li>Home</li>
                    </a>
                    {isAuthenticated && (
                      <a
                        className={`api-navigation-links ${activeLinkColor === "dashboard" ? "active" : ""}`}
                        onClick={(e) => {
                          setActiveLinkColor("dashboard");
                          handleLaggyMenuVisibility("/dashboard");
                        }}
                      >
                        <li>Dashboard</li>
                      </a>
                    )}
                    <a
                      className={`api-navigation-links ${activeLinkColor === "skillset" ? "active" : ""}`}
                      onClick={(e) => {
                        setActiveLinkColor("skillset");
                        handleLaggyMenuVisibility("/skillset");
                      }}
                    >
                      <li>Skill Set</li>
                    </a>
                    <a
                      className={`api-navigation-links ${activeLinkColor === "story" ? "active" : ""}`}
                      onClick={(e) => {
                        setActiveLinkColor("story");
                        handleLaggyMenuVisibility("/story");
                      }}
                    >
                      <li>Story</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-api-menu">
            <div>
              <h3 className="side-bar-main-title">API Docs</h3>
              <hr className="sidebar-hr"></hr>

              <div className="sidebar-dropdown">
                <h4 className="api-titles-sidebar">Quick Start</h4>
                <ul onClick={() => setIsMobileMenuVisible(false)}>
                  <a
                    href="/docs#introduction"
                    className={`api-navigation-links ${activeLinkColor === "introduction" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("introduction");
                      handleAnchorClick(e, "#introduction");
                    }}
                  >
                    <li>Introduction</li>
                  </a>
                  <a
                    href="/docs#getting-started"
                    className={`api-navigation-links ${activeLinkColor === "getting-started" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("getting-started");
                      handleAnchorClick(e, "#getting-started");
                    }}
                  >
                    <li>Getting started</li>
                  </a>
                  <a
                    href="/docs#base-url"
                    className={`api-navigation-links ${activeLinkColor === "base-url" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("base-url");
                      handleAnchorClick(e, "#base-url");
                    }}
                  >
                    <li>Base URL</li>
                  </a>
                  <a
                    href="/docs#rate-limiting"
                    className={`api-navigation-links ${activeLinkColor === "rate-limiting" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("rate-limiting");
                      handleAnchorClick(e, "#rate-limiting");
                    }}
                  >
                    <li>Rate Limiting</li>
                  </a>
                </ul>
              </div>
              <div className="sidebar-dropdown">
                <h4 className="api-titles-sidebar">Authentication</h4>
                <ul onClick={() => setIsMobileMenuVisible(false)}>
                  <a
                    href="/docs#api-keys"
                    className={`api-navigation-links ${activeLinkColor === "api-keys" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("api-keys");
                      handleAnchorClick(e, "#api-keys");
                    }}
                  >
                    <li>API keys</li>
                  </a>
                  <a
                    href="/docs#oauth"
                    className={`api-navigation-links ${activeLinkColor === "oauth" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("oauth");
                      handleAnchorClick(e, "#oauth");
                    }}
                  >
                    <li>OAuth 2.0</li>
                  </a>
                </ul>
              </div>

              <div className="sidebar-dropdown">
                <h4 className="api-titles-sidebar">Resources</h4>
                <div>
                  <div
                    className={`sidebar-dropdown-flex-container ${activeLinkColor === "quick-start" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("quick-start");
                      handleSectionClick("quick-start");
                    }}
                  >
                    <h5>Candidates</h5>
                    <div className="center-arrow">
                      {expandedSection === "quick-start" ? <span className="solar--alt-arrow-down-outline"></span> : <span className="solar--alt-arrow-right-outline"></span>}
                    </div>
                  </div>
                  {expandedSection === "quick-start" && (
                    <ul className="api-sidebar-list" onClick={() => setIsMobileMenuVisible(false)}>
                      <a
                        href="/docs#retrieve-a-candidate"
                        className={`api-navigation-links ${activeLinkColor === "retrieve-a-candidate" ? "active" : ""}`}
                        onClick={(e) => {
                          setActiveLinkColor("retrieve-a-candidate");
                          handleAnchorClick(e, "#retrieve-a-candidate");
                        }}
                      >
                        <li>Retrieve a candidate</li>
                      </a>
                      <a
                        href="/docs#list-all-candidates"
                        className={`api-navigation-links ${activeLinkColor === "list-all-candidates" ? "active" : ""}`}
                        onClick={(e) => {
                          setActiveLinkColor("list-all-candidates");
                          handleAnchorClick(e, "#list-all-candidates");
                        }}
                      >
                        <li>List all candidates</li>
                      </a>
                    </ul>
                  )}
                </div>

                <div>
                  <div
                    className={`sidebar-dropdown-flex-container ${activeLinkColor === "tech-stack" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("tech-stack");
                      handleSectionClick("tech-stack");
                    }}
                  >
                    <h5>Tech stack</h5>
                    {expandedSection === "tech-stack" ? <span className="solar--alt-arrow-down-outline"></span> : <span className="solar--alt-arrow-right-outline"></span>}
                  </div>
                  {expandedSection === "tech-stack" && (
                    <ul className="api-sidebar-list" onClick={() => setIsMobileMenuVisible(false)}>
                      <a
                        href="/docs#retrieve-a-tech"
                        className={`api-navigation-links ${activeLinkColor === "retrieve-a-tech" ? "active" : ""}`}
                        onClick={(e) => {
                          setActiveLinkColor("retrieve-a-tech");
                          handleAnchorClick(e, "#retrieve-a-tech");
                        }}
                      >
                        <li>Retrieve a tech</li>
                      </a>
                      <a
                        href="/docs#list-all-tech"
                        className={`api-navigation-links ${activeLinkColor === "" ? "active" : ""}`}
                        onClick={(e) => {
                          setActiveLinkColor("");
                          handleAnchorClick(e, "#list-all-tech");
                        }}
                      >
                        <li>List all tech</li>
                      </a>
                    </ul>
                  )}
                </div>
                <div>
                  <div
                    className={`sidebar-dropdown-flex-container ${activeLinkColor === "work-experiences" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("work-experiences");
                      handleSectionClick("work-experiences");
                    }}
                  >
                    <h5>Work experiences</h5>
                    {expandedSection === "work-experiences" ? <span className="solar--alt-arrow-down-outline"></span> : <span className="solar--alt-arrow-right-outline"></span>}
                  </div>
                  {expandedSection === "work-experiences" && (
                    <ul className="api-sidebar-list" onClick={() => setIsMobileMenuVisible(false)}>
                      <a
                        href="/docs#retrieve-a-work-experience"
                        className={`api-navigation-links ${activeLinkColor === "retrieve-a-work-experience" ? "active" : ""}`}
                        onClick={(e) => {
                          setActiveLinkColor("retrieve-a-work-experience");
                          handleAnchorClick(e, "#retrieve-a-work-experience");
                        }}
                      >
                        <li>Retrieve an experience</li>
                      </a>
                      <a
                        href="/docs#list-all-work-experiences"
                        className={`api-navigation-links ${activeLinkColor === "list-all-work-experiences" ? "active" : ""}`}
                        onClick={(e) => {
                          setActiveLinkColor("list-all-work-experiences");
                          handleAnchorClick(e, "#list-all-work-experiences");
                        }}
                      >
                        <li>List all experiences</li>
                      </a>
                    </ul>
                  )}
                </div>
              </div>
              <div className="sidebar-dropdown">
                <h4 className="api-titles-sidebar">Concepts</h4>
                <ul onClick={() => setIsMobileMenuVisible(false)}>
                  <a
                    href="/docs#pagination"
                    className={`api-navigation-links ${activeLinkColor === "pagination" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("pagination");
                      handleAnchorClick(e, "#pagination");
                    }}
                  >
                    <li>Pagination</li>
                  </a>
                  <a
                    href="/docs#filtering"
                    className={`api-navigation-links ${activeLinkColor === "filtering" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("filtering");
                      handleAnchorClick(e, "#filtering");
                    }}
                  >
                    <li>Filtering</li>
                  </a>
                </ul>
              </div>
              <div className="sidebar-dropdown">
                <h4 className="api-titles-sidebar">Query Fields</h4>
                <ul onClick={() => setIsMobileMenuVisible(false)}>
                  <a
                    href="/docs#candidates-query-list"
                    className={`api-navigation-links ${activeLinkColor === "candidates-query-list" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("candidates-query-list");
                      handleAnchorClick(e, "#candidates-query-list");
                    }}
                  >
                    <li>Candidates</li>
                  </a>
                  <a
                    href="/docs#work-experiences-query-list"
                    className={`api-navigation-links ${activeLinkColor === "work-experiences-query-list" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("work-experiences-query-list");
                      handleAnchorClick(e, "#work-experiences-query-list");
                    }}
                  >
                    <li>Work experiences</li>
                  </a>
                  <a
                    href="/docs#tech-stack-query-list"
                    className={`api-navigation-links ${activeLinkColor === "tech-stack-query-list" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("tech-stack-query-list");
                      handleAnchorClick(e, "#tech-stack-query-list");
                    }}
                  >
                    <li>Tech stack</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar-other-content">
            <div>
              <h3 className="side-bar-main-title">Other</h3>
              <hr className="sidebar-hr"></hr>
              <div className="sidebar-dropdown">
                <ul>
                  <a
                    className={`api-navigation-links ${activeLinkColor === "about" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("about");
                      handleLaggyMenuVisibility("/about");
                    }}
                  >
                    <li>About</li>
                  </a>
                  <a
                    className={`api-navigation-links ${activeLinkColor === "contact" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("contact");
                      handleLaggyMenuVisibility("/contact");
                    }}
                  >
                    <li>Contact</li>
                  </a>
                  <a
                    className={`api-navigation-links ${activeLinkColor === "privacy-policy" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("privacy-policy");
                      handleLaggyMenuVisibility("/privacypolicy");
                    }}
                  >
                    <li>Privacy Policy</li>
                  </a>

                  <a
                    className={`api-navigation-links ${activeLinkColor === "credits" ? "active" : ""}`}
                    onClick={(e) => {
                      setActiveLinkColor("credits");
                      handleLaggyMenuVisibility("/credits");
                    }}
                  >
                    <li>credits</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-logout-content">
          <div className="logout-sidebar-div">
            {isAuthenticated && (
              <a onClick={handleLogout} className="sidebar-login-logout-text">
                <li>Logout</li>
              </a>
            )}
            {!isAuthenticated && (
              <a onClick={handleLogin} className="sidebar-login-logout-text">
                <li>Sign in</li>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* <ul className="full-nav">
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
          <NavLink to="/docs" className="active-link">
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

        {/* <li onMouseEnter={() => setIsDropdownVisible(true)} onMouseLeave={() => setIsDropdownVisible(false)}>
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
      </ul> */}
    </nav>
  );
};

export default Navbar;
