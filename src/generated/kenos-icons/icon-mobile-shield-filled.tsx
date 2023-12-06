/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconMobileShieldFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.087 5.244s-1.188 1.07-2.797 1.07v3.565c0 1.64 1.609 2.816 2.797 3.208 1.19-.392 2.798-1.568 2.798-3.208V6.314c-1.609 0-2.798-1.07-2.798-1.07z" /><path fill="currentColor" d="M17.703 14.264c-1.748-.57-3.637-2.21-3.637-4.385V6.136H5.5V17.9h12.587v-3.493l-.384-.143zM5.5 18.97C5.605 20.645 6.969 22 8.647 22h6.294c1.678 0 3.042-1.355 3.146-3.03H5.5zm9.79-13.94c1.084 0 1.923-.713 1.993-.748l.49-.428C17.283 2.784 16.199 2 14.94 2H8.647C6.969 2 5.605 3.355 5.5 5.03h9.79z" /><path fill="currentColor" d="M18.087 5.244s-1.188 1.07-2.797 1.07v3.565c0 1.64 1.609 2.816 2.797 3.208 1.19-.392 2.798-1.568 2.798-3.208V6.314c-1.609 0-2.798-1.07-2.798-1.07z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMobileShieldFilled;
