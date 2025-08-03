import React from "react";
import type { SVGProps } from "react";

const FeatureOne = (_props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="174" height="200" viewBox="0 0 174 200" {..._props}>
            <path
                d="M164.111 54.7256V143.158L86.2568 188.747L9.71484 144.391V54.7656L87.5098 10.9756L164.111 54.7256Z"
                stroke="white"
                strokeWidth="19.097"
            />
            <rect
                x="54.5743"
                y="60.1735"
                width="59.8131"
                height="56.9306"
                rx="10.8096"
                fill="#FE4F6C"
            />
            <rect
                x="44.8457"
                y="70.9832"
                width="59.8131"
                height="56.9306"
                rx="10.8096"
                fill="#699FFF"
            />
            <rect
                x="70.5476"
                y="70.9832"
                width="59.8131"
                height="56.9306"
                rx="10.8096"
                transform="rotate(12.5494 70.5476 70.9832)"
                fill="#A3EF5B"
            />
            <path
                d="M78.0736 97.2726C71.6792 113.447 108.165 125.859 113.431 110.061"
                stroke="black"
                strokeWidth="0.752285"
            />
            <circle cx="78.4513" cy="97.2741" r="1.88211" fill="white" />
            <circle cx="82.965" cy="111.567" r="1.88211" fill="white" />
            <circle cx="99.5153" cy="116.833" r="1.88211" fill="white" />
            <circle cx="113.809" cy="110.063" r="1.88211" fill="white" />
        </svg>
    );
};

export default FeatureOne;
