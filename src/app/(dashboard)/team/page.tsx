"use client";

import { DataTable } from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IUser, userColumns } from "@/modules/dashboard/columns/user-columns";
import { ActionModal } from "@/modules/dashboard/components/ActionModal";
import DashboardCard from "@/modules/dashboard/components/DashboardCard";
import EditUserModal from "@/modules/dashboard/components/EditUserModal";
import InviteUserModal from "@/modules/dashboard/components/InviteUserModal";
import useGetTeamController from "@/modules/dashboard/controllers/useGetTeamsController";
import { Result } from "@/modules/dashboard/models/team";
import { useState } from "react";
export default function Teams() {
    const [showInvite, setShowInvite] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
    const [showDelete, setShowDelete] = useState(false);
    const [showResend, setShowResend] = useState(false);
    const { data } = useGetTeamController();

    const teamPopulation = data?.paginator.count;

    const handleEditUser = (member: IUser) => {
        setSelectedUser(member);
        setShowEditModal(true);
    };

    const teams: Result[] =
        data?.results.map((team) => ({
            no: team.id,
            name: `${team.user.first_name} ${team.user.last_name}`,
            email: team.user.email,
            role: team.user.role || "No role yet",
            phone_number: team.user.profile?.phone_number ?? "N/A",
            status: team.status,
            date: new Date(team.date).toLocaleDateString(),
        })) ?? [];

    return (
        <div className="space-y-10">
            <h1 className="text-2xl font-bold">Team</h1>

            <Card className="w-1/2 px-6 py-4 space-y-5">
                <p>Build your team and manage members in one place</p>

                <Button size="lg" onClick={() => setShowInvite(true)}>
                    Invite User
                </Button>
            </Card>

            <DashboardCard
                title="No of Users"
                value={`${teamPopulation}`}
                className="w-1/3"
            />
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">History</h2>
            </div>

            <DataTable columns={userColumns(handleEditUser)} data={teams} />

            <EditUserModal
                open={showEditModal}
                onClose={() => setShowEditModal(false)}
                user={selectedUser}
            />

            {/* the modal */}
            <InviteUserModal
                open={showInvite}
                onClose={() => setShowInvite(false)}
            />
            <ActionModal
                type="delete"
                open={showDelete}
                onClose={() => setShowDelete(false)}
                onConfirm={() => {
                    // handleDelete(user.id)
                }}
            />
            <ActionModal
                type="resend"
                open={showResend}
                onClose={() => setShowResend(false)}
            />
        </div>
    );
}
