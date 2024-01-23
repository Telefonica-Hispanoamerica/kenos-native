/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconGiftRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M17.998 8.037h-.167a3.88 3.88 0 00.712-2.265C18.543 3.657 16.946 2 14.907 2c-1.578 0-2.886.99-3.398 2.42a2.952 2.952 0 00-1.69-.532c-1.555 0-2.728 1.218-2.728 2.83 0 .484.107.933.298 1.32H6.002C4.88 8.037 4 9.031 4 10.301v10.945c0 .415.326.753.726.753h14.548c.4 0 .726-.338.726-.753v-10.95c0-1.265-.88-2.26-2.002-2.26zm.545 2.26v1.13h-5.82V9.54h5.275c.4.005.545.46.545.758zM17.09 5.772c0 1.29-.935 2.265-2.183 2.265h-2.183V5.772c0-1.29.94-2.265 2.183-2.265 1.243 0 2.183.975 2.183 2.265zm-8.546.942c0-.778.52-1.319 1.27-1.319.699 0 1.453.507 1.453 1.319v1.318H9.814c-.75.005-1.27-.54-1.27-1.318zm2.727 2.83v1.888H5.452v-1.13c0-.304.145-.758.545-.758h5.274zM5.452 12.94h5.82v7.544h-5.82V12.94zm7.272 0h5.819v7.544h-5.82V12.94z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconGiftRegular;
