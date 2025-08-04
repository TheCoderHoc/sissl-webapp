import { globalCountries } from "@/constants/countries-with-flags";
import Image from "next/image";
import { useMemo } from "react";

export default function useCountryOptions() {
    const countryOptions = useMemo(
        () =>
            globalCountries.map(({ name, flag }) => ({
                label: (
                    <div className="flex items-center gap-2">
                        <Image src={flag} alt={name} width={20} height={20} />
                        <span>{name}</span>
                    </div>
                ),
                value: name,
            })),
        []
    );

    return countryOptions;
}
