/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconPowerRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.215 12.668c0 .416.35.761.777.761a.773.773 0 00.776-.761V2.761A.773.773 0 0011.992 2a.773.773 0 00-.777.762v9.905z" /><path fill="currentColor" d="M2.47 12.668C2.47 17.81 6.749 22 11.992 22c5.247 0 9.522-4.193 9.526-9.332 0-4.037-2.645-7.621-6.57-8.876-.388-.116-.857.112-.973.493-.115.38.116.842.504.954 3.268 1.066 5.482 4.037 5.482 7.429 0 4.305-3.575 7.809-7.97 7.809-4.393 0-7.968-3.504-7.968-7.81 0-3.391 2.218-6.366 5.486-7.428.426-.116.618-.573.503-.954-.115-.417-.584-.605-.972-.493-3.93 1.255-6.57 4.835-6.57 8.876z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPowerRegular;
