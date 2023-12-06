/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconFileEnexFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.116 7.803l.003.003v-.003h-.003zM3.979 11.61h2.198l-.056.537h-1.4v.79h1.12v.558h-1.12v.832h1.482v.537H3.979V11.61zm3.321 0l1.544 2.086V11.61h.653v3.257H8.9L7.404 12.89v1.977h-.652V11.61H7.3zm5.104 0h-2.199v3.255h2.225v-.538h-1.482v-.832h1.12v-.558h-1.12v-.79h1.4l.056-.537zm1.373 1.633l-.994-1.633h.775l.647 1.075.591-1.075h.79l-1.067 1.593 1.04 1.662h-.824l-.647-1.104-.586 1.104h-.804l1.079-1.622z" /><path fill="currentColor" d="M21.794 7.912a.61.61 0 01.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.25c-.75 0-1.409-.647-1.409-1.383l.034-2.77h-2.3a2.427 2.427 0 01-2.42-2.427v-4.095a2.427 2.427 0 012.42-2.426h2.266V3.534c0-.726.673-1.384 1.41-1.384h7.414c.23 0 .445.087.61.244l5.3 5.132a.86.86 0 01.219.386zm-1.678-.11L16.004 3.82v1.764c0 .659.215 1.213.622 1.608.414.4.997.61 1.691.61h1.799zM4.576 16.47h10.178a1.21 1.21 0 001.208-1.21v-4.096c0-.666-.54-1.21-1.208-1.21H4.575a1.21 1.21 0 00-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFileEnexFilled;
