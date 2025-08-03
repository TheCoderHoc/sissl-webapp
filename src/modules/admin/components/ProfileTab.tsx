import FormInput from "@/components/shared/FormInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { SubmitHandler, useForm } from "react-hook-form";
import Avatar from "@/components/shared/Avatar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModifyUser } from "@/modules/auth/controllers/user";
import Tabs from "@/components/shared/Tabs";
import { AdminProfileSchema } from "../ib/validators";
import { TProfileFormValues } from "../types/profile";
import NoteCheckmarkIcon from "../../../../public/icons/NoteCheckmark";
import ActivityList from "./ActivitiyList";
import PermissionList from "./PermissionList";

export default function AdminProfileTab() {
    const form = useForm<TProfileFormValues>({
        resolver: zodResolver(AdminProfileSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
        },
    });

    const { modifyUser, isLoading: isModifyLoading } = useModifyUser();

    const onSubmit: SubmitHandler<TProfileFormValues> = async (data) => {
        const response = await modifyUser(data);
        const { first_name, last_name, email, phone_number } =
            response.data.profile;

        // @ts-expect-error Some error
        setUser({ first_name, last_name, email, phone_number });
    };

    return (
        <div className="space-y-10">
            <h2 className="text-lg font-medium">Profile Details</h2>

            <div className="space-y-2">
                <h3 className="text-sm">Account Owner</h3>
                <p className="text-xl">Dave Wilson</p>
            </div>
            <div className="grid gap-20 grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div className="space-y-10">
                    <Form {...form}>
                        <form
                            className="grid md:grid-cols-2 gap-5"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <FormInput label="First Name" name="first_name" />

                            <FormInput label="Last Name" name="last_name" />

                            <FormInput
                                label="Email Address"
                                name="email"
                                disabled
                            />

                            <FormInput
                                label="Phone Number"
                                name="phone_number"
                            />

                            <Button
                                size="lg"
                                type="submit"
                                className="w-1/2 bg-yellow-100"
                                isLoading={isModifyLoading}
                            >
                                Update Changes
                            </Button>
                        </form>
                    </Form>

                    <div className="space-y-5">
                        <h3 className="text-lg font-medium">Security</h3>

                        <div className="flex items-center justify-between gap-5">
                            <h4>Password</h4>
                            <span className="">************</span>
                            <Button size="lg">Change</Button>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="flex flex-col gap-5 items-center">
                        <Avatar size="3xl" fallbackText="Dave Wilson" />
                        <div className="md:text-center">
                            <h3>Dave Wilson</h3>
                            <p>ubakawilson@gmail.com</p>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500">Date Joined:</h3>
                            <p className="text-gray-500">3rd July 2025</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-500">Role:</h3>
                            <p className="text-green-500">Super Admin</p>
                        </div>
                    </div>
                </div>
            </div>
            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-20">
                <div className="space-y-5">
                    <Tabs
                        value=""
                        wrapperClassName="justify-start"
                        tabs={[
                            {
                                key: "1",
                                label: "Activities",
                                children: <ActivityList />,
                            },
                            {
                                key: "2",
                                label: "Permissions",
                                children: <PermissionList />,
                            },
                        ]}
                    />
                </div>

                <div className="hidden md:flex flex-col items-center gap-2 text-sm">
                    <NoteCheckmarkIcon />
                    <p>Select an entity to view details</p>
                </div>
            </div>
        </div>
    );
}
