import React from "react";
import "./../portfolio/portfolio.css";
import Skill from "../skill/Skill";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Навыки</h2>
      <div className="portfolio-inner">
        <Skill rotate="170deg" text="95%" label="Позирование" />
        <Skill rotate="140deg" text="75%" label="Гибкость" />
        <Skill rotate="160deg" text="90%" label="Работоспособность" />
        <Skill rotate="100deg" text="65%" label="Выносливость" />
        <Skill rotate="145deg" text="75%" label="Софт-скиллы" />
        <Skill rotate="100deg" text="65%" label="Творчество" />
      </div>
    </div>
  );
}

export default Portfolio;
