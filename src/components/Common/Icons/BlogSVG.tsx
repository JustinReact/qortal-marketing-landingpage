import { IconTypes } from "./IconTypes";

export const BlogSVG: React.FC<IconTypes> = ({ color, height, width }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
    >
      <path d="M140-120q-24 0-42-18t-18-42v-371h60v371h452v60H140Zm121-120q-24 0-42.5-18T200-300v-371h60v371h453v60H261Zm119-120q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h440q24 0 42 18t18 42v360q0 24-18 42t-42 18H380Zm0-60h440v-298H380v298Z" />
    </svg>
  );
};
