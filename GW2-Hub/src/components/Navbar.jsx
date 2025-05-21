import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* Primary Navbar */}
      <nav className="bg-gradient-to-t from-black to-red-800 shadow-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">GW2 Hub</div>

            {/* Primary Links (hidden on mobile) */}
            <div className="hidden md:flex space-x-6">
              <a
                href="/"
                className="text-neutral-300 hover:text-neutral-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-neutral-400 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-neutral-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Bar */}
      <div className="bg-neutral-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-10 space-x-4 text-sm">
            <a
              href="characters"
              className="text-black hover:text-neutral-600 transition-colors"
            >
              Characters
            </a>
            <a
              href="#"
              className="text-black hover:text-neutral-600 transition-colors"
            >
              Wizard Vault
            </a>
            <a
              href="#"
              className="text-black hover:text-neutral-600 transition-colors"
            >
              Weeklies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
