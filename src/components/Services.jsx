import React from 'react'
import "../assets/css/services.css";
import laptop from "../assets/images/laptop.svg";
import phone from "../assets/images/phone.svg";
import chart from "../assets/images/chart.svg";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2>
        My <span className="highli">Services</span>
      </h2>
      <div className="services-container">
        <div className="service-box">
          <img src={laptop} alt="Service 1" />
          <h3>Web Development</h3>
          <p>
            Web development is building websites that are easy to use, visually
            appealing, and work well on any device, creating enjoyable online
            experiences for users.
          </p>
        </div>
        <div className="service-box">
          <img src={phone} alt="Service 2" />
          <h3>Graphic Design</h3>
          <p>
            Graphic design is creating visuals that communicate ideas and
            messages, using color, typography, and layout to make content clear,
            appealing, and engaging.
          </p>
        </div>
        <div className="service-box">
          <img src={chart} alt="Service 3" />
          <h3>Digital Marketing</h3>
          <p>
            Digital marketing involves promoting products or services online
            through strategies like SEO, social media, email, and paid ads to
            reach and engage target audiences effectively.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services
