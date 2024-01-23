/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconWomanFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M16.982 16.922a.202.202 0 00.013-.076c0-.01.005-.024.005-.033 0-.014-.005-.024-.01-.038 0-.014.005-.029 0-.038L15.388 8.96c-.247-1.186-1.029-2.134-2.043-2.59.59-.435.978-1.151.978-1.962C14.322 3.08 13.284 2 12 2c-1.28 0-2.322 1.081-2.322 2.409 0 .81.389 1.527.983 1.963A3.641 3.641 0 008.618 8.96l-1.609 7.78c-.004.015 0 .024 0 .038 0 .015-.009.024-.009.038 0 .015.005.024.005.034l.013.07c.005.024.014.043.023.062.01.02.023.038.037.057.013.02.027.034.045.053.019.014.037.028.055.037a.19.19 0 00.064.029c.01.005.019.01.032.014.014.005.028 0 .037 0 .013 0 .023.01.036.01h2.144V22h4.995v-4.813h2.14c.022 0 .05-.004.072-.01.014-.004.019-.009.032-.013l.064-.029c.019-.01.037-.024.055-.038a.256.256 0 00.046-.052.388.388 0 00.036-.057.085.085 0 00.05-.066z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconWomanFilled;
