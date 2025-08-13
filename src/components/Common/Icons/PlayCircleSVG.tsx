import { IconTypes } from "./IconTypes";

export const PlayCircleSVG: React.FC<IconTypes> = ({
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
      width={width}
      viewBox="0 -960 960 960"
    >
      {/* Outer circle */}
      <path
        fill={color}
        d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480
           q0-83 31.5-156T197-763q54-54 127-85.5T480-880
           q83 0 156 31.5T763-763q54 54 85.5 127T880-480
           q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80
           q134 0 227-93t93-227q0-134-93-227t-227-93
           q-134 0-227 93t-93 227q0 134 93 227t227 93Z"
      />
      {/* Triangle (scaled up slightly) */}
      <g transform="scale(1.3) translate(-115, 115)">
        <path
          fill={color}
          d="m380-300 280-180-280-180v360Z"
        />
      </g>
    </svg>
  );
};
