/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconWinnerRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.93 18.31l-2.057-3.62a7.802 7.802 0 001.73-4.94c0-4.281-3.409-7.75-7.625-7.75-4.212 0-7.625 3.464-7.625 7.75 0 1.863.63 3.574 1.711 4.911l-1.997 3.654a.545.545 0 00.05.6c.136.17.359.24.567.18l3.023-.923.921 3.427a.543.543 0 00.45.396.533.533 0 00.526-.272l2.374-4.23 2.378 4.24a.528.528 0 00.458.262c.023 0 .046 0 .073-.004a.528.528 0 00.44-.392l.921-3.432 3.069.922a.526.526 0 00.567-.184.528.528 0 00.045-.595zM11.977 3.444c3.413 0 6.204 2.841 6.204 6.305 0 3.469-2.796 6.305-6.204 6.305-3.413 0-6.204-2.84-6.204-6.305 0-3.464 2.79-6.305 6.204-6.305zm-2.664 16.6l-.722-2.689a.548.548 0 00-.254-.332.537.537 0 00-.413-.046l-2.292.701 1.203-2.2a7.536 7.536 0 003.93 1.932l-1.452 2.634zm6.717-3.067a.526.526 0 00-.663.378l-.735 2.73-1.552-2.66a7.544 7.544 0 004.02-1.933l1.24 2.181-2.31-.696zm-4.053-1.822a.533.533 0 01-.531-.54c0-2.44-1.752-4.142-4.257-4.142a.533.533 0 01-.531-.54c0-.3.236-.54.53-.54 2.388 0 4.258-1.978 4.258-4.506 0-.3.236-.54.53-.54.296 0 .532.24.532.54 0 2.528 1.87 4.507 4.257 4.507.295 0 .53.24.53.54 0 .3-.235.54-.53.54-2.505 0-4.257 1.701-4.257 4.141 0 .3-.236.54-.531.54zM9.586 9.892a4.913 4.913 0 012.392 2.33 4.913 4.913 0 012.392-2.33 5.359 5.359 0 01-2.392-2.532 5.358 5.358 0 01-2.392 2.532z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconWinnerRegular;
