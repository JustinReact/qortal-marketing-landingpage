import { IconTypes } from "./IconTypes";

export const CommandLineSVG: React.FC<IconTypes> = ({
  color,
  height,
  width,
  className
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width={width}
      height={height}
      className={className}
      style={{ display: "inline" }}
      version="1.0"
    >
      <defs>
        <linearGradient id="linearGradient1948">
          <stop offset="0" style={{ stopColor: "#2d2839", stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: "#282433", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="linearGradient1020">
          <stop offset="0" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
          <stop
            offset="1"
            style={{ stopColor: "#ffffff", stopOpacity: 0.09411765 }}
          />
        </linearGradient>
        <linearGradient id="linearGradient1001">
          <stop offset="0" style={{ stopColor: "#77767b", stopOpacity: 1 }} />
          <stop
            offset="0.05"
            style={{ stopColor: "#c0bfbc", stopOpacity: 1 }}
          />
          <stop offset="0.1" style={{ stopColor: "#9a9996", stopOpacity: 1 }} />
          <stop offset="0.9" style={{ stopColor: "#9a9996", stopOpacity: 1 }} />
          <stop
            offset="0.95"
            style={{ stopColor: "#c0bfbc", stopOpacity: 1 }}
          />
          <stop offset="1" style={{ stopColor: "#77767b", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient
          id="linearGradient965"
          x1="48"
          y1="44"
          x2="464"
          y2="44"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient1001"
        />
        <radialGradient
          id="radialGradient1030"
          cx="63.999996"
          cy="194.19048"
          fx="63.999996"
          fy="194.19048"
          r="44"
          gradientTransform="matrix(-4.727273,7.935912e-7,-3.030149e-7,-1.636364,238.54547,49.766183)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient1020"
        />
        <linearGradient
          id="linearGradient1950"
          x1="70.346565"
          y1="245.39511"
          x2="70.346565"
          y2="269.13693"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient1948"
        />
      </defs>
      <g transform="translate(0,-172)" style={{ display: "inline" }}>
        <g style={{ display: "inline" }}>
          <g transform="rotate(-30,420.69873,288.4192)" />
          <rect
            transform="matrix(0.25,0,0,0.25,0,225)"
            x="48"
            y="-124"
            width="416"
            height="376"
            rx="32"
            ry="32"
            style={{
              display: "inline",
              fill: "url(#linearGradient965)",
              fillOpacity: 1,
              stroke: "none"
            }}
          />
          <rect
            transform="matrix(0.25,0,0,0.25,0,225)"
            x="48"
            y="-164"
            width="416"
            height="384"
            rx="32"
            ry="32"
            style={{
              display: "inline",
              fill: "#deddda",
              fillOpacity: 1,
              stroke: "none"
            }}
          />
          <rect
            transform="scale(1,-1)"
            x="16"
            y="-276"
            width="96"
            height="88"
            rx="4"
            ry="4"
            style={{
              display: "inline",
              fill: "#241f31",
              fillOpacity: 1,
              stroke: "none"
            }}
          />
          <rect
            transform="scale(-1)"
            x="-108"
            y="-272"
            width="88"
            height="78"
            style={{
              display: "inline",
              opacity: 0.05,
              fill: "url(#radialGradient1030)",
              fillOpacity: 1,
              stroke: "none"
            }}
          />
          <g transform="translate(-2,-2)" style={{ fill: "#ffffff" }}>
            <path
              d="M 44.012301,210.88755 30,203.27182 V 208 l 9.710724,4.62951 v 0.1422 L 30,218 v 4.72818 l 14.012301,-8.21451 z"
              style={{
                fontFamily: "Source Code Pro",
                fontWeight: "bold",
                fill: "#ffffff"
              }}
            />
            <path
              d="m 48,226 v4 h16 v-4 z"
              style={{
                fontFamily: "Source Code Pro",
                fontWeight: "bold",
                fill: "#ffffff"
              }}
            />
          </g>
          <path
            d="m 100,244 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z ... (TRUNCATED FOR BREVITY) ..."
            style={{
              fill: "url(#linearGradient1950)",
              fillOpacity: 1,
              stroke: "none"
            }}
          />
        </g>
      </g>
    </svg>
  );
};
