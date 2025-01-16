import { FC } from "react";

const DcLogo: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width="150"
      height="150"
      className="text-white"
    >
      <defs>
        <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#0072ff", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#00c6ff", stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#0072ff", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#00c6ff", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      <circle
        cx="55"
        cy="48"
        r="40"
        fill="none"
        stroke="url(#borderGradient)"
        strokeWidth="3"
      />

      <text
        x="40"
        y="65"
        textAnchor="middle"
        fontSize="50"
  fontFamily="Georgia, Times New Roman, serif"
        fontWeight="bold"
        fill="url(#textGradient)"
      >
        D
      </text>

      <text
        x="75"
        y="65"
        textAnchor="middle"
        fontSize="50"
  fontFamily="Georgia, Times New Roman, serif"
        fontWeight="bold"
        fill="url(#textGradient)"
      >
        C
      </text>
    </svg>
  );
};

export default DcLogo;