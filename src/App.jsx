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
import VideoGallery from "./components/VideoGallery";
import video1 from "./assets/Video1.mp4";
import video2 from "./assets/Video2.mp4";
import video3 from "./assets/Video3.mp4";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <RezeBio />
      <VideoGallery video={video1} />
      <ChainsawQuotes />
      <VideoGallery video={video2} />
      <RezeChildhood />
      <VideoGallery video={video3} />
      <Gallery />
      <Makima />
      <Creator />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
