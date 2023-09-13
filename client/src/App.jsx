import React from "react";
import { Routes, Route } from "react-router-dom"; 
import {
  HomePage,
  AboutPage,
  ContactPage,
  ServicesPage,
  NotFoundPage
} from "../pages";
import NavbarComponent from ".././components/Navbar";
import Footer from ".././components/Footer/Footer";


function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
