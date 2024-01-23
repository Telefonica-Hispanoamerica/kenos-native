/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconClipboardLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.803 21.287H5.201V4.862c0-.608.456-1.07 1.045-1.07h1.746v1.787h7.676V3.787h1.742c.594 0 1.045.467 1.045 1.07v12.498c0 .215.139.357.348.357.21 0 .349-.142.349-.357V4.862c0-1.001-.768-1.788-1.746-1.788H15.66V2H7.992v1.07H6.246c-.978 0-1.746.786-1.746 1.787V22h14.303c.21 0 .349-.142.349-.357 0-.214-.139-.356-.349-.356zM8.69 2.717h6.278v2.145H8.69V2.718zm-.697 11.43h7.672c.21 0 .353.141.353.356s-.139.356-.348.356H7.992c-.21 0-.348-.141-.348-.356s.138-.357.348-.357zm7.672-2.858H7.992c-.21 0-.348.142-.348.357s.138.356.348.356h7.676c.21 0 .349-.141.349-.356s-.143-.357-.353-.357zM7.992 8.432h7.672c.21 0 .353.142.353.357 0 .214-.139.356-.348.356H7.992c-.21 0-.348-.142-.348-.356 0-.215.138-.357.348-.357zm7.672 8.571H7.992c-.21 0-.348.142-.348.357s.138.357.348.357h7.676c.21 0 .349-.142.349-.357s-.143-.357-.353-.357zm2.443 2.496c0-.393.312-.713.696-.713.384 0 .697.32.697.713a.706.706 0 01-.697.714.706.706 0 01-.696-.714z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconClipboardLight;
