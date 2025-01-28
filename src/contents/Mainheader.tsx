// components/HeroSection.js
import Image from 'next/image';

export default function Mainheader() {
    return (
        <section className="relative h-96 bg-gray-100">
            <Image
                src="/images/hero-bg.jpg"
                alt="Team working on project"
                fill
                className="object-cover opacity-90"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-40">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Build Work Experience
                </h1>
                <div className="space-y-2">
                    <p className="text-xl md:text-2xl">through Skills Challenges</p>
                    <p className="text-xl md:text-2xl font-semibold">Program</p>
                </div>
            </div>
        </section>
    );
}