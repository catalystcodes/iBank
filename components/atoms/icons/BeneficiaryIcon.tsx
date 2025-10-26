import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const BeneficiaryIcon = (props: SvgProps) => (
  <Svg width={27} height={28} fill="none" {...props}>
    <Path
      fill="#FF4267"
      d="M27 4.667h-3.5V10.5H27V4.667ZM27 12.833h-3.5v5.834H27v-5.834ZM18.833 0H.167v28h18.666c1.93 0 3.5-1.57 3.5-3.5v-21c0-1.93-1.57-3.5-3.5-3.5ZM11.25 7a2.916 2.916 0 1 1 0 5.832 2.916 2.916 0 0 1 0-5.832Zm5.25 12.833H6v-1.89c0-1.04.682-1.95 1.68-2.243a12.726 12.726 0 0 1 3.57-.533c1.396 0 2.642.259 3.57.533a2.335 2.335 0 0 1 1.68 2.242v1.891Z"
    />
  </Svg>
);
export default BeneficiaryIcon;
