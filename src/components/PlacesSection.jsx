import React from 'react';

const PlacesSection = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Explore Our Destinations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Destination Box 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Statue of Liberty</h3>
              <p className="text-gray-600">Discover the vibrant energy of the city that never sleeps.</p>
            </div>

            {/* Destination Box 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Empire State Building</h3>
              <p className="text-gray-600">Experience the romance and charm of the City of Light.</p>
            </div>

            {/* Destination Box 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">World Trade Center</h3>
              <p className="text-gray-600">Immerse yourself in the rich culture and modern marvels of Tokyo.</p>
            </div>

            {/* Destination Box 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">The Edge</h3>
              <p className="text-gray-600">Explore the stunning landscapes and iconic landmarks of Sydney.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacesSection;
