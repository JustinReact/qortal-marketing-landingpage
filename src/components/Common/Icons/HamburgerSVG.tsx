import { IconTypes } from "./IconTypes";

export const HamburgerSVG: React.FC<IconTypes> = ({
  color,
  height,
  width,
  className,
  onClickFunc
}) => {
  return (
    <svg
      onClick={onClickFunc}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 27 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2H25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M2 9H25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M2 16H25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
