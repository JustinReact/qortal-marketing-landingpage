import { forwardRef, HTMLAttributes } from "react";
import { ChevronSVGProps } from "./IconTypes";

type Props = ChevronSVGProps & HTMLAttributes<HTMLDivElement>;

export const ChevronRightSVG = forwardRef<HTMLDivElement, Props>(
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
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </div>
    );
  }
);
