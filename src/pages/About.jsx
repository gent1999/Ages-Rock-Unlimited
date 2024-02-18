import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHeader from '../components/AboutHeader';
import AboutSection from '../components/AboutSection';
import AboutSection2 from '../components/AboutSection2';
import AboutSection3 from '../components/AboutSection3';

const About = () => {
    // URL of the background image
    const backgroundImageUrl1 = '/assets/images/NYC4.jpg';
    const backgroundImageUrl2 = '/assets/images/NYC5.jpg';
    const backgroundImageUrl3 = '/assets/images/NYC6.jpg';

    return (
        <div className="relative inset-0 z-0 h-screen w-screen overflow-x-hidden">

            <Navbar />
            
            <div className="h-3/5 relative inset-x-0 top-0 flex items-center justify-center">
                {/* Render the background image */}
                <img
                    src={backgroundImageUrl1}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay a semi-transparent black layer */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <AboutHeader />
            </div>
            <AboutSection />

            <div className="relative inset-0 z-0 h-screen w-screen">
                <div className="h-1/5 relative inset-x-0 top-0 flex items-center justify-center">
                    {/* Render the background image */}
                    <img
                        src={backgroundImageUrl2}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay a semi-transparent black layer */}
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>
                <AboutSection2 />
            </div>

            <div className="relative inset-0 z-0 h-screen w-screen">
                <div className="h-1/5 relative inset-x-0 top-0 flex items-center justify-center">
                    {/* Render the background image */}
                    <img
                        src={backgroundImageUrl3}
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay a semi-transparent black layer */}
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>
                <AboutSection3 />
            </div>

            <Footer />
        </div>
    )
}

export default About;
