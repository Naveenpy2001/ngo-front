import React, { useState } from "react";
import "../css/contactUs.css";
import Swal from "sweetalert2";

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
      const response = await fetch("https://bethesdagospelministriestrust.org/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
       console.log("saved successed")
      if (response.ok) {
        // Handle successful form submission
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
              placeholder="your name"
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

      <div className="flex-center">
        <div className="address-details">
          <h3 className="address-details-title">Address Details</h3>
          <div className="address-field">
            <strong className="label">Address:</strong>{" "}
            <span className="value">
              12-151-37/1, East pate punganur-517247, andhra pradesh , india.
            </span>
          </div>
          <div className="address-field">
            <strong className="label">City:</strong>{" "}
            <span className="value">punganur</span>
          </div>
          <div className="address-field">
            <strong className="label">ZIP Code:</strong>{" "}
            <span className="value">517247</span>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8324472632903!2d78.56843657850699!3d13.360692453450318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb27f104a493f9f%3A0xf1c096c1a487eb87!2sEast%20peta!5e0!3m2!1sen!2sin!4v1715689353158!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0", width: "100%" }}
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="maaap"
          title="map"
        ></iframe>
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
