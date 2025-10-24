import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const MessagesSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.stroke || "#898989"}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M1.614 3.558 12 13l10.385-9.441"
    />
    <Path
      stroke="#898989"
      strokeLinecap="square"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"
    />
  </Svg>
);
export default MessagesSvg;
