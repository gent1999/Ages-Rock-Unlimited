import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 overflow-hidden">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ages Rock and Associate Corp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
