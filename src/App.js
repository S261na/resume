import React from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Portfolio from "./components/portfolio/Portfolio";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/foooter/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Portfolio />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
