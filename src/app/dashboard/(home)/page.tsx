"use client"
import HomeCard from '@/components/reusable/HomeCard'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { challenges } from '@/lib/data'
import Image from 'next/image'
import { useChallengeQuery } from '@/lib/redux/slices/ChallengeSlice'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const Dashaboard = () => {
  const { data: challenge, isLoading: challengeLoading } = useChallengeQuery({})
  const { data: userProfile, status } = useSession()
  console.log("user profile", userProfile)
  return (
    <div className='flex flex-col gap-[10px] items-center px-4 h-full py-4 w-full'>
      <div className='flex flex-col sm:flex-row items-center gap-[20px] justify-between w-full'>
        <div className='flex flex-col gap-[4px]'>
          <h1 className='text-[24px] font-bold'>Welcome Back {userProfile?.user.name}</h1>
          <span className='text-[14px] text-[#475367]'>Build Work Experience through Skills Challenges</span>
        </div>
        <Button className='flex flex-row gap-[10px] items-center h-[50px]'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 10.1413C10.6699 10.1413 9.58887 11.2233 9.58887 12.5533C9.58887 13.8823 10.6699 14.9633 11.9999 14.9633C13.3299 14.9633 14.4119 13.8823 14.4119 12.5533C14.4119 11.2233 13.3299 10.1413 11.9999 10.1413ZM11.9999 16.4633C9.84287 16.4633 8.08887 14.7093 8.08887 12.5533C8.08887 10.3963 9.84287 8.6413 11.9999 8.6413C14.1569 8.6413 15.9119 10.3963 15.9119 12.5533C15.9119 14.7093 14.1569 16.4633 11.9999 16.4633Z" fill="white" />
            <mask id="mask0_7_19914" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="2" y="4" width="20" height="17">
              <path fillRule="evenodd" clipRule="evenodd" d="M2 4.50018H21.9998V20.6052H2V4.50018Z" fill="white" />
            </mask>
            <g mask="url(#mask0_7_19914)">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.56975 12.5525C5.42975 16.6615 8.56275 19.1045 11.9998 19.1055C15.4368 19.1045 18.5697 16.6615 20.4298 12.5525C18.5697 8.44451 15.4368 6.00151 11.9998 6.00051C8.56375 6.00151 5.42975 8.44451 3.56975 12.5525ZM12.0017 20.6055H11.9978H11.9967C7.86075 20.6025 4.14675 17.7035 2.06075 12.8485C1.97975 12.6595 1.97975 12.4455 2.06075 12.2565C4.14675 7.40251 7.86175 4.50351 11.9967 4.50051C11.9987 4.49951 11.9987 4.49951 11.9998 4.50051C12.0017 4.49951 12.0017 4.49951 12.0028 4.50051C16.1388 4.50351 19.8527 7.40251 21.9387 12.2565C22.0208 12.4455 22.0208 12.6595 21.9387 12.8485C19.8537 17.7035 16.1388 20.6025 12.0028 20.6055H12.0017Z" fill="white" />
            </g>
          </svg>
          <span>View Profile</span>
        </Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] items-center w-full'>
        <HomeCard title='Completed Challenges' description='05' icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.7161 16.9736H8.49609C8.08209 16.9736 7.74609 16.6376 7.74609 16.2236C7.74609 15.8096 8.08209 15.4736 8.49609 15.4736H15.7161C16.1301 15.4736 16.4661 15.8096 16.4661 16.2236C16.4661 16.6376 16.1301 16.9736 15.7161 16.9736Z" fill="#2B71F0" />
          <path fillRule="evenodd" clipRule="evenodd" d="M15.7161 12.787H8.49609C8.08209 12.787 7.74609 12.451 7.74609 12.037C7.74609 11.623 8.08209 11.287 8.49609 11.287H15.7161C16.1301 11.287 16.4661 11.623 16.4661 12.037C16.4661 12.451 16.1301 12.787 15.7161 12.787Z" fill="#2B71F0" />
          <path fillRule="evenodd" clipRule="evenodd" d="M11.2501 8.61023H8.49512C8.08112 8.61023 7.74512 8.27423 7.74512 7.86023C7.74512 7.44623 8.08112 7.11023 8.49512 7.11023H11.2501C11.6641 7.11023 12.0001 7.44623 12.0001 7.86023C12.0001 8.27423 11.6641 8.61023 11.2501 8.61023Z" fill="#2B71F0" />
          <mask id="mask0_7_19926" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="2" width="19" height="20">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 2.00006H21.1647V21.9099H3V2.00006Z" fill="white" />
          </mask>
          <g mask="url(#mask0_7_19926)">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9092 3.49982L8.22019 3.50382C5.89219 3.51782 4.50019 4.95782 4.50019 7.35682V16.5528C4.50019 18.9678 5.90519 20.4098 8.25619 20.4098L15.9452 20.4068C18.2732 20.3928 19.6652 18.9508 19.6652 16.5528V7.35682C19.6652 4.94182 18.2612 3.49982 15.9092 3.49982ZM8.257 21.9098C5.113 21.9098 3 19.7568 3 16.5528V7.35682C3 4.12382 5.047 2.02282 8.215 2.00382L15.908 1.99982H15.909C19.053 1.99982 21.165 4.15282 21.165 7.35682V16.5528C21.165 19.7848 19.118 21.8868 15.95 21.9068L8.257 21.9098Z" fill="#2B71F0" />
          </g>
        </svg>
        } />

        <HomeCard title='Open Challenges' description='05' icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.7161 16.9736H8.49609C8.08209 16.9736 7.74609 16.6376 7.74609 16.2236C7.74609 15.8096 8.08209 15.4736 8.49609 15.4736H15.7161C16.1301 15.4736 16.4661 15.8096 16.4661 16.2236C16.4661 16.6376 16.1301 16.9736 15.7161 16.9736Z" fill="#2B71F0" />
          <path fillRule="evenodd" clipRule="evenodd" d="M15.7161 12.787H8.49609C8.08209 12.787 7.74609 12.451 7.74609 12.037C7.74609 11.623 8.08209 11.287 8.49609 11.287H15.7161C16.1301 11.287 16.4661 11.623 16.4661 12.037C16.4661 12.451 16.1301 12.787 15.7161 12.787Z" fill="#2B71F0" />
          <path fillRule="evenodd" clipRule="evenodd" d="M11.2501 8.61023H8.49512C8.08112 8.61023 7.74512 8.27423 7.74512 7.86023C7.74512 7.44623 8.08112 7.11023 8.49512 7.11023H11.2501C11.6641 7.11023 12.0001 7.44623 12.0001 7.86023C12.0001 8.27423 11.6641 8.61023 11.2501 8.61023Z" fill="#2B71F0" />
          <mask id="mask0_7_19926" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="2" width="19" height="20">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 2.00006H21.1647V21.9099H3V2.00006Z" fill="white" />
          </mask>
          <g mask="url(#mask0_7_19926)">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9092 3.49982L8.22019 3.50382C5.89219 3.51782 4.50019 4.95782 4.50019 7.35682V16.5528C4.50019 18.9678 5.90519 20.4098 8.25619 20.4098L15.9452 20.4068C18.2732 20.3928 19.6652 18.9508 19.6652 16.5528V7.35682C19.6652 4.94182 18.2612 3.49982 15.9092 3.49982ZM8.257 21.9098C5.113 21.9098 3 19.7568 3 16.5528V7.35682C3 4.12382 5.047 2.02282 8.215 2.00382L15.908 1.99982H15.909C19.053 1.99982 21.165 4.15282 21.165 7.35682V16.5528C21.165 19.7848 19.118 21.8868 15.95 21.9068L8.257 21.9098Z" fill="#2B71F0" />
          </g>
        </svg>
        } />
        <HomeCard title='Ongoing Challenges' description='05' icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.7161 16.9736H8.49609C8.08209 16.9736 7.74609 16.6376 7.74609 16.2236C7.74609 15.8096 8.08209 15.4736 8.49609 15.4736H15.7161C16.1301 15.4736 16.4661 15.8096 16.4661 16.2236C16.4661 16.6376 16.1301 16.9736 15.7161 16.9736Z" fill="#2B71F0" />
          <path fillRule="evenodd" clipRule="evenodd" d="M15.7161 12.787H8.49609C8.08209 12.787 7.74609 12.451 7.74609 12.037C7.74609 11.623 8.08209 11.287 8.49609 11.287H15.7161C16.1301 11.287 16.4661 11.623 16.4661 12.037C16.4661 12.451 16.1301 12.787 15.7161 12.787Z" fill="#2B71F0" />
          <path fillRule="evenodd" clipRule="evenodd" d="M11.2501 8.61023H8.49512C8.08112 8.61023 7.74512 8.27423 7.74512 7.86023C7.74512 7.44623 8.08112 7.11023 8.49512 7.11023H11.2501C11.6641 7.11023 12.0001 7.44623 12.0001 7.86023C12.0001 8.27423 11.6641 8.61023 11.2501 8.61023Z" fill="#2B71F0" />
          <mask id="mask0_7_19926" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="2" width="19" height="20">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 2.00006H21.1647V21.9099H3V2.00006Z" fill="white" />
          </mask>
          <g mask="url(#mask0_7_19926)">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9092 3.49982L8.22019 3.50382C5.89219 3.51782 4.50019 4.95782 4.50019 7.35682V16.5528C4.50019 18.9678 5.90519 20.4098 8.25619 20.4098L15.9452 20.4068C18.2732 20.3928 19.6652 18.9508 19.6652 16.5528V7.35682C19.6652 4.94182 18.2612 3.49982 15.9092 3.49982ZM8.257 21.9098C5.113 21.9098 3 19.7568 3 16.5528V7.35682C3 4.12382 5.047 2.02282 8.215 2.00382L15.908 1.99982H15.909C19.053 1.99982 21.165 4.15282 21.165 7.35682V16.5528C21.165 19.7848 19.118 21.8868 15.95 21.9068L8.257 21.9098Z" fill="#2B71F0" />
          </g>
        </svg>
        } />
      </div>

      <div className='flex flex-col gap-[20px] w-full pt-4'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-[16px] font-[600] text-black'>Recent challenges</h1>
          <div className='flex flex-row gap-[4px] items-center'>
            <a href="" className="text-[16px] font-[600] text-primary">View All</a>
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.257 11.7229C14.8851 11.0555 14.8851 10.0145 14.257 9.34719L7.88336 2.57521C7.55535 2.22669 7.00691 2.21008 6.6584 2.53809C6.30989 2.8661 6.29327 3.41454 6.62128 3.76305L12.9949 10.535L6.62128 17.307C6.29327 17.6555 6.30989 18.204 6.6584 18.532C7.00692 18.86 7.55535 18.8434 7.88336 18.4949L14.257 11.7229Z" fill="#2B71F0" />
            </svg>
          </div>
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
                      {challenge?.data?.map((data: any, index: number) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
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
                                    href={`/dashboard/challenge&hackthons/details/${data.id}`}
                                    className="block w-full text-center bg-[#4285F4] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
                                  >
                                    View Challenge
                                  </Link>
                                </div>
                              </div>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </>
              )}
            </>
          )}
        </div>
      </div >
    </div >
  )
}

export default Dashaboard