import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RezeBio from "./components/RezeBio";
import Makima from "./components/Makima";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <RezeBio />
      <Makima />
      <Footer />
    </div>
  );
};

export default App;
