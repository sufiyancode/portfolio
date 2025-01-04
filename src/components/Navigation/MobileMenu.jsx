import React from "react";

const MobileMenu = ({ links }) => {
  return (
    <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-400 transition-colors"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
