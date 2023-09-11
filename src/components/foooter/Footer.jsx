import React from "react";
import "./../foooter/footer.css";
import soc1 from "./../../img/soc1.png";
import soc2 from "./../../img/soc2.png";
import soc3 from "./../../img/soc3.png";
import soc4 from "./../../img/soc4.png";
import soc5 from "./../../img/soc5.png";

function Footer() {
  return (
    <footer>
      <div class="footer-content">
        <h3>Кендалл Дженнер</h3>
        <p>Контакты</p>
        <ul class="socials">
          <li>
            <a href="#">
              <img src={soc1} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={soc2} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={soc3} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={soc4} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={soc5} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
