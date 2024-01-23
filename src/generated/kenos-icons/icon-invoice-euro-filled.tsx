/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconInvoiceEuroFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.695 2v20H4.31V8.254h6.117V2h9.268zM9.38 7.18H4.547L9.38 2.241V7.18zm1.232 6.24c.25-1.317 1.385-2.314 2.746-2.314.488 0 .971.133 1.396.384a.52.52 0 00.716-.196.543.543 0 00-.192-.732 3.781 3.781 0 00-1.924-.53c-1.942 0-3.549 1.481-3.804 3.392h-.564a.527.527 0 00-.523.535c0 .297.232.535.523.535h.564c.255 1.91 1.862 3.392 3.804 3.392.671 0 1.338-.183 1.924-.53a.543.543 0 00.192-.732.52.52 0 00-.716-.197 2.747 2.747 0 01-1.396.384c-1.365 0-2.501-1-2.747-2.322h2.922c.29 0 .523-.238.523-.535a.527.527 0 00-.523-.535h-2.92z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconInvoiceEuroFilled;
