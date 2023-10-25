/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconMobileDeviceRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M15 2H8.571A3.582 3.582 0 005 5.571V18.43A3.582 3.582 0 008.571 22H15a3.582 3.582 0 003.571-3.571V5.57A3.582 3.582 0 0015 2zM6.429 17.357V6.643h10.714v10.714H6.429zM8.57 3.43H15c1.071 0 1.929.785 2.107 1.785H6.464c.179-1 1.036-1.785 2.107-1.785zM15 20.57H8.571c-1.071 0-1.928-.785-2.107-1.785h10.643c-.178 1-1.036 1.785-2.107 1.785z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMobileDeviceRegular;
