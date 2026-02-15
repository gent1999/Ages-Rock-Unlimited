import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/About/AboutSection';

const About = () => {
    return (
        <div className="relative inset-0 z-0 min-h-screen w-screen overflow-x-hidden">
            <Navbar />

            {/* Hero Banner */}
            <div className="h-[50vh] relative flex items-center justify-center">
                <img
                    src="/assets/images/NYC4.jpg"
                    alt="New York City"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                <div className="relative z-10 text-center px-6">
                    <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-3 font-light">Who We Are</p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        About Ages Rock
                    </h1>
                </div>
            </div>

            <AboutSection />
            <Footer />
        </div>
    );
};

export default About;
