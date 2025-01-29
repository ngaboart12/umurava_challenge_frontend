import React from "react";
import Image from "next/image";

const benefits = [
    {
        title: "Enhance Your Employment Path",
        description:
            "Network with other talented individuals and learn from their experiences.",
        icon: "📘",
    },
    {
        title: "Earn Recognition and Prizes",
        description:
            "Gain valuable experience and knowledge to advance your career in the digital economy.",
        icon: "🏆",
    },
    {
        title: "Personal Growth",
        description:
            "Challenge yourself, learn new skills, and expand your professional network.",
        icon: "💡",
    },
    {
        title: "Learn from Industry Experts",
        description:
            "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces.",
        icon: "🎓",
    },
];

export default function SkillsChallenges() {
    return (
        <section className="bg-white py-16 px-6 sm:px-16 lg:px-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    What else can I gain from <br /> participating in Skills Challenges?
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                    Join Skills Challenges Program to accelerate your career growth and
                    become part of Africa&apos;s largest workforce of digital professionals.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
                    {benefits?.length > 0 &&
                        benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-6">
                                <div className="text-blue-600 text-4xl">{benefit.icon}</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 text-base mt-2">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Right: Image */}
                <div className="flex justify-center">
                    <Image
                        src="/images/skills.JPG"
                        alt="Skills Challenges Platform"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
