"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Challenges() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const tags = [
        "UI/UX Design",
        "Data Science",
        "Graphic Design",
        "Data Analysis & Research",
        "Animation",
        "Videography & Photography",
        "AI & Machine Learning",
        "Web3",
        "Digital Marketing & Communications",
    ];

    const slides = [1, 2, 3, 4]; // Placeholder for multiple slides

    return (
        <div className="bg-white min-h-screen">
            <Head>
                <title>Skills Challenges</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-7xl mx-auto px-4 py-12">
                {/* Header Section */}
                <section className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Skills Challenges Cover various in-demand skills
                        <br /> and Careers for the digital economy
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Explore the projects that various talents are working on.
                    </p>

                    {/* Tags Section */}
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        {tags.map((tag) => (
                            <Link
                                key={tag}
                                href="/challenges"
                                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${tag === "UI/UX Design"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {tag}
                            </Link>
                        ))}
                    </div>

                    {/* View All Link */}
                    <Link
                        href="/challenges"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-8 font-medium"
                    >
                        View All Challenges
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </section>

                {/* Showcase Section */}
                <section className="mt-12 w-full px-4 md:px-12 lg:px-24 xl:px-32">
                    <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg overflow-hidden">
                        <div className="md:w-1/2 p-8 lg:p-12">
                            <div className="text-center md:text-left">
                                <div className="inline-block text-blue-600 p-4 mb-4">
                                    <Image
                                        src="/images/sf.JPG"
                                        alt="sf"
                                        width={80}
                                        height={80}
                                        className="rounded"
                                    />
                                </div>
                                <p className="text-gray-700 text-lg font-medium">
                                    The Embedded Finance Platform and Payroll Management Software
                                    Solutions for your organization and Workforce.
                                </p>
                                <Link
                                    href="#"
                                    className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                                >
                                    Learn more
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="md:w-3/4 relative w-full h-96">
                            <Image
                                src="/images/dashboard.JPG"
                                alt="Dashboard Preview"
                                fill
                                className="rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-8">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? "w-6 bg-blue-600"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}