/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconFileSketchRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.342 7.92a.605.605 0 01.045.234V20.46a1.4 1.4 0 01-1.386 1.383H6.009c-.74 0-1.386-.647-1.386-1.383V3.54c0-.722.66-1.38 1.386-1.38h7.3c.227 0 .442.087.605.246l5.213 5.127a.887.887 0 01.215.386zm-1.148 12.542V9.028h-2.277c-1 0-1.86-.33-2.493-.952-.639-.63-.978-1.487-.978-2.482V3.376H6.01c-.07 0-.185.112-.19.168v16.918c0 .06.098.169.19.169h11.994c.099 0 .19-.096.19-.169zM13.639 3.83v1.765c0 .658.213 1.213.617 1.608.406.398.98.61 1.663.61h1.77L13.64 3.83zm1.992 9.05h-.838l.34-.988.498.989zm-1.17.97h1.016l-1.941 2.714.924-2.714zm-5.92 0h1.05l.942 2.76-1.992-2.76zm1.558-1.473s-.42-1.227-.418-1.23h1.381l-.963 1.23zm4.277-1.227l-.423 1.232-.977-1.232h1.4zm-3.448 1.73l1.09-1.388 1.1 1.389h-2.19zm-.325.97h2.846l-1.423 4.165-1.423-4.165zm-1.686-1.975l.341 1.006h-.865l.524-1.006zm7.977 1.49a.492.492 0 00-.052-.212c0-.003 0-.005-.007-.009l-1.364-2.692-.002-.01a.025.025 0 00-.009-.01l-.003-.002a.472.472 0 00-.14-.157l-.028-.017a.987.987 0 00-.053-.032.13.13 0 00-.03-.018.35.35 0 00-.111-.019h-.019c-.005 0-.01-.003-.015-.005-.005-.002-.01-.004-.015-.004h-6.04c-.006 0-.012.003-.018.005a.031.031 0 01-.013.006l-.02.001a.39.39 0 00-.106.016.131.131 0 00-.026.017.131.131 0 01-.027.016.46.46 0 00-.193.18.036.036 0 01-.01.009.032.032 0 00-.01.01L7.174 13.14l-.001.009-.001.008a.494.494 0 00-.05.218l.002.012c0 .01.003.02.006.03a.165.165 0 01.005.02.375.375 0 00.065.18l.004.015a.044.044 0 00.007.02l4.425 6.135h.003c.04.054.09.096.149.13l.042.019c.059.03.126.045.193.047h.003a.504.504 0 00.193-.047l.042-.02a.437.437 0 00.149-.129s.002 0 .002-.002l4.39-6.135c.004-.005.005-.012.007-.018a.045.045 0 01.007-.018.477.477 0 00.061-.174.19.19 0 01.006-.023.12.12 0 00.006-.033c.002-.008.005-.014.005-.02z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFileSketchRegular;
