/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconArrowDropUpFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.486 14.99l-8.572-7.574a1.41 1.41 0 00-1.817 0l-8.57 7.423a1.044 1.044 0 00-.28 1.23c.197.423.656.703 1.174.709l17.138.15c.52 0 .986-.274 1.185-.7a1.041 1.041 0 00-.275-1.238h.017z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconArrowDropUpFilled;
