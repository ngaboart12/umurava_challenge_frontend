'use client'

import Banner from "../app/LandingPage/main/page";
import WorkExperience from "../app/LandingPage/experience/page";
import Challenges from "../app/LandingPage/challenges/page";
import ExploreChallenges from "../app/LandingPage/explore/page";
import SkillsChallenges from "../app/LandingPage/skillsChallenges/page";
import Testimonials from "../app/LandingPage/Testimonies/page";
import HowToGetStarted from "../app/LandingPage/howToGetStarted/page";
import CareerCard from "../app/LandingPage/Journery/page";

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