import React, { Fragment } from "react";
import "./About.css";

const About = () => {
  return (
    <Fragment>
      <div className="center-items">
        <h1>about</h1>
        <div className="about-content">
          <p>Feeling low? Don’t have people around to share your feelings?</p>
          <br></br>
          <p>Nostalgia helps you to take time and log your feelings.</p>
          <p>
            Your digital personal journalling application to help you look back
            and reflect on your mental health.
          </p>
        </div>
        <br></br>
        <div className="about-footer">
          <h4>contact us: nostalgia@gmail.com</h4>
          <p>made with 💙</p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
