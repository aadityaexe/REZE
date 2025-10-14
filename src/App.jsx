import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RezeBio from "./components/RezeBio";
import Makima from "./components/Makima";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import ChainsawQuotes from "./components/ChainsawQuotes";
import RezeChildhood from "./components/RezeChildhood";
import Gallery from "./components/Gallery";
import Creator from "./components/Creator";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <RezeBio />
      <ChainsawQuotes />
      <RezeChildhood />
      <Gallery />
      <Makima />
      <Creator />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
