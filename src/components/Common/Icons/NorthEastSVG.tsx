import { IconTypes } from "./IconTypes";

export const NorthEastSVG: React.FC<IconTypes> = ({ color, height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={color}
    >
      <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
    </svg>
  );
};
