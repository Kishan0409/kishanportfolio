import React from "react";
import "./App.css";
import Banner from "./kishanc/Banner";
import Nav from "./kishanc/Nav";
import Services from "./kishanc/Services";
import About from "./kishanc/About";
import Prices from "./kishanc/Prices";
import Contact from "./kishanc/Contact";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Services />
      <About />
      <Prices />
      <Contact />
    </div>
  );
}

export default App;
