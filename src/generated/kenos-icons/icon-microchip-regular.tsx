/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconMicrochipRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.843 12.006a.606.606 0 01-.605.605H18.67v1.213h2.568a.606.606 0 010 1.21H18.67v2.392c0 .667-.61 1.252-1.308 1.252h-2.328v2.56a.606.606 0 01-1.21 0v-2.56H12.61v2.56a.606.606 0 01-1.21 0v-2.56h-1.213v2.56a.606.606 0 01-1.21 0v-2.56H6.65c-.708 0-1.308-.571-1.308-1.252v-2.392H2.765a.606.606 0 010-1.21h2.577V12.61H2.765a.606.606 0 010-1.21h2.577v-1.213H2.765a.606.606 0 010-1.21h2.577V6.61c0-.672.61-1.26 1.308-1.26h2.328V2.764a.606.606 0 011.21 0V5.35h1.213V2.765a.606.606 0 011.21 0V5.35h1.213V2.765a.606.606 0 011.21 0V5.35h2.328c.697 0 1.308.589 1.308 1.261v2.367h2.568a.606.606 0 010 1.21H18.67v1.213h2.568c.334 0 .605.272.605.605zM6.647 17.468H17.36c.04 0 .09-.04.1-.059V14.44l-.002-.005c0-.004 0-.006.002-.008v-2.41l-.002-.008.003-.009V6.636a.17.17 0 00-.098-.07H6.65c-.03 0-.09.045-.1.076v2.937l.002.007a.02.02 0 01-.001.007.02.02 0 00-.002.007l.003 2.398.003.008a.018.018 0 01-.002.007v5.414l.005.003c.015.01.052.038.09.038z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMicrochipRegular;
