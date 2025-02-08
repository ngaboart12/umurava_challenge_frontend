'use client'

import React from 'react';
import Link from 'next/link';
import ChallengeCard from '@/components/ChallengeCard';
import { useChallengeQuery } from '@/lib/redux/slices/ChallengeSlice';
import { RiseLoader } from "react-spinners"

export default function ChallengesPage() {
  // Create an array of 12 items to match the grid layout
  // const challenges = Array(12).fill(null);
  const { data: challenges, isLoading, error } = useChallengeQuery({})

  return (
    <div className="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            Go Back
          </Link>
          <span>/</span>
          <span>Challenges & Hackathons</span>
        </div>
      </div>

      {/* Challenge Grid */}
      <div className="max-w-7xl mx-auto">
        {isLoading ? (
          <div className='w-full py-20 items-center justify-center flex flex-col gap-[20px]'>
            <RiseLoader color='skyblue' />
          </div>
        ) : (


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {challenges?.data?.map((data: any, index: number) => (
              <ChallengeCard unique={index} key={index} challenge={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
