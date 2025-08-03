import Events from "@/modules/website/landing-page/Events";
import GetOurAppSection from "@/modules/website/landing-page/GetOurAppSection";
import UsageTab from "@/modules/website/pricing/UsageTab";
const Pricing = () => {
    return (
        <>
            <div className="dark:bg-black bg-white">
                <UsageTab />
                <Events />
                <GetOurAppSection />
            </div>
        </>
    );
};
export default Pricing;
