import React from "react";
import "./Component.css";

const CircleDash = ({ percentage }) => {
  return (
    <div className="circle-progress">
      <svg viewBox="0 0 100 100">
        <circle className="background" cx="50" cy="50" r="40"></circle>
        <circle
          className="progress"
          cx="50"
          cy="50"
          r="40"
          style={{
            strokeDasharray: 251, // Circumference of a circle with radius 40
            strokeDashoffset: `calc(251 - (251 * ${percentage}) / 100)`, // Progress percentage
          }}
        ></circle>
      </svg>
    </div>
  );
};

export default CircleDash;
