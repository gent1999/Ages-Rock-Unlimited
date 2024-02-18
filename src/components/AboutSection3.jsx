import React from 'react';

const AboutSection3 = () => {
    return (
        <div className="container mx-auto py-12 px-4">

            <div className="flex flex-col md:flex-row items-center">
                {/* Paragraph 5 */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold mb-5">Proud Memberships and Affiliations</h2>
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
                <h2 className="text-3xl font-bold mb-5">Affiliate Membership with ABA</h2>
                <p className="text-2xl leading-relaxed">
                    Additional information: Ages Rock and Associates Corp is an affiliate member of the ABA (American Bar Association).
                </p>
            </div>
        </div>
    );
};

export default AboutSection3;
