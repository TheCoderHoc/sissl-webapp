import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.25 5.75a.75.75 0 0 0-1.5 0v1.5h-1.5a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0v-1.5h1.5a.75.75 0 0 0 0-1.5h-1.5z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.5.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M1.5 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlus;
