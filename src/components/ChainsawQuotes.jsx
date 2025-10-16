import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Register the useGSAP plugin
gsap.registerPlugin(useGSAP);

export default function ChainsawQuotes() {
  const quotes = [
    "The world is a dark place, but darker still is the human heart.",
    "Happiness is fleeting, but the blood on your hands lingers.",
    "Love or control—it’s all the same leash.",
    "Demons aren’t the ones to fear. People are worse.",
    "Chainsaws don’t care what they cut. Neither do devils.",
  ];

  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  // This hook handles the "fade in" animation whenever the index changes.
  useGSAP(
    () => {
      if (!textRef.current) return;

      // Split the text into individual character spans
      const element = textRef.current;
      const chars = element.innerText.split("");
      element.innerHTML = chars
        .map(
          (char) =>
            // Use &nbsp; for spaces to ensure they are rendered
            `<span class="char inline-block">${
              char === " " ? "&nbsp;" : char
            }</span>`
        )
        .join("");

      // Animate characters into view
      gsap.fromTo(
        element.querySelectorAll(".char"),
        { opacity: 0, y: 16 }, // Starting state
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.03,
          ease: "power3.out",
        } // Ending state
      );
    },
    // The animation will re-run whenever `index` changes
    { dependencies: [index], scope: containerRef }
  );

  // This hook handles the timer and the "fade out" animation.
  useEffect(() => {
    if (!textRef.current) return;

    const interval = setInterval(() => {
      // Animate characters out of view
      gsap.to(textRef.current.querySelectorAll(".char"), {
        opacity: 0,
        y: -16,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.in",
        // Once the fade-out is complete, update the index to trigger the next quote
        onComplete: () => {
          setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        },
      });
    }, 5000); // 5-second interval between quotes

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Run this effect only once on component mount

  return (
    <div id="quotes" className="flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl md:text-7xl font-extrabold text-center text-gray-900 tracking-tight">
        Quotes
      </h1>

      <div
        ref={containerRef}
        className="flex items-center h-44 justify-center text-black p-6"
      >
        <h1
          ref={textRef}
          key={index} // Key is crucial for React to remount the component on change
          className="text-3xl md:text-5xl font-bold text-center leading-relaxed"
        >
          {quotes[index]}
        </h1>
      </div>
    </div>
  );
}
