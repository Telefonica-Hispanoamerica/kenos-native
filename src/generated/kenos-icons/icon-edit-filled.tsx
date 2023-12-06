/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconEditFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.922 6.586c.58.583.925 1.418.922 2.233-.003.818-.325 1.568-.936 2.168-.126.126-.733.675-1.61 1.457v5.271c0 1.23-.345 2.224-1.028 2.953-.728.778-1.762 1.173-3.065 1.173H6.247c-1.305 0-2.333-.395-3.061-1.173-.686-.729-1.031-1.723-1.031-2.953V6.331c0-2.577 1.569-4.176 4.092-4.176h8.958c2.303 0 3.81 1.361 4.045 3.569a3.2 3.2 0 011.672.862zM12.684 16.71c4.44-3.933 7.132-6.334 7.381-6.58.376-.37.575-.824.575-1.317a1.973 1.973 0 00-.569-1.375 1.955 1.955 0 00-1.367-.569c-.46 0-.93.171-1.328.569-.325.325-4.916 4.392-7.397 6.585a.634.634 0 00-.169.25L8.567 17.62a.78.78 0 01-.005.012c-.025.071-.106.3.036.445.14.14.38.07.46.047l.019-.005 3.417-1.255.19-.154z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconEditFilled;
