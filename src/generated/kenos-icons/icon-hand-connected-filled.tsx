/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconHandConnectedFilled = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M8.356 8.068c0-1.392 1.083-2.5 2.444-2.5s2.444 1.108 2.444 2.5c0 .396.317.712.697.712a.706.706 0 00.696-.712c0-2.18-1.713-3.928-3.84-3.928-2.128 0-3.841 1.752-3.841 3.928 0 .396.317.712.696.712.38 0 .704-.316.704-.712z" /><path fill="currentColor" d="M10.796 3.428c2.515 0 4.537 2.072 4.537 4.64 0 .396.316.712.696.712a.706.706 0 00.696-.712C16.733 4.712 14.077 2 10.796 2 7.516 2 4.86 4.712 4.86 8.068c0 .396.317.712.696.712a.71.71 0 00.696-.712c.008-2.568 2.034-4.64 4.544-4.64z" /><path fill="currentColor" d="M17.605 12c-.317 0-.595.108-.837.252-.176-.68-.735-1.144-1.431-1.144-.317 0-.595.108-.837.252-.176-.68-.736-1.144-1.432-1.144-.277 0-.559.072-.766.252v-2.64c0-.824-.665-1.5-1.467-1.5-.801 0-1.466.68-1.466 1.5v5.428c-.806.144-1.326.856-1.326 1.752v.284c0 2.32 1.956 4.712 2.444 5.284V22h6.985v-2.5c1.118-.252 1.607-1.712 1.674-2.5v-3.504c-.04-.82-.736-1.496-1.541-1.496z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconHandConnectedFilled;
