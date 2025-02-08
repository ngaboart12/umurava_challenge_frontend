"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/reusable/Navbar";
import SideBar from "@/components/reusable/SideBar";
import AdminSideBar from "@/components/reusable/AdminSideBar";

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const router = useRouter();
    const { data: userProfile, status } = useSession();
    const [isAuth, setIsAuth] = useState<boolean | null>(null);

    useEffect(() => {
        // Only handle the status change once loading is complete
        if (status === "loading") return;

        // Set authentication state based on status
        if (status === "authenticated") {
            setIsAuth(true);
        } else if (status === "unauthenticated") {
            // Only redirect if we're sure we're not authenticated
            setIsAuth(false);
            router.replace("/auth");
        }
    }, [status, router]);

    // Show empty state while loading
    if (status === "loading" || isAuth === null) {
        return <div className="w-full flex h-full">Loading...</div>;
    }


    if (isAuth && userProfile?.user.role === "admin") {
        return (
            <div className="flex flex-row w-full min-h-screen bg-[#F9FAFB]">
                <AdminSideBar />
                <div className="flex flex-col ml-auto w-full lg:w-[78%]">
                    <Navbar />
                    {children}
                </div>
            </div>
        );
    }

}