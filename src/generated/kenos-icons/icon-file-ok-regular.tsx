/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconFileOkRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.58 7.538a.833.833 0 01.266.62v12.31c0 .742-.641 1.378-1.403 1.378H8.294c-.745 0-1.395-.644-1.395-1.378v-1.03c-1.162-.614-4.123-2.331-4.459-4.225-.289-1.66-.283-5.473-.275-5.636a.593.593 0 01.746-.58c.851.13 1.308-.17 1.935-.588.513-.347 1.132-.756 2.053-.893V3.54c0-.726.667-1.378 1.395-1.378h7.398c.224 0 .443.087.61.24l5.278 5.135zm-.938 12.93V9.02H18.33c-1.011 0-1.886-.33-2.527-.952-.641-.628-.986-1.485-.986-2.482V3.37H8.294c-.073 0-.193.112-.193.168v3.95c1.011.115 1.678.549 2.216.918v.001c.633.42 1.093.725 1.974.58a.62.62 0 01.5.137.605.605 0 01.215.45c0 .073 0 .978-.034 2.082h5.314a.61.61 0 01.602.605.604.604 0 01-.602.605h-5.353a26.338 26.338 0 01-.12 1.703H18.3c.336 0 .602.266.602.605 0 .33-.266.605-.602.605h-5.745c-.258.588-.745 1.16-1.308 1.67H18.3c.336 0 .602.265.602.604a.603.603 0 01-.602.605H9.616a18.61 18.61 0 01-1.515.863v.953c0 .056.095.168.193.168h12.149c.103-.006.199-.101.199-.174zm-17.02-5.465c.202 1.16 2.431 2.653 3.955 3.417 1.524-.764 3.765-2.257 3.964-3.417.095-.58.16-1.49.201-2.395.031-.902.048-1.807.056-2.386-.97-.026-1.585-.433-2.148-.805l-.003-.002c-.594-.404-1.115-.75-2.07-.75-.949 0-1.461.342-2.059.742l-.01.008-.013.008c-.56.368-1.19.782-2.13.807.008 1.168.058 3.605.257 4.773zM16.02 5.586c0 .66.215 1.218.624 1.613.41.404.995.614 1.687.614h1.806L16.02 3.82v1.765zm-5.415 5.877a.602.602 0 00-.851 0L6.919 14.31l-1.04-1.045a.602.602 0 00-.85 0 .605.605 0 000 .855l1.464 1.473a.6.6 0 00.852 0l3.26-3.277a.605.605 0 000-.854z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFileOkRegular;
