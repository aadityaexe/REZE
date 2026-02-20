import { FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";
import React, { useEffect, useRef } from "react";
import { otherImages } from "../assets/images";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Creator() {
  const creators = [
    {
      name: "Aditya",
      role: "Lead Developer & Visionary",
      img: otherImages.adityaImg,
      bio: "The mastermind behind the code. Every pixel, every animation, every line of logic flows through his vision.",
      instagram: "https://www.instagram.com/adityakumar.01/",
      twitter: "https://x.com/aadityakumar_01",
      github: "https://github.com/aadityaexe",
    },
    {
      name: "Keshav",
      role: "Creative Director & Strategist",
      img: otherImages.keshavImg,
      bio: "The soul of the design. He shapes the aesthetic and ensures the vibe is nothing short of explosive.",
      instagram: "https://www.instagram.com/keshavkumar7833/",
      twitter: "https://x.com/keshavbot",
      github: "https://github.com/botkeshav",
    },
  ];

  return (
    <div
      id="creator"
      className=" bg-gray-100 flex flex-col items-center justify-center p-8"
    >
      <h1 className="text-5xl font-bold mb-8 text-gray-800">
        About the Creators
      </h1>
      <div className="w-full  flex flex-col items-center justify-center px-4">
        <p className="text-center text-2xl md:text-4xl font-extrabold leading-snug z-20 text-rose-500">
          None in the universe, from angels to demons, burn with obsession like
          Keshav and Aditya. Reze lurks in the shadows, unaware of the storm
          consuming them.
        </p>
      </div>

      <div className=" gap-8 w-full max-w-5xl flex flex-col md:flex-row">
        {creators.map((creator, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 text-center"
          >
            <img
              src={creator.img}
              alt={creator.name}
              className="w-44 h-44 object-cover rounded-full mx-auto mb-4 border-4 border-gray-200 shadow-sm"
            />
            <h2 className="text-4xl font-semibold text-purple-900 mb-2">
              {creator.name}
            </h2>
            <p className="text-emerald-600 mb-4">{creator.bio}</p>
            <div className="flex justify-center gap-6">
              <a
                href={creator.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                <FaXTwitter className="text-2xl" />
              </a>
              <a
                href={creator.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href={creator.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
