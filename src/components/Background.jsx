// src/components/Background.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const Background = () => {
    // Array of image URLs for the slideshow
    const images = [
        '/assets/images/NYC1.jpg',
        '/assets/images/NYC3.jpg',
        '/assets/images/NYC2.jpg'
    ];

    // State to track the index of the current image
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to update the current image index
    const updateImageIndex = (index) => {
        setCurrentImageIndex(index);
    };

    // Use effect to update the image index at regular intervals
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(intervalId); // Cleanup function to clear interval
    }, [images.length]);

    return (
        <div className="absolute inset-0 z-0 h-screen w-screen overflow-hidden">
            <div className="h-3/4 absolute inset-x-0 top-0 flex items-center justify-center">
                {images.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt="Background"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
                <Header />
                <div className="absolute bottom-4 flex justify-center w-full">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${index === currentImageIndex ? 'bg-white' : 'bg-gray-300'}`}
                            onClick={() => updateImageIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Background;
