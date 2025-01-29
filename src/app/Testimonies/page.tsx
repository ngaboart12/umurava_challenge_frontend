import React from "react";
import { Play } from "lucide-react";

const testimonials = [
    {
        name: "Manzi Jack",
        role: "Product Designer, Kigali",
    },
    {
        name: "Manzi Jack",
        role: "Product Designer, Kigali",
    },
    {
        name: "Manzi Jack",
        role: "Product Designer, Kigali",
    },
];

export default function Testimonials() {
    return (
        <section className="py-12 px-6 md:px-12 lg:px-20">
            <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Users are in Love with Skills Challenges Program
                </h2>
                <p className="text-gray-600 mt-2 text-sm">
                    See what our clients say about working with us. Their success speaks
                    for our dedication and expertise.
                </p>
            </div>
            <div className="flex gap-6 overflow-x-auto px-4">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] flex-shrink-0 rounded-lg bg-white p-4"
                        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)' }}
                    >
                        <div className="bg-blue-500 rounded-lg h-48 flex items-center justify-center relative">
                            <Play className="text-white w-12 h-12" />
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <div>
                                <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
                                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}