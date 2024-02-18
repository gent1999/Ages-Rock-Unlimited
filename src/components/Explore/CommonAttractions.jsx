import React from 'react';
import DestinationCard from './DestinationCard';
import HeadingCard from './HeadingCard';
import HorizontalLine from '../HorizontalLine';

const CommonAttractions = () => {
    return (
        <div className="container mx-auto py-12">
            <HeadingCard title="🌟 Common Attractions 🌟" />
            <div className="flex flex-wrap justify-center gap-8">
                {/* Row 1 */}
                <DestinationCard
                    imageUrl="/assets/images/central_park.jpg"
                    title="Central Park"
                    description="Experience the tranquility and beauty of Central Park, a green oasis in the heart of New York City."
                />
                <DestinationCard
                    imageUrl="/assets/images/times_square.jpg"
                    title="Times Square"
                    description="Immerse yourself in the vibrant energy of Times Square, the bustling entertainment hub of NYC."
                />
                <DestinationCard
                    imageUrl="/assets/images/brooklyn_bridge.jpg"
                    title="Brooklyn Bridge"
                    description="Walk across the iconic Brooklyn Bridge and enjoy stunning views of the Manhattan skyline and the East River."
                />
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {/* Row 2 */}
                <DestinationCard
                    imageUrl="/assets/images/central_park_zoo.jpg"
                    title="Central Park Zoo"
                    description="Visit the Central Park Zoo and explore a variety of wildlife in the heart of Manhattan's iconic Central Park."
                />
                <DestinationCard
                    imageUrl="/assets/images/metropolitan_museum.jpg"
                    title="Metropolitan Museum"
                    description="Discover art, culture, and history at the Metropolitan Museum, one of the largest and most prestigious art museums in the world."
                />
                <DestinationCard
                    imageUrl="/assets/images/battery_park.jpg"
                    title="Battery Park"
                    description="Stroll through Battery Park and enjoy breathtaking views of the Statue of Liberty and Ellis Island, while surrounded by historic landmarks."
                />
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {/* Row 3 */}
                <DestinationCard
                    imageUrl="/assets/images/union_square.jpg"
                    title="Union Square"
                    description="Explore the vibrant Union Square, known for its bustling farmer's market, diverse dining options, and cultural events."
                />
                <DestinationCard
                    imageUrl="/assets/images/carnegie_hall.jpg"
                    title="Carnegie Hall"
                    description="Experience world-class music performances at Carnegie Hall, one of the most prestigious concert venues in the world."
                />
                <DestinationCard
                    imageUrl="/assets/images/theater_district.jpg"
                    title="Theater District"
                    description="Immerse yourself in Broadway magic at the Theater District, home to iconic theaters and unforgettable performances."
                />
            </div>
            <HorizontalLine />
        </div>
    );
};

export default CommonAttractions;
