import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo / Title */}
        <a href="#hero">
          <div className="text-purple-600 text-2xl font-extrabold tracking-wide p-4 pl-7 pr-7 rounded-lg bg-black/70 backdrop-blur-md border-b border-white/10">
            REZE<span className="text-green-300">.</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 p-4 rounded-lg text-green-300 font-medium bg-black/70 backdrop-blur-md border-b border-white/10">
          <a href="#hero">
            <li className="hover:text-purple-500 transition-colors cursor-pointer">
              Home
            </li>
          </a>
          <a href="#about">
            {" "}
            <li className="hover:text-purple-500 transition-colors cursor-pointer">
              About
            </li>
          </a>
          <a href="#gallery">
            {" "}
            <li className="hover:text-purple-500 transition-colors cursor-pointer">
              Gallery
            </li>
          </a>
          <a href="#creator">
            {" "}
            <li className="hover:text-purple-500 transition-colors cursor-pointer">
              Creator
            </li>
          </a>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <ul className="flex flex-col items-center space-y-6 py-6 text-white font-medium">
            <a href="#hero">
              {" "}
              <li className="hover:text-red-500 transition-colors cursor-pointer">
                Home
              </li>
            </a>
            <a href="#about">
              {" "}
              <li className="hover:text-red-500 transition-colors cursor-pointer">
                About
              </li>
            </a>
            <a href="#gallery">
              {" "}
              <li className="hover:text-red-500 transition-colors cursor-pointer">
                Gallery
              </li>
            </a>
            <a href="#creator">
              {" "}
              <li className="hover:text-red-500 transition-colors cursor-pointer">
                Creator
              </li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
