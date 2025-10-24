import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";
const ShowPasswordIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#898989"
        d="M23.847 11.468C23.655 11.163 19.07 4 12 4S.345 11.163.153 11.468a1 1 0 0 0 0 1.064C.345 12.837 4.929 20 12 20c7.07 0 11.655-7.163 11.847-7.468a1 1 0 0 0 0-1.064ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ShowPasswordIcon;
