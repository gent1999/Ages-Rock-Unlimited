import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PlacesSection from '../components/PlacesSection';
import Footer from '../components/Footer';
import expoGraphic from '../assets/expo_graphic.jpg';

const Home = () => {
    const images = [
        '/assets/images/NYC1.jpg',
        '/assets/images/NYC3.jpg',
        '/assets/images/NYC2.jpg'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="relative inset-0 z-0 min-h-screen w-screen overflow-x-hidden">
            <Navbar />

            {/* Hero Section - 75vh so the next section peeks into view */}
            <div className="h-[75vh] relative inset-x-0 top-0 flex items-center justify-center">
                {images.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt="New York City"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <p className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-light">Ages Rock and Associates Corp</p>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Start Your New Adventure Today
                    </h1>
                    <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
                        Your trusted partner for unforgettable New York City experiences. Let us guide you through the city that never sleeps.
                    </p>
                    <Link
                        to="/explore"
                        className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 text-sm md:text-base tracking-wide"
                    >
                        Explore Destinations
                    </Link>
                </div>

                {/* Slideshow Indicators */}
                <div className="absolute bottom-8 flex justify-center w-full z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 rounded-full mx-1.5 cursor-pointer transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50 w-2'}`}
                            onClick={() => setCurrentImageIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Expo Spotlight Section */}
            <section className="bg-gray-900 text-white py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl mx-auto">
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src={expoGraphic}
                                alt="Adedoyin Adeeko - New York Build 2026 Expo Ambassador"
                                className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <span className="inline-block bg-red-600 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                                Featured Event
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                New York Build Expo 2026
                            </h2>
                            <p className="text-white/70 text-lg mb-6 leading-relaxed">
                                We are proud to announce that our very own <strong className="text-white">Adedoyin Adeeko</strong>, Consumer Services &amp; Project Manager at Ages Rock and Associates Corp, has been selected as a <strong className="text-white">Mental Health in Construction Ambassador</strong> for the New York Build 2026 Expo.
                            </p>
                            <div className="bg-white/10 rounded-xl p-5 mb-6 backdrop-blur-sm">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
                                    <div>
                                        <p className="text-white/50 uppercase tracking-wider text-xs mb-1">Date</p>
                                        <p className="font-semibold">March 18-19, 2026</p>
                                    </div>
                                    <div>
                                        <p className="text-white/50 uppercase tracking-wider text-xs mb-1">Venue</p>
                                        <p className="font-semibold">Javits Center, NYC</p>
                                    </div>
                                    <div>
                                        <p className="text-white/50 uppercase tracking-wider text-xs mb-1">Tickets</p>
                                        <p className="font-semibold">Free Registration</p>
                                    </div>
                                </div>
                            </div>
                            <a
                                href="https://www.newyorkbuildexpo.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300 text-sm tracking-wide"
                            >
                                Register for Free Tickets
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Destinations Section */}
            <PlacesSection />

            <Footer />
        </div>
    );
};

export default Home;
