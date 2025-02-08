"use client"
import React from "react";
import Image from "next/image";
import { useChallengeQuery } from "@/lib/redux/slices/ChallengeSlice";
import Link from "next/link";
import { RiseLoader } from "react-spinners";

export default function ExploreChallenges() {
    const { data: challenges, isLoading, error } = useChallengeQuery({})
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
            {isLoading ? (
                <div className='w-full py-20 items-center justify-center flex flex-col gap-[20px]'>
                    <RiseLoader color='skyblue' />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
                        {challenges?.data.map((challenge: any, index: number) => (
                            <div key={index} className="border border-gray-200 rounded-xl bg-white shadow-md overflow-hidden">
                                {/* Logo & Status */}
                                <div className="relative bg-blue-600 h-44 flex items-center justify-center">
                                    <Image
                                        src="/images/umurava_white_lo.png"
                                        alt="Umurava Logo"
                                        width={300}
                                        height={300}
                                        className="object-contain"
                                    />
                                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                                        {challenge.status}
                                    </span>
                                </div>

                                {/* Challenge Content */}
                                <div className="p-6 flex flex-col gap-[10px]">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-4">{challenge.title}</h2>

                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-sm font-medium text-gray-700 mb-1">Skills Needed:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {challenge.skills.map((skill: any, idx: number) => (
                                                    <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-sm font-medium text-gray-700 mb-1">Seniority Level:</p>
                                            <p className="text-sm">{challenge.seniority.join(', ')}</p>
                                        </div>

                                        <div>
                                            <p className="text-sm font-medium text-gray-700 mb-1">Timeline:</p>
                                            <p className="text-xs text-gray-600">{new Date(challenge.deadline).toDateString()}</p>
                                        </div>
                                    </div>

                                    <Link href={`/challenges/${challenge.id}`} className="w-full flex items-center justify-center px-4 bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                                        View Challenge
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* View More Button */}
            <div className="flex justify-center">
                <Link href={`/challenges`} className="border border-blue-600 text-blue-600 font-medium text-sm py-2.5 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                    View More
                </Link>
            </div>
        </div>
    );
}
