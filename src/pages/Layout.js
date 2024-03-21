import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import useActivityAndTokenRefresh from "../components/util/useActivityAndTokenRefresh";

const Layout = () => {
  useActivityAndTokenRefresh();

  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
