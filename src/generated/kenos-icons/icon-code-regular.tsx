/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconCodeRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.841 6.019c0-.774-.652-1.404-1.456-1.404H3.615c-.807 0-1.46.63-1.46 1.404v11.958c0 .773.655 1.403 1.46 1.403h16.77c.804 0 1.456-.63 1.456-1.403V6.019zM3.614 5.797h16.773c.127 0 .227.098.227.219v1.73H3.388v-1.73c0-.12.1-.219.226-.219zm16.77 12.398v-.003H3.613a.224.224 0 01-.227-.218V8.932h17.227v9.045c0 .12-.101.218-.227.218zM6.313 7.24a.558.558 0 01-.569-.55c0-.304.255-.548.569-.548.316 0 .569.246.569.549a.558.558 0 01-.57.549zm1.14-.55c0 .303.252.55.569.55a.556.556 0 00.568-.55.558.558 0 00-.568-.548.558.558 0 00-.57.549zM4.6 7.24a.558.558 0 01-.568-.55c0-.304.252-.548.568-.548.317 0 .569.246.569.549a.556.556 0 01-.569.549zm4.398 4.77a.54.54 0 00.04-.781.585.585 0 00-.81-.037l-2.34 2.045a.54.54 0 00-.187.406.54.54 0 00.185.406l2.34 2.082c.108.1.251.148.388.148a.579.579 0 00.42-.176.539.539 0 00-.03-.782l-1.88-1.672 1.874-1.639zm6.684-.82l2.339 2.044a.546.546 0 01.187.406.549.549 0 01-.185.41l-2.339 2.08a.59.59 0 01-.81-.03.539.539 0 01.032-.782l1.88-1.672-1.875-1.639a.54.54 0 01-.039-.781.59.59 0 01.81-.037zm-2.255.66a.544.544 0 00-.289-.73.58.58 0 00-.759.282l-1.896 4.079a.542.542 0 00.288.728.65.65 0 00.236.048.578.578 0 00.523-.328l1.897-4.079z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconCodeRegular;
