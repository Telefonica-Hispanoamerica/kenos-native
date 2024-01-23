/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconDisturbRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.695 18.012l2.636 2.768a.744.744 0 01-.004 1.012.661.661 0 01-.96 0l-2.69-2.824a8.69 8.69 0 01-5.504 1.96c-1.291 0-2.548-.264-3.65-.768l-5.188 1.456a.66.66 0 01-.655-.184.74.74 0 01-.175-.688l1.39-5.463c-.484-1.168-.731-2.448-.731-3.812 0-1.436.274-2.784.819-4.008a.665.665 0 01.903-.344c.339.164.487.592.327.948-.457 1.032-.69 2.176-.69 3.404 0 1.244.24 2.404.71 3.444a.74.74 0 01.041.488l-1.15 4.52 4.282-1.205a.655.655 0 01.468.044c.972.484 2.114.74 3.3.74 1.69 0 3.256-.58 4.525-1.56L2.68 3.222a.74.74 0 010-1.012.658.658 0 01.964 0l2.29 2.404c1.672-1.668 3.912-2.612 6.243-2.612 2.411 0 4.674.984 6.377 2.768 1.699 1.784 2.636 4.163 2.636 6.695 0 2.464-.884 4.78-2.495 6.547zm1.135-6.547c0-4.432-3.432-8.035-7.653-8.035a7.502 7.502 0 00-5.28 2.196l10.826 11.366a8.205 8.205 0 002.107-5.527z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconDisturbRegular;
