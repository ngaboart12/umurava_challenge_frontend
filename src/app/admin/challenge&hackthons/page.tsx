"use client"
import { LinkComponent } from '@/components/reusable/LinkComponent';
import { Card } from '@/components/ui/card';
import { useChallengeQuery } from '@/lib/redux/slices/ChallengeSlice';
import { HomeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { RiseLoader } from 'react-spinners';


const ChallengeAndHackthons = () => {
    const { data: challenge, isLoading: challengeLoading, isError } = useChallengeQuery({})



    return (
        <div className='flex flex-col gap-[20px] items-center px-4 h-full py-4 w-full'>
            <div className='flex text-center md:text-start flex-col gap-[4px] w-full'>
                <h1 className='text-[24px] font-bold'>Challenges</h1>
                <span className='text-[14px] text-[#475367]'>Join a challenge or a hackathon to gain valuable work experience,</span>
            </div>
            <div className='md:flex grid grid-cols-1 sm:grid-cols-2 md:flex-row gap-[12px] w-full'>
                <LinkComponent
                    title='All Challenges'
                    url='/'
                    icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.66667 8.00002C4.66667 7.63183 4.96514 7.33335 5.33333 7.33335H10.6667C11.0349 7.33335 11.3333 7.63183 11.3333 8.00002C11.3333 8.36821 11.0349 8.66669 10.6667 8.66669H5.33333C4.96514 8.66669 4.66667 8.36821 4.66667 8.00002Z" fill="#2B71F0" />
                        <path d="M5.33333 10.6667C4.96514 10.6667 4.66667 10.9652 4.66667 11.3334C4.66667 11.7015 4.96514 12 5.33333 12H10.6667C11.0349 12 11.3333 11.7015 11.3333 11.3334C11.3333 10.9652 11.0349 10.6667 10.6667 10.6667H5.33333Z" fill="#2B71F0" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.66667 0.666687C3.19391 0.666687 2 1.86059 2 3.33335V12.6667C2 14.1394 3.19391 15.3334 4.66667 15.3334H11.3333C12.8061 15.3334 14 14.1394 14 12.6667V6.05745C14 5.43362 13.7813 4.82954 13.3819 4.3503L11.1118 1.6262C10.6052 1.01822 9.85466 0.666687 9.06325 0.666687H4.66667ZM3.33333 3.33335C3.33333 2.59697 3.93029 2.00002 4.66667 2.00002H8.66667V4.00002C8.66667 5.47278 9.86057 6.66669 11.3333 6.66669H12.6667V12.6667C12.6667 13.4031 12.0697 14 11.3333 14H4.66667C3.93029 14 3.33333 13.4031 3.33333 12.6667V3.33335ZM12.4529 5.33335C12.4239 5.28851 12.3921 5.24526 12.3576 5.20387L10.0875 2.47977C10.0598 2.44646 10.0306 2.41469 10 2.38451V4.00002C10 4.7364 10.597 5.33335 11.3333 5.33335H12.4529Z" fill="#2B71F0" />
                    </svg>
                    }
                    number={1} />
                <LinkComponent
                    title='Completed Challenge'
                    url='/'
                    icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.66667 8.00002C4.66667 7.63183 4.96514 7.33335 5.33333 7.33335H10.6667C11.0349 7.33335 11.3333 7.63183 11.3333 8.00002C11.3333 8.36821 11.0349 8.66669 10.6667 8.66669H5.33333C4.96514 8.66669 4.66667 8.36821 4.66667 8.00002Z" fill="#2B71F0" />
                        <path d="M5.33333 10.6667C4.96514 10.6667 4.66667 10.9652 4.66667 11.3334C4.66667 11.7015 4.96514 12 5.33333 12H10.6667C11.0349 12 11.3333 11.7015 11.3333 11.3334C11.3333 10.9652 11.0349 10.6667 10.6667 10.6667H5.33333Z" fill="#2B71F0" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.66667 0.666687C3.19391 0.666687 2 1.86059 2 3.33335V12.6667C2 14.1394 3.19391 15.3334 4.66667 15.3334H11.3333C12.8061 15.3334 14 14.1394 14 12.6667V6.05745C14 5.43362 13.7813 4.82954 13.3819 4.3503L11.1118 1.6262C10.6052 1.01822 9.85466 0.666687 9.06325 0.666687H4.66667ZM3.33333 3.33335C3.33333 2.59697 3.93029 2.00002 4.66667 2.00002H8.66667V4.00002C8.66667 5.47278 9.86057 6.66669 11.3333 6.66669H12.6667V12.6667C12.6667 13.4031 12.0697 14 11.3333 14H4.66667C3.93029 14 3.33333 13.4031 3.33333 12.6667V3.33335ZM12.4529 5.33335C12.4239 5.28851 12.3921 5.24526 12.3576 5.20387L10.0875 2.47977C10.0598 2.44646 10.0306 2.41469 10 2.38451V4.00002C10 4.7364 10.597 5.33335 11.3333 5.33335H12.4529Z" fill="#2B71F0" />
                    </svg>
                    }
                    number={0} />
                <LinkComponent
                    title='Open Challenge'
                    url='/'
                    icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.66667 8.00002C4.66667 7.63183 4.96514 7.33335 5.33333 7.33335H10.6667C11.0349 7.33335 11.3333 7.63183 11.3333 8.00002C11.3333 8.36821 11.0349 8.66669 10.6667 8.66669H5.33333C4.96514 8.66669 4.66667 8.36821 4.66667 8.00002Z" fill="#2B71F0" />
                        <path d="M5.33333 10.6667C4.96514 10.6667 4.66667 10.9652 4.66667 11.3334C4.66667 11.7015 4.96514 12 5.33333 12H10.6667C11.0349 12 11.3333 11.7015 11.3333 11.3334C11.3333 10.9652 11.0349 10.6667 10.6667 10.6667H5.33333Z" fill="#2B71F0" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.66667 0.666687C3.19391 0.666687 2 1.86059 2 3.33335V12.6667C2 14.1394 3.19391 15.3334 4.66667 15.3334H11.3333C12.8061 15.3334 14 14.1394 14 12.6667V6.05745C14 5.43362 13.7813 4.82954 13.3819 4.3503L11.1118 1.6262C10.6052 1.01822 9.85466 0.666687 9.06325 0.666687H4.66667ZM3.33333 3.33335C3.33333 2.59697 3.93029 2.00002 4.66667 2.00002H8.66667V4.00002C8.66667 5.47278 9.86057 6.66669 11.3333 6.66669H12.6667V12.6667C12.6667 13.4031 12.0697 14 11.3333 14H4.66667C3.93029 14 3.33333 13.4031 3.33333 12.6667V3.33335ZM12.4529 5.33335C12.4239 5.28851 12.3921 5.24526 12.3576 5.20387L10.0875 2.47977C10.0598 2.44646 10.0306 2.41469 10 2.38451V4.00002C10 4.7364 10.597 5.33335 11.3333 5.33335H12.4529Z" fill="#2B71F0" />
                    </svg>
                    }
                    number={0} />
                <LinkComponent
                    title='Ongoing Challenge'
                    url='/'
                    icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.66667 8.00002C4.66667 7.63183 4.96514 7.33335 5.33333 7.33335H10.6667C11.0349 7.33335 11.3333 7.63183 11.3333 8.00002C11.3333 8.36821 11.0349 8.66669 10.6667 8.66669H5.33333C4.96514 8.66669 4.66667 8.36821 4.66667 8.00002Z" fill="#2B71F0" />
                        <path d="M5.33333 10.6667C4.96514 10.6667 4.66667 10.9652 4.66667 11.3334C4.66667 11.7015 4.96514 12 5.33333 12H10.6667C11.0349 12 11.3333 11.7015 11.3333 11.3334C11.3333 10.9652 11.0349 10.6667 10.6667 10.6667H5.33333Z" fill="#2B71F0" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.66667 0.666687C3.19391 0.666687 2 1.86059 2 3.33335V12.6667C2 14.1394 3.19391 15.3334 4.66667 15.3334H11.3333C12.8061 15.3334 14 14.1394 14 12.6667V6.05745C14 5.43362 13.7813 4.82954 13.3819 4.3503L11.1118 1.6262C10.6052 1.01822 9.85466 0.666687 9.06325 0.666687H4.66667ZM3.33333 3.33335C3.33333 2.59697 3.93029 2.00002 4.66667 2.00002H8.66667V4.00002C8.66667 5.47278 9.86057 6.66669 11.3333 6.66669H12.6667V12.6667C12.6667 13.4031 12.0697 14 11.3333 14H4.66667C3.93029 14 3.33333 13.4031 3.33333 12.6667V3.33335ZM12.4529 5.33335C12.4239 5.28851 12.3921 5.24526 12.3576 5.20387L10.0875 2.47977C10.0598 2.44646 10.0306 2.41469 10 2.38451V4.00002C10 4.7364 10.597 5.33335 11.3333 5.33335H12.4529Z" fill="#2B71F0" />
                    </svg>
                    }
                    number={0} />
                <Link href={'/admin/challenge&hackthons/new-challenge'} className='flex flex-row  items-center justify-center rounded-[6px] h-[60px] gap-[10px] bg-[#2B71F0]'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00033 1.16675V12.8334M1.16699 7.00008H12.8337" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span className='text-[14px] text-white'>Create New Challenge</span>
                </Link>
            </div>
            <div className='w-full flex flex-col py-4'>
                {challengeLoading ? (
                    <div className='w-full py-20 items-center justify-center flex flex-col gap-[20px]'>
                        <RiseLoader color='skyblue' />
                    </div>
                ) : (
                    <>
                        {challenge.data.length == 0 || isError ? (
                            <div>
                                <p>No challenges found.</p>
                            </div>

                        ) : (
                            <>
                                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                                    {challenge.data.map((data: any, index: number) => {
                                        return (
                                            <Card key={index} className='w-full p-4'>
                                                <div className="bg-white rounded-lg overflow-hidden w-full  transition-all">
                                                    {/* Logo Section */}
                                                    <div className='flex flex-row  bg-primary rounded-[10px] w-full p-14'>
                                                        <Image src={`/image/umurava.png`} alt={``} width={1000} height={1000} className='w-full h-full object-cover' />
                                                    </div>
                                                    {/* Content */}
                                                    <div className="p-4">
                                                        {/* Title and Status */}
                                                        <div className="flex justify-between items-start mb-4">
                                                            <h3 className="text-[16px] line-clamp-1 font-semibold text-gray-800">
                                                                {data.title}
                                                            </h3>
                                                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                                                                {data.status}
                                                            </span>
                                                        </div>

                                                        {/* Skills Section */}
                                                        <div className="mb-4">
                                                            <p className="text-sm text-gray-600 mb-2">Skills Needed:</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {data.skills.slice(0, 4).map((skill: any, indexNumber: number) => (
                                                                    <span
                                                                        key={indexNumber}
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
                                                            <p className="text-sm">{new Date(data?.deadline).toDateString()}</p>
                                                        </div>

                                                        {/* Seniority Level */}
                                                        <div className="mb-4">
                                                            <p className="text-sm text-gray-600">Seniority Level:</p>
                                                            <p className="text-sm">{data.seniority.join(', ')}</p>
                                                        </div>

                                                        {/* View Challenge Button */}
                                                        <Link
                                                            href={`/admin/challenge&hackthons/details/${data.id}`}
                                                            className="block w-full text-center bg-[#4285F4] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
                                                        >
                                                            View Challenge
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Card>
                                        )
                                    })}
                                </div>
                            </>


                        )}
                    </>
                )}
            </div>

        </div>
    )
}

export default ChallengeAndHackthons