import React from 'react';
import Image from 'next/image';

const CareerCard = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="mx-auto max-w-4xl overflow-hidden bg-[#2563EB] text-white rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row items-center p-8 gap-8">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <div className="rounded-lg overflow-hidden relative w-full h-64">
                            <Image
                                src="/images/student.jpeg"
                                alt="Students collaborating"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
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
    );
};

export default CareerCard;
