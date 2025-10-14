import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// 1. Import the SplitText plugin
import { SplitText } from "gsap/SplitText";
import RezeLm from "../assets/RezeLm.jpg";
import RezeSm from "../assets/RezeSm.jpg";

// 2. Register the plugin with GSAP
gsap.registerPlugin(SplitText);

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Use a GSAP context for safe cleanup
    let ctx = gsap.context(() => {
      // 3. Create a new SplitText instance
      // We are splitting by characters ('chars')
      const split = new SplitText(".hero-text", {
        type: "chars",
        charsClass: "char-style", // Optional: add a class to each character
      });

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "expo.out" },
      });

      // 4. Animate the characters from the split instance
      tl.from(
        split.chars, // Target the characters array
        {
          y: 100,
          opacity: 0,
          stagger: 0.05, // Stagger the animation for each character
          duration: 1.5,
        },
        "+=0.5"
      );
    }, containerRef);

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Backgrounds */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${RezeSm})` }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${RezeLm})` }}
      ></div>

      {/* Content */}
      <div
        className={`
        relative z-10 flex min-h-screen
        flex-col items-center  pt-20 px-6
        sm:justify-start sm:pt-28
        md:flex-row md:items-end md:justify-between md:pt-0 md:pb-20 md:px-20
      `}
      >
        {/* Left side text */}
        <div className="text-white text-center sm:mt-6 md:max-w-72 md:mt-0 md:text-left">
          {/* Note: The h1 tag will be targeted by SplitText */}
          <h1 className="text-5xl font-extrabold leading-snug hero-text md:text-6xl">
            Reze ham sarminda hai, tumhare katill jinda hai
          </h1>
        </div>

        {/* Right side text */}
        <div className="mt-8 space-y-6 text-center md:mt-0 md:w-1/2 md:pl-20 md:text-right">
          {/* Note: The p tag will also be targeted by SplitText */}
          <p className=" text-4xl font-extrabold leading-snug hero-text md:text-4xl whitespace-nowrap">
            Makima will hunt you down.
          </p>
          <p className="text-2xl ">
            Stay still, darling… I like watching you squirm before I decide if
            you deserve to survive… or if I just want to keep you for myself.
          </p>
        </div>
      </div>
    </section>
  );
}
