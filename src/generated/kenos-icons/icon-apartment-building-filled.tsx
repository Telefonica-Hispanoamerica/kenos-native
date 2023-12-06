/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconApartmentBuildingFilled = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M5 2h13.623c.203 0 .368.169.377.377v19.618h-7.735v-6.414H6.843V22H5V2zm1.838 10.94h4.422V9.92H6.838v3.02zm4.422-5.284V4.642H6.838v3.014h4.422zM12.73 18.6h4.422v-3.02h-4.421v3.02zm4.422-5.66V9.92h-4.421v3.02h4.421zm-4.421-5.284h4.421V4.642h-4.421v3.014z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconApartmentBuildingFilled;
