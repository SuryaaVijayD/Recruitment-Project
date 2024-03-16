import React from "react";
import "./Component.css";
import { FaQuestion } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
function About() {
  return (
    <div id="About" className="About-section">
      <div className="center">
        <h1 className="about-head">
          Manage your Entire Process,from Sourcing to Employee onboarding and
          management.
        </h1>
        <div>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div className="Card-container">
          <div className="card2">
            <MdOutlineLogin className="icon-about" />
            <h3 className="login-color">Login to Continue</h3>
            <p>
              The login page serves as the gateway for users to access the
              system. It ensures security and privacy by requiring users to
              authenticate themselves with valid credentials before gaining
              access to the platform's features. Upon visiting the login page,
              users are prompted to enter their username or email address along
              with their password. They may also have the option to select a
              specific role or account type if applicable, such as "student,"
              "employee," or "admin."
            </p>
          </div>
          <div className="card1">
            <RxDashboard className="icon-about" />
            <h3 className="dash-color">Dashboards & Companies</h3>
            <p>
              The dashboard serves as the central hub of the recruitment web
              platform, providing users with a comprehensive overview of key
              information, metrics, and functionalities relevant to their
              recruitment processes. It is designed to be intuitive,
              user-friendly, and customizable to meet the specific needs of
              recruiters, hiring managers, and candidates.
            </p>
          </div>
          <div className="card3">
            <FaQuestion className="icon-about" />
            <h3 className="white">User's Capability</h3>
            <p>
              The test-taking page is designed to assess the technical and
              aptitude capabilities of users, typically as part of a recruitment
              or evaluation process. It presents users with a series of
              questions or tasks aimed at gauging their proficiency in specific
              skills, problem-solving abilities, and cognitive aptitude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
