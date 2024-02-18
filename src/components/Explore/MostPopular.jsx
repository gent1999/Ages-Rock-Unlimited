import React from 'react';
import DestinationCard from './DestinationCard';
import HeadingCard from './HeadingCard';
import HorizontalLine from '../HorizontalLine';

const MostPopular = () => {
    return (
        <div className="container mx-auto py-12">
            <HeadingCard title="🔥 Most Popular Destinations 🔥" />
            <div className="flex flex-wrap justify-center gap-8">
                <DestinationCard
                    imageUrl="/assets/images/empire_state_building2.jpg"
                    title="Empire State Building"
                    description="Breathtaking views of New York City from the top of the Empire State Building, an architectural marvel and one of the most famous landmarks in the world."
                />
                <DestinationCard
                    imageUrl="/assets/images/statue_of_liberty2.jpg"
                    title="Statue of Liberty"
                    description="Explore the iconic Statue of Liberty, a symbol of freedom and democracy, standing tall against the New York skyline."
                />
                <DestinationCard
                    imageUrl="/assets/images/one_world_trade_center2.jpg"
                    title="One World Trade Center"
                    description="Ascend to new heights at One World Trade Center, an emblem of resilience and hope, offering panoramic vistas of Manhattan and beyond from its observation deck."
                />
            </div>

            <HorizontalLine />
            
        </div>
    );
};

export default MostPopular;
