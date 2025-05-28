import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* Secondary Bar */}
      <div className="bg-gradient-to-t from-black to-red-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-10 space-x-4 text-sm">
            <a
              href="characters"
              className="text-white hover:text-neutral-300 transition-colors"
            >
              Characters
            </a>
            <a
              href="wizardvault"
              className="text-white  hover:text-neutral-300 transition-colors"
            >
              Wizard Vault
            </a>
            <a
              href="strikes"
              className="text-white hover:text-neutral-300 transition-colors"
            >
              Strikes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
