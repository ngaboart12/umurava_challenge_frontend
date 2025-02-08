'use client'

import Challenges from "@/app/(landing)/LandingPage/challenges/page";
import WorkExperience from "@/app/(landing)/LandingPage/experience/page";
import ExploreChallenges from "@/app/(landing)/LandingPage/explore/page";
import HowToGetStarted from "@/app/(landing)/LandingPage/howToGetStarted/page";
import CareerCard from "@/app/(landing)/LandingPage/Journery/page";
import Banner from "@/app/(landing)/LandingPage/main/page";
import SkillsChallenges from "@/app/(landing)/LandingPage/skillsChallenges/page";
import Testimonials from "@/app/(landing)/LandingPage/Testimonies/page";



export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Banner />
            <WorkExperience />
            <Challenges />
            <ExploreChallenges />
            <SkillsChallenges />
            <Testimonials />
            <HowToGetStarted />
            <CareerCard />
        </div>
    );
}