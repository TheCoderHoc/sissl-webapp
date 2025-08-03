import * as React from "react";
import type { SVGProps } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#00BF64"
      d="M13.334 10.75v3.5c0 2.917-1.167 4.084-4.084 4.084h-3.5c-2.916 0-4.083-1.167-4.083-4.084v-3.5c0-2.916 1.167-4.083 4.083-4.083h3.5c2.917 0 4.084 1.167 4.084 4.083"
    />
    <path
      fill="#00BF64"
      d="M14.25 1.667h-3.5c-2.875 0-4.042 1.142-4.075 3.958H9.25c3.5 0 5.125 1.625 5.125 5.125v2.575c2.817-.033 3.958-1.2 3.958-4.075v-3.5c0-2.916-1.166-4.083-4.083-4.083"
      opacity={0.4}
    />
  </svg>
);
export default SvgCopy;
