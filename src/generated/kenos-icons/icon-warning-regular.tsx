/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconWarningRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.992 17.86a1.2 1.2 0 010-2.4 1.2 1.2 0 010 2.4zm-.668-11.792h1.356V14h-1.356V6.068z" /><path fill="currentColor" d="M12 2c5.328 0 10 4.672 10 10s-4.672 10-10 10S2 17.328 2 12 6.672 2 12 2zm0 18.644c4.604 0 8.644-4.04 8.644-8.644S16.604 3.356 12 3.356 3.356 7.396 3.356 12s4.04 8.644 8.644 8.644z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconWarningRegular;
