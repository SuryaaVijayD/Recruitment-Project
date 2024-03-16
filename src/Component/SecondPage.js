import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CircleDash from "./CircleDash";
import "./Component.css";
import apple from "./ImgFolder/apple.png";
import google from "./ImgFolder/google.png";
import infosys from "./ImgFolder/infosys.png";
import microsoft from "./ImgFolder/microsoft.png";
import zoho from "./ImgFolder/zoho.png";
import vdart from "./ImgFolder/vdart.png";
import intel from "./ImgFolder/intel.png";
import amazon from "./ImgFolder/amazon.png";

function SecondPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    navigate("/mcq-section");
    setLoading(false);
  };

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className="second-page">
      <div className="header-color">
        <Header />
      </div>

      <div className="second-page-container">
        <div className="dashboard">
          <div className="content">
            <h1>Dashboard</h1>
            <p>Know Your Level Of Performance</p>
          </div>
          <div>
            <CircleDash percentage={75} />
          </div>
        </div>
        <h1>Features</h1>
        <div className="feature-container">
          <div className="ats-card">
            <h1>ATS Resume Software.</h1>
            <p className="para">
              ATS software streamlines recruitment by automating job posting,
              resume parsing, and candidate tracking. It enhances efficiency and
              accuracy in managing applications, saving time for HR
              professionals
            </p>
          </div>
          <div className="online-test-card">
            <h1 style={{ color: "white" }}>Test Youself?</h1>
            <p className="para1">
              Assess coding proficiency efficiently with tailored tests. Gauge
              candidates' skills accurately, aiding in informed hiring decisions
              and optimizing team composition for enhanced project outcomes
            </p>
            <button
              className="online-test-button"
              disabled={loading}
              onClick={handleClick}
            >
              Start Now
            </button>
            {loading && (
              <div className="loading-overlay">
                <p className="loading-text">Loading...</p>
              </div>
            )}
          </div>
        </div>
        <h1>Companies that are tied with us</h1>
        <div className="scroll-companies">
          <img src={apple} className="compan-ylogo" alt={apple} />
          <img src={google} className="compan-ylogo" alt={apple} />
          <img src={infosys} className="compan-ylogo" alt={apple} />
          <img src={microsoft} className="compan-ylogo" alt={apple} />
          <img src={zoho} className="compan-ylogo" alt={apple} />
          <img src={vdart} className="compan-ylogo" alt={apple} />
          <img src={amazon} className="compan-ylogo" alt={apple} />
          <img src={intel} className="compan-ylogo" alt={apple} />
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
