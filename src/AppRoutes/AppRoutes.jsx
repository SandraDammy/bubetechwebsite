import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../Components/Page/Home/Home";
import ProjectLayout from "../Components/Layout/ProjectLayout";
import OurStory from "../Components/Section/OurStory/OurStory";
import WhyChoose from "../Components/Section/WhyChoose/WhyChoose";
import FrequentlyAskedQty from "../Components/Section/FrequentlyAskedQty/FrequentlyAskedQty";
import ContactUs from "../Components/Section/ContactUs/ContactUs";
import NotFound from "../Components/Page/NotFound/NotFound";
import StartConnecting from "../Components/Page/StartConnecting/StartConnecting";
import ConnectLayout from "../Components/Layout/ConnectLayout";
import Language from "../Components/Page/StartConnecting/Language";

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

    {path: "/startConnecting", element: <Language />},
    {
      path: "/form",
      element: <ConnectLayout />,
      children: [{ path: "", element: <StartConnecting /> }],
    },
    
    {path: "/not-found", element: <NotFound />},
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

export default AppRoutes;
