import * as React from "react";
import type { SVGProps } from "react";
const SvgTelephone = (props: SVGProps<SVGSVGElement>) => (
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
      d="m1.39 2.05.536-.536a3 3 0 0 1 4.242 0l.93.93a3 3 0 0 1 .486 3.604l-.055.096c-.535.94-.533 2.104.102 2.981.316.437.673.889 1.012 1.228.34.34.792.697 1.228 1.013.877.634 2.04.636 2.981.102l.097-.055a3 3 0 0 1 3.604.486l.929.93a3 3 0 0 1 0 4.242l-.536.535c-.562.563-1.329.876-2.102.69-1.654-.397-4.84-1.631-8.676-5.468S1.098 5.806.7 4.153c-.186-.774.127-1.54.69-2.103"
    />
  </svg>
);
export default SvgTelephone;
