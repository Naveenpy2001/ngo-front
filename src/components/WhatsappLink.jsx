// src/Whatsapp.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import "../css/Whatsapp.css";

const WhatsAppLink = () => {
  return (
    <a
      href="https://wa.me/8142616767"
      className="whatsapp-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppLink;
