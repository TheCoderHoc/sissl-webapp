import type { SVGProps } from "react";
const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="45"
    height="45"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="44"
      height="44"
      rx="22"
      stroke="white"
      strokeOpacity="0.1"
    />
    <path
      d="M15.8332 22.5H29.1665"
      stroke="white"
      strokeOpacity="0.3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.9997 26.6668C19.9997 26.6668 15.8331 23.5982 15.8331 22.5002C15.8331 21.4022 19.9998 18.3335 19.9998 18.3335"
      stroke="white"
      strokeOpacity="0.3"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Arrow;
