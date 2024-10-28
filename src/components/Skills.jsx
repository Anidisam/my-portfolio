import React from "react";
import "../assets/css/skills.css";

const Skills = () => {
  const skillsData = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 100 },
    { name: "JavaScript", level: 70 },
    { name: "Bootstrap", level: 100 },
    { name: "React", level: 100 },
    { name: "TypeScript", level: 80 },
  ];

  return (
    <section className="skills-section">
      <h2>My <span className="highlight">Skills</span></h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
