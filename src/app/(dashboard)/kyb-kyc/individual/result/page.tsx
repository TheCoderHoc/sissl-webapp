import DetailItem from "@/components/shared/DetailItem";
import Pill from "@/components/shared/Pill";
import { Button } from "@/components/ui/button";

export default function IndividualKybResultPage() {
    return (
        <section className="space-y-10">
            <header>
                <h1 className="text-base font-medium">Reference Owner</h1>
                <p className="text-2xl font-medium">David Adebayo</p>
            </header>

            <main className="grid grid-cols-2 gap-20">
                <div className="space-y-10">
                    <h2 className="font-lg font-medium">Provided Data</h2>

                    <div className="space-y-7">
                        <DetailItem
                            title="Full Name"
                            value="Dave Wilson"
                            bordered
                        />

                        <DetailItem
                            title="BVN Number"
                            value="2234859393"
                            bordered
                        />

                        <DetailItem title="Country" value="Nigeria" bordered />
                    </div>
                </div>

                <div className="space-y-10">
                    <h2 className="font-lg font-medium text-green-500">
                        Result Displayed
                    </h2>

                    <div className="space-y-7">
                        <DetailItem
                            title="Status"
                            value={<Pill size="lg">active</Pill>}
                            bordered
                        />

                        <DetailItem
                            title="BVN Number"
                            value="2245859593"
                            bordered
                        />

                        <DetailItem
                            title="Full Name"
                            value="Dave Wilson"
                            bordered
                        />

                        <DetailItem
                            title="Date of Birth"
                            value="2025-03-06"
                            bordered
                        />

                        <DetailItem
                            title="Phone Lined"
                            value="08104478643"
                            bordered
                        />

                        <DetailItem
                            title="Enrollment Bank"
                            value="Zenith Bank"
                            bordered
                        />

                        <DetailItem
                            title="Match With Input"
                            value="Exact Match"
                            bordered
                        />

                        <DetailItem title="Score" value="90%" bordered />
                    </div>

                    <div className="flex items-center gap-5">
                        <Button size="lg">Request Document</Button>
                        <Button className="bg-red-500 text-white" size="lg">
                            Decline
                        </Button>
                        <Button className="bg-green-500 text-white" size="lg">
                            Approve
                        </Button>
                    </div>
                </div>
            </main>
        </section>
    );
}
