import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <path
      fill="#00A651"
      fillRule="evenodd"
      d="M3.5 0h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m9.718 5.696a1 1 0 0 0-1.436-1.392l-5.105 5.26-1.46-1.503a1 1 0 0 0-1.435 1.393l2.177 2.242a1 1 0 0 0 1.435 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckbox;
