import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../Components/Page/Home/Home";
import ProjectLayout from "../Components/Layout/ProjectLayout";
import OurStory from "../Components/Section/OurStory/OurStory";
import WhyChoose from "../Components/Section/WhyChoose/WhyChoose";
import FrequentlyAskedQty from "../Components/Section/FrequentlyAskedQty/FrequentlyAskedQty";
import ContactUs from "../Components/Section/ContactUs/ContactUs";
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
        { path: "/about", element: <OurStory /> },
        { path: "/feature", element: <WhyChoose /> },
        { path: "/faqs", element: <FrequentlyAskedQty /> },
        { path: "/contact", element: <ContactUs /> },
      ],
    },
  ]);

  return routes;
};

export default AppRoutes;
