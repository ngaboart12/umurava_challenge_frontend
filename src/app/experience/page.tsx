import React from "react";

const WorkExperience = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20 py-16">
            <div className="max-w-6xl w-full text-center">
                {/* Header */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Experience a New Way of Building Work Experience
                </h1>
                <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
                    Join Skills Challenges Program to accelerate your career growth and become part of
                    Africa&apos;s largest workforce of digital professionals.
                </p>

                {/* Cards Section */}
                <div className="flex flex-col items-center gap-10 mt-12" >
                    {/* Longer Card */}
                    <div
                        className="bg-blue-500 text-white rounded-xl shadow-md p-8 w-full"
                        style={{
                            width: "2000px",
                            height: "307px",
                            maxWidth: "100%",
                        }}
                    >
                        <div className="text-4xl mb-4">💼</div>
                        <h2 className="text-xl font-semibold mb-2">
                            Build a Strong Portfolio and Hands-On Experience
                        </h2>
                        <p className="text-sm">
                            Tackle real-world projects through challenges and hackathons that mirror real-world challenges faced by
                            businesses and organizations. Therefore, showcase your skills and accomplishments to potential
                            employers and clients through a portfolio of completed projects.
                        </p>
                    </div>

                    {/* Smaller Cards Underneath */}
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        {/* Smaller Card 1 */}
                        <div
                            className="bg-blue-500 text-white rounded-xl shadow-md p-8"
                            style={{
                                width: "555px",
                                height: "331px",
                                maxWidth: "100%",
                            }}
                        >
                            <div className="text-4xl mb-4">📈</div>
                            <h2 className="text-xl font-semibold mb-2">
                                Enhance Your Employment Path
                            </h2>
                            <p className="text-sm">
                                Develop in-demand skills and build a strong portfolio to increase your chances of landing your
                                dream job or contract.
                            </p>
                        </div>

                        {/* Smaller Card 2 */}
                        <div
                            className="bg-blue-500 text-white rounded-xl shadow-md p-8"
                            style={{
                                width: "555px",
                                height: "331px",
                                maxWidth: "100%",
                            }}
                        >
                            <div className="text-4xl mb-4">🏆</div>
                            <h2 className="text-xl font-semibold mb-2">
                                Earn Recognition and Prizes
                            </h2>
                            <p className="text-sm">
                                Earn both monetary and knowledge-based prizes by participating in various contests and competitions by
                                working on real-world projects and hackathons from our partner companies &amp; organizations.
                            </p>
                        </div>
                    </div>

                    {/* Statistics Section */}
                    <div
                        className="bg-blue-500 text-white rounded-xl shadow-md p-8 w-full mt-8 overflow-hidden"
                        style={{
                            width: "1800px",
                            height: "259px",
                            borderRadius: "20px",
                        }}
                    >
                        <div className="flex flex-wrap md:flex-nowrap justify-around items-center h-full">
                            <div className="text-center w-1/2 md:w-auto mb-4 md:mb-0">
                                <div className="text-4xl font-bold">1</div>
                                <div className="text-sm mt-2">Year</div>
                            </div>
                            <div className="text-center w-1/2 md:w-auto mb-4 md:mb-0">
                                <div className="text-4xl font-bold">500+</div>
                                <div className="text-sm mt-2">Challenges Completed</div>
                            </div>
                            <div className="text-center w-1/2 md:w-auto mb-4 md:mb-0">
                                <div className="text-4xl font-bold">10K+</div>
                                <div className="text-sm mt-2">Users</div>
                            </div>
                            <div className="text-center w-1/2 md:w-auto">
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