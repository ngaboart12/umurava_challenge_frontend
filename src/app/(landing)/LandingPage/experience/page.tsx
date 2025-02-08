import React from 'react';
import { Briefcase, TrendingUp, Trophy } from 'lucide-react';

const WorkExperience = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20 py-16">
            <div className="max-w-7xl w-full text-center">
                {/* Header */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Experience a New Way of Building Work Experience
                </h1>
                <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
                    Join Skills Challenges Program to accelerate your career growth and become part of
                    Africa&apos;s largest workforce of digital professionals.
                </p>

                {/* Cards Section */}
                <div className="flex flex-col items-center gap-10 mt-12">
                    {/* Longer Card */}
                    <div className="bg-blue-500 text-white rounded-xl shadow-md p-8 w-full max-w-6xl text-left">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-white px-6 py-4 rounded-lg">
                                <Briefcase size={32} className="text-blue-500" />
                            </div>
                            <h2 className="text-xl font-semibold">
                                Build a Strong Portfolio and Hands-On Experience
                            </h2>
                        </div>
                        <p className="text-sm max-w-3xl">
                            Tackle real-world projects through challenges and hackathons that mirror real-world challenges faced by
                            businesses and organizations. Therefore, showcase your skills and accomplishments to potential
                            employers and clients through a portfolio of completed projects.
                        </p>
                    </div>

                    {/* Smaller Cards */}
                    <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
                        {/* Smaller Card 1 */}
                        <div className="bg-blue-500 text-white rounded-xl shadow-md p-8 text-left">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-white px-6 py-4 rounded-lg">
                                    <TrendingUp size={32} className="text-blue-500" />
                                </div>
                                <h2 className="text-xl font-semibold">
                                    Enhance Your Employment Path
                                </h2>
                            </div>
                            <p className="text-sm">
                                Develop in-demand skills and build a strong portfolio to increase your chances of landing your
                                dream job or contract.
                            </p>
                        </div>

                        {/* Smaller Card 2 */}
                        <div className="bg-blue-500 text-white rounded-xl shadow-md p-8 text-left">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-white px-6 py-4 rounded-lg">
                                    <Trophy size={32} className="text-blue-500" />
                                </div>
                                <h2 className="text-xl font-semibold">
                                    Earn Recognition and Prizes
                                </h2>
                            </div>
                            <p className="text-sm">
                                Earn both monetary and knowledge-based prizes by participating in various contests and competitions by
                                working on real-world projects and hackathons from our partner companies &amp; organizations.
                            </p>
                        </div>
                    </div>

                    {/* Statistics Section - Centered */}
                    <div className="bg-blue-500 text-white rounded-xl shadow-md p-8 w-full max-w-8xl text-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
                            <div>
                                <div className="text-4xl font-bold">1</div>
                                <div className="text-sm mt-2">Year</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold">500+</div>
                                <div className="text-sm mt-2">Challenges Completed</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold">10K+</div>
                                <div className="text-sm mt-2">Users</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold">6+</div>
                                <div className="text-sm mt-2">Countries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
