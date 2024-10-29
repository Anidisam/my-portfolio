import React from "react";
import "../assets/css/skills.css";
import htmlLogo from "../assets/images/html-logo.jpeg"; // Example path to your logo images
import cssLogo from "../assets/images/css-logo.png";
import jsLogo from "../assets/images/js-logo.png";
import bootstrapLogo from "../assets/images/bootstrap-logo.jpeg";
import reactLogo from "../assets/images/react-logo.jpeg";
import wordLogo from "../assets/images/wordpress-logo.jpeg";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <img src={htmlLogo} alt="HTML Logo" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <img src={cssLogo} alt="CSS Logo" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <img src={jsLogo} alt="JavaScript Logo" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img src={bootstrapLogo} alt="Bootstrap Logo" />
          <p>Bootstrap</p>
        </div>
        <div className="skill-item">
          <img src={reactLogo} alt="React Logo" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <img src={wordLogo} alt="wordpress Logo" />
          <p>Wordpress</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
