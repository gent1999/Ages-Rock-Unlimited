import React from 'react';

const AboutSection = () => {
    return (
        <div className="container mx-auto py-12 px-4">

            <div className="flex flex-col md:flex-row items-center">
                {/* Paragraph 1 */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold mb-5">Company Overview</h2>
                    <p className="text-2xl leading-relaxed">
                        Ages Rock and Associates Corp is a multifaceted consumer services company located in Jamaica, Queens Borough of NYC. Our mission is to engage in any lawful business activities and services while maintaining a strong focus on customer satisfaction.
                    </p>
                </div>
                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img src="/assets/images/jamaica_queens.jpg" alt="Company Image" className="max-w-full max-h-80 rounded-lg shadow-md" />
                </div>
            </div>

            {/* Paragraph 2 */}
            <div className="container mx-auto py-20">
                <h2 className="text-3xl font-bold mb-5">Our Expert Team</h2>
                <p className="text-2xl leading-relaxed">
                    With a customer-centric approach, Ages Rock and Associates Corp is equipped with high and medium-profile groups of professionals known for their integrity in various fields of business services and tourism. We pride ourselves on delivering best-in-class services by leveraging the expertise of our team, both directly and through affiliate partnerships.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
