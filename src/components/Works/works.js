import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
// import Portfolio4 from "../../assets/portfolio-4.png";
// import Portfolio5 from "../../assets/portfolio-5.png";
// import Portfolio6 from "../../assets/portfolio-6.png";
import Portfolio7 from "../../assets/website.jpg";
import Msafiri1 from "../../assets/msafiriProject/msafiri1.jpg";
import Msafiri41 from "../../assets/msafiriProject/msafiri41.jpg";
import Msafiri6 from "../../assets/msafiriProject/msafiri6.jpg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>

      <div className="project">
        <h3>Project 1</h3>
        <span className="worksDescr">
          As a seasoned React Native engineer, I leverage the flexibility of
          JavaScript and React to build native mobile applications for both iOS
          and Android platforms. My focus on writing reusable code and
          optimizing app performance ensures a smooth and consistent user
          experience across devices.
        </span>
        <br />
      </div>
      <div className="worksImgs">
        <img src={Portfolio1} alt="Portfolio 1" className="worksImg" />
        <img src={Portfolio2} alt="Portfolio 2" className="worksImg" />
        <img src={Portfolio3} alt="Portfolio 3" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>

      <div className="project">
        <h3>Msafiri App Project</h3>
        <span className="worksDescr">
          Msafiri App represents a forward-thinking approach to modernizing
          public transportation in Kenya, offering an efficiency user-friendly interface,
          secure payment solutions with qr code scanning, and intelligent real-time navigation features. This
          innovative Flutter-based mobile application seamlessly integrates
          mobile transactions for public transport fare payments, introducing a
          hassle-free and efficient method for commuters.
        </span>
        <br />
      </div>
      <div className="worksImgs">
        <img src={Msafiri1} alt="Msafiri1" className="worksImg" />
        <img src={Msafiri41} alt="Msafiri4" className="worksImg" />
        <img src={Msafiri6} alt="Msafiri6" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>

      <div className="project">
        <h3>Project 3</h3>
        <span className="worksDescr">
          As a seasoned React Native engineer, I leverage the flexibility of
          JavaScript and React to build native mobile applications for both iOS
          and Android platforms. My focus on writing reusable code and
          optimizing app performance ensures a smooth and consistent user
          experience across devices.
        </span>
        <br />
      </div>
      <div className="websiteImgs">
        <img src={Portfolio7} alt="Portfolio 7" className="websiteImg" />
      </div>
      <button className="worksBtn">See More</button>
      <div>
        <button className="moreProjects">More Project Works</button>
      </div>
    </section>
  );
};

export default Works;
