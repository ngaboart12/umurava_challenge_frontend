import React from "react";

const steps = [
    {
        id: 1,
        title: "Sign up on Umurava Platform",
        description: "Submit your completed project for evaluation",
    },
    {
        id: 2,
        title: "Browse Open Challenges",
        description: "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals",
    },
    {
        id: 3,
        title: "Register and Participate",
        description: "Sign up for the challenge and start working on the project.",
    },
    {
        id: 4,
        title: "Submit your work",
        description: "Submit your completed project for evaluation",
    },
    {
        id: 5,
        title: "Receive Feedback and Recognition",
        description: "Get feedback on your work and celebrate your achievements",
    },
];

const HowToGetStarted = () => {
    return (
        <div className="w-full bg-white py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
                    How to Get Started
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`bg-white rounded-lg p-6 ${index === steps.length - 1 && steps.length % 2 !== 0
                                    ? "md:col-span-2 md:max-w-md md:mx-auto"
                                    : ""
                                }`}
                        >
                            <div className="mb-3">
                                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                                    Step {step.id}
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowToGetStarted;