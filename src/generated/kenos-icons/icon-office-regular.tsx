/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconOfficeRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M3.796 2H20.2a.89.89 0 01.89.887V22H10.007v-6.667H7.343v6.661H2.91V2.887c0-.489.397-.887.886-.887zm7.98 11.553v6.666h7.54V3.776H4.68V20.22h.886v-6.667h6.21z" /><path fill="currentColor" d="M18.43 17.552h-5.768v-3.999h5.768v3.999zm-1.334-2.662H13.99v1.33h3.105v-1.33zm-5.762-5.558H5.567V5.333h5.767v4zM10 6.664H6.895v1.331H10v-1.33zm8.43 2.668h-5.768V5.333h5.768v4zm-1.334-2.668H13.99v1.331h3.105v-1.33z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconOfficeRegular;
