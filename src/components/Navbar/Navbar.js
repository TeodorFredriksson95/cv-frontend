import { Outlet, Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [navbarBg, setNavbarBg] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
    console.log("mobile menu triggered");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const show = currentScrollY > 100;
      const navBG = currentScrollY > 100;
      const isDesktopView = window.innerWidth > 768;

      if (isDesktopView) {
        if (navBG) {
          setNavbarBg(false);
        } else {
          setNavbarBg(true);
        }
        if (show) {
          if (currentScrollY > lastScrollY) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? "" : "navbar-hidden"} ${navbarBg ? "" : "navbar-scrolled"}`}>
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuVisible ? <span className="mdi--close"></span> : <span className="quill--hamburger"></span>}
      </div>
      {isMobileMenuVisible && (
        <ul className="mobile-dropdown">
          <li className="dropdown-li">
            <NavLink to="/" end className="active-link">
              Home
            </NavLink>
          </li>
          <li className="dropdown-li">
            <NavLink to="/skillset" className="active-link">
              Skill Set
            </NavLink>
          </li>
          <li className="dropdown-li">
            <NavLink to="/login" className="active-link">
              Login
            </NavLink>
          </li>
          <li className="dropdown-li">
            <NavLink to="/story" className="active-link">
              Story
            </NavLink>
          </li>
          <li className="dropdown-li">
            <NavLink to="/about" className="active-link">
              About
            </NavLink>
          </li>
          <li className="dropdown-li">
            <NavLink to="/contact" className="active-link">
              Contact
            </NavLink>
          </li>
          <li className="dropdown-li">
            <NavLink to="/privacypolicy" className="active-link" activeclassname="active">
              Privacy
              <br /> Policy
            </NavLink>
          </li>
          <li className="dropdown-li">
            <NavLink to="/credits" className="active-link" activeclassname="active">
              Credits
            </NavLink>
          </li>
        </ul>
      )}

      <ul className="full-nav">
        <li>
          <NavLink to="/" end className="active-link" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="active-link">
            Login
          </NavLink>
        </li>
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

        {/* <li>
          <NavLink to="/apipage" className="active-link" activeclassname="active">
            API
          </NavLink>
        </li> */}
        <li onMouseEnter={() => setIsDropdownVisible(true)} onMouseLeave={() => setIsDropdownVisible(false)}>
          <a href="#" className="active-link other-link">
            Other ▼
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
