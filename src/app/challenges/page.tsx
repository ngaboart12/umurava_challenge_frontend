import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Challenges() {
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
                            <button
                                key={tag}
                                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 focus:ring focus:ring-blue-300"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Showcase Section */}
                <section className="mt-12">
                    <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg p-6">
                        <div className="md:w-1/2 text-center md:text-left">
                            <div className="inline-block bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                                <span className="font-bold text-xl">sf</span>
                            </div>
                            <p className="text-gray-700 text-lg font-medium">
                                The Embedded Finance Platform and Payroll Management Software
                                Solutions for your organization and Workforce.
                            </p>
                            <a
                                href="#"
                                className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                            >
                                Learn more
                            </a>
                        </div>

                        <div className="md:w-3/4 mt-6 md:mt-0 flex justify-center relative w-full h-96">
                            <Image
                                src="/images/dashboard.jpg"
                                alt="Dashboard Preview"
                                fill
                                className="rounded-lg shadow-lg object-cover"
                            />
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}
