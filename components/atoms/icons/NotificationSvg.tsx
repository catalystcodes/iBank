import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const NotificationSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M21.855 18.482A12.85 12.85 0 0 1 20 11.994V8.006a8 8 0 1 0-16 0v3.982a12.851 12.851 0 0 1-1.855 6.494A1 1 0 0 0 3 20h18a1.001 1.001 0 0 0 .855-1.518ZM13.007 23.825a3 3 0 0 0 1.82-1.819H9.173a3 3 0 0 0 3.833 1.82Z"
    />
  </Svg>
);
export default NotificationSvg;
