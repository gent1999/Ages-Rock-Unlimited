import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <>
            {/* Company Overview */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        <div className="w-full md:w-1/2">
                            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">Our Story</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Company Overview</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Ages Rock and Associates Corp is a multifaceted consumer services company located in Jamaica, Queens Borough of NYC. Our mission is to engage in any lawful business activities and services while maintaining a strong focus on customer satisfaction.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                src="/assets/images/salvation.jpg"
                                alt="Ages Rock and Associates"
                                className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert Team */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">Our People</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
                        <p className="text-gray-600 text-base leading-relaxed">
                            With a customer-centric approach, Ages Rock and Associates Corp is equipped with high and medium-profile groups of professionals known for their integrity in various fields of business services and tourism. We pride ourselves on delivering best-in-class services by leveraging the expertise of our team, both directly and through affiliate partnerships.
                        </p>
                    </div>
                </div>
            </section>

            {/* Resourceful Services */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
                        <div className="w-full md:w-1/2">
                            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Resourceful Services</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Our services include assisting clients in locating the perfect resources needed through community contacts, membership in reputable organizations, and affiliations. In tourism, we specialize in adventure and recreation, travel trade, events and conferences, souvenirs and handicrafts, transportation, and international tourism.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                src="/assets/images/jamaica_queens.jpg"
                                alt="Jamaica Queens community"
                                className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Diverse Business */}
            <section className="bg-gray-50 py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">Beyond Tourism</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Diverse Business Offerings</h2>
                        <p className="text-gray-600 text-base leading-relaxed">
                            In addition to our tourism endeavors, we offer a range of business services, including advocacy, civic engagement, and paralegal assistance. Our advocacy and civic engagement efforts have contributed to professional and ethical development in the Queens community and government.
                        </p>
                    </div>
                </div>
            </section>

            {/* Memberships */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        <div className="w-full md:w-1/2">
                            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-3">Our Network</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Proud Memberships &amp; Affiliations</h2>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Ages Rock and Associates Corp is proud to be a member of several esteemed organizations, including the American World Trade Chamber of Commerce, Queens Chamber of Commerce, Manhattan Chamber of Commerce, Queens Power, and the White House Office of Intergovernmental Affairs Stakeholder, among others.
                            </p>
                            <p className="text-gray-600 text-base leading-relaxed mt-4">
                                We are actively involved in advocacy groups such as the American Civil Liberties Union, New York Civil Liberties Union, Immigrants Justice Corps, and the Conference of Catholic Bishops of the USA, to name a few.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                src="/assets/images/nyc_image.jpg"
                                alt="New York City"
                                className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ABA + CTA */}
            <section className="bg-gray-900 text-white py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-3">Additional Info</p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Affiliate Member of the ABA</h2>
                    <p className="text-white/70 text-base leading-relaxed mb-8">
                        Ages Rock and Associates Corp is an affiliate member of the American Bar Association (ABA).
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 text-sm tracking-wide"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
};

export default AboutSection;
