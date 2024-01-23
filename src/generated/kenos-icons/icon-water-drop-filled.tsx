/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconWaterDropFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M6.246 17.713a5.85 5.85 0 004.187 1.787c1.567 0 3.067-.644 4.179-1.75l.035-.037c1.116-1.143 1.71-2.642 1.71-4.25 0-2.002-1.393-4.324-2.509-6.18l-2.826-4.927A.674.674 0 0010.43 2c-.246 0-.456.142-.594.356 0 0-2.58 4.534-2.826 4.927-1.117 1.824-2.51 4.141-2.51 6.143a6.07 6.07 0 001.746 4.287zm11.339 0h1.393a.545.545 0 00.522-.535.545.545 0 00-.522-.535h-1.393a.545.545 0 00-.523.535c0 .284.246.535.523.535zm-.281 2.751a.53.53 0 01-.384-.141l-.942-.965a.525.525 0 010-.75.496.496 0 01.732 0l.942.965c.21.215.21.535 0 .75-.072.105-.21.141-.348.141zm-3.384 1.001c0 .284.245.535.522.535a.542.542 0 00.522-.54v-1.42a.544.544 0 00-.522-.535.545.545 0 00-.522.534v1.426z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconWaterDropFilled;
