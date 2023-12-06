/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTree2Filled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M17.186 5.933C15.939 2.345 11.9 2.16 11.076 2.16c-1.061 0-6.274.289-6.467 5.894-1.07.428-2.454 1.473-2.454 3.994 0 3.21 2.243 4.353 4.342 4.353h4.832v-1.51L8.93 12.465a.612.612 0 01.003-.86.603.603 0 01.854.003l1.54 1.558V9.59a.605.605 0 111.21 0v1.034l1.194-1.627a.605.605 0 11.972.722l-2.143 2.922c-.006.008-.017.011-.022.02v3.728l-1.208.01v4.836a.605.605 0 101.21 0v-4.838l4.04-.025c2.43 0 5.266-1.378 5.266-5.26-.006-3.51-2.334-4.961-4.661-5.18z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTree2Filled;
