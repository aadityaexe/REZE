import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { rezeImages } from "../assets/images";

export default function RezeBio() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Animation: Slide in from left with fade & scale effect
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        scale: 0.8,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Text Animation: Slide in from right with stagger
      gsap.from(textRef.current.children, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2, // Lines appear one by one
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="max-w-6xl mx-auto my-20 p-8 bg-gray-900/80 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-10 overflow-hidden border border-purple-500/30"
    >
      {/* Left Image */}
      <div className="md:w-1/2 w-full flex justify-center relative group">
        <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
        <img
          ref={imageRef}
          src={rezeImages[0]}
          alt="Reze Bomb Devil"
          className="w-full max-w-sm rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.6)] transform hover:scale-105 transition-transform duration-500 border-2 border-purple-500/50"
        />
      </div>
      {/* Text Content */}
      <div className="max-w-2xl text-center md:text-left" ref={textRef}>
        <h1
          className="text-4xl md:text-6xl font-extrabold text-purple-700 tracking-tight"
        >
          Reze – The Bomb Girl
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Reze is one of the most mysterious and captivating characters from
          <span className="font-semibold text-red-800"> Chainsaw Man</span>.
          Behind her sweet smile and innocent charm hides a lethal assassin,
          known as the Bomb Devil’s hybrid. She dances between tenderness and
          destruction with ease, embodying both love and tragedy. Her presence
          in the story is short but unforgettable, leaving fans torn between
          admiration and heartbreak.
        </p>
        <p
          className="mt-8 text-xl italic font-semibold text-green-300"
        >
          “Love is just another kind of bomb—beautiful, deceptive, and
          guaranteed to blow you apart.”
        </p>
      </div>
    </section>
  );
}
