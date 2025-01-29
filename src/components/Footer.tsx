import React from 'react';
import Link from 'next/link';
import { Facebook, Google, Linkedin, Youtube } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <footer className="bg-[#010618] text-white py-12">
            {/* Top social media icons */}


            <div className="container mx-auto px-4 flex justify-end space-x-4 mb-8">
                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Facebook className="text-blue-600 w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Google className="text-red-600 w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Linkedin className="text-blue-700 w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Youtube className="text-red-500 w-4 h-4" />
                </a>
            </div>


            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Address Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-6">Our Address</h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <span className="w-5 h-5 mr-2">✉</span>
                            <a href="mailto:career@tickets.com" className="text-sm">
                                career@tickets.com
                            </a>
                        </div>
                        <div className="flex items-center">
                            <span className="w-5 h-5 mr-2">📍</span>
                            <span className="text-sm">85 90 st Ave, Migal</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-5 h-5 mr-2">📞</span>
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
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Email"
                            className="px-4 py-2 w-full rounded-l border-0 focus:ring-0"
                        />
                        <button className="bg-[#0052FF] text-white px-6 py-2 rounded-r hover:bg-blue-700 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
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