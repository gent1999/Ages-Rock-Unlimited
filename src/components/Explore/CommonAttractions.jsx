import React from 'react';
import DestinationCard from './DestinationCard';

const attractions = [
    {
        imageUrl: '/assets/images/central_park.jpg',
        title: 'Central Park',
        description: 'Experience the tranquility and beauty of Central Park, a green oasis in the heart of New York City.',
    },
    {
        imageUrl: '/assets/images/times_square.jpg',
        title: 'Times Square',
        description: 'Immerse yourself in the vibrant energy of Times Square, the bustling entertainment hub of NYC.',
    },
    {
        imageUrl: '/assets/images/brooklyn_bridge.jpg',
        title: 'Brooklyn Bridge',
        description: 'Walk across the iconic Brooklyn Bridge and enjoy stunning views of the Manhattan skyline and the East River.',
    },
    {
        imageUrl: '/assets/images/central_park_zoo.jpg',
        title: 'Central Park Zoo',
        description: 'Visit the Central Park Zoo and explore a variety of wildlife in the heart of Manhattan\'s iconic Central Park.',
    },
    {
        imageUrl: '/assets/images/metropolitan_museum.jpg',
        title: 'Metropolitan Museum',
        description: 'Discover art, culture, and history at the Metropolitan Museum, one of the largest and most prestigious art museums in the world.',
    },
    {
        imageUrl: '/assets/images/battery_park.jpg',
        title: 'Battery Park',
        description: 'Stroll through Battery Park and enjoy breathtaking views of the Statue of Liberty and Ellis Island.',
    },
    {
        imageUrl: '/assets/images/union_square.jpg',
        title: 'Union Square',
        description: 'Explore the vibrant Union Square, known for its bustling farmer\'s market, diverse dining options, and cultural events.',
    },
    {
        imageUrl: '/assets/images/carnegie_hall.jpg',
        title: 'Carnegie Hall',
        description: 'Experience world-class music performances at Carnegie Hall, one of the most prestigious concert venues in the world.',
    },
    {
        imageUrl: '/assets/images/theater_district.jpg',
        title: 'Theater District',
        description: 'Immerse yourself in Broadway magic at the Theater District, home to iconic theaters and unforgettable performances.',
    },
];

const CommonAttractions = () => {
    return (
        <section className="bg-gray-50 py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">Worth a Visit</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Common Attractions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {attractions.map((dest) => (
                        <DestinationCard key={dest.title} {...dest} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommonAttractions;
