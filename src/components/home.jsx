import React from "react";
import SliderComponent from "./imgSlider";
// import '../css/Slider.css';
import { TiArrowRightThick } from "react-icons/ti";
import "../css/home.css";

import { IoMdStar } from "react-icons/io";  
const Home = () => {

  return (
    <main>
      <marquee behavior="scroll" direction="left" className="mrq">
        <IoMdStar />
        <span className="blink"> Your Donations Are 50% Tax Deductible. </span>
        <IoMdStar />{" "}
        <span className="txt">
          We Have <q>8G</q> and <q>12A</q> Certificates
        </span>{" "}
        <IoMdStar />
      </marquee>
      <br />
      <div className="home-container">
        <div className="img-slider">
          <SliderComponent />
        </div>
      </div>
      <div className="main-container">
        <div className="box-home welcome-text">
          <h2 className="title-box one">welcome</h2>
          <p className="about-home p">
            Welcome, and thank you for visiting Bethesda Gospel Church online.
            We hope that our website highlights the wide variety of worship,
            fellowship and service opportunities available. Please feel free to
            read more about our church on this site, or come in for a visit. We
            would love to greet you and share with you our love for Jesus Christ
            and for you, our neighbor.
          </p>
          <center>
            <a href="/AboutUs">
              <button className="centerBtn">
                Learn more <TiArrowRightThick className="arrow-right" />
              </button>
            </a>
          </center>
        </div>

        <section className="home-section">
          <div className="section-content">
            <h2>Welcome to Our Organization</h2>
            <p>Learn how you can contribute to our cause.</p>
            <div className="tab-container">
              <div className="tab">
                <h3>Become a Volunteer</h3>
                <p>
                  Join our team and make a difference in your community.
                  Volunteer opportunities available for various skill sets and
                  interests.
                </p>
                <a href="/Register">
                  <button className="centerBtn smallBtn">
                    Learn more <TiArrowRightThick className="arrow-right" />
                  </button>
                </a>
              </div>
              <div className="tab">
                <h3>Give Donations</h3>
                <p>
                  Support our cause financially by making a donation. Your
                  contributions help us continue our mission and reach more
                  people in need.
                </p>
                <a href="/DonationPage">
                  <button className="centerBtn smallBtn">
                    Learn more <TiArrowRightThick className="arrow-right" />
                  </button>
                </a>
              </div>
              <div className="tab">
                <h3>Quick Fund Rise</h3>
                <p>
                  Participate in our quick fundraising campaigns to help us meet
                  urgent needs and respond swiftly to emergencies.
                </p>
                <a href="/DonationPage">
                  <button className="centerBtn smallBtn">
                    Learn more <TiArrowRightThick className="arrow-right" />
                  </button>
                </a>
              </div>
            </div>
            {/* Content for each tab goes here */}
          </div>
        </section>

        <div className="box-home mission">
          <div className="ourVision-col">
            <h2 className="title-box one gradient-text">our mission</h2>
            <p className="about-home text-2">
              We believe that the door to salvation is always open and so are
              the doors to our church. Our mission is to be fully devoted to
              Jesus by opening our arms to those in search of the truth. We show
              God’s love and concern for our fellow man at every opportunity.
              Through works of charity and opening our doors to listen and love,
              we feel that we are walking in the footsteps of Jesus Christ.
            </p>
            <center>
              <a href="/AboutUs">
                <button className="centerBtn">
                  Learn more <TiArrowRightThick className="arrow-right" />
                </button>
              </a>
            </center>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Home;
