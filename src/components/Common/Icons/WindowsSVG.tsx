import { IconTypes } from "./IconTypes";

export const WindowsSVG: React.FC<IconTypes> = ({ color, height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240.000000 240.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M1635 2089 c-275 -37 -503 -68 -507 -69 -5 0 -8 -166 -8 -370 l0
-370 520 0 520 0 0 440 c0 346 -3 440 -12 439 -7 -1 -238 -32 -513 -70z"
        />
        <path
          d="M595 1949 c-187 -26 -343 -48 -347 -49 -5 0 -8 -139 -8 -310 l0 -310
360 0 360 0 0 360 c0 282 -3 360 -12 359 -7 0 -166 -23 -353 -50z"
        />
        <path
          d="M240 811 l0 -309 33 -6 c17 -3 167 -24 332 -46 165 -22 312 -43 328
-46 l27 -6 0 361 0 361 -360 0 -360 0 0 -309z"
        />
        <path
          d="M1120 751 l0 -369 38 -6 c20 -4 240 -33 487 -66 248 -33 465 -63 483
-66 l32 -6 0 441 0 441 -520 0 -520 0 0 -369z"
        />
      </g>
    </svg>
  );
};
