"use client";

import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";

const testimonials = [
    {
        name: "Manzi Jack",
        role: "Product Designer, Kigali",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "Alice Doe",
        role: "Software Engineer, Nairobi",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "John Smith",
        role: "UX Designer, Lagos",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "Sarah Johnson",
        role: "Marketing Specialist, Accra",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "David Okafor",
        role: "Data Scientist, Abuja",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "Emma Kimani",
        role: "Frontend Developer, Mombasa",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "David Okafor",
        role: "Data Scientist, Abuja",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "Emma Kimani",
        role: "Frontend Developer, Mombasa",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "David Okafor",
        role: "Data Scientist, Abuja",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "Emma Kimani",
        role: "Frontend Developer, Mombasa",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "David Okafor",
        role: "Data Scientist, Abuja",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "Emma Kimani",
        role: "Frontend Developer, Mombasa",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "David Okafor",
        role: "Data Scientist, Abuja",
        videoThumbnail: "/api/placeholder/400/250"
    },
    {
        name: "Emma Kimani",
        role: "Frontend Developer, Mombasa",
        videoThumbnail: "/api/placeholder/400/250"
    },
];

export default function Testimonials() {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / cardsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalPages]);

    const handlePlayClick = (index: number) => {
        console.log(`Playing video for testimonial ${index}`);
    };

    const visibleTestimonials = () => {
        const start = currentPage * cardsPerPage;
        return testimonials.slice(start, start + cardsPerPage);
    };

    return (
        <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-12 max-w-[600px]">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Users are in Love with Skills Challenges Program
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl">
                        See what our clients say about working with us. Their success speaks for our dedication and expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {visibleTestimonials().map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                            <div
                                className="relative bg-blue-500 h-48 flex items-center justify-center cursor-pointer"
                                onClick={() => handlePlayClick(index)}
                            >
                                <img
                                    src={testimonial.videoThumbnail}
                                    alt={`${testimonial.name} video thumbnail`}
                                    className="w-full h-full object-cover opacity-0"
                                />
                                <div className="absolute inset-0 bg-blue-500 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                                        <Play className="text-white w-8 h-8" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 flex items-center gap-3">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex-shrink-0"></div>
                                <div>
                                    <h4 className="text-gray-900 font-bold">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 rounded-full transition-all duration-300 ${currentPage === index
                                ? "w-8 bg-blue-500"
                                : "w-2 bg-gray-300 hover:bg-gray-400"
                                }`}
                            onClick={() => setCurrentPage(index)}
                            aria-label={`Go to page ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}