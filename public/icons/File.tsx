import * as React from "react";
import type { SVGProps } from "react";
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 20"
    {...props}
  >
    <path
      fill="#00A651"
      fillRule="evenodd"
      d="M9.5 0h-6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h-3a4 4 0 0 1-4-4zm-6 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
    <path
      fill="#00A651"
      d="M16.297 6a3 3 0 0 0-.492-.834L12.4 1.079a3 3 0 0 0-.9-.73V4a2 2 0 0 0 2 2z"
    />
  </svg>
);
export default SvgFile;
