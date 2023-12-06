/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconBuyDevicesLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.5 5.922c0 .003-.002.005-.002.005s-.003.002-.003.004v12.855c0 1.774-1.455 3.214-3.249 3.214H8.75c-1.794 0-3.25-1.44-3.25-3.214V5.214C5.5 3.44 6.956 2 8.749 2h6.502C17.044 2 18.5 3.44 18.5 5.214v.708zm-3.254-3.209H8.75c-1.396 0-2.528 1.12-2.528 2.5v.353h11.553v-.352c0-1.38-1.132-2.5-2.528-2.5zm0 18.57c1.396 0 2.528-1.12 2.528-2.501V6.279H6.221v11.433h7.584c.198 0 .36.16.36.357a.359.359 0 01-.36.356H6.22v.357c0 1.38 1.132 2.5 2.528 2.5h6.497zm.726-2.501c.397 0 .721-.32.721-.713a.718.718 0 00-.72-.714.719.719 0 00-.722.714c0 .393.324.713.721.713zM13.758 8.61a.361.361 0 00-.49-.141.353.353 0 00-.143.484l.892 1.614H9.983l.892-1.614a.353.353 0 00-.144-.484.361.361 0 00-.49.141l-1.076 1.957H7.21l1.141 4.567c.125.452.61.79 1.123.79h5.056c.513 0 .998-.338 1.128-.8l1.141-4.557h-1.954L13.758 8.61zm.768 6.601H9.47c-.18 0-.388-.128-.425-.256l-.92-3.67h7.74l-.91 3.661c-.037.137-.245.265-.43.265z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBuyDevicesLight;
