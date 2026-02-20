import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./ui/TiltCard";
import { rezeImages } from "../assets/images";

gsap.registerPlugin(ScrollTrigger);

const tortures = [
  {
    title: "💣 Explosive Kiss",
    description: "One touch, one kiss, and your world trembles under her love.",
    img: rezeImages[0],
  },
  {
    title: "🔥 Fiery Heart",
    description: "Her embrace burns hotter than any flame you’ve known.",
    img: rezeImages[1],
  },
  {
    title: "🖤 Obsessive Desire",
    description:
      "She lingers in your mind, a beautiful threat you can’t escape.",
    img: rezeImages[2],
  },
  {
    title: "🩸 Poisoned Sweetness",
    description: "Every word from her mouth is a deadly seduction.",
    img: rezeImages[3],
  },
  {
    title: "👠 Steps of Danger",
    description: "Every step she takes leaves your soul trembling.",
    img: rezeImages[4],
  },
  {
    title: "🕷 Tangled in Chaos",
    description: "Her presence wraps around you, suffocating yet addictive.",
    img: rezeImages[5],
  },
  {
    title: "🔗 Chains of Her Love",
    description: "Trying to break free only pulls you deeper into her orbit.",
    img: rezeImages[6],
  },
  {
    title: "🩶 Mirror of Obsession",
    description:
      "See yourself through her eyes, and realize you’re already hers.",
    img: rezeImages[7],
  },
  {
    title: "🎭 Masked Intentions",
    description: "Her smile hides destruction, but you want to stay anyway.",
    img: rezeImages[8],
  },
  {
    title: "🐍 Venomous Touch",
    description: "Each caress lingers, intoxicating and dangerous.",
    img: rezeImages[9],
  },
  {
    title: "🔮 Sight of Madness",
    description: "She shows you what you crave, and then shatters it.",
    img: rezeImages[10],
  },
  {
    title: "🧨 Heart Detonation",
    description: "Every beat with her is a ticking time bomb of desire.",
    img: rezeImages[11],
  },
  {
    title: "👅 Tongue of Fire",
    description: "Her words scorch your mind, leaving nothing untouched.",
    img: rezeImages[12],
  },
  {
    title: "🪞 Echoes of Reze",
    description: "Even when gone, her shadow lingers in every thought.",
    img: rezeImages[13],
  },
  {
    title: "🕯 Candle of Temptation",
    description: "Soft light, sharp edges — she burns in your memory.",
    img: rezeImages[14],
  },
  {
    title: "🪰 Swarm of Memories",
    description: "Everything you left unsaid swirls around her influence.",
    img: rezeImages[15],
  },
  {
    title: "🔒 Vault of Secrets",
    description: "She holds your secrets like explosives, ready to detonate.",
    img: rezeImages[16],
  },
  {
    title: "🛏 Bed of Pain & Pleasure",
    description: "Surrender to her. Remember every sharp and sweet sensation.",
    img: rezeImages[17],
  },

  {
    title: "⏳ Hourglass of Longing",
    description:
      "Time stretches when she’s gone, and explodes when she’s near.",
    img: rezeImages[18],
  },
  {
    title: "💔 Heartquake",
    description:
      "One touch, one glance, and your heart shatters in her rhythm.",
    img: rezeImages[19],
  },
  {
    title: "👁️ Unblinking Gaze",
    description: "She watches, waits, and laughs as you fall under her chaos.",
    img: rezeImages[20],
  },
];

const Gallery = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current.filter(Boolean),
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#gallery",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="gallery" className="py-16 px-4 text-white">
      {/* --- TEXT UPDATED HERE --- */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-red-500">
          An Explosive Tribute to Reze
        </h2>
        <p className="text-xl md:text-2xl text-gray-900 mt-2">
          A Fan Page Dedicated to the Bomb Devil
        </p>
      </div>
      {/* --- END OF UPDATE --- */}

      <div className="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-6 max-w-7xl mx-auto px-4 space-y-6">
        {tortures.map((item, index) => (
          <TiltCard
            key={item.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="break-inside-avoid bg-purple-900 hover:scale-[1.03]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover max-h-[600px]"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-pink-400">{item.title}</h3>
              <p className="text-gray-300 text-base mt-2">{item.description}</p>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
