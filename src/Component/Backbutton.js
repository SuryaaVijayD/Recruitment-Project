import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./Component.css";

function Backbutton({ score, type }) {
  const back = () => {
    alert("You are not allowed to previous page..Complete the test!");
  };
  return (
    <div className="back">
      <div className="dummy">
        <IoMdArrowRoundBack className="icon" onClick={back} />
        <p className="heading-practice">{type}</p>
      </div>
      <div className="right">
        <p className="heading">Answered correctly :{score}/10</p>
      </div>
    </div>
  );
}

export default Backbutton;
