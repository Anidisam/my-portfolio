import React from "react";
import "../assets/css/hero.css";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import heroImage from "../assets/images/hero-image.svg";
import cvFile from "../assets/AnidiSamuelCV.pdf";

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
          <p>
            I focus on crafting polished, responsive designs that make online
            interactions seamless and memorable for users.
          </p>
          <div className="hero-icons">
            <a
              href="https://facebook.com/samuel Anidi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com/in/YourLinkedInProfile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Anidisam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/YourInstagramProfile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <a href={cvFile} download="AnidiSamuelCV.pdf">
            <button className="cv-button">Download CV</button>
          </a>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="code" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
