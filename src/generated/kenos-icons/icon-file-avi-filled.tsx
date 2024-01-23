/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconFileAviFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.118 7.803l.003.003v-.003h-.003zM6.367 11.52h.927l1.33 3.683h-.898l-.309-.927H6.221l-.285.927h-.804l1.235-3.683zm.846 2.148l-.403-1.226h-.012l-.383 1.226h.798zM9.39 11.52h-.9l1.283 3.683h.877l1.224-3.683h-.818l-.804 2.672-.863-2.672zm2.96 0h.84v3.683h-.84V11.52z" /><path fill="currentColor" d="M21.798 7.912a.61.61 0 01.048.238v12.306c0 .75-.644 1.383-1.409 1.383H8.255c-.75 0-1.406-.647-1.406-1.383l.033-2.77h-2.3a2.427 2.427 0 01-2.42-2.427v-4.095a2.427 2.427 0 012.42-2.426H6.85V3.534c0-.726.672-1.384 1.406-1.384h7.415a.86.86 0 01.613.25l5.297 5.126a.858.858 0 01.218.386zm-1.68-.11L16.006 3.82v1.764c0 .659.215 1.213.622 1.608.414.4.997.61 1.691.61h1.799zM4.58 16.47h9.846a1.21 1.21 0 001.207-1.21v-4.096c0-.666-.54-1.21-1.207-1.21H4.58a1.21 1.21 0 00-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFileAviFilled;
