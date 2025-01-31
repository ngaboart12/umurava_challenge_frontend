'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ChallengeCardProps {
  skills?: string[];
  seniorityLevel?: string;
  timeline?: string;
}

export default function ChallengeCard({ 
  skills = ['UX/UI Design', 'User Research', 'User Research'],
  seniorityLevel = 'Junior, Intermediate, Senior',
  timeline = '15 Days'
}: ChallengeCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
      {/* Logo Section */}
      <div className="bg-[#4285F4] p-6 flex justify-center items-center">
        <Image
          src="/umurava.ico.png"
          alt="Umurava Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Status */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Design a Dashboard for SokoFund
          </h3>
          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
            Open
          </span>
        </div>

        {/* Skills Section */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Skills Needed:</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-3">
          <p className="text-sm text-gray-600">Timeline:</p>
          <p className="text-sm">{timeline}</p>
        </div>

        {/* Seniority Level */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">Seniority Level:</p>
          <p className="text-sm">{seniorityLevel}</p>
        </div>

        {/* View Challenge Button */}
        <Link
          href="#"
          className="block w-full text-center bg-[#4285F4] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
        >
          View Challenge
        </Link>
      </div>
    </div>
  );
}
