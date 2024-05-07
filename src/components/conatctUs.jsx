import React, { useState } from "react";
import "../css/contactUs.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Phone No. :
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tel" className="form-label">
              Email:
            </label>
            <input
              type="tel"
              id="tel"
              value={email}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="form-textarea"
            />
          </div>
          <button type="submit" className="form-submit">
            Send
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
      <center>
        <p className="regards regard-2">
          Thank you for your interest in . We value your feedback,
          inquiries, and collaboration opportunities. Please feel free to reach
          out to us using the information below :
        </p>
      </center>
    </main>
  );
};

export default ContactForm;
