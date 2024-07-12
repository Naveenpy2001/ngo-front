// import React from "react";
// import "./css/Footer.css";
// import { HiOutlineMail } from "react-icons/hi";
// import { MdOutlineLocalPhone } from "react-icons/md";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section">
//           <h3>Contact Information</h3>
//           <p className="email-f">
//             <HiOutlineMail /> : weslyjohnpaulraj@gmail.com
//           </p>
//           <p className="email-f">
//             <HiOutlineMail /> : bethesdagospulministryn@gmail.com
//           </p>
//           <p className="phone">
//             <MdOutlineLocalPhone /> : +91 8142616767{" "}
//           </p>
//           <p className="phone">
//             <MdOutlineLocalPhone /> : +91 7702221681
//           </p>
//         </div>

//         <div className="footer-section">
//           <h3>Follow Us</h3>
//           <p>Connect with us on social media:</p>
//           <div className="div-social-icons">
//             <span>
//               <a href="https://www.instagram.com/tsarit1/" className="socialIcons">
//                 <FaInstagram />
//               </a>
//             </span>
//             <span>
//               <a href="https://www.facebook.com/profile.php?id=61557389195263" className="socialIcons">
//                 <FaFacebookSquare />
//               </a>
//             </span>
//             <span>
//               <a href="https://www.youtube.com/@TsarITServices" className="socialIcons">
//                 <FaYoutube />
//               </a>
//             </span>
//             <span>
//               <a href="https://twitter.com/tsar_it" className="socialIcons">
//                 <FaXTwitter />
//               </a>
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; 2024 NGO. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./css/Footer.css";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import {
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p className="email-f">
            <HiOutlineMail /> : weslyjohnpaulraj@gmail.com
          </p>
          <p className="email-f">
            <HiOutlineMail /> : bethesdagospulministryn@gmail.com
          </p>
          <p className="phone">
            <MdOutlineLocalPhone /> : +91 8142616767{" "}
          </p>
          <p className="phone">
            <MdOutlineLocalPhone /> : +91 7702221681
          </p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Connect with us on social media:</p>
          <div className="div-social-icons">
            <span>
              <a
                href="https://www.instagram.com/tsarit1/"
                className="socialIcons"
              >
                <FaInstagram />
              </a>
            </span>
            <span>
              <a
                href="https://www.facebook.com/profile.php?id=61557389195263"
                className="socialIcons"
              >
                <FaFacebookSquare />
              </a>
            </span>
            <span>
              <a
                href="https://www.youtube.com/@TsarITServices"
                className="socialIcons"
              >
                <FaYoutube />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/tsar_it" className="socialIcons">
                <FaTwitter />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-links">
        <ul>
          <li>
            <a href="/terms-of-use">Terms of Use</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/refund-returns">Refund and Return Policy</a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 NGO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
