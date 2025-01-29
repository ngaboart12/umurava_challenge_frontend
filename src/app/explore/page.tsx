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
        title: "Design a Dashboard for SokoFund",
        skills: ["UX/UI Design", "User Research"],
        levels: ["Junior", "Intermediate", "Senior"],
        timeline: "15 Days",
        status: "Open",
    },
    {
        title: "Design a Dashboard for SokoFund",
        skills: ["UX/UI Design", "User Research"],
        levels: ["Junior", "Intermediate", "Senior"],
        timeline: "15 Days",
        status: "Open",
    },
];

export default function ExploreChallenges() {
    return (
        <div className="bg-white py-12 px-6">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-900">
                    Explore Challenges & Hackathons
                </h1>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Join Skills Challenges Program to accelerate your career growth and become part of Africa&apos;s
                    largest workforce of digital professionals.
                </p>
            </div>

            {/* Challenges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {challenges.map((challenge, index) => (
                    <div key={index} className="shadow-md border border-gray-200 rounded-xl bg-white">
                        {/* Logo & Status */}
                        <div className="relative">
                            <Image
                                src="/umurava.ico.png"
                                alt="Umurava Logo"
                                width={144}
                                height={144}
                                className="w-full h-36 object-cover rounded-t-xl"
                            />

                            <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                {challenge.status}
                            </span>
                        </div>

                        {/* Challenge Content */}
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-gray-800">{challenge.title}</h2>

                            <div className="mt-4">
                                <p className="text-sm font-medium text-gray-600">Skills Needed:</p>
                                <p className="text-sm text-gray-500">{challenge.skills.join(", ")}</p>
                            </div>

                            <div className="mt-2">
                                <p className="text-sm font-medium text-gray-600">Seniority Level:</p>
                                <p className="text-sm text-gray-500">{challenge.levels.join(", ")}</p>
                            </div>

                            <div className="mt-2 mb-5">
                                <p className="text-sm font-medium text-gray-600">Timeline:</p>
                                <p className="text-sm text-gray-500">{challenge.timeline}</p>
                            </div>

                            <button className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700">
                                View Challenge
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center mt-10">
                <button className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700">
                    View More
                </button>
            </div>
        </div>
    );
}
