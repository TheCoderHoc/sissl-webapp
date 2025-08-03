import type { SVGProps } from "react";
const SvgCash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 14"
    {...props}
  >
    <path fill="#00A651" d="M11 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
    <path
      fill="#00A651"
      fillRule="evenodd"
      d="M3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 1.5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm11 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-11 8a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm11 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M10 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCash;
