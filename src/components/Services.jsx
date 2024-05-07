// ServicesPage.js

import React from "react";
import "../css/service.css";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h2 className="page-heading">Our Services</h2>
      {/* <div className="service">
        <h3 className="service-title">Social development</h3>
        <p className="service-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          viverra justo ut ex consequat, ac scelerisque mauris tempus. Proin non
          lorem quis dolor sodales tincidunt.
        </p>
      </div>
      <div className="service">
        <h3 className="service-title">Economic development</h3>
        <p className="service-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          viverra justo ut ex consequat, ac scelerisque mauris tempus. Proin non
          lorem quis dolor sodales tincidunt.
        </p>
      </div>
      <div className="service">
        <h3 className="service-title">Religious & cultural development</h3>
        <p className="service-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          viverra justo ut ex consequat, ac scelerisque mauris tempus. Proin non
          lorem quis dolor sodales tincidunt.
        </p>
      </div>
      <div className="service">
        <h3 className="service-title">
          Educational and knowledge developments
        </h3>
        <p className="service-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          viverra justo ut ex consequat, ac scelerisque mauris tempus. Proin non
          lorem quis dolor sodales tincidunt.
        </p>
      </div>
      <div className="service">
        <h3 className="service-title">Skill development</h3>
        <p className="service-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          viverra justo ut ex consequat, ac scelerisque mauris tempus. Proin non
          lorem quis dolor sodales tincidunt.
        </p>
      </div> */}
      <section className="social-development-section">
        <div className="section-content-services">
          <div className="left-content">
            <img src='' alt="Economic Development" />
          </div>
          <div className="right-content">
            <h2>Economic Development</h2>
            <p>
              Economic development focuses on improving the economic well-being of individuals and communities. It involves initiatives to stimulate economic growth, create jobs, and enhance infrastructure and investment opportunities.
            </p>
          </div>
        </div>

      

        <div className="section-content-services">
          <div className="left-content">
            <img src='' alt="Religious & Cultural Development" />
          </div>
          <div className="right-content">
            <h2>Religious & Cultural Development</h2>
            <p>
              Religious and cultural development involves efforts to preserve and promote cultural heritage, traditions, and religious practices. It aims to foster understanding, tolerance, and appreciation of diverse cultural and religious identities.
            </p>
          </div>
        </div>

      

        <div className="section-content-services">
          <div className="left-content">
            <img src='' alt="Educational and Knowledge Development" />
          </div>
          <div className="right-content">
            <h2>Educational and Knowledge Development</h2>
            <p>
              Educational and knowledge development initiatives aim to enhance access to quality education and promote lifelong learning opportunities. They focus on improving literacy, skills development, and knowledge acquisition for personal and societal advancement.
            </p>
          </div>
        </div>

      

        <div className="section-content-services">
          <div className="left-content">
            <img src='' alt="Skill Development" />
          </div>
          <div className="right-content">
            <h2>Skill Development</h2>
            <p>
              Skill development programs aim to equip individuals with the necessary skills and competencies to thrive in the modern workforce. They focus on vocational training, entrepreneurship, and career development to empower individuals and drive economic growth.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default ServicesPage;
