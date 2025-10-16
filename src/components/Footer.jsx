import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Name */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-500">
            Reze.
          </h1>
          <p className="text-gray-400 mt-3 text-lg md:text-xl">
            Celebrating the deadly charm of Reze from Chainsaw Man.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row gap-8 text-center md:text-left text-lg md:text-xl font-semibold">
          <a href="#home" className="hover:text-red-500 transition">
            Home
          </a>
          <a href="#gallery" className="hover:text-red-500 transition">
            Gallery
          </a>
          <a href="#quotes" className="hover:text-red-500 transition">
            Quotes
          </a>
          <a href="#about" className="hover:text-red-500 transition">
            About
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-8 md:mt-0">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaDiscord size={28} />
          </a>
        </div>
      </div>

      {/* Quote */}
      <div className="mt-10 text-center text-red-500 text-lg md:text-xl italic">
        "You think you can handle me? Sweetheart, I eat hearts for breakfast…
        yours might be next."
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm md:text-base">
        &copy; {new Date().getFullYear()} Reze . All rights consumed by
        obsession & <span className="text-red-900">LUST</span>.
      </div>
    </footer>
  );
}
