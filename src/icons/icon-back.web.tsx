import React from 'react';
import Svg, {Path} from 'react-native-svg';

function LeftArrowIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M15.315 7.375H2.277l5.885-6.228a.688.688 0 00-.05-.97.684.684 0 00-.948.027L.187 7.59c-.03.032-.046.073-.07.11-.024.033-.051.065-.067.104A.71.71 0 000 8.06v.005c.002.086.02.17.052.253.016.04.044.073.069.107.022.034.036.075.066.107l6.852 7.252c.26.276.692.29.968.03 0 0 .002 0 .002-.002a.687.687 0 00.027-.97l-5.76-6.096h13.039a.687.687 0 000-1.371z"
        fill="#fff"
      />
    </Svg>
  );
}

export default LeftArrowIcon;
