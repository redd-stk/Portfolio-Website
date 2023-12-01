// import React from "react";
// import "./works.css";
// import Portfolio1 from "../../assets/portfolio-1.png";
// import Portfolio2 from "../../assets/portfolio-2.png";
// import Portfolio3 from "../../assets/portfolio-3.png";
// import Portfolio4 from "../../assets/portfolio-4.png";
// import Portfolio5 from "../../assets/portfolio-5.png";
// import Portfolio6 from "../../assets/portfolio-6.png";

// const Works = () => {
//   return (
//     <section id="works">
//       <h2 className="worksTitle">My Portfolio</h2>
//       <span className="projects"><h3>Project 1</h3></span>
//       <span className="worksDescr">As a seasoned React Native engineer, I leverage the flexibility of
//               JavaScript and React to build native mobile applications for both
//               iOS and Android platforms. My focus on writing reusable code and
//               optimizing app performance ensures a smooth and consistent user
//               experience across devices.</span>
//       <br />
//       <div className="worksImgs">
//         <img src={Portfolio1} alt="Portfolio 1" className="worksImg"/>
//         <img src={Portfolio2} alt="Portfolio 2" className="worksImg"/>
//         <img src={Portfolio3} alt="Portfolio 3" className="worksImg"/>
//       </div>
//       <button className="worksBtn">See More</button>

//       <span className="projects"><h3>Project 2</h3></span>
//       <span className="worksDescr">As a seasoned React Native engineer, I leverage the flexibility of
//               JavaScript and React to build native mobile applications for both
//               iOS and Android platforms. My focus on writing reusable code and
//               optimizing app performance ensures a smooth and consistent user
//               experience across devices.</span>
//       <br />
//       <div className="worksImgs">
//         <img src={Portfolio4} alt="Portfolio 4" className="worksImg"/>
//         <img src={Portfolio5} alt="Portfolio 5" className="worksImg"/>
//         <img src={Portfolio6} alt="Portfolio 6" className="worksImg"/>
//       </div>
//       <button className="worksBtn">See More</button>
//     </section>
//   );
// };

// export default Works;
import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>

      <div className="project">
        <h3>Project 1</h3>
        <span className="worksDescr">As a seasoned React Native engineer, I leverage the flexibility of
          JavaScript and React to build native mobile applications for both
          iOS and Android platforms. My focus on writing reusable code and
          optimizing app performance ensures a smooth and consistent user
          experience across devices.</span>
        <br />
        </div>
        <div className="worksImgs">
          <img src={Portfolio1} alt="Portfolio 1" className="worksImg" />
          <img src={Portfolio2} alt="Portfolio 2" className="worksImg" />
          <img src={Portfolio3} alt="Portfolio 3" className="worksImg" />
        </div>
      <button className="worksBtn">See More</button>

      <div className="project">
        <h3>Project 2</h3>
        <span className="worksDescr">As a seasoned React Native engineer, I leverage the flexibility of
          JavaScript and React to build native mobile applications for both
          iOS and Android platforms. My focus on writing reusable code and
          optimizing app performance ensures a smooth and consistent user
          experience across devices.</span>
        <br />
        </div>
        <div className="worksImgs">
          <img src={Portfolio4} alt="Portfolio 4" className="worksImg" />
          <img src={Portfolio5} alt="Portfolio 5" className="worksImg" />
          <img src={Portfolio6} alt="Portfolio 6" className="worksImg" />
        </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;
