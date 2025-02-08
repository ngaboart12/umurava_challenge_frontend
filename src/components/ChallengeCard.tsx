'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation"

interface ChallengeCardProps {
  challenge: any
  unique: number

}

export default function ChallengeCard({ challenge, unique }: ChallengeCardProps) {
  return (
    <div key={unique} className="border border-gray-200 rounded-xl bg-white shadow-md overflow-hidden">
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
      <div className="p-6 flex flex-col gap-[20px]">
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

            <span className="text-xs text-gray-600">{challenge.seniority.join(', ')}</span>

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
  );
}
