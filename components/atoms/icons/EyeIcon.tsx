import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const EyeIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#898989"
      d="M15.898 4.979C15.77 4.775 12.714 0 8 0 3.286 0 .23 4.775.102 4.979a.667.667 0 0 0 0 .709C.23 5.891 3.286 10.667 8 10.667c4.714 0 7.77-4.776 7.898-4.979a.667.667 0 0 0 0-.71ZM8 8a2.667 2.667 0 1 1 0-5.333A2.667 2.667 0 0 1 8 8Z"
    />
  </Svg>
);
export default EyeIcon;
