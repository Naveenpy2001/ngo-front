// StaffLogin.js

import React, { useState } from "react";
import "../css/stafflogin.css";
import { FaFacebook, FaGoogle, } from "react-icons/fa";

const StaffLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false); // State to manage the visibility of the registration modal

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/staff/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect to dashboard or perform other actions upon successful login
        console.log("Login successful");
      } else {
        const data = await response.json();
        setError(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred");
    }
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleCloseModal = () => {
    setShowRegisterModal(false);
  };

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [registerError, setReisterError] = useState("");

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/staff/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastName, email, password, phone }),
      });

      if (response.ok) {
        // Registration successful, you can redirect to login page or perform other actions
        console.log("Registration successful");
      } else {
        const data = await response.json();
        setError(data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <main>
      <center>
        <p className="regards">
          <q>
            Join us in making a difference! Become a volunteer with [NGO Name]
            and contribute to meaningful projects that positively impact
            communities. Your time and skills can create lasting change.
          </q>
        </p>
      </center>
      <div className="staff-login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Staff Login</h2>
          <div className="social-login">
            <button type="button" className="facebook">
              <FaFacebook /> Login with Facebook
            </button>
            <button type="button" className="google">
              <FaGoogle /> Login with Google
            </button>
          </div>
          <div className="or-divider">
            <span
              style={{
                textAlign: "center",
                display: "block",
                margin: "0 0 10px 0",
              }}
            >
              or
            </span>
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="additional-links">
            <a href="#!">Forgot Password?</a>
            <span> | </span>
            <button
              type="button"
              className="register-btn"
              onClick={handleRegisterClick}
            >
              New to website? Click to register
            </button>
          </div>
        </form>
        {showRegisterModal && (
          // register form
          <div className="register-modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>

              <form
                onSubmit={handleSubmitRegister}
                className=" register-staff-form"
              >
                <h2 className="title">Staff Registration</h2>
                <div className="social-login">
                  <button type="button" className="facebook">
                    <FaFacebook /> Register with Facebook
                  </button>
                  <button type="button" className="google">
                    <FaGoogle /> Register with Google
                  </button>
                </div>
                <div className="or-divider">
                  <span>or</span>
                </div>
                {registerError && (
                  <p className="error-message">{registerError}</p>
                )}
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <button type="submit" className="submit-button">
                  Register
                </button>
                <div className="additional-links">
                  <a href="#!">Already have an account? Login</a>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default StaffLogin;
