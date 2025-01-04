import React from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Shaikh Sufiyan
          </span>

          <DesktopMenu links={navLinks} />

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && <MobileMenu links={navLinks} />}
    </nav>
  );
};

export default Navbar;
