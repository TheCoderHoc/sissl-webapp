import useUserStore from "@/stores/userStore";

export default function PermissionList() {
    const {
        user: { first_name, last_name },
    } = useUserStore();

    const fullName = `${first_name} ${last_name}`;

    return (
        <div className="space-y-10">
            <h2>Team Member: {fullName}</h2>

            <p className="text-sm font-light flex items-center gap-3">
                <span className="text-gray-400">Role:</span>
                <span className="text-green-400">Super Admin</span>
            </p>

            <div className="space-y-10">
                <h3>What {fullName} Can access</h3>
                <ul className="space-y-7">
                    <li>Can create API</li>
                    <li>Can view history</li>
                    <li>Can export history</li>
                </ul>
            </div>
        </div>
    );
}
