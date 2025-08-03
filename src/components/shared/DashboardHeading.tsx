import useUserStore from "@/stores/userStore";

const DashboardHeading = ({ text }: { text: string }) => {
  const { user } = useUserStore();
  return (
    <div>
      <h3 className="opacity-50">Welcome back,</h3>
      <p className="mb-8">{user.first_name}👋</p>
      <p className="bg-black pl-8 tracking-wide py-8 rounded-lg">{text}</p>
    </div>
  );
};
export default DashboardHeading;
