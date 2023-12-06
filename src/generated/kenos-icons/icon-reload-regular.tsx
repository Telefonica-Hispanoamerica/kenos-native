/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconReloadRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.209 17.378a.71.71 0 01.784.619.732.732 0 01-.584.823l-3.717.56-.536-3.89a.72.72 0 01.592-.82.71.71 0 01.784.619l.212 1.546a8.773 8.773 0 001.44-4.83c0-4.715-3.668-8.547-8.18-8.547a7.81 7.81 0 00-3.5.82.691.691 0 01-.932-.347c-.16-.364-.016-.807.332-.974A9.178 9.178 0 0112 2c5.28 0 9.573 4.484 9.573 10 0 2.014-.569 3.932-1.62 5.566l1.256-.188zM12 20.542c1.24 0 2.432-.276 3.54-.836a.672.672 0 01.912.338.744.744 0 01-.324.974 9.113 9.113 0 01-4.136.982c-5.28 0-9.573-4.484-9.573-10 0-2.006.576-3.932 1.629-5.575l-1.257.188c-.38.059-.728-.221-.784-.618a.725.725 0 01.592-.823l3.72-.56.537 3.89a.72.72 0 01-.592.82c-.032.008-.064.008-.096.008a.707.707 0 01-.688-.627l-.212-1.546a8.764 8.764 0 00-1.448 4.839c0 4.714 3.668 8.546 8.18 8.546z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconReloadRegular;
