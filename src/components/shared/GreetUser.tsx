"use client";

export default function GreetUser() {
    return (
        <h2 className="text-lg">
            <span className="text-gray-500">
                Welcome back,
                <br />
            </span>
            <span>
                {" "}
                {/* {first_name} {last_name} 👋 */}
                Dave Wilson 👋
            </span>
        </h2>
    );
}
