import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 21 21"
    {...props}
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9.5 9.5-4 4 4 4m8-4h-12m6-10 4 4-4 4m4-4h-12"
    />
  </svg>
);
export { SvgComponent as IconReverse_alt };
