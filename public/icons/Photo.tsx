import * as React from "react";
import type { SVGProps } from "react";
const SvgPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 20"
    {...props}
  >
    <path
      fill="#00A651"
      d="M4.183 6.798c.481.16.858.538 1.019 1.02.163.489.856.489 1.019 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.61 1.61 0 0 1 6.22 4.76a.537.537 0 0 0-1.018 0c-.16.481-.538.859-1.02 1.02a.537.537 0 0 0 0 1.018"
    />
    <path
      fill="#00A651"
      fillRule="evenodd"
      d="M4 0a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zM2 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9l-4.373-2.915a2 2 0 0 0-2.748.517l-.762 1.088-.617-.387-.721-.408a2 2 0 0 0-2.624.595l-2.812 4.02A1.9 1.9 0 0 0 5.616 18H4a2 2 0 0 1-2-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPhoto;
