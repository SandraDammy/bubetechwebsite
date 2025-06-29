import React from "react";
import "./App.css";
import WhyChoose from "./Components/Section/WhyChoose/WhyChoose";
import Contactus  from "./Components/Section/ContactUs/ContactUs";

// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./AppRoutes/AppRoutes";

function App() {
  return (
    <>
      <WhyChoose />
      <Contactus />
    </>
    // <BrowserRouter>
    //   <AppRoutes />
    // </BrowserRouter>
  );
}

export default App;
