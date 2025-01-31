"use client";

import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";

const testimonials = [
    { name: "Manzi Jack", role: "Product Designer, Kigali" },
    { name: "Alice Doe", role: "Software Engineer, Nairobi" },
    { name: "John Smith", role: "UX Designer, Lagos" },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Users are in Love with Skills Challenges Program
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                        See what our clients say about working with us. Their success speaks
                        for our dedication and expertise.
                    </p>
                </div>

                {/* Testimonial Cards Container */}
                <div className="relative w-full min-h-[400px] md:min-h-[450px] flex justify-center items-center">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`absolute w-full max-w-2xl transition-all duration-500 ease-in-out ${
                                index === currentIndex 
                                    ? "opacity-100 translate-x-0 scale-100" 
                                    : "opacity-0 translate-x-8 scale-95"
                            }`}
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                                <div className="bg-blue-500 rounded-xl h-64 md:h-72 flex items-center justify-center transition-transform hover:scale-[1.02] duration-300">
                                    <Play className="text-white w-16 h-16 md:w-20 md:h-20" />
                                </div>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500 rounded-full flex-shrink-0"></div>
                                    <div>
                                        <h4 className="text-gray-900 font-bold text-lg md:text-xl">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-gray-600 text-base md:text-lg">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="mt-8 flex justify-center gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`h-3 rounded-full transition-all duration-300 ${
                                currentIndex === index 
                                    ? "w-8 bg-blue-500" 
                                    : "w-3 bg-gray-300 hover:bg-gray-400"
                            }`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}