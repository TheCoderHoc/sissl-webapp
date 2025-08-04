import Avatar from "@/components/shared/Avatar";
import Pill from "@/components/shared/Pill";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function AdminUserListDetailPage() {
    return (
        <section className="grid grid-cols-[1fr_2fr] gap-10">
            <div className="space-y-5">
                <div className="flex flex-col gap-5 items-center">
                    <Avatar
                        size="3xl"
                        fallbackText="Dave Wilson"
                        className="bg-gray-700"
                    />
                    <div className="md:text-center">
                        <h3>Dave Wilson</h3>
                        <p>ubakawilson@gmail.com</p>
                        <Pill variant="pending" className="mt-3">
                            Pending
                        </Pill>
                    </div>
                </div>

                <hr />

                <div className="space-y-5">
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-500">Account Type:</h3>
                        <p className="text-gray-500">Individual</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-500">Date Joined:</h3>
                        <p className="text-green-500">05 Jan, 2025</p>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-2 mt-20">
                    <Button size="lg">Approve</Button>
                    <Button size="lg" className="w-[40px] bg-gray-200">
                        <ChevronDown />
                    </Button>
                </div>
            </div>

            <div className="bg-[#E5E7EB1A]">
                <h2 className="p-5">Compliance Details</h2>

                <hr className="border-[#E5E7EB1A]" />

                <div className="p-5 flex gap-20">
                    <div className="space-y-2">
                        <h3 className="text-[12px]">Full Name</h3>
                        <p className="text-base">Dave Wilson</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-[12px]">Email Address</h3>
                        <p className="text-base">ubakawilson@gmail.com</p>
                    </div>
                </div>

                <hr className="border-[#E5E7EB1A]" />

                <div className="p-5 flex gap-20">
                    <div className="space-y-2">
                        <h3 className="text-[12px]">Means of Identification</h3>
                        <p className="text-base">NIN</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-[12px]">ID Number</h3>
                        <p className="text-base">1D2F1H438J</p>
                    </div>
                </div>

                <hr className="border-[#E5E7EB1A]" />

                <div className="p-5 flex gap-20">
                    <div className="space-y-2">
                        <h3 className="text-[12px]">Gender</h3>
                        <p className="text-base">Male</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-[12px]">Date of Birth</h3>
                        <p className="text-base">10-May-1992</p>
                    </div>
                </div>

                <div className="p-5 flex gap-20">
                    <div className="space-y-2">
                        <h3 className="text-[12px]">Phone Number</h3>
                        <p className="text-base">+2348104478624</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-[12px]">Address</h3>
                        <p className="text-base">
                            12 Erelu Danisa Street off Adeshina
                        </p>
                    </div>
                </div>

                <hr className="border-[#E5E7EB1A]" />

                <div className="p-5 flex gap-20">
                    <div className="space-y-2">
                        <h3 className="text-[12px]">City</h3>
                        <p className="text-base">Lagos</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-[12px]">Country</h3>
                        <p className="text-base">Nigeria</p>
                    </div>
                </div>

                <hr className="border-[#E5E7EB1A]" />

                <div className="p-5 flex gap-20">
                    <div className="space-y-2">
                        <h3 className="text-[12px]">Government ID</h3>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-[12px]">Utility Bill</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
