import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import adityaImg from "../assets/adityaImg.jpg";
import keshavImg from "../assets/Reze1.jpg";

export default function Creator() {
  const creators = [
    {
      name: "Aditya Choudhary",
      img: adityaImg,
      bio: "Designer and developer crafting responsive, modern web experiences. Handles the design and full development.",
      instagram: "https://www.instagram.com/adityakumar.01/",
      twitter: "https://x.com/aadityakumar_01",
    },
  ];

  return (
    <div
      id="creator"
      className=" bg-gray-100 flex flex-col items-center justify-center p-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        About the Creators
      </h1>

      <div className=" gap-8 w-full max-w-5xl">
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
                className="text-gray-700 hover:text-black transition-colors"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
