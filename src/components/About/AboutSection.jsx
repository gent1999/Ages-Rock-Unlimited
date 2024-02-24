import React from 'react';
import HorizontalLine from '../HorizontalLine';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div className="container mx-auto py-8 px-4"> {/* Reduced padding on small screens */}
            <div className="flex flex-col md:flex-row items-center">
                {/* Paragraph 1 */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8"> {/* Set width to full on small screens */}
                    <h2 className="text-2xl font-bold mb-3">Company Overview</h2> {/* Adjusted font size for small screens */}
                    <p className="text-xl leading-relaxed">
                        Ages Rock and Associates Corp is a multifaceted consumer services company located in Jamaica, Queens Borough of NYC. Our mission is to engage in any lawful business activities and services while maintaining a strong focus on customer satisfaction.
                    </p>
                </div>
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"> {/* Set width to full on small screens */}
                    <img src="/assets/images/salvation.jpg" alt="Company Image" className="max-w-full h-auto md:max-h-80 rounded-lg shadow-md" /> {/* Made the image responsive */}
                </div>
            </div>

            {/* Paragraph 2 */}
            <div className="container mx-auto py-8">
                <h2 className="text-2xl font-bold mb-3">Our Expert Team</h2> {/* Adjusted font size for small screens */}
                <p className="text-xl leading-relaxed">
                    With a customer-centric approach, Ages Rock and Associates Corp is equipped with high and medium-profile groups of professionals known for their integrity in various fields of business services and tourism. We pride ourselves on delivering best-in-class services by leveraging the expertise of our team, both directly and through affiliate partnerships.
                </p>
            </div>

            <HorizontalLine />

            <div className="flex flex-col md:flex-row items-center">
                {/* Paragraph 3 */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8"> {/* Set width to full on small screens */}
                    <h2 className="text-2xl font-bold mb-5">Resourceful Services</h2>
                    <p className="text-xl leading-relaxed">
                        Our services include assisting clients in locating the perfect resources needed through community contacts, membership in reputable organizations, and affiliations. In tourism, we specialize in adventure and recreation, travel trade, events and conferences, souvenirs and handicrafts, transportation, and international tourism.
                    </p>
                </div>
                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img src="/assets/images/jamaica_queens.jpg" alt="Tourism Image" className="max-w-full max-h-80 rounded-lg shadow-md" />
                </div>
            </div>

            {/* Paragraph 4 */}
            <div className="container mx-auto py-8">
                <h2 className="text-2xl font-bold mb-3">Diverse Business Offerings</h2> {/* Adjusted font size for small screens */}
                <p className="text-xl leading-relaxed">
                    In addition to our tourism endeavors, we offer a range of business services, including advocacy, civic engagement, and paralegal assistance. Our advocacy and civic engagement efforts have contributed to professional and ethical development in the Queens community and government.
                </p>
            </div>

            <HorizontalLine />

            <div className="flex flex-col md:flex-row items-center">
                {/* Paragraph 5 */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold mb-5">Proud Memberships and Affiliations</h2>
                    <p className="text-xl leading-relaxed">
                        Ages Rock and Associates Corp is proud to be a member of several esteemed organizations, including the American World Trade Chamber of Commerce, Queens Chamber of Commerce, Manhattan Chamber of Commerce, Queens Power, and the White House Office of Intergovernmental Affairs Stakeholder, among others. We are actively involved in advocacy groups such as the American Civil Liberties Union, New York Civil Liberties Union, Immigrants Justice Corps, and the Conference of Catholic Bishops of the USA, to name a few.
                    </p>
                </div>
                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img src="/assets/images/nyc_image.jpg" alt="Company Image" className="max-w-full max-h-80 rounded-lg shadow-md" />
                </div>
            </div>

            {/* Paragraph 6 */}
            <div className="container mx-auto py-20">
                <h2 className="text-2xl font-bold mb-5">Affiliate Membership with ABA</h2>
                <p className="text-xl leading-relaxed">
                    Additional information: Ages Rock and Associates Corp is an affiliate member of the ABA (American Bar Association).
                </p>
            </div>

            <HorizontalLine />

            <div>
                <h2 className="text-xl font-semibold text-center py-20 pt-0"> {/* Center the text */}
                    If there's anything else you’d like to know, feel free to <Link to="/contact" className="text-blue-500 hover:underline">contact us</Link>.
                </h2>
            </div>

        </div>
    );
};

export default AboutSection;
