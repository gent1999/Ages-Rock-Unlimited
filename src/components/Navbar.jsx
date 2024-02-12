// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-80 text-black w-full py-4 absolute z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center">
          <a href="#" className="text-3xl font-bold">Ages Rock and Associates Corp</a>
        </div>

        {/* Right side */}
        <div className="flex items-center text-xl">
          <a href="#" className="mr-10">Home</a>
          <a href="#" className="mr-10">Explore</a>
          <a href="#" className="mr-10">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
