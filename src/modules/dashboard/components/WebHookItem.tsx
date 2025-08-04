import { Button } from "@/components/ui/button";
import CopyAltIcon from "@/public/icons/CopyAlt";
import EyeIcon from "@/public/icons/Eye";

export default function WebHookItem() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h3 className="font-medium">Public Merchant Key</h3>
                <p className="text-gray-500">
                    This key is used to initiate your SDK
                </p>
            </div>
            <span className="text-gray-500">************23456</span>
            <div className="flex items-center gap-3">
                <Button className="bg-dash_blue rounded-full">
                    <CopyAltIcon stroke="#fff" />
                </Button>
                <Button className="bg-dash_blue rounded-full">
                    <EyeIcon />
                </Button>
                <Button className="bg-yellow-100">Regenerate</Button>
                <Button className="bg-yellow-100">Change</Button>
            </div>
        </div>
    );
}
