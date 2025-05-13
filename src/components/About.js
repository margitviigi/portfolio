import React from "react";
import "./About.css";
import profilePic from "../pildid/minupilt.png"
function About({ mode }) {
  return (
    <section className={`about-container ${mode}`}>
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img src={profilePic} alt="Margit Viigi" className={`profile-pic ${mode}`} />
            <div className="about-text">
                <p>
        My name is <strong>Margit</strong> and I am currently studying <strong>software development</strong> at Tartu Vocational College. Previously, I worked at a 
        hospital as a <strong>radiographer</strong>. That is where I realized - as much as I love working with patients, there is not enough of a creative outlet nor 
        new and exciting challenges to see myself working as a radiographer any longer.
                </p>
                <p>
      I chose this field because I am hoping to find a job where both <strong>logical thinking</strong> and <strong>creative ideas</strong> can be applied. It took a 
      visit to a career counsellor to figure out that software development might be a good choice for me. Ever since that idea entered my mind,
      I find myself more and more excited to learn. With every new skill and project I feel increasingly confident I have found my calling. I can’t
      wait to have my first job in this field soon. </p>
                <p>
      Outside of my studies, I love working out, and then baking to balance it out. I also very much enjoy art, design and fashion.
      It takes me one minute to solve Rubik’s cube and there is a good chance I can beat you in chess.
      <strong> My professional achievements are yet to come!</strong></p>
            </div>
        </div>
    </section>
  );
}

export default About;