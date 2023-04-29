import { IconTypes } from "./IconTypes";

export const CheckmarkSVG: React.FC<IconTypes> = ({ color, height, width }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 96 960 960"
      width={width}
    >
      <path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" />
    </svg>
  );
};
