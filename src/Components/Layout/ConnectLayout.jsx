import React from "react";
import { Outlet } from "react-router-dom";
import Connectbar from "../Common/Navbar/Connectbar";

const ConnectLayout = () => {
  return (
    <div className="layoutCont">
      <header className="header">
        <Connectbar />
      </header>

      <Outlet />
    </div>
  );
};

export default ConnectLayout;
