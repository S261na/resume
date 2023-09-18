import React from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Portfolio from "./components/portfolio/Portfolio";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/foooter/Footer";
import Router from "./components/Router/Router";
function App() {
  return (
    <div>
      <Navbar />
      <Router/>
      <Footer />
    </div>
  );
}

export default App;
