'use client'

import React from 'react';
import Link from 'next/link';

export default function EducationInstitutions() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0052FF] leading-tight">
                Accelerate Your Students and Trainees&apos;s Employability and Career Growth through Project-based Learning Solution
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                We partner with Universities, Schools, and Training Institutions to build the work experience of their 
                students and trainees through project based learning challenges and hackathons
              </p>
              <Link 
                href="/partner"
                className="inline-block bg-[#0052FF] text-white px-8 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors"
              >
                Partner with us
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full opacity-10 -translate-y-12 translate-x-12" />
              <img
                src="/students-learning.jpg"
                alt="Students Learning"
                className="relative z-10 w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 translate-y-12 -translate-x-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings & Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Offerings & Benefits:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Card 1 */}
            <div className="bg-[#4285F4] rounded-lg p-8 text-white">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Employability and Career Development Opportunities</h3>
              <p className="text-white/90">
                Students gain hands-on experience working on real-world challenges and help them build professional networks that increase their chances and readiness of landing job opportunities and this lead to career advancement and long-term success.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#4285F4] rounded-lg p-8 text-white">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Practical Application of Classroom Knowledge</h3>
              <p className="text-white/90">
                The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#4285F4] rounded-lg p-8 text-white">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Students & Trainees Engagement</h3>
              <p className="text-white/90">
                Embed and incorporate Skills Challenges into your courses to give students and trainees hands-on projects and practices that enhance their learning experience and skills mastery. Competitive and project-based challenges keep students motivated and actively engaged in their learning journey.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 4 */}
            <div className="bg-[#4285F4] rounded-lg p-8 text-white">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Access to the Industry Experts & Mentors</h3>
              <p className="text-white/90">
                Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the trends of digital careers. This can help students gain a deep understanding of their chosen field.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#4285F4] rounded-lg p-8 text-white">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4285F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a3 3 0 11-6 0 3 3 0 016 0zm6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Skills Assessments</h3>
              <p className="text-white/90">
                Embed our projects based tests and skills assessments directly into your curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Institutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Join a few Educational Institutions using<br />
            Skills Challenges by Umurava
          </h2>

          {/* First Row of Logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-12">
            <div className="flex justify-center">
              <img src="/placeholder-logo1.png" alt="Tori" className="h-12 object-contain" />
            </div>
            <div className="flex justify-center">
              <img src="/placeholder-logo2.png" alt="GDG Kigali" className="h-12 object-contain" />
            </div>
            <div className="flex justify-center">
              <img src="/placeholder-logo3.png" alt="The Education Collaborative" className="h-12 object-contain" />
            </div>
            <div className="flex justify-center">
              <img src="/placeholder-logo4.png" alt="Kepler" className="h-12 object-contain" />
            </div>
            <div className="flex justify-center">
              <img src="/placeholder-logo5.png" alt="HIIL" className="h-12 object-contain" />
            </div>
          </div>

          {/* Second Row of Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-12">
            <div className="flex justify-center">
              <img src="/placeholder-logo6.png" alt="ARED" className="h-12 object-contain" />
            </div>
            <div className="flex justify-center">
              <img src="/placeholder-logo7.png" alt="IGIHE" className="h-12 object-contain" />
            </div>
            <div className="flex justify-center">
              <img src="/placeholder-logo8.png" alt="Viamo" className="h-12 object-contain" />
            </div>
            <div className="flex justify-center">
              <img src="/placeholder-logo9.png" alt="Laterite" className="h-12 object-contain" />
            </div>
          </div>

          {/* Last Logo Centered */}
          <div className="flex justify-center">
            <img src="/placeholder-logo10.png" alt="Final Partner" className="h-12 object-contain" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0052FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-world Projects</h3>
              <p className="text-gray-600">
                Engage students in practical, industry-relevant projects that build real work experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0052FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Mentorship</h3>
              <p className="text-gray-600">
                Connect students with experienced industry professionals for guidance and mentorship.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0052FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Development</h3>
              <p className="text-gray-600">
                Help students develop essential skills and build portfolios for future employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            How Skills Challenges Program can Be<br />
            Integrated into your Learning Institution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Integration Steps */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4285F4] text-white flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    As Career Development and Job Readiness Program
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4285F4] text-white flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    As Skills Assessments Method after a course or a term
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4285F4] text-white flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    As extracurricular activities to complement academic courses
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4285F4] text-white flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    As the portfolio of the Students
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4285F4] text-white flex items-center justify-center font-semibold">
                  5
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    As part of Capstone Projects or final-year assignments
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Platform Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/platform-preview.png"
                  alt="Umurava Platform Interface"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-200 rounded-lg -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#4285F4] py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to transform your<br />learning institution?
            </h2>
            <Link
              href="/partner"
              className="inline-block bg-white text-[#4285F4] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Let's Partner
            </Link>
          </div>
          {/* Decorative Circles */}
          <div className="absolute left-0 bottom-0 w-48 h-48 bg-blue-400 rounded-full opacity-10" />
          <div className="absolute right-0 top-0 w-32 h-32 bg-blue-400 rounded-full opacity-10" />
        </div>
      </section>
    </main>
  );
}
