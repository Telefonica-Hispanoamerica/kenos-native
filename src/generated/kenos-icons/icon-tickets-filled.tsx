/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTicketsFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.27 11.105l1.176-.228-.59.963a.543.543 0 00-.019.544l.6 1.121-1.186-.265a.526.526 0 00-.511.154l-.841.88-.121-1.27a.545.545 0 00-.316-.443l-1.028-.465 1.102-.465a.54.54 0 00.33-.438l.135-1.153.753.884a.54.54 0 00.516.181z" /><path fill="currentColor" d="M21.892 9.007l-2.496-2.498a.356.356 0 00-.511 0 .987.987 0 01-1.39 0 .989.989 0 010-1.391.363.363 0 00.107-.256.355.355 0 00-.107-.256l-2.496-2.498a.356.356 0 00-.512 0L2.108 14.482a.357.357 0 000 .512l2.496 2.498c.07.07.163.107.256.107s.19-.037.256-.107a.987.987 0 011.39 0 .989.989 0 010 1.391.357.357 0 000 .512l2.496 2.498c.07.07.163.107.256.107a.363.363 0 00.255-.107L21.888 9.509a.342.342 0 00.004-.502zm-6.865 1.386l-1.084 1.75 1.018 1.893a.538.538 0 01-.046.586.54.54 0 01-.553.2l-2.05-.46-1.45 1.52a.562.562 0 01-.572.14.543.543 0 01-.363-.46l-.205-2.14-1.873-.852a.554.554 0 01-.32-.502.543.543 0 01.334-.493l1.957-.828.246-2.075a.543.543 0 01.953-.288l1.358 1.59 2.087-.4a.542.542 0 01.563.82z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTicketsFilled;
