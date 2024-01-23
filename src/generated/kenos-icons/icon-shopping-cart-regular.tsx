/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconShoppingCartRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M4.598 3.362L8.21 17.09l10.332-2.384 2.524-8.412H6.778L5.648 2H2.976v1.362h1.622zM9.19 15.466l-2.055-7.81h12.098l-1.77 5.9-8.273 1.91zm.585 3.334a1.6 1.6 0 11-.003 3.2 1.6 1.6 0 01.003-3.2zm6.44 0a1.6 1.6 0 11-.002 3.2 1.6 1.6 0 01.002-3.2z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconShoppingCartRegular;
