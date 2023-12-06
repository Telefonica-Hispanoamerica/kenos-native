/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconExportRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M5.497 8.729a.842.842 0 001.436.59l4.278-4.282v11.05a.845.845 0 001.689 0V5.037l4.21 4.213.008.008.014.014a.845.845 0 001.171-1.216l-5.65-5.655a.847.847 0 00-1.193 0L5.743 8.129a.858.858 0 00-.246.6zM21.84 16.91a.844.844 0 00-.843-.844.84.84 0 00-.84.844v3.243H3.844V16.91a.845.845 0 00-1.69 0v4.086c0 .465.379.844.844.844h18a.844.844 0 00.843-.844V16.91z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconExportRegular;
