import React, { useState } from "react";
import "../css/contactUs.css";
import Swal from "sweetalert2";

import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        setLoading(true);

    // Validate phone number format (example: digits only)
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(formData.phone)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Phone number must contain only digits",
      });
      return; // Exit function if validation fails
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    
      if (response.ok) {
            setLoading(false);
            
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your form has been submitted..!",
          showConfirmButton: false,
          timer: 3000,
        });
        // Reset form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        // Handle server-side errors
            setLoading(false);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to submit form: Server error",
        });
      }
    } catch (error) {
      // Handle network errors
          setLoading(false);
      console.log("Error in submitting form", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to submit form: Network error",
      });
    }
  };

  return (
    <main>
      <h2 className="form-heading">Contact Us</h2>
      <center>
        <p className="regards">
          For general inquiries, partnership proposals, volunteering
          opportunities, or any other questions, please fill out the form below.
          We'll get back to you as soon as possible.
        </p>
      </center>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name" // Added name attribute
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email" // Added name attribute
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Example@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone No. :
            </label>
            <input
              type="tel"
              id="phone"
              name="phone" // Added name attribute
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="+91 00000 00000"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message" // Added name attribute
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
              placeholder="Enter your thoughts...."
            />
          </div>
          <button type="submit" className="form-submit">
            {loading ? (
              <div className="flex-center-loader">
                <div class="dot-spinner">
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                  <div class="dot-spinner__dot"></div>
                </div>
              </div>
            ) : (
              "SUBMIT"
            )}
          </button>
        </form>
        <div className="img-c">
          <img
            src="https://img-cdn.thepublive.com/filters:format(webp)/socialsamosa/media/post_banners/tZI1T9vvZp7jxnpLQu2k.jpg"
            alt=""
            width={"100%"}
          />
        </div>
      </div>

      <div className="flex bgm-map-flex">
        <div className="address-details">
          <div className="footer-section">
            <h3>Contact Information</h3>
            <p className="email-f flex-c">
              weslyjohnpaulraj@gmail.com
            </p>
            <p className="phone flex">
              +91 8142616767{" "}
            </p>
          </div>

          <h3 className="address-details-title">Address Details</h3>
          <div className="address-field">
            <strong className="label">Address:</strong>{" "}
            <span className="value">
              12-203/745, Church Street, Nakkabanda, Pungunur, <br /> Chittoor -
              517247, Andhra Pradesh
            </span>
          </div>
        </div>
        <div className="bgm-loc">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31053.87556945072!2d78.53341600010278!3d13.366781369306471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb27eb3b8ce6059%3A0x9bf361635fb66a8a!2sPunganur%2C%20Andhra%20Pradesh%20517247!5e0!3m2!1sen!2sin!4v1720769061482!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0", width: "100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>

      <center>
        <p className="regards regard-2">
          Thank you for your interest in. We value your feedback, inquiries, and
          collaboration opportunities. Please feel free to reach out to us using
          the information below :
        </p>
      </center>
    </main>
  );
};

export default ContactForm;
