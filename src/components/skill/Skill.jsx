import React from "react";
import "./skill.css";

function Skill(props) {
  const containerStyle = {
    animation: `fill ease-in-out 3s`,
    transform: `rotate(${props.rotate})`,
  };

  return (
    <section className="portfolio">
      <div className="skill">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill" style={containerStyle}></div>
            </div>
            <div className="mask half">
              <div className="fill"></div>
            </div>
            <div className="inside-circle">{props.text}</div>
          </div>
        </div>
        <p>{props.label}</p>
      </div>
    </section>
  );
}

export default Skill;
