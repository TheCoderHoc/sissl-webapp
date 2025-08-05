"use client";

import Image from "next/image";

export default function TopUpWalletPage() {
    return (
        <section className="grid grid-cols-2 gap-5">
            <div>
                <Image
                    src="/images/top-up-wallet.svg"
                    alt="Top Up Wallet"
                    className="w-full object-cover"
                    width={1000}
                    height={1000}
                />
            </div>
        </section>
    );
}
