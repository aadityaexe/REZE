import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { gsap } from "gsap";

const TiltCard = forwardRef(({ children, className = "" }, ref) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  // Expose the underlying DOM element to the parent via the forwarded ref
  useImperativeHandle(ref, () => cardRef.current);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let bounds;
    
    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    };

    const onMouseLeave = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const onMouseMove = (e) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;
      
      const xPct = mouseX / bounds.width - 0.5;
      const yPct = mouseY / bounds.height - 0.5;

      const rotateY = xPct * 20;
      const rotateX = -yPct * 20;

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.1,
        ease: "power1.out",
      });
    };

    card.addEventListener("mouseenter", onMouseEnter);
    card.addEventListener("mouseleave", onMouseLeave);
    card.addEventListener("mousemove", onMouseMove);

    return () => {
      card.removeEventListener("mouseenter", onMouseEnter);
      card.removeEventListener("mouseleave", onMouseLeave);
      card.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`card rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div ref={contentRef} style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </article>
  );
});

TiltCard.displayName = "TiltCard";

export default TiltCard;
