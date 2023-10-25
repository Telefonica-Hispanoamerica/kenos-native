/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconPendriveFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.077 7.904c.952 0 1.745.799 1.764 1.782v4.566c0 .988-.784 1.795-1.75 1.795h-1.51c-.188.964-1.022 1.695-2.02 1.695h-9.07c-3.448-.126-5.336-2.168-5.336-5.748 0-3.588 1.888-5.625 5.317-5.734h9.075c.984 0 1.807.709 2.012 1.65h.677v-.003h.84v-.003zm.557 6.35V9.703a.58.58 0 00-.51-.566H18.61v5.686h1.482a.56.56 0 00.543-.569zm-15.039-2.15c0 .304.084.529.233.683.162.165.397.246.686.246.288 0 .526-.081.686-.246.149-.155.233-.379.233-.684.002-.633-.362-.927-.92-.927-.557 0-.918.294-.918.927z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPendriveFilled;
