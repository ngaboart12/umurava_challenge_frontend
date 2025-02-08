import React from 'react'


interface HomeCardProps {
    title: string
    description: string
    icon: React.ReactNode
}

const HomeCard = ({ title, description, icon }: HomeCardProps) => {
    return (
        <div className='w-full bg-white rounded-[10px] p-[20px] flex flex-row justify-between items-center'>
            <div className='flex flex-row gap-[10px]'>

                <div className='p-1 rounded-[10px] bg-primary'></div>
                <div className='flex flex-col'>
                    <h1 className='text-[14px] font-[400]'>{title}</h1>
                    <span className='text-[16px] font-[600]'>0</span>
                </div>
            </div>
            <div className='p-2 rounded-full bg-[#D0E0FC]'>
                {icon}
            </div>
        </div>
    )
}

export default HomeCard