/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconFilePngRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.54 13.318c0-1.151.607-1.93 1.86-1.93.364 0 .8.076 1.036.177l-.107.613a3.29 3.29 0 00-.87-.134c-.743 0-1.048.44-1.048 1.24 0 .415.053.754.215.978.135.188.356.297.709.297.134 0 .316-.017.445-.036v-.773h-.515v-.603h1.35v1.877c-.35.107-.908.188-1.31.188-1.32-.003-1.765-.729-1.765-1.894zm-7.065-1.86h1.263c.575 0 .942.082 1.177.3.199.182.297.468.297.86 0 .392-.093.689-.275.893-.215.241-.549.356-1.03.356h-.592v1.27h-.84v-3.679zm1.252 1.779c.27 0 .381-.036.49-.14.098-.098.146-.252.146-.468 0-.199-.042-.344-.14-.434-.1-.093-.258-.129-.515-.129h-.393v1.171h.412zm2.695-1.779h-.62v3.675h.737v-2.23l1.69 2.23h.672v-3.675h-.737v2.353l-1.742-2.353zM20.11 7.803l.004.003v-.003h-.003z" /><path fill="currentColor" d="M21.791 7.912a.61.61 0 01.048.238v12.306c0 .75-.644 1.383-1.409 1.383H8.248c-.75 0-1.409-.647-1.409-1.383l.034-2.774H4.57a2.425 2.425 0 01-2.42-2.423v-4.095a2.427 2.427 0 012.42-2.426h2.266V3.534c0-.726.67-1.384 1.41-1.384h7.414a.86.86 0 01.613.25l5.297 5.126c.115.109.18.243.221.386zm-1.36 12.712c.097 0 .192-.096.192-.168V9.02H18.31c-1.014 0-1.891-.33-2.532-.952-.65-.63-.995-1.487-.995-2.482V3.37H8.248c-.073 0-.188.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.095a2.425 2.425 0 01-2.42 2.423h-6.33l-.034 2.78c0 .05.1.159.193.159H20.43v.003zM3.365 15.258c0 .667.54 1.208 1.207 1.208h9.846a1.21 1.21 0 001.207-1.208v-4.095c0-.666-.54-1.21-1.207-1.21H4.573a1.21 1.21 0 00-1.207 1.21v4.095zM20.11 7.803L15.999 3.82v1.764c0 .656.216 1.213.622 1.608.414.4.997.61 1.689.61h1.8z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFilePngRegular;
