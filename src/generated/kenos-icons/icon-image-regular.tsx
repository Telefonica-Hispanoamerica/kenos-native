/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconImageRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.25 4.622c.832 0 1.591.664 1.591 1.393v11.98c0 .728-.76 1.392-1.591 1.392H3.746c-.863 0-1.591-.639-1.591-1.392V6.015c0-.754.728-1.393 1.59-1.393H20.25zm0 13.558c.193 0 .367-.146.39-.207l-.003-11.956a.555.555 0 00-.384-.182H3.746c-.21 0-.364.132-.387.19v11.973c.014.044.171.182.387.182H20.25zM6.152 9.068c0 .554.451 1.005 1.003 1.005a1.006 1.006 0 000-2.01c-.552 0-1.003.45-1.003 1.005zm1.003 2.215a2.216 2.216 0 010-4.43c1.218 0 2.207.993 2.207 2.215a2.213 2.213 0 01-2.207 2.215zm12.42 1.337l-3.18-2.44a.605.605 0 00-.742.005l-3.636 2.9-.879-.83a.6.6 0 00-.798-.025l-5.168 4.317a.607.607 0 00.386 1.07.59.59 0 00.384-.14l4.759-3.975 3.308 3.123c.241.23.625.221.852-.025a.605.605 0 00-.026-.854l-1.932-1.824 3.131-2.496 2.807 2.154a.603.603 0 00.846-.112.609.609 0 00-.112-.848z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconImageRegular;
