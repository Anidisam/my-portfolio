import React from 'react'
import "../assets/css/services.css";
import laptop from "../assets/images/laptop.svg";
import phone from "../assets/images/phone.svg";
import chart from "../assets/images/chart.svg";

const Services = () => {
  return (
    <section className="services-section">
      <h2>My <span className="highli">Services</span></h2>
      <div className="services-container">
        <div className="service-box">
          <img src={laptop} alt="Service 1" />
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante.
          </p>
        </div>
        <div className="service-box">
          <img src={phone} alt="Service 2" />
          <h3>App Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante.
          </p>
        </div>
        <div className="service-box">
          <img src={chart} alt="Service 3" />
          <h3>Digital Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services
