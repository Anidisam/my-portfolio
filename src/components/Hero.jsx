import React from 'react'
import "../assets/css/hero.css";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import heroImage from "../assets/images/hero-image.svg";

const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Hi, it's me</h2>
          <h1>Anidi Samuel</h1>
          <p>
            and I am a <span className="highlight">frontend developer</span>
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="hero-icons">
            <a href="#facebook">
              <FaFacebook />
            </a>
            <a href="#linkedin">
              <FaLinkedin />
            </a>
            <a href="#github">
              <FaGithub />
            </a>
            <a href="#instagram">
              <FaInstagram />
            </a>
          </div>
          <button className="cv-button">Download CV</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="code" />
        </div>
      </section>
    </div>
  );
}

export default Hero
