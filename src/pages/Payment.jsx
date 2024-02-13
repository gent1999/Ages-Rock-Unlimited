// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Site Shutdown</h1>
                <h2 className="text-lg font-semibold mb-2">Missing Payments:</h2>
                <p className="text-sm">$150 for Web Service</p>
                <p className="text-sm">$30 for Domain</p>
            </div>
        </div>
    );
};

export default Header;
