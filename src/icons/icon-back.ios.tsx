import React from 'react';
import Svg, {Path} from 'react-native-svg';

function LeftArrowIcon() {
  return (
    <Svg width={10} height={16} viewBox="0 0 10 16" fill="none">
      <Path
        d="M9.068 16a.96.96 0 01-.627-.23L.308 8.72a.858.858 0 01-.05-1.273c.013-.014.028-.025.042-.04L8.436.238a.964.964 0 011.318.05.861.861 0 01-.054 1.256L2.31 8.06l7.385 6.393c.38.33.407.892.06 1.257a.964.964 0 01-.687.291z"
        fill="#fff"
      />
    </Svg>
  );
}

export default LeftArrowIcon;
