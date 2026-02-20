
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { otherImages } from "../assets/images";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(".hero-text", {
        type: "chars, words",
        charsClass: "char-style inline-block",
      });

      // ✅ Timeline for smooth entry
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
      });

      tl.from(split.chars, {
        y: 80,
        opacity: 0,
        stagger: 0.04,
        duration: 1.2,
      });
    }, containerRef);

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
        style={{ backgroundImage: `url(${otherImages.RezeSm})` }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${otherImages.RezeLm})` }}
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
        <div className="text-red-500 text-center sm:mt-6 md:max-w-72 md:mt-0 md:text-left">
          {/* Note: The h1 tag will be targeted by SplitText */}
          <p className="text-5xl  leading-snug hero-text ">
            Reze ham sarminda hai, tumhare katill jinda hai
          </p>
        </div>

        {/* Right side text */}
        <div className="mt-8 space-y-6 text-center md:mt-0 md:w-1/2 md:pl-20 md:text-right">
          {/* Note: The p tag will also be targeted by SplitText */}
          <p className=" text-4xl hidden md:block  leading-snug hero-text md:text-4xl ">
            Makima will hunt you down.
          </p>
          <p className="text-2xl hidden md:block  leading-snug hero-text  md:text-2xl text-pink-400 ">
            Stay still, darling… I like watching you squirm before I decide if
            you deserve to survive… or if I just want to keep you for myself.
          </p>
        </div>
      </div>
    </section>
  );
}
