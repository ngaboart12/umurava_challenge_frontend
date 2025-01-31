import React from 'react';
import Image from 'next/image';

const CareerCard = () => {
    return (
        <div className="h-screen bg-gray-50 p-4 flex items-center" style={{ height: '100%' }}>
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto overflow-hidden bg-[#2563EB] text-white rounded-xl shadow-lg">
                    <div className="flex flex-col md:flex-row items-center p-8 gap-8">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2">
                            <div className="md:w-3/4 mt-6 md:mt-0 flex justify-center relative w-full h-80">
                                <Image
                                    src="/images/ready.JPG"
                                    alt="Students collaborating"
                                    fill
                                    className="rounded-lg shadow-lg object-cover"
                                />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 space-y-4">
                            <h2 className="text-3xl font-bold leading-tight">
                                Ready to Unlock Your Career Potential Today!
                            </h2>

                            <p className="text-gray-100 leading-relaxed">
                                Join a challenge or a hackathon to gain valuable work experience, build an impressive portfolio, and increase your chances to land job opportunities and accelerate your career growth.
                            </p>

                            <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                View Challenge
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerCard;