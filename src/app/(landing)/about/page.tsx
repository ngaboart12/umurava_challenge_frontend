'use client'

import React from 'react';
import Link from 'next/link';
import { Briefcase, TrendingUp, Trophy } from 'lucide-react';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      {/* Our Story Section */}
      <section className=" md:py-24 w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
            {/* Left Content */}
            <div className="space-y-6 w-full px-4 md:px-12 lg:px-24 xl:px-32">
              <h1 className="text-4xl md:text-4xl font-bold text-[#4285F4]">
                Our Story
              </h1>
              <div className="space-y-6 text-gray-800 text-[16px]">
                <p className="leading-relaxed">
                  With 3 years of experience matching African digital talents to local and global job markets, we still have a
                  significant number of jobs that remain unfilled due to the lack of experienced African talents.
                </p>
                <p className="leading-relaxed">
                  Driven by our mission to place skilled and professional digital talent, we created Skills Challenges as a
                  project-based learning solution for talents to gain real-world experience, solve problems, and build portfolios
                  so they become ready for global job markets.
                </p>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative w-full px-4 md:px-12 lg:px-24 xl:px-32">
              <div
                className="relative z-10 overflow-hidden bg-[#4285F4] p-4 w-full"
                style={{ borderRadius: '20px', aspectRatio: '620/570' }}
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  controls
                  poster="/video-thumbnail.jpg"
                  style={{
                    borderRadius: '20px',
                  }}
                >
                  <source src="/video/umurava.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Overlay text */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-medium">
                  for our talent community
                </div>
              </div>
              {/* Decorative Elements */}
              <div
                className="absolute -bottom-4 -right-4 bg-gray-100 -z-10 w-full"
                style={{ borderRadius: '20px', aspectRatio: '620/570' }}
              />
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

          <div className="flex flex-col items-center gap-10 mt-12">
            {/* Longer Card */}
            <div className="bg-blue-500 text-white rounded-xl shadow-md p-8 w-full max-w-6xl text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white px-6 py-4 rounded-lg">
                  <Briefcase size={32} className="text-blue-500" />
                </div>
                <h2 className="text-xl font-semibold">
                  Build a Strong Portfolio and Hands-On Experience
                </h2>
              </div>
              <p className="text-sm max-w-3xl">
                Tackle real-world projects through challenges and hackathons that mirror real-world challenges faced by
                businesses and organizations. Therefore, showcase your skills and accomplishments to potential
                employers and clients through a portfolio of completed projects.
              </p>
            </div>

            {/* Smaller Cards */}
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
              {/* Smaller Card 1 */}
              <div className="bg-blue-500 text-white rounded-xl shadow-md p-8 text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white px-6 py-4 rounded-lg">
                    <TrendingUp size={32} className="text-blue-500" />
                  </div>
                  <h2 className="text-xl font-semibold">
                    Enhance Your Employment Path
                  </h2>
                </div>
                <p className="text-sm">
                  Develop in-demand skills and build a strong portfolio to increase your chances of landing your
                  dream job or contract.
                </p>
              </div>

              {/* Smaller Card 2 */}
              <div className="bg-blue-500 text-white rounded-xl shadow-md p-8 text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white px-6 py-4 rounded-lg">
                    <Trophy size={32} className="text-blue-500" />
                  </div>
                  <h2 className="text-xl font-semibold">
                    Earn Recognition and Prizes
                  </h2>
                </div>
                <p className="text-sm">
                  Earn both monetary and knowledge-based prizes by participating in various contests and competitions by
                  working on real-world projects and hackathons from our partner companies &amp; organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Challenges Program Section */}
      <section className="py-16 bg-white w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8 w-full px-4 md:px-12 lg:px-24 xl:px-32">
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
            <div className="relative w-full px-4 md:px-12 lg:px-24 xl:px-32">
              <div className="relative z-10">
                <img
                  src="/images/talent.JPG"
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
