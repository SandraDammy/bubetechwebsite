import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../Components/Page/Home/Home";
import ProjectLayout from "../Components/Layout/ProjectLayout";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <ProjectLayout />, // <-- Layout includes navbar + footer
      children: [
        { path: "", element: <Home /> },
        // { path: "/about", element: <About /> },
        // { path: "/contact", element: <Contact /> },
      ],
    },
    // { path: "*", element: <NotFound /> }, // Fallback for undefined routes
  ]);

  return routes;
};

export default AppRoutes;
