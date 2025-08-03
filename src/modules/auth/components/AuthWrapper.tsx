import Link from "next/link";
import { ReactNode } from "react";

interface AuthCardProps {
    children: ReactNode;
    label: string;
    to: string;
    question?: string;
    actionLabel?: string;
}

const AuthWrapper = ({
    children,
    label,
    to,
    question,
    actionLabel,
}: AuthCardProps) => {
    return (
        <div className="w-full max-w-md mx-auto my-0 flex flex-col justify-center rounded-lg shadow-sm px-4 py-2">
            <h2 className="mb-3 text-center text-2xl font-bold">{label}</h2>
            {question && (
                <div className="text-center text-sm mb-4">
                    {question}&ensp;
                    {actionLabel && (
                        <Link className="text-primary" href={to}>
                            {actionLabel}
                        </Link>
                    )}
                </div>
            )}
            {children}
        </div>
    );
};

export default AuthWrapper;
