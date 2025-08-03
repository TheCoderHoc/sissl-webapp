import type { SVGProps } from "react";
const Underline = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="36" height="36" rx="18" fill="#181818" />
        <rect
            x="0.5"
            y="0.5"
            width="35"
            height="35"
            rx="17.5"
            stroke="white"
            strokeOpacity="0.1"
        />
    </svg>
);

export default Underline;
