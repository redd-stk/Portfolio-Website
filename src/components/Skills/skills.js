import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> What I do</span>
      <br />
      <span className="skillDescr">
        I'm a passionate and versatile software engineer with expertise in Web
        Development, Flutter, React Native, and Javascript (Node, Express). My
        journey in the world of programming began with a curiosity-driven
        exploration of website development, and it has since evolved into a
        thrilling adventure encompassing the realms of mobile app development.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>WebDesign and Development</h2>
            <p>
              With a keen eye for design and a mastery of web development
              technologies, I bring websites to life, seamlessly blending form
              and function. From front-end aesthetics to back-end functionality,
              I am dedicated to creating web solutions that captivate users and
              deliver optimal performance.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Development</h2>
            <p>
              In the realm of mobile app development, I thrive on Flutter, Google's
              UI toolkit, to create high-performance, natively compiled
              applications for mobile, web, and desktop from a single codebase.
              My commitment to delivering pixel-perfect designs and fluid user
              interactions has allowed me to create apps that not only meet but
              exceed user expectations.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              In the realm of mobile development, I thrive on Flutter, Google's
              UI toolkit, to create high-performance, natively compiled
              applications for mobile, web, and desktop from a single codebase.
              My commitment to delivering pixel-perfect designs and fluid user
              interactions has allowed me to create apps that not only meet but
              exceed user expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
