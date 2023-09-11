import React from "react";
import mainHero from "./../../img/Kendall.png";
import mainHero2 from "./../../img/kendall-main.jpg";
import "./../main/main.css";

function Main() {
  return (
    <section className="main">
      <div className="main-left">
        <span>Модель / Актриса</span>
        <h1>Кендалл Дженнер</h1>
        <p>
          Когда ты полностью безоговорочно доверяешь человеку, то в результате
          получаешь одно из двух: или человека на всю жизнь, или урок на всю
          жизнь.
        </p>
        <img src={mainHero2} alt="" />
      </div>
      <div className="main-right">
        <div className="main-container">
          <img src={mainHero} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Main;
