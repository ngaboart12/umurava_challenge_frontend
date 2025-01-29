import React from "react";
import Image from "next/image";

const challenges = [
    {
        title: "Design a Dashboard for SokoFund",
        skills: ["UX/UI Design", "User Research"],
        levels: ["Junior", "Intermediate", "Senior"],
        timeline: "15 Days",
        status: "Open",
    },
    {
        title: "Develop an AI Chatbot for Customer Support",
        skills: ["Machine Learning", "Natural Language Processing"],
        levels: ["Intermediate", "Senior"],
        timeline: "30 Days",
        status: "Open",
    },
    {
        title: "Create a Mobile App for E-commerce",
        skills: ["React Native", "Mobile Development"],
        levels: ["Junior", "Intermediate"],
        timeline: "20 Days",
        status: "Open",
    },
    {
        title: "Optimize Website Performance for SEO",
        skills: ["SEO", "Web Performance"],
        levels: ["Intermediate", "Senior"],
        timeline: "10 Days",
        status: "Open",
    },
];

export default function ExploreChallenges() {
    return (
        <div className="bg-white py-16 px-6 max-w-screen-2xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900">
                    Explore Challenges & Hackathons
                </h1>
                <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-base">
                    Join the Skills Challenges Program to accelerate your career growth and become part of Africa&apos;s
                    largest workforce of digital professionals.
                </p>
            </div>

            {/* Challenges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                {challenges.map((challenge, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl bg-white shadow-md overflow-hidden">
                        {/* Logo & Status */}
                        <div className="relative bg-blue-600 h-44 flex items-center justify-center">
                            <Image
                                src="/umurava.ico.png"
                                alt="Umurava Logo"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                            <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                                {challenge.status}
                            </span>
                        </div>

                        {/* Challenge Content */}
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">{challenge.title}</h2>

                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm font-medium text-gray-700 mb-1">Skills Needed:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {challenge.skills.map((skill, idx) => (
                                            <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-700 mb-1">Seniority Level:</p>
                                    <p className="text-xs text-gray-600">{challenge.levels.join(", ")}</p>
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-700 mb-1">Timeline:</p>
                                    <p className="text-xs text-gray-600">{challenge.timeline}</p>
                                </div>
                            </div>

                            <button className="w-full mt-6 bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                                View Challenge
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center">
                <button className="border border-blue-600 text-blue-600 font-medium text-sm py-2.5 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                    View More
                </button>
            </div>
        </div>
    );
}
