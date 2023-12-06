/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconFootballBallFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M9.05 7.992L7.352 6.214l.383-3.158A9.143 9.143 0 0111.99 2c.426 0 .84.032 1.25.087l1.563 2.916L13.74 7.2l-4.69.79zm5.518-5.617l1.14 2.13 2.095-.42a9.319 9.319 0 00-3.235-1.71zM6.355 5.976l.274-2.235A9.784 9.784 0 004.064 6.47l2.29-.494zm12.907 6.554l2.1-2.33a10.173 10.173 0 00-2.592-5.22l-3.114.626-1.006 2.08 2.165 4.442 2.447.402zm-3.405-.018L13.793 8.28l-4.473.75-.7 4.698 4.04 2.152 3.197-3.368zM4.508 18.17a10.215 10.215 0 01-1.642-3.318l1.925.923-.283 2.395zm16.444-2.774a10.394 10.394 0 00.557-3.798l-1.485 1.65.928 2.148zm-12.895-.763l4.216 2.244.213 2.687-2.077 2.29c-1.92-.338-3.65-1.284-5-2.642l.401-3.377 2.247-1.203zm3.641 7.357l1.48-1.63 2.052 1.046a9.081 9.081 0 01-3.236.594c-.096 0-.188-.004-.284-.009h-.012zm4.956-8.802l2.39.393 1.35 3.122c-.897 1.755-2.277 3.2-3.95 4.132l-2.956-1.504-.205-2.591 3.37-3.552zM5.366 14.87l2.23-1.197.736-4.927L6.664 7l-3.27.708a10.321 10.321 0 00-.924 4.287c0 .522.04 1.038.113 1.54l2.783 1.335z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFootballBallFilled;