"use client"
import { ConfimrDialog } from '@/components/reusable/confirmDialog';
import { Button } from '@/components/ui/button';
import { useDeleteChallengeMutation, useSingleChallengeQuery } from '@/lib/redux/slices/ChallengeSlice';
import Image from 'next/image'
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

interface contactComponentProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ContactComponent = ({ title, description, icon }: contactComponentProps) => {

    return (
        <div className='flex flex-row gap-[10px] items-center'>
            <div className='p-4 rounded-full bg-[#D0E0FC] '>
                {icon}
            </div>
            <div className='flex flex-col'>
                <h1 className='text-[14px] font-[600] text-[#101928]'>{title}</h1>
                <span className='text-[14px] text-[#475367] font-[400]'>{description}</span>
            </div>
        </div>
    )
}

const ChallengeDetails = () => {
    const router = useRouter();
    const params = useParams();
    const id = params?.id;
    const { data: singleChallenge, isLoading, isFetching, error, refetch } = useSingleChallengeQuery(id!);
    const [deleteChallenge, { isLoading: deleteing, isError }] = useDeleteChallengeMutation()
    const [isConfirm, setIsConfirm] = useState<boolean>(false)

    const deleteChallengeFunc = async () => {
        try {
            const response = await deleteChallenge(id!).unwrap()
            toast.success(response.data.message)
            router.push('/admin/challenge&hackthons')

        } catch (error: any) {
            toast.error(error?.data.message)
        }

    }

    return (
        <div className='flex flex-col gap-[20px] items-center  h-full w-full'>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                </div>

            ) : (
                <>
                    {!singleChallenge || error ? (
                        <div className='w-full py-10 flex justify-center h-full items-center'>No challenge found</div>

                    ) : (
                        <>

                            <div className='flex sm:flex-row flex-col gap-[20px] items-center p-4 w-full bg-white border-t-[2px] border-b-[2px] border-[#E4E7EC]'>
                                <div onClick={() => router.back()} className='flex flex-row gap-[10px] items-center cursor-pointer font-[500]'>
                                    <div className='border-[1.5px] p-2 cursor-pointer hover:bg-[#F0F2F5] rounded-[6px]'>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.14645 6.35355C0.951185 6.15829 0.951185 5.84171 1.14645 5.64645L3.14645 3.64645C3.34171 3.45118 3.65829 3.45118 3.85355 3.64645C4.04882 3.84171 4.04882 4.15829 3.85355 4.35355L2.70711 5.5L10.5 5.5C10.7761 5.5 11 5.72386 11 6C11 6.27614 10.7761 6.5 10.5 6.5L2.70711 6.5L3.85355 7.64645C4.04882 7.84171 4.04882 8.15829 3.85355 8.35355C3.65829 8.54882 3.34171 8.54882 3.14645 8.35355L1.14645 6.35355Z" fill="black" />
                                        </svg>
                                    </div>
                                    <span className='text-[16px] text-[#667185]'>Go Back</span>
                                </div>
                                <div className='flex flex-row gap-[5px] sm:gap-[10px] items-center'>
                                    <span className='text-[12px] sm:text-[16px] text-[#98A2B3]'>Challenges & hackathon</span>
                                    <span>/</span>
                                    <span className='text-[12px] sm:text-[16px] font-[600] text-[#2B71F0]'>{singleChallenge?.data?.title}</span>
                                </div>
                            </div>

                            <div className='w-full flex flex-col md:flex-row gap-[20px] px-4'>
                                <div className='w-full md:w-[60%] flex flex-col bg-white rounded-[12px] p-4 border-[2px] border-[#E4E7EC] gap-[20px]'>
                                    <div className='flex h-[40vh] flex-row items-center justify-center  bg-primary rounded-[10px] w-full py-14 px-4'>
                                        <Image src={`/image/umurava.png`} alt={``} width={1000} height={1000} className='w-[400px] object-cover' />
                                    </div>
                                    <div className='flex flex-col gap-[10px]'>

                                        <h1 className='text-[20px] font-[600] text-[#101928]'>Project Brief : {singleChallenge?.data?.title}</h1>
                                        <span className='text-[14px] text-[#475367]'>
                                            {singleChallenge?.data?.projectDescription}
                                        </span>
                                    </div>

                                    <div className='flex flex-col gap-[10px]'>
                                        <h1 className='text-[20px] font-[600] text-[#101928]'>Tasks:</h1>
                                        <div className='flex flex-col gap-[10px] w-full'>
                                            <h1 className='text-[20px] font-[600] text-[#101928]'>Product Requirements</h1>
                                            <div className='flex flex-col gap-[5px] px-4'>
                                                {singleChallenge?.data?.skills.map((skill: string, index: number) => (
                                                    <li className='text-[14px] text-[#475367] font-[400]' key={index}>{skill}</li>
                                                ))}
                                                {singleChallenge?.data?.seniority.map((level: string, index: number) => (
                                                    <li className='text-[14px] text-[#475367] font-[400]' key={index}>{level} level required</li>
                                                ))}
                                                <li className='text-[14px] text-[#475367] font-[400]'> {singleChallenge?.data?.projectBrief}</li>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[10px] w-full'>
                                            <h1 className='text-[20px] font-[600] text-[#101928]'>Product Design:</h1>
                                            <ul className="list-disc list-inside text-gray-700  px-6">
                                                <li><strong>Overview:</strong> {singleChallenge?.data?.projectBrief}</li>
                                                <li><strong>Key Tasks:</strong> {singleChallenge?.data?.projectTask}</li>
                                                <li><strong>Skills Used:</strong> {singleChallenge?.data?.skills.join(", ")}</li>
                                                <li><strong>Experience Level:</strong> {singleChallenge?.data?.seniority.join(", ")}</li>
                                                <li><strong>Category:</strong> {singleChallenge?.data?.category}</li>
                                            </ul>
                                        </div>
                                        <div className='flex flex-col gap-[10px] w-full'>
                                            <h1 className='text-[20px] font-[600] text-[#101928]'>Deliverables:</h1>
                                            <div className='flex flex-col gap-[5px] px-4'>
                                                <li className='text-[14px] text-[#475367] font-[400]'>{singleChallenge?.data?.projectTask} </li>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[10px] w-full'>
                                            <h1 className='text-[20px] font-[600] text-[#101928]'>NOTE:</h1>
                                            <div className='flex flex-col gap-[5px] px-4'>
                                                <li className='text-[14px] text-[#475367] font-[400]'>Find Product Requirements Summary and Features Description for Saway Pay HERE </li>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='w-full md:w-[40%] flex flex-col gap-[20px]'>
                                    <div className='w-full flex flex-col bg-white rounded-[12px] p-4 border-[2px] border-[#E4E7EC] gap-[20px]'>
                                        <h1 className='text-[20px] font-[600] text-[#101928]'>Key Instructions:</h1>
                                        <span className='text-[14px] text-[#475367] font-[400]'>You are free to schedule the clarification call with the team via this</span>
                                        <div className='flex flex-col gap-[10px]'>
                                            <ContactComponent
                                                title='talent@umurava.africa'
                                                description='Contact Email'
                                                icon={<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.9024 6.8512L12.4591 10.4642C11.6196 11.1302 10.4384 11.1302 9.59895 10.4642L5.11816 6.8512" stroke="#2B71F0" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49882 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49882 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z" stroke="#2B71F0" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>} />
                                            <ContactComponent
                                                title={singleChallenge?.data?.category}
                                                description='Challenge Category'
                                                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5" d="M3 12C3 15.7712 3 19.6569 4.31802 20.8284C5.63604 22 7.75736 22 12 22C16.2426 22 18.364 22 19.682 20.8284C21 19.6569 21 15.7712 21 12" stroke="#2B71F0" strokeWidth="1.5" />
                                                    <path d="M14.6603 14.2019L20.8579 12.3426C21.2688 12.2194 21.4743 12.1577 21.6264 12.0355C21.7592 11.9288 21.8626 11.7898 21.9266 11.6319C22 11.4511 22 11.2366 22 10.8077C22 9.12027 22 8.27658 21.6703 7.63268C21.3834 7.07242 20.9276 6.61659 20.3673 6.32971C19.7234 6 18.8797 6 17.1923 6H6.80765C5.12027 6 4.27658 6 3.63268 6.32971C3.07242 6.61659 2.61659 7.07242 2.32971 7.63268C2 8.27658 2 9.12027 2 10.8077C2 11.2366 2 11.4511 2.07336 11.6319C2.13743 11.7898 2.24079 11.9288 2.37363 12.0355C2.52574 12.1577 2.73118 12.2194 3.14206 12.3426L9.33968 14.2019" stroke="#2B71F0" strokeWidth="1.5" />
                                                    <path d="M14 12.5H10C9.72386 12.5 9.5 12.7239 9.5 13V15.1615C9.5 15.3659 9.62448 15.5498 9.8143 15.6257L10.5144 15.9058C11.4681 16.2872 12.5319 16.2872 13.4856 15.9058L14.1857 15.6257C14.3755 15.5498 14.5 15.3659 14.5 15.1615V13C14.5 12.7239 14.2761 12.5 14 12.5Z" stroke="#2B71F0" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path opacity="0.5" d="M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4" stroke="#2B71F0" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                                } />
                                            <ContactComponent
                                                title={singleChallenge?.data?.duration}
                                                description='Duration'
                                                icon={<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.6668 8.90442H0.842773C0.428773 8.90442 0.0927734 8.56842 0.0927734 8.15442C0.0927734 7.74042 0.428773 7.40442 0.842773 7.40442H18.6668C19.0808 7.40442 19.4168 7.74042 19.4168 8.15442C19.4168 8.56842 19.0808 8.90442 18.6668 8.90442Z" fill="#2B71F0" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2013 12.8097C13.7873 12.8097 13.4473 12.4737 13.4473 12.0597C13.4473 11.6457 13.7783 11.3097 14.1923 11.3097H14.2013C14.6153 11.3097 14.9513 11.6457 14.9513 12.0597C14.9513 12.4737 14.6153 12.8097 14.2013 12.8097Z" fill="#2B71F0" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.76377 12.8097C9.34977 12.8097 9.00977 12.4737 9.00977 12.0597C9.00977 11.6457 9.34077 11.3097 9.75477 11.3097H9.76377C10.1778 11.3097 10.5138 11.6457 10.5138 12.0597C10.5138 12.4737 10.1778 12.8097 9.76377 12.8097Z" fill="#2B71F0" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.31652 12.8097C4.90252 12.8097 4.56152 12.4737 4.56152 12.0597C4.56152 11.6457 4.89352 11.3097 5.30752 11.3097H5.31652C5.73052 11.3097 6.06652 11.6457 6.06652 12.0597C6.06652 12.4737 5.73052 12.8097 5.31652 12.8097Z" fill="#2B71F0" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2013 16.6964C13.7873 16.6964 13.4473 16.3604 13.4473 15.9464C13.4473 15.5324 13.7783 15.1964 14.1923 15.1964H14.2013C14.6153 15.1964 14.9513 15.5324 14.9513 15.9464C14.9513 16.3604 14.6153 16.6964 14.2013 16.6964Z" fill="#2B71F0" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.76377 16.6964C9.34977 16.6964 9.00977 16.3604 9.00977 15.9464C9.00977 15.5324 9.34077 15.1964 9.75477 15.1964H9.76377C10.1778 15.1964 10.5138 15.5324 10.5138 15.9464C10.5138 16.3604 10.1778 16.6964 9.76377 16.6964Z" fill="#2B71F0" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.31652 16.6964C4.90252 16.6964 4.56152 16.3604 4.56152 15.9464C4.56152 15.5324 4.89352 15.1964 5.30752 15.1964H5.31652C5.73052 15.1964 6.06652 15.5324 6.06652 15.9464C6.06652 16.3604 5.73052 16.6964 5.31652 16.6964Z" fill="#2B71F0" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.7939 4.79112C13.3799 4.79112 13.0439 4.45512 13.0439 4.04112V0.750122C13.0439 0.336122 13.3799 0.00012207 13.7939 0.00012207C14.2079 0.00012207 14.5439 0.336122 14.5439 0.750122V4.04112C14.5439 4.45512 14.2079 4.79112 13.7939 4.79112Z" fill="#2B71F0" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.71484 4.79112C5.30084 4.79112 4.96484 4.45512 4.96484 4.04112V0.750122C4.96484 0.336122 5.30084 0.00012207 5.71484 0.00012207C6.12884 0.00012207 6.46484 0.336122 6.46484 0.750122V4.04112C6.46484 4.45512 6.12884 4.79112 5.71484 4.79112Z" fill="#2B71F0" />
                                                    <mask id="mask0_5186_2010" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="1" width="20" height="21">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 1.57922H19.5V21.5001H0V1.57922Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_5186_2010)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.521 3.07922C2.928 3.07922 1.5 4.46222 1.5 6.97322V16.0222C1.5 18.5882 2.928 20.0002 5.521 20.0002H13.979C16.572 20.0002 18 18.6142 18 16.0982V6.97322C18.004 5.73822 17.672 4.77822 17.013 4.11822C16.335 3.43822 15.29 3.07922 13.988 3.07922H5.521ZM13.979 21.5002H5.521C2.116 21.5002 0 19.4012 0 16.0222V6.97322C0 3.64522 2.116 1.57922 5.521 1.57922H13.988C15.697 1.57922 17.11 2.09122 18.075 3.05822C19.012 3.99922 19.505 5.35222 19.5 6.97522V16.0982C19.5 19.4302 17.384 21.5002 13.979 21.5002Z" fill="#2B71F0" />
                                                    </g>
                                                </svg>

                                                } />
                                            <ContactComponent
                                                title={`${singleChallenge?.data?.moneyPrize?.toLocaleString()} Rwf`}
                                                description='Money Prize'
                                                icon={<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12.8989" r="10" stroke="#2B71F0" strokeWidth="1.5" />
                                                    <path d="M12 17.8989V18.3989V18.8989" stroke="#2B71F0" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M12 6.89893V7.39893V7.89893" stroke="#2B71F0" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M15 10.3989C15 9.01821 13.6569 7.89893 12 7.89893C10.3431 7.89893 9 9.01821 9 10.3989C9 11.7796 10.3431 12.8989 12 12.8989C13.6569 12.8989 15 14.0182 15 15.3989C15 16.7796 13.6569 17.8989 12 17.8989C10.3431 17.8989 9 16.7796 9 15.3989" stroke="#2B71F0" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>


                                                } />
                                        </div>
                                        <div className='flex flex-row gap-[10px] items-center'>
                                            <Button onClick={() => setIsConfirm(true)} className='h-[50px] w-full bg-red-500'>{deleteing ? "Loading..." : "Delete"}</Button>
                                            <Link href={`/admin/challenge&hackthons/edit-challenge/${singleChallenge.data.id}`} className='h-[50px] bg-primary rounded-[8px] flex items-center justify-center text-white w-full'>Edit</Link>
                                        </div>

                                    </div>
                                    <div className='w-full flex flex-col pb-4 bg-white rounded-[12px] border-[2px] border-[#E4E7EC] gap-[20px]'>
                                        <div className='flex flex-row gap-[4px] items-center p-4 border-b'>
                                            <h1 className='text-[20px] font-[600] text-[#101928]'>Participants</h1>
                                            <span className='px-2 bg-primary text-white rounded-[12px]'>250</span>
                                        </div>
                                        <div className='flex flex-row gap-[10px] items-center px-4 border-b pb-2'>
                                            <div className='w-[50px] h-[50px] bg-primary rounded-full'></div>
                                            <div className='flex flex-col'>
                                                <h1 className='text-[16px] font-[600] text-[#101928]'>Hirwa Sh</h1>
                                                <p className='text-[14px] font-[400] text-[#667085]'>Product Designer</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <div className='flex flex-row gap-[10px] items-end border-b px-6 pb-2'>
                                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="1" y="0.833496" width="11" height="11" rx="5.5" fill="#04802E" />
                                                    <rect x="1" y="0.833496" width="11" height="11" rx="5.5" stroke="white" />
                                                </svg>
                                                <div className='flex flex-col'>
                                                    <h1 className='text-[16px] font-[600] text-[#101928]'>Christian mMnzi</h1>
                                                    <p className='text-[14px] font-[400] text-[#667085]'>UI/UX Designer</p>

                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-row gap-[10px] items-center px-4'>
                                            <Button className='h-[50px] w-full'>View All</Button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </>
                    )}
                </>
            )}

            <ConfimrDialog open={isConfirm} setOpen={setIsConfirm} confirmFunc={deleteChallengeFunc} title='Are you sure you want to delete this challenge?' description="once you delete this challenge you can't bring back again" />

        </div>
    )
}

export default ChallengeDetails