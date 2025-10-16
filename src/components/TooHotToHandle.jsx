import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TooHotToHandle = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Animate the headline
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
      }
    );

    // Animate the subtitle with a delay
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        delay: 1.2,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    // Add a continuous “heat shimmer” pulse
    gsap.to(titleRef.current, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(180deg, #000, #1a0000)",
        color: "#ff3366",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <h1
        ref={titleRef}
        style={{ fontSize: "2.4rem", textShadow: "0 0 20px #ff0044" }}
      >
        🔥 Your device can't handle this hotness 🔥
      </h1>
      <p
        ref={subtitleRef}
        style={{ fontSize: "1rem", marginTop: "1rem", color: "#ff99aa" }}
      >
        Try opening on a desktop... if you dare 😈
      </p>
    </div>
  );
};

export default TooHotToHandle;
