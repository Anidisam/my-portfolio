import React, { useState } from "react";
import "../assets/css/about.css";
import heroImage from "../assets/images/hero-image.svg";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="about-section">
      <h2>
        ABOUT <span className="high">ME</span>
      </h2>
      <div className="about-content">
        <div className="about-image">
          <img src={heroImage} alt="code" />
        </div>
        <div className="about-text">
          <h3>Frontend Developer</h3>
          <p>
            Creative and detail-oriented Frontend Developer with a strong
            foundation in responsive design, user-centric interfaces, and a
            passion for delivering seamless web experiences. Proficient in HTML,
            CSS, JavaScript, React, and TypeScript, with hands-on experience in
            creating visually appealing and functional websites. Eager to
            leverage technical skills and innovative thinking to contribute
            effectively in a team-driven environment.
          </p>
          {showMore && (
            <p className="extra-content">
              Anidi Samuel is a passionate frontend developer with a strong
              focus on React, UI/UX design, and responsive web layouts. Skilled
              in HTML, CSS, JavaScript, and TypeScript, he’s dedicated to
              creating clean, user-friendly digital experiences. Anidi’s current
              portfolio highlights his expertise in modern web development and
              design, showcasing a commitment to growth. Now advancing his
              education at university, he continues to refine his technical
              skills and creative approach to impactful web projects.
            </p>
          )}
          <button onClick={handleReadMore} className="read-btn">
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
