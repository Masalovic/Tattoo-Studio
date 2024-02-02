import React from "react";
import Home from "./organisms/Home";
import Portfolio from "./organisms/Portfolio";
import Navbar from "./molecules/Navbar";
import About from "./organisms/About";
import Contact from "./organisms/Contact";
import Banner from "./organisms/Banner";

function App() {
  return (
    <div className="content">
      <section id="home">
        <Home />
      </section>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <Banner />
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
