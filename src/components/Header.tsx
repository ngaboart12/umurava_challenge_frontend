"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Header: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { data: userProfile } = useSession()
  const [dashlink, setLink] = useState<string>("/dashboard")

  const handleShowMenu = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    if (userProfile?.user.role == "admin") {
      setLink("/admin")
    } else {
      setLink("/dashboard")
    }

  }, [userProfile])



  return (
    <header className="border-b w-full bg-white">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/umurava.ico.png"
            alt="Umurava Logo"
            width={240}
            height={160}
            className="object-contain"
          />

        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-800">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/challenges" className="hover:text-blue-600">
            Challenge & Hackathons
          </Link>
          <Link href="/education" className="hover:text-blue-600">
            For Educational Institutions
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact Us
          </Link>
        </nav>

        {/* Join Button */}
        <div className="hidden md:block">
          {userProfile?.user.role ? (

            <Link
              href={dashlink}
              className="px-6 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-900 transition"
            >
              Dashboard
            </Link>

          ) : (
            <Link
              href="/auth"
              className="px-6 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-900 transition"
            >
              Join the Program
            </Link>

          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={handleShowMenu}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpened && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-4 z-50">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/challenges" className="hover:text-blue-600">
              Challenge & Hackathons
            </Link>
            <Link href="/education" className="hover:text-blue-600">
              For Educational Institutions
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact Us
            </Link>
            {userProfile?.user.role ? (
              <Link
                href="/auth"
                className="px-6 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-900 transition"
              >
                Join the Program
              </Link>

            ) : (
              <Link
                href={dashlink}
                className="px-6 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-900 transition"
              >
                Dashboard
              </Link>

            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
