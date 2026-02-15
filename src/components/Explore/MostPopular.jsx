import React from 'react';
import DestinationCard from './DestinationCard';

const popularDestinations = [
    {
        imageUrl: '/assets/images/empire_state_building2.jpg',
        title: 'Empire State Building',
        description: 'Breathtaking views of New York City from the top of the Empire State Building, an architectural marvel and one of the most famous landmarks in the world.',
    },
    {
        imageUrl: '/assets/images/liberty_cruise.jpg',
        title: 'Liberty Cruise',
        description: 'Experience the iconic Statue of Liberty up close with a Liberty Cruise, offering breathtaking views of the Statue and the NYC skyline.',
    },
    {
        imageUrl: '/assets/images/one_world_trade_center2.jpg',
        title: 'One World Trade Center',
        description: 'Ascend to new heights at One World Trade Center, an emblem of resilience and hope, offering panoramic vistas of Manhattan and beyond.',
    },
];

const MostPopular = () => {
    return (
        <section className="bg-white py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-red-500 text-sm font-semibold tracking-widest uppercase mb-3">Top Picks</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Most Popular Destinations</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {popularDestinations.map((dest) => (
                        <DestinationCard key={dest.title} {...dest} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MostPopular;
