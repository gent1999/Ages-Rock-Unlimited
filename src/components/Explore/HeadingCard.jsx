import React from 'react';

const HeadingCard = ({ title }) => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <div className="max-w-md w-full overflow-hidden shadow-lg mx-1 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                        <div className="text-center py-4">
                            <div className="font-bold text-2xl mb-2">{title}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadingCard;
