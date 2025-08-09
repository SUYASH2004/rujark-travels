import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full p-4 md:p-6 z-50 bg-transparent">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">
          Rujark-Tours
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-24">
          <a href="/" className="text-xl font-bold text-white hover:text-blue-400 transition">Home</a>
          <a href="/about" className="text-xl font-bold text-white hover:text-blue-400 transition">About</a>
          <a href="/services" className="text-xl font-bold text-white hover:text-blue-400 transition">Services</a>
          <a href="/plans" className="text-xl font-bold text-white hover:text-blue-400 transition">Plans</a>
          <a href="/contact" className="text-xl font-bold text-white hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 bg-black/80 p-4 rounded-lg">
          <a href="/" className="text-lg font-bold text-white hover:text-blue-400 transition">Home</a>
          <a href="/about" className="text-lg font-bold text-white hover:text-blue-400 transition">About</a>
          <a href="/services" className="text-lg font-bold text-white hover:text-blue-400 transition">Services</a>
          <a href="/plans" className="text-lg font-bold text-white hover:text-blue-400 transition">Plans</a>
          <a href="/contact" className="text-lg font-bold text-white hover:text-blue-400 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
