import React from 'react';
import Navbar from '../components/Navbar';
import MostPopular from '../components/Explore/MostPopular';
import ExploreHeader from '../components/Explore/ExploreHeader';
import Footer from '../components/Footer';
import CommonAttractions from '../components/Explore/CommonAttractions';

const Explore = () => {
    // URL of the background image
    const backgroundImageUrl1 = '/assets/images/NYC6.jpg';

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
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <ExploreHeader />
            </div>
            <MostPopular />
            <CommonAttractions />
            <Footer />
        </div>
    )
}

export default Explore;