import { useState } from "react";
import Link from "next/link"; // ✅ Import Next.js Link

export default function Navbar({ bgWhite = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Base link color (normal state)
  const baseColor = bgWhite ? "text-black" : "text-white";

  // Gradient hover effect
  const hoverGradient =
    "hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:text-transparent hover:bg-clip-text transition duration-300";

  const logoColor = bgWhite ? "text-yellow-500" : "text-yellow-400";

  // ✅ Added Custom Plans
  const navItems = ["Home", "About", "Services", "Plans", "Custom Plan", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 md:p-6 z-50 ${
        bgWhite ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`text-3xl sm:text-4xl md:text-5xl font-bold ${logoColor}`}
        >
          Rujark-Tours
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-24">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-") === "home" ? "" : item.toLowerCase().replace(" ", "-")}`}
              className={`text-xl font-bold ${baseColor} ${hoverGradient}`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-3xl ${logoColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden mt-4 flex flex-col space-y-4 p-4 rounded-lg shadow-md ${
            bgWhite ? "bg-white" : "bg-black/80"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-") === "home" ? "" : item.toLowerCase().replace(" ", "-")}`}
              className={`text-lg font-bold ${baseColor} ${hoverGradient}`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
