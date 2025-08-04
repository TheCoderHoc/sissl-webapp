import DetailItem from "@/components/shared/DetailItem";
import Pill from "@/components/shared/Pill";
import { Button } from "@/components/ui/button";

export default function CompanyKybResultPage() {
    return (
        <section className="space-y-10">
            <header>
                <h1 className="text-base font-medium">Reference Owner</h1>
                <p className="text-2xl font-medium">David Adebayo</p>
            </header>

            <main className="grid grid-cols-2 gap-20">
                <div className="space-y-10">
                    <h2 className="font-lg font-medium">Provided Data</h2>

                    <span className="bg-white inline-block text-gray-500 font-light py-3 px-5 rounded-lg">
                        Advance company check
                    </span>

                    <div className="space-y-7">
                        <DetailItem
                            title="Registration Number"
                            value="123456789"
                            bordered
                        />
                        <DetailItem
                            title="Business Name"
                            value="Adetech_Digital"
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
                            title="Confidence Score"
                            value={<Pill size="lg">100</Pill>}
                            bordered
                        />

                        <DetailItem
                            title="Compliance Checks"
                            value="AML/Blacklist Match"
                            bordered
                        />

                        <DetailItem
                            title="Date Extracted"
                            value="2025-03-06"
                            bordered
                        />

                        <DetailItem
                            title="Registered Address"
                            value="125 Main Street, Boston, MA, USA"
                            bordered
                        />

                        <DetailItem
                            title="Directors Shareholder"
                            value="David Adebayo, Mary Okosun, Femi Martins"
                            bordered
                        />

                        <DetailItem
                            title="Supporting Document"
                            value="CAC Certificate"
                            bordered
                        />

                        <DetailItem
                            title="Nature of Business"
                            value="Fintech"
                            bordered
                        />
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
