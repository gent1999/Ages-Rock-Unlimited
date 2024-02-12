// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../styles/Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-80 text-black w-full py-3 absolute z-10">
      <div className="container mx-auto flex justify-between items-center mr-10">
        {/* Left side */}
        <div className="flex items-center navbar-left">
          <a href="#" className="navbar-logo font-bold">Ages Rock and Associates Corp</a>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center text-base navbar-right">
          <a href="#" className="mr-7">Home</a>
          <a href="#" className="mr-7">Explore</a>
          <a href="#" className="mr-7">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Hamburger menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-12 h-8 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 12h18M3 6h18M3 18h18"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Responsive menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-2 rounded-md text-center">
            <a href="#" className="block py-2">Home</a>
            <a href="#" className="block py-2">Explore</a>
            <a href="#" className="block py-2">About</a>
            <a href="#" className="block py-2">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
