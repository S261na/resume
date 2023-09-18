import React from "react";
import { Route, Routes } from "react-router-dom";
import Portfolio from "../portfolio/Portfolio";
import Gallery from "../gallery/Gallery";
import Main from "../main/Main";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default Router;
