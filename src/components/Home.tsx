import Banner from "@/app/main/page";
import Header from "@/components/Header";
import WorkExperience from "@/app/experience/page";
import Challenges from "@/app/challenges/page";
import ExploreChallenges from "@/app/explore/page";
import SkillsChallenges from "@/app/skillsChallenges/page";
import Testimonials from "@/app/Testimonies/page";
import HowToGetStarted from "@/app/howToGetStarted/page";
import CareerCard from "@/app/Journery/page";


export default function Home() {
    return (
        <div>
            <Header />
            <br /><br />
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