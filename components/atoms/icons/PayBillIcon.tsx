import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PayBillIcon = (props: SvgProps) => (
  <Svg width={24} height={28} fill="none" {...props}>
    <Path
      fill="#52D5BA"
      d="M22.5 0h-21C.856 0 .333.521.333 1.167V28L5 24.5 8.5 28l3.5-3.5 3.5 3.5 3.5-3.5 4.667 3.5V1.167C23.667.52 23.144 0 22.5 0Zm-9.333 18.667H5v-2.334h8.167v2.334Zm0-4.667H5v-2.333h8.167V14Zm0-4.667H5V7h8.167v2.333ZM19 18.667h-3.5v-2.334H19v2.334ZM19 14h-3.5v-2.333H19V14Zm0-4.667h-3.5V7H19v2.333Z"
    />
  </Svg>
);
export default PayBillIcon;
