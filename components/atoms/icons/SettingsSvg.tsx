import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";
const SettingsSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.stroke || "#898989"}
      strokeLinecap="square"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="M23 13.5v-3l-3.248-.443a7.925 7.925 0 0 0-.9-2.165l1.984-2.61-2.118-2.121-2.61 1.984a7.927 7.927 0 0 0-2.165-.9L13.5 1h-3l-.443 3.248a7.927 7.927 0 0 0-2.165.9l-2.61-1.987-2.121 2.121 1.984 2.61a7.927 7.927 0 0 0-.9 2.165L1 10.5v3l3.248.443c.191.762.494 1.492.9 2.165l-1.984 2.61 2.121 2.121 2.61-1.984a7.925 7.925 0 0 0 2.165.9L10.5 23h3l.443-3.248a7.925 7.925 0 0 0 2.165-.9l2.61 1.984 2.121-2.121-1.984-2.61a7.925 7.925 0 0 0 .9-2.165L23 13.5Z" />
      <Path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SettingsSvg;
