/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconRewindLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2 12c0 5.517 4.488 10 10 10a9.97 9.97 0 005.334-1.545.36.36 0 00.11-.493.36.36 0 00-.494-.11 9.247 9.247 0 01-4.95 1.43c-5.119 0-9.282-4.163-9.282-9.282S6.88 2.718 12 2.718s9.282 4.163 9.287 9.277a9.248 9.248 0 01-1.43 4.95.36.36 0 00.11.494.36.36 0 00.493-.11A9.98 9.98 0 0022 12c0-5.512-4.488-10-10-10S2 6.484 2 12zm16.787 6.07a.714.714 0 010 1.425.714.714 0 010-1.425zm-2.249-1.175a.35.35 0 000-.503l-4.387-4.387 4.387-4.388a.35.35 0 000-.503.355.355 0 00-.502 0l-4.644 4.635a.35.35 0 000 .502l4.644 4.644c.068.068.16.105.251.105a.365.365 0 00.251-.105zm-6.07-.503a.35.35 0 010 .503.365.365 0 01-.25.105.357.357 0 01-.252-.105L5.323 12.25a.35.35 0 010-.502l4.643-4.635a.354.354 0 01.503 0 .35.35 0 010 .503L6.08 12.005l4.388 4.387z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconRewindLight;
