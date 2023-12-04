import React from "react";
import "./experience.css";

const Experience = () => {
  const workExperiences = [
    {
      company: "Still Gaining experience",
      role: "Software Developer",
      year: "0000 - Present",
    },
    {
      company: "Just an example",
      role: "Full Stack Developer",
      year: "0000 - 0000",
    },
    {
      company: "East African Community Headquaters",
      role: "ICT Officer and Network Engineer (Intern)",
      year: "2023 - 2023",
    },
  ];

  return (
    <div id="experience">
      <div className="experience-container">
        <h2 className="section-title">Work Experience</h2>

        <div className="work-experience">
          {workExperiences.map((experience, index) => (
            <div key={index} className="experience-item">
              <p className="experience-company">{experience.company}</p>
              <p className="experience-role">{experience.role}</p>
              <p className="experience-year">{experience.year}</p>
            </div>
          ))}
        </div>

        <h2 className="attributes">Professional Attributes</h2>

        <div className="experience-text">
          <div className="attribute">
            <h3 className="attribute-title">Passionate Problem Solver</h3>
            <p className="attributeDescr">
              I love tackling complex challenges and finding elegant solutions.
              Whether it's optimizing code for efficiency, implementing
              cutting-edge features, or troubleshooting bugs, I approach each
              task with creativity and precision.
            </p>
          </div>

          <div className="attribute">
            <h3 className="attribute-title">Continuous Learner</h3>
            <p className="attributeDescr">
              In the ever-evolving landscape of technology, I am committed to
              staying at the forefront of industry trends. Through continuous
              learning and exploration, I ensure that my skill set remains
              current and adaptable to emerging technologies.
            </p>
          </div>

          <div className="attribute">
            <h3 className="attribute-title">Collaborative Team Player</h3>
            <p className="attributeDescr">
              I thrive in collaborative environments where diverse perspectives
              converge to create exceptional solutions. My ability to
              communicate effectively and work seamlessly with cross-functional
              teams contributes to the success of each project I undertake.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
