// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-80 text-black w-full py-4 absolute z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center">
          <a href="#" className="text-3xl font-bold">Ages Rock and Associates Corp</a>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center text-xl">
          <a href="#" className="mr-10">Home</a>
          <a href="#" className="mr-10">Explore</a>
          <a href="#" className="mr-10">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Hamburger menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Responsive menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center w-full">
            <a href="#" className="my-2">Home</a>
            <a href="#" className="my-2">Explore</a>
            <a href="#" className="my-2">About</a>
            <a href="#" className="my-2">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
