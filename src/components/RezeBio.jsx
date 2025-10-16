import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import RezeImg from "../assets/Reze0.jpg"; // <-- place your Reze image in assets

export default function RezeBio() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const quoteRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText);
    const splitHeading = new SplitText(headingRef.current, { type: "chars" });
    const splitPara = new SplitText(paraRef.current, { type: "words" });
    const splitQuote = new SplitText(quoteRef.current, { type: "chars" });
    const tl = gsap.timeline({ delay: 0.5 });
    tl.from(splitHeading.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: "back.out(1.7)",
      duration: 1,
    })
      .from(
        splitPara.words,
        {
          opacity: 0,
          y: 20,
          stagger: 0.03,
          ease: "power2.out",
          duration: 0.6,
        },
        "-=0.5"
      )
      .from(
        splitQuote.chars,
        {
          opacity: 0,
          y: -30,
          stagger: 0.04,
          ease: "power3.out",
          duration: 0.8,
        },
        "-=0.3"
      );
  }, []);
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center pt-14 pb-10 px-6 bg-[#F2F6F7] gap-10"
    >
      {/* Image */}
      <div className="flex-shrink-0 h-96 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg">
        <img
          src={RezeImg}
          alt="Reze"
          className="  h-full hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Text Content */}
      <div className="max-w-2xl text-center md:text-left">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-tight"
        >
          Reze – The Bomb Girl
        </h1>
        <p
          ref={paraRef}
          className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Reze is one of the most mysterious and captivating characters from
          <span className="font-semibold"> Chainsaw Man</span>. Behind her sweet
          smile and innocent charm hides a lethal assassin, known as the Bomb
          Devil’s hybrid. She dances between tenderness and destruction with
          ease, embodying both love and tragedy. Her presence in the story is
          short but unforgettable, leaving fans torn between admiration and
          heartbreak.
        </p>
        <p
          ref={quoteRef}
          className="mt-8 text-xl italic font-semibold text-gray-900"
        >
          “Love is just another kind of bomb—beautiful, deceptive, and
          guaranteed to blow you apart.”
        </p>
      </div>
    </section>
  );
}
