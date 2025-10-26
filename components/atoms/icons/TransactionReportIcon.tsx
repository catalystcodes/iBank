import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const TransactionReportIcon = (props: SvgProps) => (
  <Svg width={24} height={28} fill="none" {...props}>
    <Path
      fill="#3629B7"
      d="M.333 1.167v25.666A1.167 1.167 0 0 0 1.5 28h21a1.167 1.167 0 0 0 1.167-1.167V1.167A1.167 1.167 0 0 0 22.5 0h-21A1.167 1.167 0 0 0 .333 1.167Zm3.5 4.666h7v7h-7v-7Zm16.334 16.334H3.833v-2.334h16.334v2.334Zm0-4.667H3.833v-2.333h16.334V17.5Zm0-4.667h-7V10.5h7v2.333Zm0-4.666h-7V5.833h7v2.334Z"
    />
  </Svg>
);
export default TransactionReportIcon;
