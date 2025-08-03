import EventGuide from "../modules/website/landing-page/EventGuide";
import FeatureSection from "../modules/website/landing-page/FeatureSection";
import SisslAction from "../modules/website/landing-page/SisslInActionSection";
import HeroSection from "../modules/website/landing-page/HeroSection";
import Events from "@/modules/website/landing-page/Events";
import GetOurAppSection from "@/modules/website/landing-page/GetOurAppSection";
import Navbar from "@/modules/website/Navbar";
import Footer from "@/modules/website/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="dark:bg-[#030302] bg-white">
                <HeroSection />
                <FeatureSection />
                <EventGuide />
                <SisslAction />
                <Events />
                <GetOurAppSection />
            </div>
            <Footer />
        </>
    );
}
