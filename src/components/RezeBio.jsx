import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { rezeImages } from "../assets/images";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function RezeBio() {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const contentRef = useRef(null);
  const fuseRef = useRef(null);
  const headingRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Split Text Logic
      const headingSplit = new SplitText(headingRef.current, { type: "chars" });
      const quoteSplit = new SplitText(quoteRef.current, { type: "words" });

      // 1. Container & Background Reveal
      tl.from(containerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 2. Image Reveal
      tl.from(
        imageWrapperRef.current,
        {
          x: -50,
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
        },
        "-=0.5"
      );

      // 3. Heading Split Text Animation
      tl.from(
        headingSplit.chars,
        {
          opacity: 0,
          y: 20,
          rotateX: -90,
          stagger: 0.05,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      );

      // 4. Content Body Fade In
      tl.from(
        ".bio-text",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // 5. Quote Split Text Animation
      tl.from(
        quoteSplit.words,
        {
          opacity: 0,
          y: 10,
          stagger: 0.03,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.6"
      );

       // 6. Fuse Animation
      if (fuseRef.current) {
        tl.fromTo(
          fuseRef.current,
          { strokeDasharray: 1000, strokeDashoffset: 1000 },
          {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power1.inOut",
          },
          "-=1.0"
        );
      }

      // 7. Button Reveal
       tl.from(
        ".ignite-btn",
        {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=1.5"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative mx-auto my-24 max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-purple-200/50 blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-rose-200/50 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col gap-12 p-8 md:flex-row md:items-center md:gap-16 md:p-16">
        {/* Left: Image Section */}
        <div
          ref={imageWrapperRef}
          className="group relative mx-auto w-full max-w-md md:mx-0 md:w-1/2"
        >
          {/* Decorative Border Frame */}
          <div className="absolute -inset-4 rounded-xl border border-purple-200 bg-purple-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-2xl ring-1 ring-black/10 transition-transform duration-700 md:group-hover:rotate-1">
            <img
              src={rezeImages[0]}
              alt="Reze - The Bomb Girl"
              className="h-auto w-full transform object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            
            {/* Name Overlay on Image */}
            <div className="absolute bottom-4 left-4">
              <span className="block font-mono text-xs font-bold uppercase tracking-widest text-white drop-shadow-md">
                Target: Denji
              </span>
            </div>
          </div>
        </div>

        {/* Right: Content Section */}
        <div ref={contentRef} className="flex-1 text-center md:text-left">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-purple-600 ring-1 ring-purple-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
            </span>
            Bomb Hybrid
          </div>

          <h2 ref={headingRef} className="mb-6 text-5xl font-black leading-none tracking-tighter text-gray-900 md:text-7xl">
            REZE <span className="text-purple-600">.</span>
          </h2>

          <p className="bio-text mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
            A gentle soul working at a café, or a ticking time bomb waiting to explode? 
            Reze masterfully blurs the line between innocent romance and calculated destruction. 
            Her encounter with Denji isn’t just a fleeting summer memory—it’s a lesson in 
            heartbreak, gunpowder, and the cruel beauty of a spark before the blast.
          </p>

          <blockquote ref={quoteRef} className="border-l-4 border-purple-500 bg-gray-50 p-6 italic text-gray-800 backdrop-blur-sm shadow-sm rounded-r-lg">
            "I think I’d like to go to school... and maybe teach you how to swim too, Denji-kun."
          </blockquote>

          {/* Play/Action Button (Decorative) */}
          <div className="mt-8 flex justify-center gap-4 md:justify-start">
             <button className="ignite-btn group relative overflow-hidden rounded-full bg-neutral-900 px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-200 shdow-lg">
              <span className="relative z-10">Ignite</span>
              <div className="absolute inset-0 -translate-x-full bg-purple-600 transition-transform duration-300 group-hover:translate-x-0 group-hover:skew-x-12" />
            </button>
          </div>
        </div>
      </div>

      {/* SVG Fuse Decoration */}
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={fuseRef}
          d="M0,100 C20,80 50,90 40,50 C30,10 80,20 100,0"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="0.5"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
