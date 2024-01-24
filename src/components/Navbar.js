import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {  
  return(
    <nav className="navbar">
      <ul>
       <li>
          <NavLink to="/" end className="active-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="active-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
  };
  
  export default Navbar;