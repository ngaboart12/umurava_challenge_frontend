"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import InputField from '@/components/reusable/Input'
import { Button } from '@/components/ui/button';
import { useParams, useRouter } from 'next/navigation';
import * as Yup from "yup"
import { useFormik } from 'formik';
import { useCreateChallengeMutation, useSingleChallengeQuery, useUpdateChallengeMutation } from '@/lib/redux/slices/ChallengeSlice';
import { toast } from 'sonner';

const ChallengeValidationSchema = Yup.object({
    title: Yup.string().required('Challenge Name is required'),
    // contactEmail: Yup.string().required('Challenge Name is required').email("Invalid Email"),
    duration: Yup.string().required('Duration is required'),
    deadline: Yup.date().required('Deadline is required'),
    moneyPrize: Yup.number().required('Money Prize is required'),
    projectDescription: Yup.string().required('Project Description is required'),
    projectBrief: Yup.string().required('Project Brief is required'),
    projectTask: Yup.string().required('Project Tasks are required'),
    category: Yup.string().required('Category is required'),
    skills: Yup.array().min(1, "sills is required"),
    seniority: Yup.array().required('Seniority level is required'),
    status: Yup.string().required('Status is required'),
});

const EditChallenge = () => {
    const [title, setChallengeName] = useState("");
    const router = useRouter();
    const params = useParams()
    const id = params?.challenge;
    const { data: singleChallenge, isLoading: singleLoading, isFetching, error } = useSingleChallengeQuery(id!);
    const [updateChallenge, { isLoading }] = useUpdateChallengeMutation()


    const challengeFormik = useFormik({
        initialValues: {
            title: '',
            deadline: '',
            duration: '',
            moneyPrize: '',
            // contactEmail: '',
            projectDescription: '',
            projectBrief: '',
            projectTask: '',
            category: '',
            skills: [],
            seniority: [],
            status: ''
        },
        validationSchema: ChallengeValidationSchema,
        onSubmit: async (values) => {
            try {
                const data = {
                        title: values.title,
                        deadline: values.deadline,
                        duration: values.duration,
                        moneyPrize: values.moneyPrize,
                        projectDescription: values.projectDescription,
                        projectBrief: values.projectBrief,
                        projectTask: values.projectTask,
                        category: values.category,
                        skills: values.skills,
                        seniority: values.seniority,
                        status: values.status,
                }

                await updateChallenge({ id, data }).unwrap();
                toast.success("Edit challenge successfully");
                setTimeout(() => {
                    window.location.href = `/admin/challenge&hackthons/details/${id}`
                }, 1000)
            } catch (error: any) {
                toast.error(error?.data.message || "Something went wrong");
            }
        }
    });

    useEffect(() => {
        if (singleChallenge) {
            challengeFormik.setValues(singleChallenge.data)
        }
    }, [singleChallenge])


    return (
        <div className='flex flex-col gap-[20px] items-center h-full w-full'>
            <div className='flex flex-row gap-[20px] items-center p-4 w-full bg-white border-t-[2px] border-b-[2px] border-[#E4E7EC]'>
                <div onClick={() => router.back()} className='flex flex-row gap-[10px] items-center cursor-pointer font-[500]'>
                    <div className='border-[1.5px] p-2 cursor-pointer hover:bg-[#F0F2F5] rounded-[6px]'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.14645 6.35355C0.951185 6.15829 0.951185 5.84171 1.14645 5.64645L3.14645 3.64645C3.34171 3.45118 3.65829 3.45118 3.85355 3.64645C4.04882 3.84171 4.04882 4.15829 3.85355 4.35355L2.70711 5.5L10.5 5.5C10.7761 5.5 11 5.72386 11 6C11 6.27614 10.7761 6.5 10.5 6.5L2.70711 6.5L3.85355 7.64645C4.04882 7.84171 4.04882 8.15829 3.85355 8.35355C3.65829 8.54882 3.34171 8.54882 3.14645 8.35355L1.14645 6.35355Z" fill="black" />
                        </svg>
                    </div>
                    <span className='text-[16px] text-[#667185]'>Go Back</span>
                </div>
                <div className='flex flex-row gap-[10px] items-center'>
                    <span className='text-[16px] text-[#98A2B3]'>Challenges & hackathon</span>
                    <span>/</span>
                    <span className='text-[16px] font-[600] text-[#2B71F0]'>Create New Challenge</span>
                </div>
            </div>
            <div className='flex flex-col w-[90%] sm:w-[80%] lg:w-1/2 gap-[20px] p-4 bg-[white] rounded-[12px] border-[2px] border-[#E4E7EC]'>
                <div className='flex flex-col gap-[10px] text-center'>
                    <h1 className='text-[20px] font-[600] text-[#1A1A21]'>Create New Challenge</h1>
                    <span className='text-[14px] text-[#667185]'>Fill out these details to build your challenge</span>
                </div>
                <form onSubmit={challengeFormik.handleSubmit} className='flex flex-col gap-[20px]'>
                    <InputField
                        label='Challenge Name'
                        placeholder='Enter Challenge Name'
                        type='text'
                        name='title'
                        value={challengeFormik.values.title}
                        onChange={challengeFormik.handleChange}
                        error={challengeFormik.touched.title && challengeFormik.errors.title ? challengeFormik.errors.title : ""}
                    />
                    {/* <InputField
                        label='Contact Email'
                        placeholder='Enter Contact Email'
                        type='email'
                        name='contactEmail'
                        value={challengeFormik.values.contactEmail}
                        onChange={challengeFormik.handleChange}
                        error={challengeFormik.touched.contactEmail && challengeFormik.errors.contactEmail ? challengeFormik.errors.contactEmail : ""}
                    /> */}
                    <div className='grid grid-cols-2 gap-[20px]'>
                        <InputField
                            label='Deadline'
                            placeholder='Date'
                            type='date'
                            name='deadline'
                            value={challengeFormik.values.deadline}
                            onChange={challengeFormik.handleChange}
                            error={challengeFormik.touched.deadline && challengeFormik.errors.deadline ? challengeFormik.errors.deadline : ""}
                        />
                        <InputField
                            label='Duration'
                            placeholder='Duration'
                            type='text'
                            name='duration'
                            value={challengeFormik.values.duration}
                            onChange={challengeFormik.handleChange}
                            error={challengeFormik.touched.duration && challengeFormik.errors.duration ? challengeFormik.errors.duration : ""}
                        />
                        <InputField
                            label='Money Prize'
                            placeholder='Prize'
                            type='number'
                            name='moneyPrize'
                            value={challengeFormik.values.moneyPrize}
                            onChange={challengeFormik.handleChange}
                            error={challengeFormik.touched.moneyPrize && challengeFormik.errors.moneyPrize ? challengeFormik.errors.moneyPrize : ""}
                        />
                        <InputField
                            label='Category'
                            placeholder='Category'
                            type='text'
                            name='category'
                            value={challengeFormik.values.category}
                            onChange={challengeFormik.handleChange}
                            error={challengeFormik.touched.category && challengeFormik.errors.category ? challengeFormik.errors.category : ""}
                        />
                    </div>
                    <InputField
                        label='Skills'
                        placeholder='Enter Skills'
                        type='text'
                        name='skills'
                        value={challengeFormik.values.skills.join(", ")}
                        onChange={(e: any) => {
                            challengeFormik.setFieldValue('skills', e.target.value.split(',').map((skill: any) => skill.trim()));
                        }}
                        error={challengeFormik.touched.skills && challengeFormik.errors.skills ? challengeFormik.errors.skills[0] : ""}
                    />
                    <InputField
                        label='Seniority'
                        placeholder='Enter Seniority'
                        type='text'
                        name='seniority'
                        value={challengeFormik.values.seniority.join(", ")}
                        onChange={(e: any) => {
                            challengeFormik.setFieldValue('seniority', e.target.value.split(',').map((level: any) => level.trim()));
                        }}
                        error={challengeFormik.touched.seniority && challengeFormik.errors.seniority ? challengeFormik.errors.seniority[0] : ""}
                    />
                    <InputField
                        label='Status'
                        placeholder='Enter Status'
                        type='text'
                        name='status'
                        value={challengeFormik.values.status}
                        onChange={challengeFormik.handleChange}
                        error={challengeFormik.touched.status && challengeFormik.errors.status ? challengeFormik.errors.status : ""}
                    />
                    <div className='flex flex-col gap-[10px]'>
                        <label htmlFor='projectDescription' className='text-[14px] font-[500] text-[#1A1A21]'>Project Description</label>
                        <textarea
                            className='w-full outline-[1.5px] outline-[#FA9874] p-3 border-[1px] border-[#D0D5DD] rounded-[8px] text-[14px] font-[400] text-[#667185]'
                            name='projectDescription'
                            placeholder='Enter Text Here'
                            value={challengeFormik.values.projectDescription}
                            onChange={challengeFormik.handleChange}
                        />
                        {challengeFormik.touched.projectDescription && challengeFormik.errors.projectDescription ? (
                            <div className='text-red-500 text-[12px]'>{challengeFormik.errors.projectDescription}</div>
                        ) : null}
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <label htmlFor='projectBrief' className='text-[14px] font-[500] text-[#1A1A21]'>Project Brief</label>
                        <textarea
                            className='w-full outline-[1.5px] outline-[#FA9874] p-3 border-[1px] border-[#D0D5DD] rounded-[8px] text-[14px] font-[400] text-[#667185]'
                            name='projectBrief'
                            placeholder='Enter Text Here'
                            value={challengeFormik.values.projectBrief}
                            onChange={challengeFormik.handleChange}
                        />
                        {challengeFormik.touched.projectBrief && challengeFormik.errors.projectBrief ? (
                            <div className='text-red-500 text-[12px]'>{challengeFormik.errors.projectBrief}</div>
                        ) : null}
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <label htmlFor='projectTask' className='text-[14px] font-[500] text-[#1A1A21]'>Project Tasks</label>
                        <textarea
                            className='w-full outline-[1.5px] outline-[#FA9874] p-3 border-[1px] border-[#D0D5DD] rounded-[8px] text-[14px] font-[400] text-[#667185]'
                            name='projectTask'
                            placeholder='Enter Text Here'
                            value={challengeFormik.values.projectTask}
                            onChange={challengeFormik.handleChange}
                        />
                        {challengeFormik.touched.projectTask && challengeFormik.errors.projectTask ? (
                            <div className='text-red-500 text-[12px]'>{challengeFormik.errors.projectTask}</div>
                        ) : null}
                    </div>
                    <div className='flex flex-row gap-[20px] items-center'>
                        <Button className='w-full h-[50px] bg-transparent border-[2px] border-primary text-primary rounded-[8px] text-[14px] font-[500]'>Cancel</Button>
                        <Button type="submit" className='w-full h-[50px]'>
                            {isLoading ? "Loading..." : "Update Challenge"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditChallenge;
