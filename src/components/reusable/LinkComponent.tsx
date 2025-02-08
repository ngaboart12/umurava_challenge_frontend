import Link from "next/link";

interface LinkComponentProps {
    title: string;
    url: string;
    icon: any;
    number: number;
}

export const LinkComponent = (item: LinkComponentProps) => {
    return (
        <Link href={item.url} className={`flex flex-row gap-[5px] items-center justify-between px-1 py-3 border-[1.5px] bg-[#F0F2F5] border-[#D0D5DD] rounded-[6px]`}>
            <div className="flex flex-row gap-[5px] items-center">  
            {item.icon}
            <span>{item.title}</span>
            </div>
            <div className='px-2 bg-[#E4E7EC] rounded-[12px]'>
                <span className='text-[12px] font-bold'>{item.number}</span>
            </div>
        </Link>
    )
}
