import React from 'react';

const PlacesSection = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14">Explore Our Destinations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Destination Box 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/assets/images/statue_of_liberty.jpg" alt="Statue of Liberty" className="mb-4 rounded-lg object-cover w-full h-48" />
              <h3 className="text-xl font-bold mb-4">Statue of Liberty</h3>
              <p className="text-gray-600">Discover the colossal neoclassical sculpture on Liberty Island in New York Harbor.</p>
            </div>

            {/* Destination Box 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/assets/images/empire_state_building.jpg" alt="Empire State Building" className="mb-4 rounded-lg object-cover w-full h-48" />
              <h3 className="text-xl font-bold mb-4">Empire State Building</h3>
              <p className="text-gray-600">Experience the 102-story Art Deco skyscraper in Midtown Manhattan.</p>
            </div>

            {/* Destination Box 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/assets/images/one_world_trade_center.jpg" alt="One World Trade Center" className="mb-4 rounded-lg object-cover w-full h-48" />
              <h3 className="text-xl font-bold mb-4">One World Trade Center</h3>
              <p className="text-gray-600">Immerse yourself in the main building of the rebuilt World Trade Center complex in Lower Manhattan.</p>
            </div>

            {/* Destination Box 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/assets/images/the_edge.jpg" alt="The Edge" className="mb-4 rounded-lg object-cover w-full h-48" />
              <h3 className="text-xl font-bold mb-4">The Edge</h3>
              <p className="text-gray-600">Explore the highest outdoor sky deck in the Western Hemisphere with 360-degree views of New York City.</p>
            </div>
          </div>

          {/* View All Button*/}
          <div className="mt-14">
            <button className="bg-blue-500 transition duration-300 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
              View All
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacesSection;
