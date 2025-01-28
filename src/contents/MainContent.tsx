// components/MainContent.js
import Image from 'next/image';

export default function MainContent() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Enhance your Employability and Accelerate your Career Growth by working
            on Hands-on projects & hackathons from various businesses & organizations.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg">
            Get Started
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/project-1.jpg"
            alt="Coding project"
            width={400}
            height={300}
            className="rounded-lg shadow-lg h-48 object-cover"
          />
          <Image
            src="/images/project-2.jpg"
            alt="Team discussion"
            width={400}
            height={300}
            className="rounded-lg shadow-lg h-48 object-cover"
          />
          <Image
            src="/images/hackathon-1.jpg"
            alt="Hackathon event"
            width={400}
            height={300}
            className="rounded-lg shadow-lg h-48 object-cover"
          />
          <Image
            src="/images/hackathon-2.jpg"
            alt="Presentation"
            width={400}
            height={300}
            className="rounded-lg shadow-lg h-48 object-cover"
          />
        </div>
      </div>
    </section>
  );
}