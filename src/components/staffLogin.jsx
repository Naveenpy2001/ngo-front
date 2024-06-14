// // StaffLogin.js

// import React, { useState,useEffect } from "react";
// import "../css/stafflogin.css";


// const StaffLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showRegisterModal, setShowRegisterModal] = useState(false); // State to manage the visibility of the registration modal

//   const [error2, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://127.0.0.1:8000/staff/login/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         // Redirect to dashboard or perform other actions upon successful login
//         console.log("Login successful");
//       } else {
//         const data = await response.json();
//         setError(data.error || "Login failed");
//       }
//     } catch (error) {
//       console.error(error2, error);
//       setError("An unexpected error occurred");
//     }
//   };

//   const handleRegisterClick = () => {
//     setShowRegisterModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowRegisterModal(false);
//   };

  
//   // register user

//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [registerError, setRegisterError] = useState("");
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch all users on component mount
//     fetch("/api/users/")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//       });
//   }, []);

//   const handleSubmitRegister = (e) => {
//     e.preventDefault();
//     fetch("/api/users/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: name,
//         first_name: name,
//         last_name: lastName,
//         email: registerEmail,
//         password: registerPassword,
//         phone: phone,
//       }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           alert("Registration successful!");
//           setName("");
//           setLastName("");
//           setRegisterEmail("");
//           setRegisterPassword("");
//           setPhone("");
//         } else {
//           return response.json().then((data) => {
//             throw new Error(data.message || "Registration failed");
//           });
//         }
//       })
//       .catch((error) => {
//         console.error("Registration error:", error);
//         setRegisterError("Registration failed. Please check your details.");
//         alert("Registration failed. Please check your details.");
//       });
//   };

//   //  const [name, setName] = useState("");
//   //  const [lastName, setLastName] = useState("");
//   //  const [registerEmail, setRegisterEmail] = useState("");
//   //  const [registerPassword, setRegisterPassword] = useState("");
//   //  const [phone, setPhone] = useState("");
//   //  const [registerError, setRegisterError] = useState("");
//   //  const [users, setUsers] = useState([]);

//   //  useEffect(() => {
//   //    // Fetch all users on component mount
//   //    fetch("/api/users/")
//   //      .then((response) => response.json())
//   //      .then((data) => {
//   //        setUsers(data);
//   //      })
//   //      .catch((error) => {
//   //        console.error("Error fetching users:", error);
//   //      });
//   //  }, []);

//   //  const handleSubmitRegister = (e) => {
//   //    e.preventDefault();
//   //    fetch("/api/users/", {
//   //      method: "POST",
//   //      headers: {
//   //        "Content-Type": "application/json",
//   //      },
//   //      body: JSON.stringify({
//   //        username: name,
//   //        first_name: name,
//   //        last_name: lastName,
//   //        email: registerEmail,
//   //        password: registerPassword,
//   //        phone: phone,
//   //      }),
//   //    })
//   //      .then((response) => {
//   //        if (response.ok) {
//   //          alert("Registration successful!");
//   //          setName("");
//   //          setLastName("");
//   //          setRegisterEmail("");
//   //          setRegisterPassword("");
//   //          setPhone("");
//   //        } else {
//   //          return response.json().then((data) => {
//   //            throw new Error(data.message || "Registration failed");
//   //          });
//   //        }
//   //      })
//   //      .catch((error) => {
//   //        console.error("Registration error:", error);
//   //        setRegisterError("Registration failed. Please check your details.");
//   //        alert("Registration failed. Please check your details.");
//   //      });
//   //  };

//   return (
//     <main>
//       <br />
//       <br />
//       <br />
//       <center>
//         <p className="regards">
//           <q>
//             Join us in making a difference! Become a volunteer with our NGO and
//             contribute to meaningful projects that positively impact
//             communities. Your time and skills can create lasting change.
//           </q>
//         </p>
//       </center>
//       <div className="staff-login-container">
//         <form onSubmit={handleSubmit} className="login-form">
//           <h2>Staff Login</h2>
//           <br />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="login-button">
//             Login
//           </button>
//           <div className="additional-links">
//             <a href="#!">Forgot Password?</a>

//             <button
//               type="button"
//               className="register-btn"
//               onClick={handleRegisterClick}
//             >
//               New to website? Click to register
//             </button>
//           </div>
//         </form>
//         {showRegisterModal && (
//           // register form
         

//           <div className="register-modal">
//             <div className="modal-content">
//               <span className="close" onClick={handleCloseModal}>
//                 &times;
//               </span>

//               <form
//                 onSubmit={handleSubmitRegister}
//                 className=" register-staff-form"
//               >
//                 <h2 className="title">Staff Registration</h2>
//             <br />
//                 <div className="or-divider"></div>
//                 {registerError && (
//                   <p className="error-message">{registerError}</p>
//                 )}
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={registerEmail}
//                   onChange={(e) => setRegisterEmail(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={registerPassword}
//                   onChange={(e) => setRegisterPassword(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                 />
//                 <button type="submit" className="login-button">
//                   Register
//                 </button>
//                 <div className="addFlex">
//                   <span>Already have an account?</span>
//                   <a
//                     href="#!"
//                     className="additional"
//                     onClick={handleCloseModal}
//                   >
//                     Login
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// };

// export default StaffLogin;

import React, { useState } from "react";
import "../css/stafflogin.css"; // Assuming CSS file location

const StaffLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [loginError, setLoginError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  // Clear previous login error
  setLoginError("");

  try {
    const response = await fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(data.error || "Invalid email or password.");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }

    // Assuming the backend returns a token upon successful login
    const token = data.token;
    localStorage.setItem("token", token);

    console.log("User logged in:", data);
    alert("Login success"); // Display alert for successful login

    // Handle successful login, e.g., redirect to dashboard
    // history.push("/dashboard");
  } catch (error) {
    console.error("Error logging in user:", error);
    setLoginError(error.message); // Update login error state with specific error message
  }
};




  //  user registration

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleCloseModal = () => {
    setShowRegisterModal(false);
    setRegisterError("");
  };



  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    if (registerPassword !== confirmPassword) {
      setRegisterError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: registerEmail,
          username: name,
          password: registerPassword,
          confirm_password: confirmPassword, // Make sure to include confirm_password
          phone,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Registration failed");
      }

      const data = await response.json();
      console.log("User registered:", data);
      // Handle successful registration, e.g., close modal, clear form, etc.
      setShowRegisterModal(false);
      setRegisterEmail("");
      setRegisterPassword("");
      setConfirmPassword("");
      setName("");
      setPhone("");
      setRegisterError("");
    } catch (error) {
      console.error("Error registering user:", error);
      setRegisterError(
        error.message || "Error registering user. Please try again."
      );
    }
  };



  return (
    <div className="staff-login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Staff Login</h2>
        <br />
        {loginError && <p className="error-message">{loginError}</p>}
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
        </div>
        <button
              type="button"
              className="register-btn"
              onClick={handleRegisterClick}
            >
              New to website? Click to register
            </button>
      </form>

      {showRegisterModal && (
        <div className="register-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <form
              onSubmit={handleSubmitRegister}
              className="register-staff-form"
            >
              <h2 className="title">Staff Registration</h2>
              <br />
              <div className="or-divider"></div>
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
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button type="submit" className="login-button">
                Register
              </button>
              <div className="addFlex">
                <span>Already have an account?</span>
                <a href="#!" className="additional" onClick={handleCloseModal}>
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffLogin;
