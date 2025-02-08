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
                    <div className="bg-blue-500 text-white rounded-xl shadow-md p-8 w-full max-w-6xl text-left relative">
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
                        <div className="absolute top-0 right-0 flex">
                            <svg width="211" height="129" viewBox="0 0 211 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M53.4058 -262.633C26.7419 -229.607 9.31402 -190.099 2.89943 -148.14C-3.51517 -106.181 1.31303 -63.2715 16.8916 -23.7871C32.4703 15.6973 58.2419 50.3438 91.5785 76.619C124.915 102.894 164.624 119.858 206.655 125.781C248.686 131.704 291.537 126.373 330.836 110.333C370.135 94.2933 404.477 68.1176 430.36 34.4756C456.243 0.83362 472.741 -39.071 478.171 -81.1689C483.601 -123.267 477.769 -166.052 461.27 -205.16L393.26 -176.468C404.685 -149.388 408.723 -119.762 404.963 -90.6116C401.203 -61.4614 389.78 -33.8298 371.857 -10.5348C353.935 12.7603 330.155 30.8854 302.942 41.9922C275.73 53.0989 246.059 56.7899 216.955 52.6888C187.85 48.5877 160.355 36.8411 137.271 18.6471C114.187 0.453019 96.342 -23.5376 85.5548 -50.8782C74.7675 -78.2188 71.4243 -107.931 75.866 -136.985C80.3077 -166.04 92.3755 -193.396 110.839 -216.265L53.4058 -262.633Z" fill="white" fillOpacity="0.14" />
                            </svg>
                        </div>
                    </div>

                    {/* Smaller Cards */}
                    <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
                        {/* Smaller Card 1 */}
                        <div className="bg-blue-500 text-white rounded-xl shadow-md p-8 text-left relative">
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
                            <div className="absolute top-0 right-0 flex">
                                <svg width="211" height="129" viewBox="0 0 211 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M53.4058 -262.633C26.7419 -229.607 9.31402 -190.099 2.89943 -148.14C-3.51517 -106.181 1.31303 -63.2715 16.8916 -23.7871C32.4703 15.6973 58.2419 50.3438 91.5785 76.619C124.915 102.894 164.624 119.858 206.655 125.781C248.686 131.704 291.537 126.373 330.836 110.333C370.135 94.2933 404.477 68.1176 430.36 34.4756C456.243 0.83362 472.741 -39.071 478.171 -81.1689C483.601 -123.267 477.769 -166.052 461.27 -205.16L393.26 -176.468C404.685 -149.388 408.723 -119.762 404.963 -90.6116C401.203 -61.4614 389.78 -33.8298 371.857 -10.5348C353.935 12.7603 330.155 30.8854 302.942 41.9922C275.73 53.0989 246.059 56.7899 216.955 52.6888C187.85 48.5877 160.355 36.8411 137.271 18.6471C114.187 0.453019 96.342 -23.5376 85.5548 -50.8782C74.7675 -78.2188 71.4243 -107.931 75.866 -136.985C80.3077 -166.04 92.3755 -193.396 110.839 -216.265L53.4058 -262.633Z" fill="white" fillOpacity="0.14" />
                                </svg>
                            </div>
                        </div>

                        {/* Smaller Card 2 */}
                        <div className="bg-blue-500 text-white rounded-xl shadow-md p-8 text-left relative">
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
                            <div className="absolute top-0 right-0 flex">
                                <svg width="211" height="129" viewBox="0 0 211 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M53.4058 -262.633C26.7419 -229.607 9.31402 -190.099 2.89943 -148.14C-3.51517 -106.181 1.31303 -63.2715 16.8916 -23.7871C32.4703 15.6973 58.2419 50.3438 91.5785 76.619C124.915 102.894 164.624 119.858 206.655 125.781C248.686 131.704 291.537 126.373 330.836 110.333C370.135 94.2933 404.477 68.1176 430.36 34.4756C456.243 0.83362 472.741 -39.071 478.171 -81.1689C483.601 -123.267 477.769 -166.052 461.27 -205.16L393.26 -176.468C404.685 -149.388 408.723 -119.762 404.963 -90.6116C401.203 -61.4614 389.78 -33.8298 371.857 -10.5348C353.935 12.7603 330.155 30.8854 302.942 41.9922C275.73 53.0989 246.059 56.7899 216.955 52.6888C187.85 48.5877 160.355 36.8411 137.271 18.6471C114.187 0.453019 96.342 -23.5376 85.5548 -50.8782C74.7675 -78.2188 71.4243 -107.931 75.866 -136.985C80.3077 -166.04 92.3755 -193.396 110.839 -216.265L53.4058 -262.633Z" fill="white" fillOpacity="0.14" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Statistics Section - Centered */}
                    <div className="bg-blue-500 text-white rounded-xl shadow-md p-8 w-full max-w-8xl text-center relative overflow-hidden ">
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
                        <div className="absolute top-[-50px] right-0 flex">
                            <svg width="259" height="169" viewBox="0 0 259 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M53.4058 -222.619C26.7419 -189.593 9.31402 -150.085 2.89943 -108.126C-3.51517 -66.1671 1.31303 -23.2574 16.8916 16.2271C32.4703 55.7115 58.2419 90.358 91.5785 116.633C124.915 142.908 164.624 159.872 206.655 165.795C248.686 171.718 291.537 166.387 330.836 150.347C370.135 134.307 404.477 108.132 430.36 74.4898C456.243 40.8478 472.741 0.943131 478.171 -41.1547C483.601 -83.2525 477.769 -126.037 461.27 -165.146L393.26 -136.454C404.685 -109.374 408.723 -79.7477 404.963 -50.5975C401.203 -21.4472 389.78 6.18434 371.857 29.4794C353.935 52.7745 330.155 70.8996 302.942 82.0063C275.73 93.1131 246.059 96.8041 216.955 92.7029C187.85 88.6018 160.355 76.8553 137.271 58.6612C114.187 40.4672 96.342 16.4766 85.5548 -10.864C74.7675 -38.2046 71.4243 -67.9171 75.866 -96.9712C80.3077 -126.025 92.3755 -153.382 110.839 -176.251L53.4058 -222.619Z" fill="white" fillOpacity="0.14" />
                            </svg>

                        </div>
                        <div className="absolute top-12 right-1/2 flex">
                            <svg width="481" height="87" viewBox="0 0 481 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M455.529 345.965C474.247 307.869 482.528 265.49 479.525 223.15C476.523 180.809 462.345 140.023 438.437 104.949C414.53 69.8759 381.748 41.7705 343.435 23.4992C305.122 5.22793 262.649 -2.55548 220.347 0.942723C178.045 4.44093 137.427 19.0956 102.636 43.4122C67.845 67.7289 40.1254 100.838 22.3041 139.362C4.48282 177.886 -2.80258 220.447 1.19083 262.706C5.18425 304.964 20.3137 345.407 45.0361 379.911L105.038 336.919C87.9191 313.027 77.4429 285.023 74.6777 255.761C71.9125 226.5 76.9572 197.029 89.2975 170.353C101.638 143.677 120.832 120.751 144.922 103.914C169.013 87.0757 197.139 76.9282 226.43 74.5059C255.722 72.0836 285.132 77.4732 311.662 90.125C338.191 102.777 360.89 122.238 377.445 146.524C393.999 170.811 403.817 199.053 405.896 228.371C407.975 257.689 402.241 287.034 389.28 313.413L455.529 345.965Z" fill="white" fillOpacity="0.14" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
