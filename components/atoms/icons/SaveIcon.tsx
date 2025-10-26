import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const SaveIcon = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <G fill="#5655B9" clipPath="url(#a)">
      <Path d="M19.25 8.167h-9.197c-1.25-2.13-3.358-2.46-4.385-2.322l-1.33.19 1.199 4.117a8.72 8.72 0 0 0-2.186 2.681H0V21h3.344a8.711 8.711 0 0 0 7.156 4.627V28h2.333v-2.333H17.5V28h2.333v-2.363c4.553-.302 8.167-4.092 8.167-8.72 0-4.826-3.925-8.75-8.75-8.75Zm.583 7h-8.166v-2.334h8.166v2.334ZM15.75 5.833a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SaveIcon;
