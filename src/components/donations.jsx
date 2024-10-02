// Donations.js

import React from "react";
import "../css/donation.css"; // Import your CSS file

import DonationButton from "./DonateBTN";


import RazorPaybtn from "./RazorPaybtn";
const Donations = () => {


  


  return (
    <div className="donations ">
      <div className="donateHeader">
        <h2 className="page-heading">Donate to Support Our Cause</h2>
        <p>
          Your generosity can transform lives and communities. Every donation,
          no matter how small, contributes to our mission of making a positive
          impact in the world. Your support enables us to implement sustainable
          projects, provide essential services, and empower those in need.
        </p>
      </div>
      <div className="banner-NGO">
        <div className="donate">
          {/* <button className="animated-button">Donate</button> */}
        </div>
      </div>
      <div className="main-donation" id="donation">
        <div className="flex-start">
          <h2 className="page-heading">Why Donate?</h2>
        </div>
        <p>
          <b>Empowering Change : </b> Your donation plays a vital role in
          empowering individuals and communities to overcome challenges and
          build a brighter future.
        </p>

        {/* <div className="donation-container">
          <h2>Support Our Cause</h2>
         
          <form id="razorpay-payment-form">
            <div className="razorpay-payment-button-container"></div>
          </form>
        </div> */}

        <div className="donation-container">
          <div className="donation-content">
            <div className="donation-text">
              <h2>Support Our Cause</h2>
              <span className="small-white">
                click this button for donation
              </span>
              {/* <RazorPaybtn /> */}
              <DonationButton />
            </div>
            <div className="donation-image">
              <img
                src="https://ottawamommyclub.ca/wp-content/uploads/2020/08/Ways-To-Help-Your-Children-Learn-The-Art-Of-Giving-768x640.jpg "
                alt="Donate"
              />
            </div>
          </div>
        </div>

        <h3 className="header-donate">How Your Donation Helps</h3>
        <ul className="ul-donate">
          <li>
            <strong>Education : </strong> Your donation supports education
            initiatives, providing access to quality education and empowering
            individuals through knowledge and skills training.
          </li>
          <li>
            <strong>Healthcare : </strong> Help us improve access to healthcare
            services, combat diseases, and promote wellness in underserved
            communities.
          </li>
          <li>
            <strong>Livelihoods : </strong> Support livelihood programs that
            create economic opportunities, promote entrepreneurship, and build
            sustainable livelihoods.
          </li>
          <li>
            <strong>Emergency Relief : </strong> Contribute to emergency relief
            efforts to provide immediate assistance to communities affected by
            natural disasters, conflicts, or other crises.
          </li>
        </ul>
        <p className="get-involved">
          Your support is invaluable to us. Together, we can make a real
          difference in the lives of people around the world. Donate today and
          be a part of our journey towards positive change.
        </p>
      </div>
    </div>
  );
};

export default Donations;
