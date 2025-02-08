"use client"
import AdminCard from '@/components/reusable/AdminCard'
import { Card, CardContent } from '@/components/ui/card'
import { challenges } from '@/lib/data'
import { CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Carousel } from '@/components/ui/carousel'
import { Inbox } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useChallengeQuery } from '@/lib/redux/slices/ChallengeSlice'
import { useSession } from 'next-auth/react'

const AdminHome = () => {
    const { data: challenge, isLoading: challengeLoading } = useChallengeQuery({})
    const { data: userProfile, status } = useSession()
    console.log("user profile", userProfile)
    return (
        <div className='flex flex-col gap-[16px] w-full'>
            <div className='flex flex-row items-center gap-[20px] justify-between w-full p-4'>
                <div className='flex flex-col gap-[4px]'>
                    <h1 className='text-[24px] font-bold'>Welcome Back {userProfile?.user?.name}</h1>
                    <span className='text-[14px] text-[#475367]'>Build Work Experience through Skills Challenges</span>
                </div>
            </div>
            <div className='flex flex-col gap-[10px] px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2  gap-[16px] '>
                    <AdminCard
                        title='Total Challenges'
                        number={10}
                        icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.7151 17.3608H8.49512C8.08112 17.3608 7.74512 17.0248 7.74512 16.6108C7.74512 16.1968 8.08112 15.8608 8.49512 15.8608H15.7151C16.1291 15.8608 16.4651 16.1968 16.4651 16.6108C16.4651 17.0248 16.1291 17.3608 15.7151 17.3608Z" fill="#2B71F0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.7151 13.1743H8.49512C8.08112 13.1743 7.74512 12.8383 7.74512 12.4243C7.74512 12.0103 8.08112 11.6743 8.49512 11.6743H15.7151C16.1291 11.6743 16.4651 12.0103 16.4651 12.4243C16.4651 12.8383 16.1291 13.1743 15.7151 13.1743Z" fill="#2B71F0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.2501 8.99756H8.49512C8.08112 8.99756 7.74512 8.66156 7.74512 8.24756C7.74512 7.83356 8.08112 7.49756 8.49512 7.49756H11.2501C11.6641 7.49756 12.0001 7.83356 12.0001 8.24756C12.0001 8.66156 11.6641 8.99756 11.2501 8.99756Z" fill="#2B71F0" />
                            <mask id="mask0_7_20364" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="2" width="19" height="21">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3 2.38721H21.1647V22.297H3V2.38721Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_7_20364)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.9081 3.88721L8.2191 3.89121C5.8911 3.90521 4.4991 5.34521 4.4991 7.74421V16.9402C4.4991 19.3552 5.9041 20.7972 8.2551 20.7972L15.9441 20.7942C18.2721 20.7802 19.6641 19.3382 19.6641 16.9402V7.74421C19.6641 5.32921 18.2601 3.88721 15.9081 3.88721ZM8.25602 22.2972C5.11202 22.2972 2.99902 20.1442 2.99902 16.9402V7.74421C2.99902 4.51121 5.04602 2.41021 8.21402 2.39121L15.907 2.38721H15.908C19.052 2.38721 21.164 4.54021 21.164 7.74421V16.9402C21.164 20.1722 19.117 22.2742 15.949 22.2942L8.25602 22.2972Z" fill="#2B71F0" />
                            </g>
                        </svg>
                        }
                        percentage={10} />
                    <AdminCard
                        title='Total Participants'
                        number={10}
                        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8596 13.138H11.8866C14.4066 13.138 16.4556 11.088 16.4556 8.569C16.4556 6.05 14.4066 4 11.8866 4C9.36764 4 7.31864 6.05 7.31864 8.566C7.31364 9.783 7.78264 10.929 8.64064 11.792C9.49664 12.656 10.6396 13.134 11.8596 13.138ZM8.81864 8.569C8.81864 6.877 10.1946 5.5 11.8866 5.5C13.5786 5.5 14.9556 6.877 14.9556 8.569C14.9556 10.262 13.5786 11.638 11.8866 11.638H11.8616C11.0456 11.635 10.2796 11.314 9.70464 10.735C9.12964 10.156 8.81564 9.389 8.81864 8.569Z" fill="#2B71F0" />
                            <path d="M17.1447 11.5005C17.1977 11.8755 17.5187 12.1465 17.8867 12.1465C17.9207 12.1465 17.9557 12.1445 17.9907 12.1395C19.7657 11.8905 21.1067 10.3505 21.1107 8.55551C21.1107 6.77251 19.8337 5.26851 18.0757 4.97951C17.6647 4.91451 17.2817 5.18851 17.2137 5.59751C17.1467 6.00651 17.4237 6.39251 17.8317 6.45951C18.8627 6.62851 19.6107 7.51051 19.6107 8.55351C19.6087 9.60551 18.8237 10.5075 17.7837 10.6535C17.3727 10.7105 17.0877 11.0895 17.1447 11.5005Z" fill="#2B71F0" />
                            <path d="M20.1603 18.0482C20.2743 18.3472 20.5593 18.5312 20.8613 18.5312C20.9503 18.5312 21.0403 18.5152 21.1283 18.4822C22.5583 17.9372 22.7723 16.9442 22.7723 16.4002C22.7723 15.5092 22.2633 14.3712 19.8403 14.0082C19.4273 13.9552 19.0473 14.2282 18.9863 14.6382C18.9253 15.0492 19.2083 15.4302 19.6173 15.4922C20.7153 15.6562 21.2723 15.9622 21.2723 16.4002C21.2723 16.5372 21.2723 16.8222 20.5943 17.0802C20.2073 17.2272 20.0123 17.6612 20.1603 18.0482Z" fill="#2B71F0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8866 20.7909C10.2276 20.7909 5.17761 20.7909 5.17761 17.5959C5.17761 14.4139 10.2276 14.4139 11.8866 14.4139C13.5456 14.4139 18.5946 14.4139 18.5946 17.6129C18.5946 20.7909 13.7216 20.7909 11.8866 20.7909ZM11.8866 15.9139C9.51061 15.9139 6.67761 16.2059 6.67761 17.5959C6.67761 18.9969 9.51061 19.2909 11.8866 19.2909C14.2626 19.2909 17.0946 18.9999 17.0946 17.6129C17.0946 16.2089 14.2626 15.9139 11.8866 15.9139Z" fill="#2B71F0" />
                            <path d="M5.8856 12.1465C5.8516 12.1465 5.8166 12.1445 5.7816 12.1395C4.0066 11.8905 2.6666 10.3505 2.6626 8.55745C2.6626 6.77245 3.9396 5.26845 5.6976 4.97945C6.1186 4.91345 6.4916 5.19045 6.5596 5.59745C6.6266 6.00645 6.3496 6.39245 5.9416 6.45945C4.9106 6.62845 4.1626 7.51045 4.1626 8.55545C4.1646 9.60545 4.9496 10.5085 5.9886 10.6535C6.3996 10.7105 6.6846 11.0894 6.6276 11.5005C6.5746 11.8755 6.2536 12.1465 5.8856 12.1465Z" fill="#2B71F0" />
                            <path d="M2.645 18.4822C2.733 18.5152 2.823 18.5312 2.912 18.5312C3.214 18.5312 3.499 18.3472 3.613 18.0482C3.761 17.6612 3.566 17.2272 3.179 17.0802C2.5 16.8212 2.5 16.5372 2.5 16.4002C2.5 15.9622 3.057 15.6562 4.155 15.4922C4.564 15.4302 4.847 15.0492 4.786 14.6382C4.724 14.2282 4.346 13.9562 3.933 14.0082C1.509 14.3712 1 15.5102 1 16.4002C1 16.9432 1.214 17.9362 2.645 18.4822Z" fill="#2B71F0" />
                        </svg>

                        }
                        percentage={10} />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px] '>
                    <AdminCard
                        title='Completed Challenges'
                        number={10}
                        icon={<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.0491 15.3608H5.8291C5.4151 15.3608 5.0791 15.0248 5.0791 14.6108C5.0791 14.1968 5.4151 13.8608 5.8291 13.8608H13.0491C13.4631 13.8608 13.7991 14.1968 13.7991 14.6108C13.7991 15.0248 13.4631 15.3608 13.0491 15.3608" fill="#2B71F0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.0491 11.1743H5.8291C5.4151 11.1743 5.0791 10.8383 5.0791 10.4243C5.0791 10.0103 5.4151 9.67432 5.8291 9.67432H13.0491C13.4631 9.67432 13.7991 10.0103 13.7991 10.4243C13.7991 10.8383 13.4631 11.1743 13.0491 11.1743" fill="#2B71F0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.58313 6.99756H5.82812C5.41412 6.99756 5.07812 6.66156 5.07812 6.24756C5.07812 5.83356 5.41412 5.49756 5.82812 5.49756H8.58313C8.99713 5.49756 9.33313 5.83356 9.33313 6.24756C9.33313 6.66156 8.99713 6.99756 8.58313 6.99756" fill="#2B71F0" />
                            <mask id="mask0_5197_3331" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="21">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.333008 0.387207H18.4977V20.297H0.333008V0.387207Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_5197_3331)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.2422 1.88721L5.5532 1.89121C3.2252 1.90521 1.8332 3.34521 1.8332 5.74421V14.9402C1.8332 17.3552 3.2382 18.7972 5.5892 18.7972L13.2782 18.7942C15.6062 18.7802 16.9982 17.3382 16.9982 14.9402V5.74421C16.9982 3.32921 15.5942 1.88721 13.2422 1.88721ZM5.59001 20.2972C2.44601 20.2972 0.333008 18.1442 0.333008 14.9402V5.74421C0.333008 2.51121 2.38001 0.410207 5.54801 0.391207L13.241 0.387207H13.242C16.386 0.387207 18.498 2.54021 18.498 5.74421V14.9402C18.498 18.1722 16.451 20.2742 13.283 20.2942L5.59001 20.2972Z" fill="#2B71F0" />
                            </g>
                        </svg>

                        }
                        percentage={10} />
                    <AdminCard
                        title='Open  Challenges'
                        number={10}
                        icon={<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.0491 15.3608H5.8291C5.4151 15.3608 5.0791 15.0248 5.0791 14.6108C5.0791 14.1968 5.4151 13.8608 5.8291 13.8608H13.0491C13.4631 13.8608 13.7991 14.1968 13.7991 14.6108C13.7991 15.0248 13.4631 15.3608 13.0491 15.3608" fill="#2B71F0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.0491 11.1743H5.8291C5.4151 11.1743 5.0791 10.8383 5.0791 10.4243C5.0791 10.0103 5.4151 9.67432 5.8291 9.67432H13.0491C13.4631 9.67432 13.7991 10.0103 13.7991 10.4243C13.7991 10.8383 13.4631 11.1743 13.0491 11.1743" fill="#2B71F0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.58313 6.99756H5.82812C5.41412 6.99756 5.07812 6.66156 5.07812 6.24756C5.07812 5.83356 5.41412 5.49756 5.82812 5.49756H8.58313C8.99713 5.49756 9.33313 5.83356 9.33313 6.24756C9.33313 6.66156 8.99713 6.99756 8.58313 6.99756" fill="#2B71F0" />
                            <mask id="mask0_5197_3331" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="21">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.333008 0.387207H18.4977V20.297H0.333008V0.387207Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_5197_3331)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.2422 1.88721L5.5532 1.89121C3.2252 1.90521 1.8332 3.34521 1.8332 5.74421V14.9402C1.8332 17.3552 3.2382 18.7972 5.5892 18.7972L13.2782 18.7942C15.6062 18.7802 16.9982 17.3382 16.9982 14.9402V5.74421C16.9982 3.32921 15.5942 1.88721 13.2422 1.88721ZM5.59001 20.2972C2.44601 20.2972 0.333008 18.1442 0.333008 14.9402V5.74421C0.333008 2.51121 2.38001 0.410207 5.54801 0.391207L13.241 0.387207H13.242C16.386 0.387207 18.498 2.54021 18.498 5.74421V14.9402C18.498 18.1722 16.451 20.2742 13.283 20.2942L5.59001 20.2972Z" fill="#2B71F0" />
                            </g>
                        </svg>


                        }
                        percentage={10} />
                    <AdminCard
                        title='Ongoing Challenges'
                        number={10}
                        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8596 13.138H11.8866C14.4066 13.138 16.4556 11.088 16.4556 8.569C16.4556 6.05 14.4066 4 11.8866 4C9.36764 4 7.31864 6.05 7.31864 8.566C7.31364 9.783 7.78264 10.929 8.64064 11.792C9.49664 12.656 10.6396 13.134 11.8596 13.138ZM8.81864 8.569C8.81864 6.877 10.1946 5.5 11.8866 5.5C13.5786 5.5 14.9556 6.877 14.9556 8.569C14.9556 10.262 13.5786 11.638 11.8866 11.638H11.8616C11.0456 11.635 10.2796 11.314 9.70464 10.735C9.12964 10.156 8.81564 9.389 8.81864 8.569Z" fill="#2B71F0" />
                            <path d="M17.1447 11.5005C17.1977 11.8755 17.5187 12.1465 17.8867 12.1465C17.9207 12.1465 17.9557 12.1445 17.9907 12.1395C19.7657 11.8905 21.1067 10.3505 21.1107 8.55551C21.1107 6.77251 19.8337 5.26851 18.0757 4.97951C17.6647 4.91451 17.2817 5.18851 17.2137 5.59751C17.1467 6.00651 17.4237 6.39251 17.8317 6.45951C18.8627 6.62851 19.6107 7.51051 19.6107 8.55351C19.6087 9.60551 18.8237 10.5075 17.7837 10.6535C17.3727 10.7105 17.0877 11.0895 17.1447 11.5005Z" fill="#2B71F0" />
                            <path d="M20.1603 18.0482C20.2743 18.3472 20.5593 18.5312 20.8613 18.5312C20.9503 18.5312 21.0403 18.5152 21.1283 18.4822C22.5583 17.9372 22.7723 16.9442 22.7723 16.4002C22.7723 15.5092 22.2633 14.3712 19.8403 14.0082C19.4273 13.9552 19.0473 14.2282 18.9863 14.6382C18.9253 15.0492 19.2083 15.4302 19.6173 15.4922C20.7153 15.6562 21.2723 15.9622 21.2723 16.4002C21.2723 16.5372 21.2723 16.8222 20.5943 17.0802C20.2073 17.2272 20.0123 17.6612 20.1603 18.0482Z" fill="#2B71F0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.8866 20.7909C10.2276 20.7909 5.17761 20.7909 5.17761 17.5959C5.17761 14.4139 10.2276 14.4139 11.8866 14.4139C13.5456 14.4139 18.5946 14.4139 18.5946 17.6129C18.5946 20.7909 13.7216 20.7909 11.8866 20.7909ZM11.8866 15.9139C9.51061 15.9139 6.67761 16.2059 6.67761 17.5959C6.67761 18.9969 9.51061 19.2909 11.8866 19.2909C14.2626 19.2909 17.0946 18.9999 17.0946 17.6129C17.0946 16.2089 14.2626 15.9139 11.8866 15.9139Z" fill="#2B71F0" />
                            <path d="M5.8856 12.1465C5.8516 12.1465 5.8166 12.1445 5.7816 12.1395C4.0066 11.8905 2.6666 10.3505 2.6626 8.55745C2.6626 6.77245 3.9396 5.26845 5.6976 4.97945C6.1186 4.91345 6.4916 5.19045 6.5596 5.59745C6.6266 6.00645 6.3496 6.39245 5.9416 6.45945C4.9106 6.62845 4.1626 7.51045 4.1626 8.55545C4.1646 9.60545 4.9496 10.5085 5.9886 10.6535C6.3996 10.7105 6.6846 11.0894 6.6276 11.5005C6.5746 11.8755 6.2536 12.1465 5.8856 12.1465Z" fill="#2B71F0" />
                            <path d="M2.645 18.4822C2.733 18.5152 2.823 18.5312 2.912 18.5312C3.214 18.5312 3.499 18.3472 3.613 18.0482C3.761 17.6612 3.566 17.2272 3.179 17.0802C2.5 16.8212 2.5 16.5372 2.5 16.4002C2.5 15.9622 3.057 15.6562 4.155 15.4922C4.564 15.4302 4.847 15.0492 4.786 14.6382C4.724 14.2282 4.346 13.9562 3.933 14.0082C1.509 14.3712 1 15.5102 1 16.4002C1 16.9432 1.214 17.9362 2.645 18.4822Z" fill="#2B71F0" />
                        </svg>

                        }
                        percentage={10} />
                </div>
            </div>
            <div className='flex flex-col gap-[10px] justify-between px-4 py-4'>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='text-[16px] font-[600] text-black'>Recent challenges</h1>
                    <Link href="/admin/challenges" className='flex flex-row gap-[4px] items-center'>
                        <span className="text-[16px] font-[600] text-primary">View All</span>
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.257 11.7229C14.8851 11.0555 14.8851 10.0145 14.257 9.34719L7.88336 2.57521C7.55535 2.22669 7.00691 2.21008 6.6584 2.53809C6.30989 2.8661 6.29327 3.41454 6.62128 3.76305L12.9949 10.535L6.62128 17.307C6.29327 17.6555 6.30989 18.204 6.6584 18.532C7.00692 18.86 7.55535 18.8434 7.88336 18.4949L14.257 11.7229Z" fill="#2B71F0" />
                        </svg>
                    </Link>
                </div>

                <div className='w-full flex flex-row'>
                    {challengeLoading ? (
                        <div className='w-full flex flex-row items-center justify-center py-20'>
                            <span className='text-[14px] font-[400]'>Loading...</span>

                        </div>

                    ) : (
                        <>
                            {challenge.data.length == 0 ? (
                                <div className='w-full flex flex-row items-center justify-center py-20'>
                                    <div className='flex flex-col gap-[10px] items-center bg-white p-6 px-10 rounded-[4px]'>
                                        <span className='font-[500]'>There Is No Challenges yet</span>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <Carousel
                                        opts={{
                                            align: "start",
                                        }}
                                        className="w-full"
                                    >
                                        <CarouselContent>
                                            {challenge.data.map((data: any, index: number) => (
                                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                                    <Card className='w-full p-4'>
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

                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                    </Carousel>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AdminHome