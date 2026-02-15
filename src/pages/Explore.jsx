import React from 'react';
import Navbar from '../components/Navbar';
import MostPopular from '../components/Explore/MostPopular';
import CommonAttractions from '../components/Explore/CommonAttractions';
import Footer from '../components/Footer';

const Explore = () => {
    return (
        <div className="relative inset-0 z-0 min-h-screen w-screen overflow-x-hidden">
            <Navbar />

            {/* Hero Banner */}
            <div className="h-[50vh] relative flex items-center justify-center">
                <img
                    src="/assets/images/NYC6.jpg"
                    alt="New York City skyline"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                <div className="relative z-10 text-center px-6">
                    <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-3 font-light">Discover New York</p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Explore The City
                    </h1>
                </div>
            </div>

            <MostPopular />
            <CommonAttractions />
            <Footer />
        </div>
    );
};

export default Explore;
