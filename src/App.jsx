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
import Register from "./components/register";

import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/terms-of-use";
import RefundAndReturnsPolicy from "./components/RefundAndReturnsPolicy";
import {Routes, Route} from 'react-router-dom';



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/staff/login" element={<StaffLogin />} />
        <Route path="/ContactUs" element={<ContactForm />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/Document" element={<NGODocument />} />
        <Route path="/PartnersPage" element={<PartnersPage />} />
        <Route path="/Donation-Page" element={<DonationPage />} />
        <Route path="/DonationPage" element={<DonationPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/refund-returns" element={<RefundAndReturnsPolicy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
