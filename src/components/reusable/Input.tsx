import React from 'react'

interface InputProps {
    label: string;
    placeholder: string;
    type: string;
    value: string;
    onChange: any;
    error?: string;
    name?: string
}
const InputField = ({ label, placeholder, type, value, onChange, error,name }: InputProps) => {
    return (
        <div className='flex flex-col gap-[4px]'>
            <label htmlFor={label} className='text-[14px] font-[500] text-[#1A1A21]'>{label}</label>
            <input name={name}  type={type} placeholder={placeholder} value={value} onChange={onChange} className='w-full outline-[1.5px] outline-[#FA9874] p-3 border-[1px] border-[#D0D5DD] rounded-[8px] text-[14px] font-[400] text-[#667185]' />
            {error && <span className='text-[12px] font-[400] text-[#D92D20]'>{error}</span>}
        </div>
    )
}

export default InputField