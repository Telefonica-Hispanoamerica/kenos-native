/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconBookmarkFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.153 3.44v17.11c0 .496-.272.941-.723 1.16a1.413 1.413 0 01-.577.134 1.3 1.3 0 01-.79-.269l-3.731-3.67a.463.463 0 00-.644 0L7.99 21.542c-.442.337-.96.387-1.412.169a1.283 1.283 0 01-.73-1.16V3.44c0-.705.585-1.285 1.3-1.285h9.702c.726 0 1.303.58 1.303 1.286z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBookmarkFilled;