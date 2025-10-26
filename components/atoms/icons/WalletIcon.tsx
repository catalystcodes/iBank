import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const WalletIcon = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <Path
      fill="#3629B7"
      d="M26.833 4.667H3.5A1.169 1.169 0 0 1 2.333 3.5c0-.643.524-1.167 1.167-1.167H21V3.5h2.333V1.167C23.333.523 22.811 0 22.167 0H3.5A3.5 3.5 0 0 0 0 3.5v19.833A4.667 4.667 0 0 0 4.667 28h22.166c.644 0 1.167-.523 1.167-1.167v-21c0-.644-.523-1.166-1.167-1.166Zm-5.833 14A2.333 2.333 0 1 1 20.999 14 2.333 2.333 0 0 1 21 18.667Z"
    />
  </Svg>
);
export default WalletIcon;
