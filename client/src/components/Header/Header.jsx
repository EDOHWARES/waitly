import React, { useState } from "react";
import WaitlyLogo from "../WaitlyLogo/WaitlyLogo";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6 md:pt-15">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto text-white px-6">
        <div className="flex items-center md:space-x-20">
          <WaitlyLogo />
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-6">
            <li>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="cursor-pointer">
            <Menu size={28} />
          </button>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="bg-gradient-to-br from-[#CE9FFC] to-[#7367F0] h-[58px] w-[180px] rounded-[5px]">
            Create Now
          </button>
          <button className="h-[58px] w-[180px] border-2 border-[#7367F0] rounded-[5px]">
            Get A Quote
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black z-50 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Logo and Close Button */}
        <div className="flex items-center justify-between px-6 py-6">
          <WaitlyLogo />
          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <X size={32} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col items-start h-full text-base font-semibold mt-10">
          <li className="cursor-pointer hover:text-[#CE9FFC] border-y border-gray-700 w-full py-4 px-6 hover:bg-gray-800 duration-500">
            Home
          </li>
          <li className="cursor-pointer hover:text-[#CE9FFC] border-y border-gray-700 w-full py-4 px-6 hover:bg-gray-800 duration-500">
            About Us
          </li>
          <li className="cursor-pointer hover:text-[#CE9FFC] border-y border-gray-700 w-full py-4 px-6 hover:bg-gray-800 duration-500">
            Pricing
          </li>
          <li className="cursor-pointer hover:text-[#CE9FFC] border-y border-gray-700 w-full py-4 px-6 hover:bg-gray-800 duration-500">
            Features
          </li>

          {/* Buttons */}
          <div className="flex mt-10 items-center space-x-6 px-6">
            <button className="bg-gradient-to-br from-[#CE9FFC] to-[#7367F0] h-[58px] w-[150px] md:w-[180px] rounded-[5px]">
              Create Now
            </button>
            <button className="h-[58px] w-[150px] md:w-[180px] border-2 border-[#7367F0] rounded-[5px]">
              Get A Quote
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
