"use client"
import { Calendar, Home, Inbox, Search, Settings, Menu, X, HelpCircle, Users } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { ConfimrDialog } from "./confirmDialog";


const items = [
    {
        title: "Dashboard",
        url: "/admin",
        icon: Home,
    },
    {
        title: "Challenges & Hackathons",
        url: "/admin/challenge&hackthons",
        icon: Inbox,
    },
    {
        title: "Community",
        url: "#",
        icon: Calendar,
    },
];
const bottomItems = [
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
    {
        title: "Help Center",
        url: "#",
        icon: HelpCircle,
    },
    {
        title: "Refer family & friends",
        url: "#",
        icon: Users,
    },


];

export default function AdminSideBar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const params = usePathname();
    const { data: userProfile, status } = useSession()
    const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

    const logoutFunc = async () => {
        
        await signOut({ callbackUrl: "/" });

    }


    return (
        <div className=" w-[70%] md:w-[22%] z-[1000] h-screen fixed">
            <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden fixed top-4 right-2 z-50 p-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                aria-label="Toggle Menu"
            >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className={`
                inset-y-0 left-0 
                h-full
                w-full
                transition-transform duration-300 ease-in-out
                ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0
                bg-primary
                z-40
                pr-2

                flex flex-col justify-between
            `}>
                <div className="flex flex-col h-full">
                    <div className="p-4 flex items-center gap-3">
                        <Image
                            src="/image/logo.png"
                            alt="logo"
                            width={40}
                            height={40}
                        />
                    </div>

                    <div className="flex-1 px-2 py-4">
                        <ul className="space-y-2">
                            {items.map((item) => (
                                <li key={item.title}>
                                    <Link
                                        href={item.url}
                                        className={`flex text-[14px] items-center gap-3 px-4 py-3  hover:text-primary rounded-lg hover:bg-white/80 transition-colors ${params === item.url || params?.includes(`${item.url}/new-challenge` ||  `${item.url}/challenge&hackthons` ) ? 'bg-white text-primary' : 'text-white'}`}
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        <item.icon size={20} />
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className="flex flex-col gap-[40px]">
                    <div className="flex-1 px-2 py-4">
                        <ul className="space-y-2">
                            {bottomItems.map((item) => (
                                <li key={item.title}>
                                    <Link
                                        href={item.url}

                                        className="flex text-[14px] items-center gap-3 px-4 py-2 text-white hover:text-primary rounded-lg hover:bg-white transition-colors"
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        <item.icon size={20} />
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div onClick={() => setIsConfirmDialogOpen(true)} className="flex flex-row gap-[20px] items-center px-4 py-4">
                        <div className=" cursor-pointer flex flex-row gap-[10px] items-center">
                            <div className="w-[50px] h-[50px] bg-gray-200 rounded-full">
                                {userProfile?.user.profile ? (
                                    <Image src={userProfile?.user.profile} alt="" width={1000} height={1000} className="w-full h-full rounded-full object-cover" />

                                ) : (
                                    <div></div>

                                )}
            
                            </div>
                            <div className="flex flex-col">
                                <p className="text-white text-[16px] font-medium">{userProfile?.user.name}</p>
                                <p className="text-gray-400 text-[12px]">{userProfile?.user.email}</p>
                            </div>

                        </div>
                        <div className=" cursor-pointer">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.25033 2.33329C5.71056 2.33329 6.08366 1.9602 6.08366 1.49996C6.08366 1.03972 5.71056 0.666626 5.25033 0.666626H4.00033C2.15938 0.666626 0.666992 2.15901 0.666992 3.99996V14C0.666992 15.8409 2.15938 17.3333 4.00033 17.3333H5.25033C5.71056 17.3333 6.08366 16.9602 6.08366 16.5C6.08366 16.0397 5.71056 15.6666 5.25033 15.6666H4.00033C3.07985 15.6666 2.33366 14.9204 2.33366 14L2.33366 3.99996C2.33366 3.07948 3.07985 2.33329 4.00033 2.33329H5.25033Z" fill="white" />
                                <path d="M17.9229 9.58922C18.2484 9.26378 18.2484 8.73614 17.9229 8.4107L14.5896 5.07737C14.2641 4.75193 13.7365 4.75193 13.4111 5.07737C13.0856 5.40281 13.0856 5.93044 13.4111 6.25588L15.3218 8.16663L5.66699 8.16663C5.20675 8.16663 4.83366 8.53972 4.83366 8.99996C4.83366 9.4602 5.20675 9.83329 5.66699 9.83329L15.3218 9.83329L13.4111 11.744C13.0856 12.0695 13.0856 12.5971 13.4111 12.9225C13.7365 13.248 14.2641 13.248 14.5896 12.9225L17.9229 9.58922Z" fill="white" />
                            </svg>

                        </div>
                    </div>
                </div>

            </nav>
            <ConfimrDialog open={isConfirmDialogOpen} setOpen={setIsConfirmDialogOpen} title="Are you sure you want to logout" description="If you click to continue you will not longer access this dashbaord untill you logging in again" confirmFunc={logoutFunc} />
        </div>
    );
}