import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Mark = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#3629B7"
      d="M5.414 11.08a1.001 1.001 0 0 1-.707-.292L0 6.081l1.414-1.414 4 4L14.081 0l1.414 1.414-9.374 9.374a1 1 0 0 1-.707.293Z"
    />
  </Svg>
);
export default Mark;
