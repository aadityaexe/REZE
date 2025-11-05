"use client";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ChainsawQuotes() {
  const quotes = [
    "The world is a dark place, but darker still is the human heart.",
    "Happiness is fleeting, but the blood on your hands lingers.",
    "Love or control—it’s all the same leash.",
    "Hope is the sweetest poison—they drink it until it kills them.",
    "Demons aren’t the ones to fear. People are worse.",
    "Chainsaws don’t care what they cut. Neither do devils.",
    "Blood keeps me alive, but pain reminds me I still deserve it.",
    "Dreams don’t come true. They just cost more every time you chase them.",
    "If hell had a heart, it would beat just like mine—loud, ugly, and hungry.",
    "The only thing sharper than the chainsaw is the will to keep using it.",
    "Love is just another deal with the devil—you pay, no refunds.",
  ];

  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      const element = textRef.current;
      const words = element.innerText.split(" ");
      element.innerHTML = words
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

      // Animate characters
      gsap.fromTo(
        element.querySelectorAll(".char"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.02,
          ease: "power3.out",
        }
      );
    },
    { dependencies: [index], scope: containerRef }
  );

  useEffect(() => {
    if (!textRef.current) return;

    const interval = setInterval(() => {
      gsap.to(textRef.current.querySelectorAll(".char"), {
        opacity: 0,
        y: -16,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.in",
        onComplete: () => {
          setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        },
      });
    }, 5000); // 5 seconds between quotes

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="quotes" className="flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-center text-purple-900 tracking-tight">
        Quotes
      </h1>

      <div
        ref={containerRef}
        className="flex items-center justify-center text-black p-6 min-h-[6rem] md:min-h-[11rem] overflow-visible"
      >
        <h1
          ref={textRef}
          key={index}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center leading-relaxed"
        >
          {quotes[index]}
        </h1>
      </div>
    </div>
  );
}
