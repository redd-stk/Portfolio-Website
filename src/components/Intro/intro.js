import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello World, </span>
        <span className="introText">
          I'm <span className="introName"> Eddy</span> <br /> A Software Developer
        </span>
        <p className="introPara">
          I am a skilled Software Developer with experience in creating visually <br/> appealing and user friendly softwares and applications
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg"/> Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
