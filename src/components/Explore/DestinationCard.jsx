import React from 'react';

const DestinationCard = ({ imageUrl, title, description }) => {
    return (
        <div className="max-w-md  overflow-hidden shadow-lg mx-1 mb-8">
            <img src={imageUrl} alt={title} className="w-full h-96 object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

export default DestinationCard;
