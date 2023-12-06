/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconPlaneRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.546 6.17a2.29 2.29 0 011.273 1.285c.493 1.23-.075 2.638-1.252 3.17l-10.099 4.476-5.301-1.325.001-.006a.673.673 0 01-.481-.44.68.68 0 01.43-.86l.585-.194-3.726-2.484L6.632 7.93l3.798 1.9 8.307-3.627a2.293 2.293 0 011.809-.033zm-10.198 7.5l9.659-4.284c.514-.232.771-.872.562-1.395a.965.965 0 00-.535-.561.94.94 0 00-.744.016l-8.904 3.882L6.57 9.42l-1.688.675 2.731 1.821-.002.002a.676.676 0 01.063 1.083l2.674.668zm8.988 5.202H5.921v-1.36h13.415v1.36z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPlaneRegular;
