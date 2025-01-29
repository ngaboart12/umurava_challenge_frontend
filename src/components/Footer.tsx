// Footer.jsx
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#020A27] text-white py-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Address Section */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg mb-6">Our Address</h3>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <a href="mailto:career@tickets.com" className="text-sm hover:text-blue-400">
                                career@tickets.com
                            </a>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">85 90 st Ave, Migal</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="text-sm">+250 700 000</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
                    <nav className="space-y-3">
                        <Link href="/" className="block text-sm hover:text-blue-400">
                            Home
                        </Link>
                        <Link href="/program" className="block text-sm hover:text-blue-400">
                            Program
                        </Link>
                        <Link href="/about" className="block text-sm hover:text-blue-400">
                            About
                        </Link>
                        <Link href="/contact" className="block text-sm hover:text-blue-400">
                            Contact Us
                        </Link>
                    </nav>
                </div>

                {/* Newsletter Section */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg mb-6">Join our newsletter to keep up to date with us!</h3>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Email"
                            className="px-4 py-2 w-full rounded-l text-gray-800 focus:outline-none"
                        />
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-r hover:bg-blue-600 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-700">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        Copyright © All Rights Reserved SawaPay 2024.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                            Privacy Policy
                        </Link>
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