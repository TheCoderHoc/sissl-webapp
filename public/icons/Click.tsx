import * as React from "react";
import type { SVGProps } from "react";
const SvgClick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 26 26"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.75 6.75 4.875 4.875M16.75 6.75l1.875-1.875m-13.75 13.75L6.75 16.75m5-12.5v-2.5m-7.5 10h-2.5m17.7 7.486 4.865-1.904a.625.625 0 0 0 0-1.164L12.624 11.6a.625.625 0 0 0-.81.81l4.569 11.69c.207.53.957.53 1.164 0z"
    />
  </svg>
);
export default SvgClick;
