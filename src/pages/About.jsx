import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHeader from '../components/AboutHeader';
import AboutSection from '../components/AboutSection';

const About = () => {
    // URL of the background image
    const backgroundImageUrl = '/assets/images/NYC4.jpg';

    return (
        <div className="relative inset-0 z-0 h-screen w-screen overflow-x-hidden">
            <Navbar />
            <div className="h-3/5 relative inset-x-0 top-0 flex items-center justify-center">
                {/* Render the background image */}
                <img
                    src={backgroundImageUrl}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay a semi-transparent black layer */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <AboutHeader />
            </div>
            <AboutSection />
            <Footer />
        </div>
    )
}

export default About;
