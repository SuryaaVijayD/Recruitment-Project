import React from "react";
import { useState, useEffect } from "react";
import "./Component.css";
import Header from "./Header";
import Mainimage from "./mainimage.png";
import About from "./About";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Mainpage() {
  const [showShadow, setShowShadow] = useState(false);
  const [text, setText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);

  useEffect(() => {
    const headingText = "Unlock Your Potential, Secure Your Future";
    setText(headingText);

    const intervalId = setInterval(() => {
      setCursorPosition((prevCursorPosition) => {
        if (prevCursorPosition < headingText.length) {
          return prevCursorPosition + 1;
        } else {
          clearInterval(intervalId);
          return prevCursorPosition;
        }
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="main">
        <div className={`header-color ${showShadow ? "shadow" : ""}`}>
          <Header />
        </div>
        <div className="main-page">
          <div>
            <div className="content-container">
              <h3 className="head-mains">HIRING PLATFORM | HR SOFTWARE</h3>
              <h1 className="main-head-content">
                {text.slice(0, cursorPosition)}
                <span className="cursor">|</span>
              </h1>
              <h3 className="head-main">
                A better way to recruit and manage your skills.
              </h3>
              <div>
                <h5 className="head-main">
                  we understand that talent is the driving force behind every
                  successfull organization. That's why we've create a
                  revolutionary recruitment platform designed to connect
                  exceptional talent with incredible oppurtunitues.
                </h5>
                <Link
                  to="/get-started"
                  className="my-link"
                  onClick={() => console.log("login Clicked")}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="main-image-container">
            <img src={Mainimage} alt="imagealt" className="iamge-main" />
          </div>
          <div className="login-signup">
            <p className="login" onClick={() => console.log("login Clicked")}>
              Login
            </p>
            <p className="signup">signup</p>
          </div>
          <MdKeyboardDoubleArrowDown className="arrow-icon" />
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Mainpage;
