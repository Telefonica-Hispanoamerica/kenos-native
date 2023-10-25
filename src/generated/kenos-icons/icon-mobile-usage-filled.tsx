/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconMobileUsageFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M14.434 5.387H5.31A3.576 3.576 0 018.878 2h6.44a3.57 3.57 0 012.983 1.614l-.06-.003-.06-.002a4.813 4.813 0 00-3.747 1.778zM8.878 22h6.44a3.576 3.576 0 003.57-3.387H5.308A3.58 3.58 0 008.878 22zm4.47-13.577a4.832 4.832 0 004.834 4.823c.242 0 .48-.023.719-.06v4.348H5.3V6.453h8.475a4.814 4.814 0 00-.426 1.97zm8.952.004a4.115 4.115 0 01-4.114 4.106c-2.267 0-4.118-1.843-4.118-4.106a4.119 4.119 0 014.114-4.11 4.12 4.12 0 014.118 4.11zm-2.382-2.491a2.997 2.997 0 00-1.2-.494v1.692l1.2-1.198zm-1.736 5.527c.646 0 1.241-.201 1.736-.544l-2.116-2.112a.532.532 0 01-.156-.38V5.442a3.044 3.044 0 00-2.506 2.985 3.043 3.043 0 003.042 3.036zm2.496-4.768l-1.736 1.732 1.736 1.733a3.017 3.017 0 00.546-1.733c0-.644-.202-1.238-.546-1.732z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMobileUsageFilled;
