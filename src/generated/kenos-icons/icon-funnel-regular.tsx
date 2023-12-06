/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconFunnelRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M9.87 19.776c0 1.228.957 2.224 2.126 2.224 1.17 0 2.126-.996 2.126-2.224v-4.443l6.295-12.242a.773.773 0 00-.018-.73.702.702 0 00-.607-.361H4.21c-.25 0-.48.138-.607.36a.76.76 0 00-.018.73L9.87 15.334v4.443zm1.333-4.979L5.393 3.48H18.6l-5.81 11.319a.73.73 0 00-.087.35v4.633c0 .408-.317.74-.707.74-.39 0-.707-.332-.707-.74v-4.633a.785.785 0 00-.086-.35z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFunnelRegular;
