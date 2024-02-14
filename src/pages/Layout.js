import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
