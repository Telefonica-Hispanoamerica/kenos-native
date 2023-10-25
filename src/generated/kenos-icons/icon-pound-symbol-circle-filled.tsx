/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconPoundSymbolCircleFilled = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2 12C2 6.5 6.5 2 12 2s10 4.5 10 10c0 5.536-4.5 10-10 10-5.536 0-10-4.5-10-10zm7.608 3.752h4.712a.552.552 0 00.536-.536.552.552 0 00-.536-.536h-3.144c.072-.212.108-.392.108-.608V12.36h1.608a.552.552 0 00.536-.536.552.552 0 00-.536-.536h-1.608V9.68c0-.644.428-1.072 1.072-1.072.392 0 .572.072.716.216.216.216.536.18.752-.036.216-.216.18-.536-.036-.752-.5-.464-1.032-.5-1.428-.5-1.248 0-2.144.892-2.144 2.144v1.608H9.68a.552.552 0 00-.536.536c0 .284.252.536.536.536h.536v1.712a.603.603 0 01-.608.608.552.552 0 00-.536.536c0 .284.252.536.536.536z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPoundSymbolCircleFilled;
