import React from "react";
import Header from "./header";
import Footer from "./footer";
import Home from "./components/home";
import GalleryPage from "./components/GalleryImage";
import StaffLogin from "./components/staffLogin";
import ContactForm from "./components/conatctUs";
import ServicesPage from "./components/Services";
import AboutUsPage from "./components/AboutUs";
import NGODocument from "./components/document";
import PartnersPage from "./components/partnersWithUs";
import DonationPage from "./components/donations";
import Navbar from './components/header2'
import Register from "./components/register";

import {Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/staff/login" element={<StaffLogin />} />
        <Route path="/ContactUs" element={<ContactForm />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/Document" element={<NGODocument />} />
        <Route path="/PartnersPage" element={<PartnersPage />} />
        <Route path="/DonationPage" element={<DonationPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
