import { forwardRef, HTMLAttributes } from "react";
import { IconTypes } from "./IconTypes";

type Props = IconTypes & HTMLAttributes<HTMLDivElement>;

export const ChevronLeftSVG = forwardRef<HTMLDivElement, Props>(
  ({ color, height, width, onClickFunc, className }, ref) => {
    return (
      <div ref={ref} onClick={onClickFunc} className={className}>
        <svg
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          height={height}
          viewBox="0 96 960 960"
          width={width}
        >
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
      </div>
    );
  }
);
