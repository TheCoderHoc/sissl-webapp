import * as React from "react";
import type { SVGProps } from "react";
const SvgAnnouncement = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 20"
    {...props}
  >
    <path
      fill="#00A651"
      d="M17.829.96a.5.5 0 0 1 .671.47v12.14a.5.5 0 0 1-.671.47l-7.098-2.59v-7.9zM9.73 3.74v7.52l-6.925-.542A2.5 2.5 0 0 1 .5 8.225v-1.45a2.5 2.5 0 0 1 2.305-2.493zM5.295 18.187l-.729-6.329 2.986.234.687 5.75a1.482 1.482 0 1 1-2.944.345"
    />
  </svg>
);
export default SvgAnnouncement;
