/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconLikeFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.107 5.904l.64-2.193c.191-.72.868-1.211 1.68-1.211.942 0 1.787.803 1.787 1.794l-.178 1.253-.89 3.046h5.711a2.15 2.15 0 011.394 3.78 2.151 2.151 0 01-1.188 3.313c.096.248.155.515.155.794 0 .991-.672 1.827-1.581 2.074.096.248.155.514.155.794A2.15 2.15 0 0116.65 21.5h-6.077c-.854 0-1.713-.349-2.29-.927-.31-.312-.799-.505-1.279-.505H2v-10.4h4.999c.192 0 .37-.074.507-.211l3.6-3.552z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconLikeFilled;
