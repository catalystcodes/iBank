import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const TransferIcon = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <Path
      fill="#FF4267"
      d="M21 7v1.167h2.333V7c0-3.86-3.14-7-7-7h-1.166v2.333h1.166A4.671 4.671 0 0 1 21 7ZM7 21v-1.167H4.667V21c0 3.86 3.139 7 7 7h1.166v-2.333h-1.167A4.671 4.671 0 0 1 7 21ZM10.5 0H2.333A2.333 2.333 0 0 0 0 2.333v12.834A2.333 2.333 0 0 0 2.333 17.5H10.5a2.333 2.333 0 0 0 2.333-2.333V2.333A2.333 2.333 0 0 0 10.5 0Zm0 14H2.333V3.5H10.5V14ZM25.666 10.5H17.5a2.333 2.333 0 0 0-2.334 2.333v12.834A2.333 2.333 0 0 0 17.5 28h8.166A2.333 2.333 0 0 0 28 25.667V12.833a2.333 2.333 0 0 0-2.334-2.333Zm0 14H17.5V14h8.166v10.5Z"
    />
  </Svg>
);
export default TransferIcon;
