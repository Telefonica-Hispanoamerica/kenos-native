import React from 'react';
import Svg, { Path } from 'react-native-svg';

function IconClose() {
  return (
    <Svg
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMinYMin slice">
      <Path
        fill="#fff"
        d="M16.841 17.853a.722.722 0 00.948-1.086L13.022 12l4.766-4.767.065-.074a.722.722 0 00-1.086-.947L12 10.978 7.233 6.211l-.074-.064a.722.722 0 00-.947 1.086L10.979 12 6.21 16.767l-.064.074a.722.722 0 001.086.947L12 13.021l4.767 4.767.074.065z"
      />
    </Svg>
  );
}

export default IconClose;
