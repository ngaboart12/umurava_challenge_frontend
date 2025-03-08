import React from 'react';
import Image from 'next/image';

const CareerCard = () => {
    return (
        <div className="h-screen bg-gray-50 py-20 flex items-center" style={{ height: '100%' }}>
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="w-[90%] mx-auto overflow-hidden bg-[#2563EB] text-white rounded-xl shadow-lg relative">
                    <div className="flex flex-col md:flex-row items-center p-8 gap-8">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2">
                            <div className="md:w-3/4 mt-6 md:mt-0 flex justify-center relative w-full h-[50vh]">
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

                    <div className="absolute top-0 right-0 flex">
                        <svg width="259" height="169" viewBox="0 0 259 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.4058 -222.619C26.7419 -189.593 9.31402 -150.085 2.89943 -108.126C-3.51517 -66.1671 1.31303 -23.2574 16.8916 16.2271C32.4703 55.7115 58.2419 90.358 91.5785 116.633C124.915 142.908 164.624 159.872 206.655 165.795C248.686 171.718 291.537 166.387 330.836 150.347C370.135 134.307 404.477 108.132 430.36 74.4898C456.243 40.8478 472.741 0.943131 478.171 -41.1547C483.601 -83.2525 477.769 -126.037 461.27 -165.146L393.26 -136.454C404.685 -109.374 408.723 -79.7477 404.963 -50.5975C401.203 -21.4472 389.78 6.18434 371.857 29.4794C353.935 52.7745 330.155 70.8996 302.942 82.0063C275.73 93.1131 246.059 96.8041 216.955 92.7029C187.85 88.6018 160.355 76.8553 137.271 58.6612C114.187 40.4672 96.342 16.4766 85.5548 -10.864C74.7675 -38.2046 71.4243 -67.9171 75.866 -96.9712C80.3077 -126.025 92.3755 -153.382 110.839 -176.251L53.4058 -222.619Z" fill="white" fillOpacity="0.14" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerCard;