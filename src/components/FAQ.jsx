// FAQ.jsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Who is Reze?",
    answer:
      "Reze is the Bomb Devil hybrid from the Soviet Union, introduced as a primary antagonist in the 'Bomb Girl' arc of Chainsaw Man.",
  },
  {
    question: "Why is she so dangerous?",
    answer:
      "She has the power to explode anything around her. Getting close isn’t recommended… unless you like living on the edge.",
  },
  {
    question: "Is Reze lovable?",
    answer:
      "Ah, that depends… you might fall for her charm, but remember, she plays with hearts… literally.",
  },
  {
    question: "Where can I find more Reze content?",
    answer:
      "Stay on this fan page, follow her fan art, quotes, and gifs—but don’t get too obsessed… or maybe do.",
  },
  {
    question: "What is her cover identity?",
    answer:
      "She initially presents herself as a sweet, friendly girl working at the Crossroads Cafe, quickly developing a romantic relationship with Denji.",
  },
  {
    question: "How does she transform into the Bomb Devil?",
    answer:
      "She transforms by pulling a grenade-like pin located on the choker around her neck, triggering an explosive transformation.",
  },
  {
    question: "What was her primary mission?",
    answer:
      "Her mission, assigned by the Soviet Union, was to capture Denji and steal the Chainsaw Man's heart.",
  },
  {
    question: "Did Reze genuinely have feelings for Denji?",
    answer:
      "It's one of the great debates. While on a mission, it's heavily implied that she developed genuine feelings for him, making their conflict a tragic one.",
  },
  {
    question: "What are her main powers?",
    answer:
      "As the Bomb Devil, she can create powerful explosions from any part of her body. She can also detach body parts and detonate them remotely.",
  },
  {
    question: "Can she fly?",
    answer:
      "Yes, by riding on a detached, bomb-propelled head or by using controlled explosions from her limbs for high-speed propulsion.",
  },
  {
    question: "Is Reze considered a villain?",
    answer:
      "She acts as an antagonist, but her character is tragic. She was raised as a weapon from a young age and never had a normal life, making her more of a victim of her circumstances.",
  },
  {
    question: "What is the 'Bomb Girl' arc?",
    answer:
      "It's the name of the manga arc where she is the central focus. It's famous for its blend of romance, intense action, and heartbreaking tragedy.",
  },
  {
    question: "How does her fight with Denji conclude?",
    answer:
      "Denji defeats her in a brutal battle. However, instead of killing her, he offers her a chance to run away with him, showing he still cares for her.",
  },
  {
    question: "What happens to Reze after her arc?",
    answer:
      "Tragically, as she is about to meet Denji to run away together, she is intercepted and killed by Makima and the Angel Devil.",
  },
  {
    question: "Could Reze ever come back?",
    answer:
      "In the world of Chainsaw Man, devils are reincarnated on Earth after being killed in Hell. As a hybrid, her fate is more ambiguous, but fans constantly hope for her return.",
  },
  {
    question: "What is the significance of the flower?",
    answer:
      "The flower she finds symbolizes the life she could have had. She was about to give it to Denji at the cafe before Makima found her.",
  },
  {
    question: "What does she teach Denji?",
    answer:
      "During a memorable night scene, she teaches Denji how to swim, which serves as a metaphor for trust and letting go in a rare, peaceful moment.",
  },
  {
    question: "What makes her design so popular?",
    answer:
      "Her design masterfully contrasts her sweet, girl-next-door appearance with her terrifyingly cool and destructive Bomb Devil form.",
  },
  {
    question: "Is she a Fiend or a Hybrid?",
    answer:
      "Reze is a Hybrid, just like Denji. This means she is a human who has merged with a devil and can transform, retaining her human consciousness.",
  },
  {
    question: "Who is the Typhoon Devil?",
    answer:
      "The Typhoon Devil is another devil that Reze allies with during her assault, using his storm-creating abilities to cause widespread chaos.",
  },
  {
    question: "What does her line 'I never went to school either' mean?",
    answer:
      "It's a key bonding moment with Denji. It shows that they both share a background of being denied a normal childhood, creating a deep sense of empathy between them.",
  },
  {
    question: "How durable is she?",
    answer:
      "As a hybrid, she possesses extreme regenerative abilities. She can survive being cut in half and can reassemble herself as long as she has enough blood.",
  },
  {
    question: "Is Reze in the anime yet?",
    answer:
      "As of the first season, she has not yet appeared. She is expected to be a major character in the upcoming movie or second season.",
  },
  {
    question: "What's the meaning behind her name?",
    answer:
      "While 'Reze' doesn't have a specific canonical meaning in the story, its foreign sound highlights her origin as being from outside of Japan (the Soviet Union).",
  },
  {
    question: "How does her fighting style reflect her personality?",
    answer:
      "Her movements are often described as graceful and dance-like, which contrasts sharply with the chaotic and violent explosions she creates—mirroring her dual nature.",
  },
  {
    question: "What is her weakness?",
    answer:
      "Her primary weakness is emotional. Her developing feelings for Denji cause her to hesitate and ultimately lead to her downfall.",
  },
  {
    question: "How did she become a hybrid?",
    answer:
      "The exact details are unknown, but it's stated that she was part of a Soviet experiment to create weaponized, devil-powered soldiers.",
  },
  {
    question: "What is the ultimate tragedy of Reze's story?",
    answer:
      "That she found a genuine chance at happiness and a normal life with Denji, but it was snatched away from her moments before she could grasp it.",
  },
];

// Number of FAQs to show initially
const INITIAL_VISIBLE_FAQS = 2;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, INITIAL_VISIBLE_FAQS);

  return (
    <section className=" text-gray-200 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-red-500 text-center mb-12">
          FAQ
        </h2>
        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className=" border border-gray-700 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-black">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <FaChevronUp className="text-red-400" size={20} />
                  ) : (
                    <FaChevronDown className="text-gray-400" size={20} />
                  )}
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-pink-900 text-lg md:text-xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* See More / See Less Button */}
        {faqs.length > INITIAL_VISIBLE_FAQS && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
