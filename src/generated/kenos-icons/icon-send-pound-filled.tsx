/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconSendPoundFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.528 12.099V2H11.91c-.447 0-.829.27-1 .7-.17.43-.077.903.236 1.231l2.43 2.549-3.346 3.514 3.815 3.727 3.212-3.37 2.43 2.55c.313.328.764.424 1.173.245.415-.178.668-.579.668-1.047zM5.237 20.503h4.068c.396 0 .722.329.722.744S9.705 22 9.31 22H3.198c-.396 0-.718-.338-.718-.753s.322-.753.718-.753c.405 0 .732-.343.732-.768l-.005-1.873h-.368c-.396 0-.718-.338-.718-.753s.322-.753.718-.753h.363l-.004-2.26c0-1.665 1.288-3.016 2.876-3.016.713 0 1.394.27 1.914.758.3.28.323.757.06 1.066a.698.698 0 01-1.017.063 1.386 1.386 0 00-.962-.376c-.805 0-1.435.666-1.435 1.51l.004 2.265H7.51c.396 0 .718.338.718.753s-.322.753-.718.753H5.36l.005 1.873c0 .27-.046.526-.128.767z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSendPoundFilled;
