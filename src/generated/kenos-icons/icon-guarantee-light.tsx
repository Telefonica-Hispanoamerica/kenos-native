/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconGuaranteeLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.26 15.935v-4.294A4.162 4.162 0 0021 8.257c0-2.15-1.607-3.91-3.655-4.094C16.913 2.883 15.715 2 14.389 2h-6.26C6.403 2 5 3.44 5 5.215v13.57C5 20.559 6.402 22 8.13 22h6.259c1.727 0 3.13-1.44 3.13-3.215V16.64a.353.353 0 00-.348-.357.353.353 0 00-.347.357v2.145c0 1.381-1.09 2.502-2.435 2.502h-6.26c-1.344 0-2.435-1.121-2.435-2.502v-.357H13c.191 0 .347-.16.347-.357a.353.353 0 00-.347-.356H5.694V6.28h7.791A4.218 4.218 0 0013 8.247c0 1.41.69 2.649 1.74 3.39v4.294a.36.36 0 00.214.33c.13.054.28.022.379-.078l1.665-1.711 1.67 1.715a.343.343 0 00.378.078.355.355 0 00.213-.33zm-3.482 2.141a.705.705 0 00-.694-.713.705.705 0 00-.695.713c0 .393.312.713.695.713.382 0 .694-.32.694-.713zM14.389 2.713c.953 0 1.812.581 2.208 1.45a3.953 3.953 0 00-2.627 1.409H5.694v-.357c0-1.381 1.091-2.502 2.436-2.502h6.259zm2.845 11.004a.335.335 0 00-.49 0l-1.318 1.354v-3.037c.481.206 1.01.325 1.567.325a3.92 3.92 0 001.559-.32v3.032l-1.318-1.354zm-3.54-5.465c0-1.875 1.483-3.394 3.304-3.394 1.82 0 3.303 1.523 3.303 3.394 0 1.87-1.482 3.393-3.303 3.393s-3.304-1.522-3.304-3.393zm3.304 1.967c1.06 0 1.914-.883 1.914-1.967 0-1.089-.855-1.967-1.914-1.967-1.06 0-1.915.883-1.915 1.967 0 1.088.855 1.967 1.915 1.967zm-1.216-1.967c0-.686.548-1.248 1.216-1.248.668 0 1.215.557 1.215 1.248 0 .686-.547 1.249-1.215 1.249s-1.216-.558-1.216-1.249z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconGuaranteeLight;
