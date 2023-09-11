import React from "react";
import "./../gallery/gallery.css";
import img1 from "./../../img/img1.jpg";
import img2 from "./../../img/img2.jpg";
import img3 from "./../../img/img3.jpg";
import img4 from "./../../img/img4.jpg";
import img5 from "./../../img/img5.png";
import img6 from "./../../img/img6.jpg";

function Gallery() {
  return (
    <section className="gallery">
      <h2>Карьера модели</h2>
      <div className="cards">
        <div className="card">
          <img src={img1} alt="" />
        </div>
        <div className="card">
          <img src={img2} alt="" />
        </div>
        <div className="card">
          <img src={img3} alt="" />
        </div>
        <div className="card">
          <img src={img4} alt="" />
        </div>
        <div className="card">
          <img src={img5} alt="" />
        </div>
        <div className="card">
          <img src={img6} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
