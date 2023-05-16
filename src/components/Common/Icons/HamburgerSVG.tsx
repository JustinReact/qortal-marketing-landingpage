import { IconTypes } from './IconTypes';

export const HamburgerSVG: React.FC<IconTypes> = ({
  color,
  height,
  width,
  className,
  onClickFunc
}) => {
  return (
    <div onClick={onClickFunc} className={className}>
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        viewBox="0 96 960 960"
        width={width}
      >
        <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
      </svg>
    </div>
  );
};
