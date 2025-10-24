import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";
const HidePasswordIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill="#898989" clipPath="url(#a)">
      <Path d="M23.847 11.468a19.847 19.847 0 0 0-3.282-3.791l-11.8 11.8c1.045.34 2.136.516 3.235.523 7.07 0 11.655-7.163 11.847-7.468a1 1 0 0 0 0-1.064ZM22.706 1.293a1 1 0 0 0-1.413 0l-4.058 4.058A11.258 11.258 0 0 0 12 4C4.929 4 .345 11.163.153 11.468a1 1 0 0 0 0 1.064 19.933 19.933 0 0 0 4.859 5.042l-2.72 2.719a1 1 0 1 0 1.414 1.414l19-19a1 1 0 0 0 0-1.414ZM8 12a4 4 0 0 1 4-4c.71.004 1.406.202 2.012.574l-5.438 5.437A3.894 3.894 0 0 1 8 12Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HidePasswordIcon;
