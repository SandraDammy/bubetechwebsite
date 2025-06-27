import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";

const ProjectLayout = () => {
  return (
    <div className="landingPage">
      <header className="header">
        <Navbar />
      </header>

      <Outlet />

      <Footer />
    </div>
  );
};

export default ProjectLayout;
