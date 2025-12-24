import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./ui/TiltCard";
import tg1 from "../assets/Reze0.jpg";
import tg2 from "../assets/Reze1.jpg";
import tg3 from "../assets/Reze2.jpg";
import tg4 from "../assets/Reze3.jpg";
import tg5 from "../assets/Reze4.jpg";
import tg6 from "../assets/Reze5.jpg";
import tg7 from "../assets/Reze6.jpg";
import tg8 from "../assets/Reze7.jpg";
import tg9 from "../assets/Reze8.jpg";
import tg10 from "../assets/Reze9.jpg";
import tg11 from "../assets/Reze10.jpg";
import tg12 from "../assets/Reze11.jpg";
import tg13 from "../assets/Reze12.jpg";
import tg14 from "../assets/Reze13.jpg";
import tg15 from "../assets/Reze14.jpg";
import tg16 from "../assets/Reze15.jpg";
import tg17 from "../assets/Reze16.jpg";
import tg18 from "../assets/Reze17.jpg";
import tg19 from "../assets/Reze18.jpg";
import tg20 from "../assets/Reze19.jpg";
import tg21 from "../assets/Reze20.jpg";

gsap.registerPlugin(ScrollTrigger);

const tortures = [
  {
    title: "💣 Explosive Kiss",
    description: "One touch, one kiss, and your world trembles under her love.",
    img: tg1,
  },
  {
    title: "🔥 Fiery Heart",
    description: "Her embrace burns hotter than any flame you’ve known.",
    img: tg2,
  },
  {
    title: "🖤 Obsessive Desire",
    description:
      "She lingers in your mind, a beautiful threat you can’t escape.",
    img: tg3,
  },
  {
    title: "🩸 Poisoned Sweetness",
    description: "Every word from her mouth is a deadly seduction.",
    img: tg4,
  },
  {
    title: "👠 Steps of Danger",
    description: "Every step she takes leaves your soul trembling.",
    img: tg5,
  },
  {
    title: "🕷 Tangled in Chaos",
    description: "Her presence wraps around you, suffocating yet addictive.",
    img: tg6,
  },
  {
    title: "🔗 Chains of Her Love",
    description: "Trying to break free only pulls you deeper into her orbit.",
    img: tg7,
  },
  {
    title: "🩶 Mirror of Obsession",
    description:
      "See yourself through her eyes, and realize you’re already hers.",
    img: tg8,
  },
  {
    title: "🎭 Masked Intentions",
    description: "Her smile hides destruction, but you want to stay anyway.",
    img: tg9,
  },
  {
    title: "🐍 Venomous Touch",
    description: "Each caress lingers, intoxicating and dangerous.",
    img: tg10,
  },
  {
    title: "🔮 Sight of Madness",
    description: "She shows you what you crave, and then shatters it.",
    img: tg11,
  },
  {
    title: "🧨 Heart Detonation",
    description: "Every beat with her is a ticking time bomb of desire.",
    img: tg12,
  },
  {
    title: "👅 Tongue of Fire",
    description: "Her words scorch your mind, leaving nothing untouched.",
    img: tg13,
  },
  {
    title: "🪞 Echoes of Reze",
    description: "Even when gone, her shadow lingers in every thought.",
    img: tg14,
  },
  {
    title: "🕯 Candle of Temptation",
    description: "Soft light, sharp edges — she burns in your memory.",
    img: tg15,
  },
  {
    title: "🪰 Swarm of Memories",
    description: "Everything you left unsaid swirls around her influence.",
    img: tg16,
  },
  {
    title: "🔒 Vault of Secrets",
    description: "She holds your secrets like explosives, ready to detonate.",
    img: tg17,
  },
  {
    title: "🛏 Bed of Pain & Pleasure",
    description: "Surrender to her. Remember every sharp and sweet sensation.",
    img: tg18,
  },

  {
    title: "⏳ Hourglass of Longing",
    description:
      "Time stretches when she’s gone, and explodes when she’s near.",
    img: tg19,
  },
  {
    title: "💔 Heartquake",
    description:
      "One touch, one glance, and your heart shatters in her rhythm.",
    img: tg20,
  },
  {
    title: "👁️ Unblinking Gaze",
    description: "She watches, waits, and laughs as you fall under her chaos.",
    img: tg21,
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
