import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Currently pursuing my Master's degree in Computer Science, I am
            experienced as Risk Prevention Market Data Specialist at META
            (Facebook). Through this role, I've cultivated strong
            problem-solving, critical thinking, software development, partner
            management, and leadership skills. Armed with a Bachelor's degree in
            Computer Science and proficiency in languages and frameworks like
            SQL, Java, Spring-boot, Python, Javascript and React JS, I'm
            enthusiastic about transitioning to a software engineering roles.{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
