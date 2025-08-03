import * as React from "react";
import type { SVGProps } from "react";
const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 19"
    {...props}
  >
    <path
      fill="#00A651"
      d="M9 19c4.633 0 8.449-3.501 8.945-8.002.06-.549-.393-.998-.945-.998h-5a3 3 0 0 1-3-3V2c0-.552-.45-1.006-.998-.945A9.001 9.001 0 0 0 9 19"
    />
    <path
      fill="#00A651"
      d="M18.93 6.003A7 7 0 0 0 12.997.07C12.45-.008 12 .448 12 1v5a1 1 0 0 0 1 1h5c.552 0 1.008-.45.93-.997"
    />
  </svg>
);
export default ChartIcon;
