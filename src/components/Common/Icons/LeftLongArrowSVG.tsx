import { IconTypes } from "./IconTypes";

export const LeftLongArrowSVG: React.FC<IconTypes> = ({
  color,
  height,
  width,
  className
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={color}
    >
      <path d="M359-208 86-480l273-272 88 88-121 121h548v126H326l121 121-88 88Z" />
    </svg>
  );
};
