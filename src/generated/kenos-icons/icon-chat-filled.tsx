/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconChatFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12 3h6.667C20.507 3 22 4.512 22 6.374v4.503c0 1.733-1.3 3.187-2.963 3.374v2.251c0 .15-.09.288-.228.346a.368.368 0 01-.403-.082l-2.518-2.515H12c-1.84 0-3.333-1.512-3.333-3.374V6.374C8.667 4.512 10.16 3 12 3z" /><path fill="currentColor" d="M12.37 18.374c1.664-.187 2.963-1.267 2.963-3h-3.328c-2.452 0-4.448-2.02-4.448-4.502V7.123H5.333C3.493 7.123 2 8.635 2 10.498V15c0 1.733 1.3 3.187 2.963 3.374v2.252c0 .148.09.288.228.345a.368.368 0 00.403-.082l2.518-2.515h4.258z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconChatFilled;