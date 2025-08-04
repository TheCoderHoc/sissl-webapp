"use client";
import PaymentForm from "@/modules/company/dashboard/components/PaymentInterface";

export default function TopUpWalletPage() {
    return (
        <section className="grid grid-cols-2 gap-5">
            <div>
                <img
                    src="/images/top-up-wallet.svg"
                    alt="Top Up Wallet"
                    className="w-full object-cover"
                />
            </div>

            {/* @ts-expect-error Some error */}
            <PaymentForm paymentType="topup" />
        </section>
    );
}
