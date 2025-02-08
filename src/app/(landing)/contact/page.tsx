import React from 'react'

const ContactUs = () => {
    return (
        <div className='w-full px-[10px] md:px-[50px] lg:px-[100px] py-10 min-h-screen justify-center flex'>
            <div className='w-full flex flex-col-reverse md:flex-row gap-[100px]'>
                <div className='flex flex-col gap-[20px] w-full md:w-1/2'>
                    <h1 className='text-[32px] font-[700] text-black'>Contact Us</h1>
                    <span className='text-[14px] text-black/70 max-w-[500px]'>consectetur adipisicing elit. Magni quam
                        quos nemo iste recusandae quibusdam dolor minima accusamus.
                    </span>
                    {/* email */}

                    <span className='text-[14px] text-black/70'>info@gmail.com</span>
                    <span className='text-[14px] text-black/70'>0788523263</span>
                    <span className='text-[14px] text-black/70 underline'>customer support</span>
                    <div className='w-full grid grid-cols-2 gap-[20px] mt-10'>
                        <div className='flex flex-col gap-[10px]'>
                            <span className='text-[18px] text-black font-[600]'>Cutomer support</span>
                            <span className='text-[13px] text-black/70'>Our support adipisicing elit. Magni quam
                                quos nemo iste recusandae quibusdam dolor minima accusamus. </span>
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <span className='text-[18px] text-black font-[600]'>Media Inquiries</span>
                            <span className='text-[13px] text-black/70'>Our support adipisicing elit. Magni quam
                                quos nemo iste recusandae quibusdam dolor minima accusamus. </span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[10px] w-full md:w-1/2'>
                    <h1 className='text-[24px] font-[600]'>Send Message</h1>
                    <form action="" className='flex flex-col gap-[20px] w-full'>
                        <div className=' grid grid-cols-2 gap-[20px]'>
                           <input type="text" placeholder='First name' className='p-4 rounded-[32px] border' />
                           <input type="text" placeholder='Last name' className='p-4 rounded-[32px] border' />
                        </div>
                        <div className='flex flex-row items-center border rounded-[32px] p-4 gap-[10px]'>
                            <span>✉️</span>
                            <input type="text" placeholder='Your email' className='w-full outline-none bg-transparent' />
                        </div>
                        <div className='flex flex-row items-center border rounded-[32px] p-4 gap-[10px]'>
                            <span>📞</span>
                            <input type="number" placeholder='Your phone' className='w-full outline-none bg-transparent' />
                        </div>
                        <textarea name="" id="" rows={4} className='border outline-none p-4 rounded-[32px]' placeholder='Your Message'></textarea>
                        <button className='p-4 rounded-[32px] bg-[#2B71F0] text-white'>Send Message</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs