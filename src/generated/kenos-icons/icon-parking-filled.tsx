/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconParkingFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.528 3.853v16.294c0 1.019-.79 1.853-1.766 1.853H4.245c-.97 0-1.765-.83-1.765-1.853V3.853C2.48 2.834 3.27 2 4.245 2h15.522c.97 0 1.76.83 1.76 1.853zm-6.172 5.588c0 1.53-1.187 2.777-2.646 2.777H9.713V6.664h2.997c1.459 0 2.646 1.246 2.646 2.777zm-2.641-3.887H8.66v12.403a.54.54 0 00.528.555.54.54 0 00.528-.555v-4.63h2.998c2.04 0 3.702-1.744 3.702-3.886 0-2.142-1.662-3.887-3.702-3.887z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconParkingFilled;