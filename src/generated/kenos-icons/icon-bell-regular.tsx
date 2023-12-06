/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconBellRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.43 17.643a10.092 10.092 0 01-2-6v-2.5C19.43 5.214 16.216 2 12.287 2 8.36 2 5.145 5.214 5.145 9.143v2.5c0 2.143-.715 4.286-2 6-.179.214-.179.5-.072.75s.357.393.643.393h5.75c0 .107-.036.25-.036.357A2.866 2.866 0 0012.287 22a2.866 2.866 0 002.857-2.857c0-.107 0-.25-.035-.357h5.75c.286 0 .535-.143.643-.393.107-.25.107-.536-.072-.75zm-7.714 1.5c0 .786-.643 1.428-1.429 1.428a1.433 1.433 0 01-1.428-1.428c0-.107 0-.25.036-.357h2.75c.071.107.071.25.071.357zm-8.679-1.786c1-1.714 1.536-3.714 1.536-5.714v-2.5c0-3.143 2.572-5.714 5.714-5.714 3.143 0 5.715 2.571 5.715 5.714v2.5c0 2 .535 4 1.535 5.714h-14.5z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBellRegular;