import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Menu() {
  return (
    <Svg width={20} height={16} viewBox="0 0 20 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.003 2.241a.834.834 0 01-.843-.82C.16.97.538.6 1.003.6H19c.465 0 .843.367.843.82a.834.834 0 01-.843.821H1.003zm18 4.922c.465 0 .843.367.843.82a.832.832 0 01-.843.821h-18a.832.832 0 01-.843-.82c0-.454.378-.821.843-.821h18zm.843 7.384a.832.832 0 00-.843-.821h-18a.832.832 0 00-.843.82c.006.46.384.827.843.822h18a.832.832 0 00.843-.821z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Menu;
