import { IconTypes } from "./IconTypes";

export const ReplySVG: React.FC<IconTypes> = ({ color, height, width, className }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 96 960 960"
      width={width}
      className={className}
    >
      <path d="M780 856V682q0-54-38-92t-92-38H234l154 154-42 42-226-226 226-226 42 42-154 154h416q78 0 134 55.5T840 682v174h-60Z" />
    </svg>
  );
};
