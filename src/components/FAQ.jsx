// FAQ.jsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Who is Reze?",
    answer:
      "Reze is a deadly devil-human hybrid from Chainsaw Man. Don’t let her sweet smile fool you—she’s dangerous and unpredictable.",
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
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-gray-200 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-red-500 text-center mb-12">
          FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-5 cursor-pointer hover:bg-gray-700 transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FaChevronUp size={20} />
                ) : (
                  <FaChevronDown size={20} />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-300 text-lg md:text-xl">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
