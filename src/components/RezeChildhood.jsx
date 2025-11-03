import React, { useRef, useEffect } from "react";
import { gsap } from "https://cdn.skypack.dev/gsap";
import RazeC from "../assets/RezeC.jpg";

export default function RezeChildhood({ className = "" }) {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];
  const timeline = [
    {
      age: "Age 4",
      title: "A Quiet Seaside Begin",
      text: "Small waves, salt in the air—Reze learned how to count gulls before she learned to count stars. She collected broken toys and curiosity, both of which she kept like fragile shells.",
    },
    {
      age: "Age 8",
      title: "The Bolt That Sparked",
      text: "An odd flash in the attic and a pocket full of bolts later, Reze discovered she could make things hum. The neighborhood dog barked in tune and her mother pretended not to notice the stitched clockwork heart.",
    },
    {
      age: "Age 12",
      title: "Leaving the Harbor",
      text: "A letter, a one-way ticket, and one suitcase. Reze left with her hands full of instruments and a head full of goodbyes. The sea watched her go and kept a last shell as a souvenir.",
    },
  ];

  // GSAP animations on component mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate the hero section
      tl.from(heroRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Stagger-animate the timeline cards
      tl.from(
        cardsRef.current,
        {
          y: 20,
          opacity: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5" // Overlap with previous animation slightly
      );
    }, rootRef);

    // Cleanup animations on unmount
    return () => ctx.revert();
  }, []);

  // Helper function to add card elements to the refs array for GSAP
  function addCardRef(el) {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  }

  return (
    <section
      ref={rootRef}
      className={`prose-invert mx-auto max-w-5xl p-6 md:p-10 font-sans ${className}`}
    >
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/60 via-pink-800/40 to-rose-700/30 p-6 md:p-10 shadow-2xl"
      >
        <div className="md:flex md:items-center md:gap-8">
          <img
            src={RazeC}
            alt="Reze portrait — childhood"
            className="mx-auto mb-4 h-48 w-48 flex-shrink-0 rounded-xl object-cover ring-4 ring-white/10 md:mb-0"
          />

          <div className="text-center md:text-left">
            <h2 className="mb-2 text-3xl  leading-tight text-blue-700">
              Reze — A Childhood in Rust and Salt
            </h2>
            <p className="mb-4 max-w-2xl text-xl opacity-90 text-white/80">
              A short, wistful snapshot of Reze's early years: mismatched toys,
              whispered promises, and the curious hum of something not quite
              like the rest of her town.
            </p>
          </div>
        </div>

        {/* Decorative background blur element */}
        <div className="pointer-events-none absolute -right-20 -top-20 hidden h-64 w-64 rotate-12 blur-3xl opacity-30 md:block" />
      </div>

      {/* Timeline Grid */}
      <div id="timeline" className="mt-8 grid gap-6 md:grid-cols-3">
        {timeline.map((item, i) => (
          <article
            key={item.title}
            ref={addCardRef}
            className="flex flex-col rounded-xl bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 p-5 shadow-lg"
          >
            <header className="mb-3">
              <div className="text-sm font-semibold uppercase tracking-widest text-pink-900/80">
                {item.age}
              </div>
              <h3 className="text-xl font-bold leading-tight text-pink-300">
                {item.title}
              </h3>
            </header>

            <p className="flex-grow text-xl text-black ">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
