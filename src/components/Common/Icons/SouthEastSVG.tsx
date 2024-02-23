import { IconTypes } from "./IconTypes";

export const SouthEastSVG: React.FC<IconTypes> = ({ color, height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={color}
    >
      <path d="M360-200v-80h264L160-744l56-56 464 464v-264h80v400H360Z" />
    </svg>
  );
};
