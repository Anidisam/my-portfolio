import React from 'react'
import "../assets/css/about.css";
import heroImage from "../assets/images/hero-image.svg";

const About = () => {
  return (
    <div>
      <section className="about-section">
        <h2>ABOUT ME</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={heroImage} alt="code" />
          </div>
          <div className="about-text">
            <h3>Frontend Developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <button className="read-btn">Read More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About
