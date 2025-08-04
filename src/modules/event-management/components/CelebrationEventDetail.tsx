import Badge from "@/components/shared/Pill";
import DetailItem from "@/components/shared/DetailItem";
import FeedbackDialog from "@/components/shared/FeedbackDialog";
import Modal from "@/components/shared/Modal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { BiLink } from "react-icons/bi";
import CopyAltIcon from "../../../../public/icons/CopyAlt";
import ShareIcon from "../../../../public/icons/Share";
import { QRCodeSVG } from "qrcode.react";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CelebrationEventDetails({ isOpen, onClose }: IProps) {
    const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleOk = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 5000);
    };

    return (
        <Modal title="" isOpen={isOpen} onClose={onClose} width="md">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Josh Birthday</h2>

                <Badge>Pending</Badge>
            </div>

            <Separator className="my-8" />

            <div className="space-y-8">
                <Card className="border-0 space-y-3">
                    <h3>Event URL</h3>

                    <div className="flex items-center bg-gray-700 py-8 px-5 gap-5 rounded-lg">
                        <Button className="rounded-full bg-dash_blue text-white border-none">
                            <BiLink size={20} className="fill-white" />
                        </Button>

                        <span>mike.sissl.me</span>

                        <Button variant="link" className="p-0">
                            <CopyAltIcon />
                        </Button>

                        <Button variant="link" className="p-0">
                            <ShareIcon />
                        </Button>
                    </div>
                </Card>

                <Card className="border-0 space-y-3">
                    <h3>Event QR Code</h3>

                    <div className="flex flex-col items-center justify-center bg-gray-700 py-8 rounded-lg">
                        <QRCodeSVG value="https://reactjs.org/" />
                    </div>
                </Card>

                <Card className="grid grid-cols-3 gap-5 p-5">
                    <DetailItem title="Event Name" value="Josh Birthday" />
                    <DetailItem title="Event Type" value="Birthday Event" />
                    <DetailItem title="Wishlist" value="wishlist.url" />
                </Card>

                <Card className="grid grid-cols-3 gap-5 p-5">
                    <DetailItem title="Event Date" value="06/07/2025" />
                    <DetailItem title="Event Time" value="10:00pm" />
                    <DetailItem title="Guest Size" value="1000" />
                </Card>

                <Card className="p-5">
                    <DetailItem
                        title="Description"
                        value="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    />
                </Card>

                {/* ONLY SHOW WHEN STATUS IS REJECTED */}
                <Card className="p-5">
                    <DetailItem
                        title="Reasons for rejection"
                        value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                </Card>

                <div className="flex items-center justify-end gap-5">
                    <Button size="lg" className="bg-blue-100">
                        Print Badge
                    </Button>

                    <Button
                        size="lg"
                        className="bg-blue-500 text-white"
                        onClick={() => setIsFeedbackDialogOpen(true)}
                    >
                        Grant Access
                    </Button>
                </div>
            </div>

            <FeedbackDialog
                isOpen={isFeedbackDialogOpen}
                onClose={() => setIsFeedbackDialogOpen(false)}
                title="Grant Access?"
                description="Do you want to grant access for this guest?"
                isLoading={isLoading}
                isSuccess={isSuccess}
                successText="Access Granted"
                successComponent={
                    <Button className="w-1/2 bg-dash_blue text-white">
                        Print Badge
                    </Button>
                }
                loadingText="Granting acess for this guest"
                onOk={handleOk}
            />
        </Modal>
    );
}
