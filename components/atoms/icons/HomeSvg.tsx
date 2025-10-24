import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";
const HomeSvg = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={props.stroke || "#898989"}
        d="m19.694 8.522-9.167-7.5a.833.833 0 0 0-1.055 0l-9.166 7.5a.833.833 0 0 0 1.055 1.29L2.5 8.88v9.453a.833.833 0 0 0 .833.834h5v-5h3.333v5h5a.833.833 0 0 0 .834-.834V8.88l1.139.932a.834.834 0 1 0 1.055-1.29Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HomeSvg;
