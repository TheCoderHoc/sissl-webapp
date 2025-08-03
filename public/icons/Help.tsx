import * as React from "react";
import type { SVGProps } from "react";
const SvgHelp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 18"
    {...props}
  >
    <path
      fill="#00A651"
      fillRule="evenodd"
      d="M18.5 9a9 9 0 1 1-18 0 9 9 0 0 1 18 0M9.64 7.145a.665.665 0 1 0-.869-1.002l-.564.564a1 1 0 0 1-1.414-1.414l.564-.564a2.665 2.665 0 1 1 3.483 4.016l-.048.036a.73.73 0 0 0-.292.583V9.5a1 1 0 1 1-2 0v-.136c0-.858.404-1.667 1.092-2.183zM8.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHelp;
