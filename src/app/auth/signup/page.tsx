"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios, { AxiosError } from "axios"
import { useRegisterMutation } from '@/lib/redux/slices/AuthSlice'
import {toast,Toaster} from "sonner"


const SignUp = () => {
    const [profilePicture, setProfilePicture] = useState<File | null>(null)
    const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null)
    const [isUploading, setIsUploading] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [register,{isLoading: registering,error}] = useRegisterMutation()

    const signupFormik = useFormik({
        initialValues: {
            name: '',
            email: '',
            role: '',
            password: '',
            profilePicture: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Full Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            role: Yup.string().required('Role is required'),
            password: Yup.string().required('Password is required'),
            profilePicture: Yup.string().required("Profile is required")
        }),

        onSubmit:async (values) => {
            try{
                await register(values).unwrap()
                toast.success("Registration sucessfully")
                setTimeout(()=>{
                    window.location.href = "/auth"
                },2000)

            }catch(error:any){
                const axiosError: any = error as AxiosError
                toast.error(error?.data.message || "Something went wrong")

            }
        },
    })

    const handleUpload = async (file: File) => {
        setIsUploading(true)
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'all-cleaning')
        
        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_SECRET}/image/upload`, formData);
            if (response.data && response.data.secure_url) {
                setProfilePictureUrl(response.data.secure_url)
                signupFormik.setFieldValue('profilePicture', response.data.secure_url)
            }
        } catch (error) {
            console.error("Error uploading image", error)
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <div className='flex flex-col gap-[20px] w-full md:w-5/7'>
            <Toaster position={'top-center'} />

            <div className='flex flex-col gap-[5px]'>
                <h1 className='text-[24px] font-bold'>Join Us</h1>
                <p className='text-[14px] text-gray-500'>Create an account to continue</p>
            </div>
            <form onSubmit={signupFormik.handleSubmit}  className='flex flex-col gap-[10px] w-full'>
                <div className='flex flex-col gap-[4px] w-full'>
                    <span className='text-[14px] font-medium'>Full Name</span>
                    <input onChange={signupFormik.handleChange} name='name' type="text" placeholder='Enter your full name' className='w-full text-[12px] border border-gray-300 rounded-[8px] p-[10px]' />
                    {signupFormik.errors.name && signupFormik.touched.name && <span className='text-[12px] text-red-500'>{signupFormik.errors.name}</span>}
                </div>
                <div className='flex flex-col gap-[4px] w-full'>
                    <span className='text-[14px] font-medium'>Email</span>
                    <input onChange={signupFormik.handleChange} name='email' type="email" placeholder='Enter your email' className='w-full text-[12px] border border-gray-300 rounded-[8px] p-[10px]' />
                    {signupFormik.errors.email && signupFormik.touched.email && <span className='text-[12px] text-red-500'>{signupFormik.errors.email}</span>}
                </div>
                <div className='flex flex-col gap-[4px] w-full'>
                    <span className='text-[14px] font-medium'>Your Role</span>
                    <select onChange={signupFormik.handleChange} name='role' id='role' className='w-full text-[12px] border border-gray-300 rounded-[8px] p-[10px]'>
                        <option value="">Select your role</option>
                        <option value="developer">Developer</option>
                        <option value="ui_ux">UI/UX Designer</option>

                        <option value="content_creator">Content Creator</option>
                    </select>
                    {signupFormik.errors.role && signupFormik.touched.role && <span className='text-[12px] text-red-500'>{signupFormik.errors.role}</span>}
                </div>
                <div className='flex flex-col gap-[4px]'>
                    <span className='text-[14px] font-medium'>Upload your profile picture</span>
                    <div className='flex flex-row gap-[10px] items-center'>
                        {profilePictureUrl ? (
                            <img src={profilePictureUrl} alt='Profile' className='w-[50px] h-[50px] rounded-full border border-gray-300' />
                        ) : (
                            <div className='w-[50px] h-[50px] rounded-full border border-gray-300 flex items-center justify-center'>
                                {isUploading && <span className='text-[12px] text-gray-500'>Uploading...</span>}
                            </div>
                        )}
                        <label htmlFor="profile_picture" className='text-[14px] text-gray-500 cursor-pointer p-2 bg-gray-100 rounded-[8px]'>Upload</label>
                        <input 
                            type="file" 
                            id='profile_picture' 
                            className='hidden' 
                            onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) {
                                    setProfilePicture(file)
                                    handleUpload(file)
                                }
                            }} 
                        />
                          {signupFormik.errors.profilePicture && signupFormik.touched.profilePicture && <span className='text-[12px] text-red-500'>{signupFormik.errors.profilePicture}</span>}
                    </div>
                </div>
                <div className='flex flex-col gap-[4px] w-full'>
                    <span className='text-[14px] font-medium'>Password</span>
                    <input onChange={signupFormik.handleChange} name='password' type="password" placeholder='Enter your password' className='w-full text-[12px] border border-gray-300 rounded-[8px] p-[10px]' />
                    {signupFormik.errors.password && signupFormik.touched.password && <span className='text-[12px] text-red-500'>{signupFormik.errors.password}</span>}
                </div>
                <button type='submit' className='bg-[#001A40] text-white rounded-[8px] p-[10px]'>
                    {registering ? "Loading..." : "Sign Up"}
                </button>
            </form>

            <div className='flex flex-row items-end justify-end'>
                <span className='text-[14px] text-gray-500'>Already have an account? <Link href="/auth" className='text-[#001A40] font-medium'>Sign in</Link></span>
            </div>
        </div>



    )
}

export default SignUp