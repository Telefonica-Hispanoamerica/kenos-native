/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconOnLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M6.257 11.998c0-3.134 1.451-3.798 2.698-3.798 1.238 0 2.748.664 2.748 3.798 0 3.135-1.476 3.798-2.714 3.798-1.813 0-2.732-1.28-2.732-3.798zm.902.017c0 2.552.975 2.88 1.796 2.88.826 0 1.787-.303 1.787-2.88S9.792 9.11 8.955 9.11c-.835 0-1.796.353-1.796 2.905zm10.037-3.684h.3c.162.003.29.14.285.303v6.737a.301.301 0 01-.302.302h-.23a.303.303 0 01-.255-.14l-3.487-5.283v5.11c0 .17-.14.31-.311.31h-.28a.31.31 0 01-.303-.31V8.634c0-.165.135-.303.303-.303h.221c.1 0 .196.048.255.132l3.524 5.289V8.634c0-.157.123-.289.28-.303z" /><path fill="currentColor" d="M11.495 2.155h.91c1.578.05 9.435.63 9.435 9.843s-7.826 9.843-9.4 9.843h-.877c-8.958-.115-9.41-8.201-9.41-9.843 0-1.641.452-9.762 9.342-9.843zm.09 18.866h.846c2.028 0 8.588-.821 8.588-9.023s-6.563-8.966-8.63-9.022h-.885c-1.97 0-8.532.753-8.532 9.022s6.563 9.022 8.613 9.022z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconOnLight;
