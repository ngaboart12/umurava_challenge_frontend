"use client"
import React from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from "yup";
import { getSession, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from "sonner"

const SignIn = () => {
    const router = useRouter();
    const { data: sessionData } = useSession()

    const loginFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            const result = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
            });

            if (result?.error) {
                toast.error("Inavlid credentials")
            } else {
                const session = await getSession();
                if (session?.user) {
                    if (session?.user?.role == "admin") {
                        window.location.href = '/admin';

                    } else {
                        window.location.href = '/dashboard';
                    }
                }
            }
            setSubmitting(false);
        },
    });

    return (
        <div className='flex flex-col gap-5 w-5/7'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>Welcome Back</h1>
                <p className='text-sm text-gray-500'>Sign in to your account to continue</p>
            </div>
            <form onSubmit={loginFormik.handleSubmit} className='flex flex-col gap-4 w-full'>
                <div className='flex flex-col gap-1 w-full'>
                    <label className='text-sm font-medium'>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder='Enter your email'
                        className='w-full border border-gray-300 text-sm rounded-lg p-2'
                        onChange={loginFormik.handleChange}
                        onBlur={loginFormik.handleBlur}
                        value={loginFormik.values.email}
                    />
                    {loginFormik.touched.email && loginFormik.errors.email && (
                        <p className='text-red-500 text-xs'>{loginFormik.errors.email}</p>
                    )}
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label className='text-sm font-medium'>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder='Enter your password'
                        className='w-full border border-gray-300 text-sm rounded-lg p-2'
                        onChange={loginFormik.handleChange}
                        onBlur={loginFormik.handleBlur}
                        value={loginFormik.values.password}
                    />
                    {loginFormik.touched.password && loginFormik.errors.password && (
                        <p className='text-red-500 text-xs'>{loginFormik.errors.password}</p>
                    )}
                </div>
                <button
                    type='submit'
                    className='bg-[#001A40] text-white rounded-lg p-2'
                    disabled={loginFormik.isSubmitting}
                >
                    {loginFormik.isSubmitting ? 'Signing In...' : 'Sign In'}
                </button>
            </form>
            <div className='flex flex-row justify-end'>
                <span className='text-sm text-gray-500'>Don't have an account? <Link href="/auth/signup" className='text-[#001A40] font-medium'>Sign up</Link></span>
            </div>
        </div>
    );
};

export default SignIn;
