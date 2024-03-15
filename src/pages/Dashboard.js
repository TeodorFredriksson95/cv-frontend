import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import DashboardHeader from "../components/Dashboard/Header/DashboardHeader";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="View your settings, generate API keys and discover your own journey!" />
      </Helmet>
      <DashboardHeader />
    </div>
  );
};
export default Dashboard;
