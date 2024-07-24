import React from 'react';
import '../App.css'; // Import the consolidated CSS file

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-profile">
          <img src="/Adarshimg.jpg" alt="Profile" className="profile-pic" />
        </div>
        <div className="about-content">
          <p className="about-text">
            Hi, I'm ADARSH M NAIR
          </p>
          <section className="about-sub-section">
            <p className="about-sub-sec">
              A passionate Software Developer with expertise in cloud technologies like AWS. I enjoy writing blogs and creating websites as a Full Stack Developer. With a diverse skill set, I'm dedicated to bringing impactful ideas to life.
            </p>
          </section>
          <section className="about-resume">
            <a href="/resume.pdf" className="btn btn-primary" download="Adarsh_Nair_Resume.pdf">Download Resume</a>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
