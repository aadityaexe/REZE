import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    title: "💄 Lust Lashes",
    description: "A kiss that burns into your bones. Soft lips, sharp teeth.",
    img: tg1,
  },
  {
    title: "🔥 The Furnace Embrace",
    description: "Arms that hold too tight, warmth that melts your will.",
    img: tg13,
  },
  {
    title: "🖤 The Craving Chair",
    description:
      "You sit, you ache, you remember everything you ever wanted. But never get it.",
    img: tg20,
  },
  {
    title: "🩸 Whispers of the Wicked",
    description: "Words so sweet they rot your sanity.",
    img: tg11,
  },
  {
    title: "👠 Heels of Regret",
    description: "You chased her, now she walks all over your soul.",
    img: tg15,
  },
  {
    title: "🕷 Web of Whispers",
    description: "You’re wrapped in lies — and you begged for it.",
    img: tg17,
  },
  {
    title: "🔗 Shackles of Shame",
    description: "Every time you squirm, the memories tighten.",
    img: tg2,
  },
  {
    title: "🩶 Mirror of Sin",
    description: "See yourself as they saw you — and scream.",
    img: tg6,
  },
  {
    title: "🎭 The Liar's Mask",
    description: "Smile all you want. It’s stitched on now.",
    img: tg14,
  },
  {
    title: "🐍 Venom Caress",
    description: "They loved you — with poison in their touch.",
    img: tg7,
  },
  {
    title: "🔮 The Guilt Seer",
    description: "Visions of who you were, and who you destroyed.",
    img: tg5,
  },
  {
    title: "🧨 Desire Detonator",
    description: "Every craving is a trap. Every climax a bomb.",
    img: tg18,
  },
  {
    title: "👅 Tongue of Fire",
    description: "She spoke your name — now it only screams.",
    img: tg4,
  },
  {
    title: "🪞 Echoes of Her",
    description: "She calls from every corner. But never comes back.",
    img: tg3,
  },
  {
    title: "🕯 Candle of Longing",
    description: "Burns slow. Smells sweet. Scars forever.",
    img: tg8,
  },
  {
    title: "🪰 Flies of Regret",
    description: "They buzz with everything you never said.",
    img: tg9,
  },
  {
    title: "🛏 Bed of Nails & Whispers",
    description: "Lie back. Remember. Bleed silently.",
    img: tg12,
  },
  {
    title: "🔒 Vault of Secrets",
    description: "You locked them away. Now they scream to get out.",
    img: tg16,
  },
  {
    title: "⏳ Hourglass of Her Absence",
    description: "Time flows slower when you’re haunted.",
    img: tg10,
  },
  {
    title: "💔 The Heartcrush Waltz",
    description: "One dance. One break. Again and again.",
    img: tg21,
  },
  {
    title: "👁️ The Hunter’s Curse",
    description:
      "You watched her. Followed her. Whispered filth behind her back. Now the eyes never blink, and the screams never stop.",
    img: tg19,
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
          trigger: "#torture-gallery",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="torture-gallery" className="py-16 px-4 text-white">
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
          <div
            key={item.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.03] transition-transform duration-300 bg-purple-900"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
