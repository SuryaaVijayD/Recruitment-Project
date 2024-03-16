import React from "react";
import "./Component.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1 style={{ color: "#1c8074" }}>Contributors: </h1>
      <div className="recruitment-details">
        <h2>Recruitment Project Description</h2>
        <p>
          Embark on a journey of self-discovery and career growth with our
          innovative recruitment platform. Unleash your potential, prepare for
          interviews, and secure your dream job effortlessly. Join us and
          redefine your future today!
        </p>
      </div>
      <h2>Team Members</h2>
      <div className="team-members">
        <div className="team-member">
          <h3>Team Member 1</h3>
          <p>Name: Syed Masood</p>
          <p>Role: AI Enthusist</p>
          <p>Email: john@example.com</p>
        </div>
        <div className="team-member">
          <h3>Team Member 2</h3>
          <p>Name: Aslam</p>
          <p>Role: Designer</p>
          <p>Email: jane@example.com</p>
        </div>
        <div className="team-member">
          <h3>Team Member 3</h3>
          <p>Name: Vignesh</p>
          <p>Role: Designer</p>
          <p>Email: alex@example.com</p>
        </div>
        <div className="team-member">
          <h3>Team Member 4</h3>
          <p>Name: Suryaa</p>
          <p>Role: Designer</p>
          <p>Email: emily@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
