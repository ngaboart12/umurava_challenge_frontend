import React from 'react';
import Link from 'next/link';
import { Facebook, Google, Linkedin, Youtube } from 'react-bootstrap-icons';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#001A40] text-white py-12 flex flex-col gap-[20px]  px-[10px] md:px-[50px] lg:px-[100px]">
            {/* Top social media icons */}
            <div className='flex flex-row gap-[10px] items-center justify-between border-b pb-6 border-[#FFFFFF38]'>
                <div className='w-[120px] he'>
                    <Image src={`/images/CareerTicket.png`} width={1000} height={1000} alt='career ticket' className='w-full  object-cover' />
                </div>

                <div className="container mx-auto px-4 flex justify-end space-x-4 mb-8">
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Facebook className="text-black w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Google className="text-black w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Linkedin className="text-black w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <Youtube className="text-black w-4 h-4" />
                    </a>
                </div>

            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Address Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Our Address</h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <span className="mr-2 text-[25px]">✉</span>
                            <a href="mailto:career@tickets.com" className="text-sm">
                                career@tickets.com
                            </a>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">
                                <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_5372_1806)">
                                        <g clipPath="url(#clip1_5372_1806)">
                                            <path d="M7.5 0C3.63 0 0.5 3.13 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 3.13 11.37 0 7.5 0ZM2.5 7C2.5 4.24 4.74 2 7.5 2C10.26 2 12.5 4.24 12.5 7C12.5 9.88 9.62 14.19 7.5 16.88C5.42 14.21 2.5 9.85 2.5 7Z" fill="white" />
                                            <path d="M7.5 8C8.60457 8 9.5 7.10457 9.5 6C9.5 4.89543 8.60457 4 7.5 4C6.39543 4 5.5 4.89543 5.5 6C5.5 7.10457 6.39543 8 7.5 8Z" fill="white" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5372_1806">
                                            <rect width="15" height="20" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_5372_1806">
                                            <rect width="15" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </span>
                            <span className="text-sm">85 90 st Ave, Migal</span>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_5372_1813)">
                                        <path d="M4.43333 2.22222C4.5 3.21111 4.66667 4.17778 4.93333 5.1L3.6 6.43333C3.14444 5.1 2.85556 3.68889 2.75556 2.22222H4.43333ZM15.3889 15.5778C16.3333 15.8444 17.3 16.0111 18.2778 16.0778V17.7333C16.8111 17.6333 15.4 17.3444 14.0556 16.9L15.3889 15.5778ZM5.5 0H1.61111C1 0 0.5 0.5 0.5 1.11111C0.5 11.5444 8.95556 20 19.3889 20C20 20 20.5 19.5 20.5 18.8889V15.0111C20.5 14.4 20 13.9 19.3889 13.9C18.0111 13.9 16.6667 13.6778 15.4222 13.2667C15.3119 13.2267 15.1951 13.2078 15.0778 13.2111C14.7889 13.2111 14.5111 13.3222 14.2889 13.5333L11.8444 15.9778C8.69492 14.3671 6.1329 11.8051 4.52222 8.65556L6.96667 6.21111C7.27778 5.9 7.36667 5.46667 7.24444 5.07778C6.82295 3.79784 6.60913 2.45866 6.61111 1.11111C6.61111 0.5 6.11111 0 5.5 0Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_5372_1813">
                                            <rect width="21" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </span>
                            <span className="text-sm">+250 700 000</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                    <nav className="space-y-4">
                        <Link href="/" className="block text-sm">
                            Home
                        </Link>
                        <Link href="/program" className="block text-sm">
                            Program
                        </Link>
                        <Link href="/about" className="block text-sm">
                            About
                        </Link>
                        <Link href="/contact" className="block text-sm">
                            Contact Us
                        </Link>
                    </nav>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Join our newsletter to keep up to date with us!</h3>
                    <div className="flex bg-white p-2 rounded-[10px]">
                        <input
                            type="email"
                            placeholder="Email"
                            className="px-4 py-3 outline-none text-black w-full rounded-l border-0 focus:ring-0"
                        />
                        <button className="bg-[#0052FF] text-white px-6 py-4 rounded-[10px] hover:bg-blue-700 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-[#FFFFFF38]">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        Copyright © All Rights Reserved SawaPay 2024.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                            Privacy Policy
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                            Terms and Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;