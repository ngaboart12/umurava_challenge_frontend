'use client'

import React from 'react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-[#4285F4]">
                Our Story
              </h1>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  With 3 years of experience matching African digital talents to local and global job markets, 
                  we still remain with a big number of jobs that remain unfilled due to the lack of experienced 
                  African Talents.
                </p>
                <p className="leading-relaxed">
                  Driven by our mission to place skilled and professional digital talent, we created Skills 
                  Challenges as a project-based learning solution for talents to gain real-world experience, 
                  solve problems, and build portfolios so that they become ready for global job markets.
                </p>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden bg-[#4285F4] p-2">
                <video 
                  className="w-full h-full rounded-lg"
                  controls
                  poster="/video-thumbnail.jpg"
                >
                  <source src="/about-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Overlay text */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-medium">
                  for our talent community
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-100 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Why we are solving this problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why we are solving this problem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Full Width on MD */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="bg-[#4285F4] rounded-lg p-8 h-full text-white">
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Bridging the Experience Gap</h3>
                <p className="text-white/90">
                  Many talents acquired theoretical knowledge and are rejected from jobs because they lack work 
                  experience and are not able to put in actions what they acquired in the schools.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="lg:col-span-1">
              <div className="bg-[#4285F4] rounded-lg p-8 h-full text-white">
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Bridging Education and Employment</h3>
                <p className="text-white/90">
                  Traditional education doesn't always prepare talents for the demands of the tech and digital economy and 
                  we are providing in-demand skills through Skills Challenges.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="lg:col-span-1">
              <div className="bg-[#4285F4] rounded-lg p-8 h-full text-white">
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Preparing Talents for Global Job Markets</h3>
                <p className="text-white/90">
                  We are ensuring that African talents shine globally and that's why we are equipping them with global 
                  technical experience and standout globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Challenges Program Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#010618]">
                Skills Challenges Program is built on<br />
                the Umurava Talent Marketplace<br />
                Platform
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  A Project-based Learning Solution aimed at providing young and senior talents 
                  with an opportunity to showcase their skills to real-world projects and challenges 
                  from our partner companies and organizations.
                </p>
                <p className="leading-relaxed">
                  Umurava Skills Challenges enables young talents to build a portfolio and experience 
                  that increases their readiness to access job opportunities and projects.
                </p>

                <div className="pt-4">
                  <Link 
                    href="/get-started"
                    className="inline-block bg-[#4285F4] text-white px-8 py-3 rounded-md font-medium hover:bg-[#3367D6] transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/platform-screenshot.png"
                  alt="Umurava Platform Interface"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-100 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
