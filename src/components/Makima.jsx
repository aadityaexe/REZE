import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import MakimaImg1 from "../assets/Makima.jpg";
import MakimaImg2 from "../assets/makima3.jpg";
import MakimaImg3 from "../assets/makima2.jpg";

export default function Makima({
  images = [MakimaImg1, MakimaImg2, MakimaImg3],
  alt = "Makima",
  // replace with any text
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Hover animation
      const cards = gsap.utils.toArray(".card");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 px-4">
      <h2 className="text-6xl text-center font-bold mb-6">
        Makima Will Hunt You Down.
      </h2>

      <p className="max-w-6xl mx-auto mt-6 mb-5 text-4xl text-gray-700 text-center">
        Stay still, darling… I like watching you squirm before I decide if you
        deserve to survive… or if I just want to keep you for myself.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left: image only */}
        <article className="card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={images[0]}
            alt={`${alt} left`}
            className="w-auto max-w-full h-auto object-contain block"
            onError={(e) => (e.currentTarget.style.opacity = 0.6)}
          />
        </article>

        {/* Middle: image + cheeky text overlay */}
        <article className="card relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
          <img
            src={images[1]}
            alt={`${alt} center`}
            className="w-auto max-w-full h-auto object-contain block"
            onError={(e) => (e.currentTarget.style.opacity = 0.6)}
          />
        </article>

        {/* Right: image only */}
        <article className="card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={images[2]}
            alt={`${alt} right`}
            className="w-auto max-w-full h-auto object-contain block"
            onError={(e) => (e.currentTarget.style.opacity = 0.6)}
          />
        </article>
      </div>

      <p className="max-w-6xl mx-auto mt-6 text-4xl text-gray-700 text-center">
        Careful… getting too close to me might just make you yourselves
        disappear… but damn, watching you squirm is delicious.
      </p>
    </section>
  );
}
