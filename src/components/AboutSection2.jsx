import React from 'react';

const AboutSection2 = () => {
    return (
        <div className="container mx-auto py-12 px-4">

            {/* Paragraph 3 */}
            <div className="flex flex-col md:flex-row items-center">
                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img src="/assets/images/nyc_street.jpg" alt="Tourism Image" className="max-w-full max-h-80 rounded-lg shadow-md" />
                </div>
                {/* Paragraph 3 */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold mb-5">Resourceful Services</h2>
                    <p className="text-2xl leading-relaxed">
                        Our services include assisting clients in locating the perfect resources needed through community contacts, membership in reputable organizations, and affiliations. In tourism, we specialize in adventure and recreation, travel trade, events and conferences, souvenirs and handicrafts, transportation, and international tourism.
                    </p>
                </div>
            </div>

            {/* Paragraph 4 */}
            <div className="container mx-auto py-20">
                <h2 className="text-3xl font-bold mb-5">Diverse Business Offerings</h2>
                <p className="text-2xl leading-relaxed">
                In addition to our tourism endeavors, we offer a range of business services, including advocacy, civic engagement, and paralegal assistance. Our advocacy and civic engagement efforts have contributed to professional and ethical development in the Queens community and government.
                </p>
            </div>
        </div>
    );
};

export default AboutSection2;
