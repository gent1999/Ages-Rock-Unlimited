import React from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    image: '/assets/images/statue_of_liberty.jpg',
    title: 'Statue of Liberty',
    description: 'Discover the colossal neoclassical sculpture on Liberty Island in New York Harbor.',
  },
  {
    image: '/assets/images/empire_state_building.jpg',
    title: 'Empire State Building',
    description: 'Experience the 102-story Art Deco skyscraper in Midtown Manhattan.',
  },
  {
    image: '/assets/images/one_world_trade_center.jpg',
    title: 'One World Trade Center',
    description: 'Immerse yourself in the main building of the rebuilt World Trade Center complex.',
  },
  {
    image: '/assets/images/the_edge.jpg',
    title: 'The Edge',
    description: 'Explore the highest outdoor sky deck in the Western Hemisphere with 360-degree views.',
  },
];

const PlacesSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">Popular Destinations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Our Destinations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {destinations.map((dest) => (
            <div key={dest.title} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-52 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{dest.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/explore"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-sm tracking-wide"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlacesSection;
