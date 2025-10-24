"use client";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

export default function ChainsawQuotes() {
  // Refactored quotes data structure to include character names
  const quotesData = [
    { character: "Chainsaw Man", quote: "The world is a dark place, but darker still is the human heart." },
    { character: "Chainsaw Man", quote: "Happiness is fleeting, but the blood on your hands lingers." },
    { character: "Chainsaw Man", quote: "Love or control—it’s all the same leash." },
    { character: "Chainsaw Man", quote: "Demons aren’t the ones to fear. People are worse." },
    { character: "Chainsaw Man", quote: "Chainsaws don’t care what they cut. Neither do devils." },
    // New quotes for Reze
    { character: "Reze", quote: "Let's blow up this town. It'll be a beautiful memory." }, // Dark humor, tragedy
    { character: "Reze", quote: "I just wanted to go to school, Denji." }, // Tragedy, yearning
    { character: "Reze", quote: "You're soft, Denji. That's why I like you." }, // Love, dark humor
    { character: "Reze", quote: "Bombs are my best friends. They never betray me." }, // Dark humor, tragedy
    { character: "Reze", quote: "A heart that's never been broken can't truly feel the blast." }, // Tragedy, love
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const containerRef = useRef(null);
  const quoteTextRef = useRef(null);
  const characterNameRef = useRef(null);

  // Helper function to split text into individual character spans for animation
  const splitTextIntoCharSpans = (text) => {
    return text
      .split(" ")
      .map(
        (word) =>
          `<span class="word whitespace-nowrap inline-block">${word
            .split("")
            .map(
              (char) =>
                `<span class="char inline-block">${
                  char === " " ? "&nbsp;" : char
                }</span>`
            )
            .join("")}</span>`
      )
      .join(" ");
  };

  // GSAP hook for animating the "fade in" of the current quote and character
  useGSAP(
    () => {
      const currentQuote = quotesData[currentQuoteIndex];

      if (!quoteTextRef.current || !characterNameRef.current || !currentQuote) {
        return;
      }

      // Update the content of the elements with the new quote and character.
      // GSAP directly controls the content, preventing flickers associated with React's key prop.
      characterNameRef.current.innerHTML = currentQuote.character;
      quoteTextRef.current.innerHTML = splitTextIntoCharSpans(currentQuote.quote);

      // Create a GSAP timeline for the "in" animation
      const tlIn = gsap.timeline();

      // Animate character name in
      tlIn.fromTo(
        characterNameRef.current,
        { opacity: 0, y: 10 }, // Start state
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" } // End state
      );

      // Animate quote characters in, slightly overlapping with character name animation
      tlIn.fromTo(
        quoteTextRef.current.querySelectorAll(".char"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.02, // Stagger animation for each character
          ease: "power3.out",
        },
        "-=0.2" // Start 0.2 seconds before the end of the character name animation
      );
    },
    // Rerun this effect whenever the currentQuoteIndex changes
    { dependencies: [currentQuoteIndex], scope: containerRef }
  );

  // useEffect hook for managing the quote cycling interval and "fade out" animation
  useEffect(() => {
    let intervalId;

    const startQuoteCycle = () => {
      intervalId = setInterval(() => {
        if (!quoteTextRef.current || !characterNameRef.current) return;

        // Create a GSAP timeline for the "out" animation of the current content
        const tlOut = gsap.timeline();

        // Animate quote characters out
        tlOut.to(quoteTextRef.current.querySelectorAll(".char"), {
          opacity: 0,
          y: -16,
          duration: 0.4,
          stagger: 0.015, // Slightly faster stagger for the out animation
          ease: "power2.in",
        });

        // Animate character name out, slightly overlapping with quote characters animation
        tlOut.to(
          characterNameRef.current,
          {
            opacity: 0,
            y: -10,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              // Once the fade-out animation is complete, update the index.
              // This triggers the useGSAP hook to animate the next quote in.
              setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotesData.length);
            },
          },
          "-=0.2" // Start 0.2 seconds before the end of the quote character animation
        );
      }, 5000); // 5 seconds display time for each quote
    };

    startQuoteCycle(); // Initialize the quote cycle when the component mounts

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div id="quotes" className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-center text-purple-900 tracking-tight">
        Quotes
      </h1>

      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center text-black p-6 min-h-[9rem] md:min-h-[14rem] overflow-visible"
        // Increased min-h to accommodate both character name and quote, preventing layout shifts
      >
        <p
          ref={characterNameRef}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-2 md:mb-4 min-h-[1.5rem] flex items-center justify-center text-center"
          // Added min-h to prevent layout shifts during animation and flex for centering
        >
          {/* Character name will be dynamically set and animated by GSAP */}
        </p>
        <h1
          ref={quoteTextRef}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center leading-relaxed min-h-[4rem] flex items-center justify-center"
          // Added min-h to prevent layout shifts during animation and flex for centering
        >
          {/* Quote text will be dynamically set and animated by GSAP */}
        </h1>
      </div>
    </div>
  );
}