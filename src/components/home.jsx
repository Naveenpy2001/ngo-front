import React from "react";
import SliderComponent from "./imgSlider";
// import '../css/Slider.css';
import { TiArrowRightThick } from "react-icons/ti";
import "../css/home.css";
const Home = () => {
  return (
    <main>
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
            <button className="centerBtn">
              Learn more <TiArrowRightThick className="arrow-right" />
            </button>
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
                <button className="centerBtn smallBtn">
                  Learn more <TiArrowRightThick className="arrow-right" />
                </button>
              </div>
              <div className="tab">
                <h3>Give Donations</h3>
                <p>
                  Support our cause financially by making a donation. Your
                  contributions help us continue our mission and reach more
                  people in need.
                </p>
                <button className="centerBtn smallBtn">
                  Learn more <TiArrowRightThick className="arrow-right" />
                </button>
              </div>
              <div className="tab">
                <h3>Quick Fund Rise</h3>
                <p>
                  Participate in our quick fundraising campaigns to help us meet
                  urgent needs and respond swiftly to emergencies.
                </p>
                <button className="centerBtn smallBtn">
                  Learn more <TiArrowRightThick className="arrow-right" />
                </button>
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
              <button className="centerBtn">
                Learn more <TiArrowRightThick className="arrow-right" />
              </button>
            </center>
          </div>
        </div>
        {/* <div className="box-home wedding">
          <div className="wedding-left">
            <h2 className="title-box two">weddings</h2>
            <p className="about-home wedding-text">
              Our church offers a traditional setting for your most sacred
              celebration.
            </p>
            <center>
              <button className="centerBtn">
                Learn more <TiArrowRightThick className="arrow-right" />
              </button>
            </center>
          </div>
        </div> */}
        {/* <div className="box-home services">
          <h2 className="title-box ">services</h2>
          <br />
          <div className="service-info">
            <h4>Sunday Morning Services</h4>
            <p>10:00 AM To 01:00 PM</p>
          </div>
          <div className="service-info">
            <h4>Tuesday Home Prayer</h4>
            <p>11:00 AM To 01:00 PM</p>
          </div>
          <div className="service-info">
            <h4>Friday Fasting Prayer</h4>
            <p>10:00 AM To 01:00 PM</p>
          </div>
          <div className="additional-info">
            <p>
              Any Additional Services Will Be Announced On Our Notice Board And
              On Our Website.
            </p>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Home;
