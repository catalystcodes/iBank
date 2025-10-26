import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const WithdrawIcon = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <Path
      fill="#0890FE"
      d="M12.834 28H21a2.333 2.333 0 0 0 2.334-2.333v-21h-10.5V28Zm5.833-11.667v7h-2.334v-7h2.334ZM4.668 4.667v21A2.333 2.333 0 0 0 7.001 28h3.5V4.667H4.667Z"
    />
    <Path
      fill="#0890FE"
      d="M28 8.167h-2.333V2.333H2.333v5.834H0v-7C0 .52.523 0 1.167 0h25.666C27.477 0 28 .521 28 1.167v7Z"
    />
  </Svg>
);
export default WithdrawIcon;
