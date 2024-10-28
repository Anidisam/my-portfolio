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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              repellendus expedita eum nihil et aspernatur dolorum dolor <br />
              magnam natus. Aspernatur possimus sint totam consequuntur,
              necessitatibus reprehenderit quis debitis eveniet. <br />A
              consequuntur voluptatum labore modi, nemo unde maxime enim
              molestiae magni perferendis recusandae. Voluptatem maiores,
              obcaecati <br />
              mollitia, eveniet ullam enim ad quod ea incidunt, corrupti
              voluptates reiciendis amet eos natus adipisci iste? Quaerat
              dignissimos esse, <br />
              sequi officiis, quisquam ab iste omnis voluptate in sapiente
              possimus doloremque minus animi quibusdam ad aliquid.
            </p>
            {showMore && (
              <p className="extra-content">
                More detailed information about me can go here. This is the
                additional content that will show up when you click "Read More".
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
