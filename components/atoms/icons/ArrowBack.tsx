import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

type ArrowBackProps = SvgProps & {
  color?: string;
};

const ArrowBack = ({ color = "#000", ...props }: ArrowBackProps) => (
  <Svg width={24} height={16} fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M0 7.997c0-.286.104-.573.311-.792L6.838.328a1.025 1.025 0 0 1 1.503 0 1.163 1.163 0 0 1 0 1.584L2.566 7.997l5.775 6.085a1.163 1.163 0 0 1 0 1.584 1.025 1.025 0 0 1-1.504 0L.311 8.79A1.148 1.148 0 0 1 0 7.997Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArrowBack;
