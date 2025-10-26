import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CreditCardIcon = (props: SvgProps) => (
  <Svg width={28} height={24} fill="none" {...props}>
    <Path
      fill="#FB6B18"
      d="M28 7.332V2.667A2.333 2.333 0 0 0 25.667.333H2.333A2.333 2.333 0 0 0 0 2.667v4.665h28ZM0 10.833v10.5a2.333 2.333 0 0 0 2.333 2.334h23.334A2.333 2.333 0 0 0 28 21.333v-10.5H0Zm12.833 7H4.667V15.5h8.166v2.333Zm10.5 0h-4.666V15.5h4.666v2.333Z"
    />
  </Svg>
);
export default CreditCardIcon;
