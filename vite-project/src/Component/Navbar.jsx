// src/Component/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileJsonData from "../Component/profilejsonData/ptofiledata.json";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white relative">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
          RIYA
        </span>
        <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
          PANDEY
        </span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm">
        <li className="hover:text-purple-400 cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Link to="/">{ProfileJsonData.Home}</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Link to="/about">{ProfileJsonData.AboutMe}</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer transform transition-transform duration-300 hover:scale-110">
          <Link to="/skills">{ProfileJsonData.Skills}</Link>
          
        </li>
        <li className="hover:text-purple-400 cursor-pointer transform transition-transform duration-300 hover:scale-110">
          {ProfileJsonData.Contact}
        </li>
      </ul>

      {/* Button (Desktop only) */}
      <button className="hidden md:block bg-gradient-to-r from-purple-500 to-orange-400 px-4 py-2 rounded-full text-sm font-semibold">
        Connect With Me
      </button>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-6 py-6 shadow-lg md:hidden z-50">
          <ul className="flex flex-col gap-6 text-lg">
            <li className="hover:text-purple-400 cursor-pointer">
              <Link to="/">{ProfileJsonData.Home}</Link>
            </li>
            <li className="hover:text-purple-400 cursor-pointer">
              <Link to="/about">{ProfileJsonData.AboutMe}</Link>
            </li>
            <li className="hover:text-purple-400 cursor-pointer">
              {ProfileJsonData.Skills}
            </li>
            <li className="hover:text-purple-400 cursor-pointer">
              {ProfileJsonData.Contact}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
