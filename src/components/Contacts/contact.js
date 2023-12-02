import React, { useRef } from "react";
import "./contact.css";
import WhatsappIcon from "../../assets/whatsapp.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedInIcon from "../../assets/linkedIn.png";
import GithubIcon from "../../assets/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const redirectToWhatsapp = () => {
    window.open("https://wa.me/254790193402", "_blank");
  };

  const redirectToTwitter = () => {
    window.open("https://twitter.com/eddieoochieng", "_blank");
  };

  const redirectToInstagram = () => {
    window.open("https://www.instagram.com/edd.ie_ochieng", "_blank");
  };

  const redirectToLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/eddy-odhiambo-423b37234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "_blank"
    );
  };

  const redirectToGithub = () => {
    window.open("https://github.com/supa-modo", "_blank");
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kd76np9",
        "template_fjqrawc",
        form.current,
        "OvNqQxS5HWUQ7KqWV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message Sent. Thank you");
        },
        (error) => {
          console.log(error.text);
          alert("Message not Sent. Try again !!");
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contacts">
        <br />
        <br />
        <br />

        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDescr">
          Please fill out the form below for any discussions about my work or
          opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="Your Message"
          />
          <button type="submit" className="submitBtn" value="Send">
            Submit
          </button>
          <div className="links">
            <img
              src={WhatsappIcon}
              alt="WhatsappIcon"
              className="link"
              onClick={redirectToWhatsapp}
            />
            <img
              src={TwitterIcon}
              alt="TwitterIcon"
              className="link"
              onClick={redirectToTwitter}
            />
            <img
              src={InstagramIcon}
              alt="InstagramIcon"
              className="link"
              onClick={redirectToInstagram}
            />
            <img
              src={LinkedInIcon}
              alt="LinkedInIcon"
              className="link"
              onClick={redirectToLinkedIn}
            />
            <img
              src={GithubIcon}
              alt="GithubIcon"
              className="link"
              onClick={redirectToGithub}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
