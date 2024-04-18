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
        <div className="box-home wedding">
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
        </div>
        <div className="box-home services">
          <h2 className="title-box ">services</h2>
          <p className="about-home">
            <ul className="home-ul">
              <li className="service-li">
                Sunday Morning services are at 10:00 AM to 01:00 PM.
              </li>
              <li className="service-li">
                Tuesday Home prayer 11:00 Am to 01:00 PM
              </li>
              <li className="service-li">
                Friday Fasting Prayer is 10:00 AM to 01:PM.
              </li>
              <li className="service-li">
                Any additional services will be announced on our notice board
                and on our website.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
