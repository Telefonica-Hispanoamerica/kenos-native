/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconPersonalComputerFilled = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.99 2.5H2v10.959h19.99V2.5zM2 14.557v2.558h19.995v-2.558H2zm6.074 3.652h7.852l.676 2.375c.073.257.037.477-.105.659a.703.703 0 01-.571.257H8.069a.703.703 0 01-.57-.257c-.106-.182-.18-.44-.106-.66l.681-2.374z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPersonalComputerFilled;
