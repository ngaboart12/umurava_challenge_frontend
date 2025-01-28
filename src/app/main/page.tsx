import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <main className="flex items-center justify-center px-4 sm:px-16 py-16">
                <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Section */}
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl sm:text-4.5xl font-extrabold text-blue-600 leading-tight">
                            Build Work Experience <br />
                            <span className="text-blue-600">through Skills Challenges Program</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-700">
                            Enhance your employability and accelerate your career growth by working on hands-on projects & hackathons
                            from various businesses & organizations.
                        </p>
                        <div className="mt-8 flex justify-center md:justify-start">
                            <button className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Right Section - Single Image */}
                    <div className="relative w-full aspect-[4/3]">
                        <Image
                            src="/images/main.JPG"
                            alt="Team working and person with laptop"
                            fill
                            className="object-cover rounded-lg"
                            priority
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
