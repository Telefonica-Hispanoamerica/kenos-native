/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTagLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.574 3.926l1.322-1.323a.352.352 0 000-.499.357.357 0 00-.504 0L20.07 3.426h-9.387c-.485 0-.943.19-1.285.532L2.532 10.82c-.342.342-.532.8-.532 1.285 0 .486.19.943.532 1.286l8.077 8.073c.356.356.819.536 1.281.536a1.81 1.81 0 001.253-.504.373.373 0 00.014-.527.369.369 0 00-.527-.014 1.066 1.066 0 01-1.494-.018l-8.073-8.074a1.063 1.063 0 01-.314-.758c0-.287.111-.555.314-.758L9.925 4.48c.199-.2.476-.315.758-.315h8.647L17.425 6.07a.353.353 0 00.25.606c.087 0 .18-.032.25-.102l1.904-1.905v8.642c0 .287-.11.555-.314.758l-3.824 3.824a.368.368 0 000 .527.368.368 0 00.527 0l3.824-3.824c.342-.342.532-.8.532-1.285V3.926zm-6.876 15.762a.722.722 0 011.443 0 .722.722 0 01-1.443 0zm3.07-7.042c-2.658 0-4.517 1.785-4.517 4.337a.361.361 0 01-.721 0c0-2.552-1.86-4.337-4.518-4.337a.361.361 0 010-.721c2.534 0 4.518-2.062 4.518-4.698a.361.361 0 01.72 0c0 2.631 1.984 4.698 4.518 4.698a.361.361 0 010 .721zM11.89 9.243a5.209 5.209 0 01-2.894 3.015c1.35.485 2.381 1.475 2.894 2.77.513-1.295 1.544-2.285 2.895-2.77-1.332-.546-2.372-1.637-2.895-3.015z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTagLight;
