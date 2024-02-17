import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-80 text-black w-full py-3 absolute z-10">
      <div className="container mx-auto flex justify-between items-center pl-5 md:pl-15 lg:pl-20">
        {/* Left side */}
        <div className="flex items-center navbar-left">
          <Link to="/" className="font-bold text-xl md:text-xl lg:text-2xl">Ages Rock and Associates Corp</Link>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center text-base navbar-right">
          <Link to="/" className="mr-6">Home</Link>
          <Link to="/explore" className="mr-6">Explore</Link>
          <Link to="/about" className="mr-6">About</Link>
          <Link to="/contact">Contact</Link>
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
            <Link to="/" className="block py-2">Home</Link>
            <Link to="/explore" className="block py-2">Explore</Link>
            <Link to="/about" className="block py-2">About</Link>
            <Link to="/contact" className="block py-2">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
