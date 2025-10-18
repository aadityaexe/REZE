import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const RezeBio = lazy(() => import("./components/RezeBio"));
const Makima = lazy(() => import("./components/Makima"));
const FAQ = lazy(() => import("./components/FAQ"));
const ChainsawQuotes = lazy(() => import("./components/ChainsawQuotes"));
const RezeChildhood = lazy(() => import("./components/RezeChildhood"));
const Gallery = lazy(() => import("./components/Gallery"));
const Creator = lazy(() => import("./components/Creator"));
const VideoGallery = lazy(() => import("./components/VideoGallery"));

// Import videos
import video1 from "./assets/Video1.mp4";
import video2 from "./assets/Video2.mp4";
import video3 from "./assets/Video3.mp4";

const App = () => {
  return (
    <div>
      <Navbar />

      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen text-center text-gray-500">
            She smiled like she wanted to love you, but her heartbeat whispered
            ‘boom.’
          </div>
        }
      >
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
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
