import ChallengeCard from "@/contents/ChallengeCard";

export default function Hackathons() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Challenges & Hackathons</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                    <ChallengeCard key={index} />
                ))}
            </div>
        </div>
    );
}
