import { IconTypes } from "./IconTypes";

export const WarningSVG: React.FC<IconTypes> = ({ color, height, width }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 96 960 960"
      width={width}
    >
      <path d="m40 936 440-760 440 760H40Zm104-60h672L480 296 144 876Zm340.175-57q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5ZM454 708h60V484h-60v224Zm26-122Z" />
    </svg>
  );
};
