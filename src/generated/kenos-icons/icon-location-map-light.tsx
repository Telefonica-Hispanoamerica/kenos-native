/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconLocationMapLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M13.7 21.246h7.546a.377.377 0 010 .754H2V5.773h8.531C10.801 3.618 12.59 2 14.831 2s4.029 1.618 4.3 3.773h2.492V17.1a.377.377 0 01-.753 0V6.531h-1.706c-.193 2.42-3.86 7.899-4.02 8.136a.387.387 0 01-.313.164.375.375 0 01-.314-.164c-.16-.237-3.826-5.715-4.02-8.136H2.755v2.455h.188a2.458 2.458 0 012.454 2.454v1.101c.145.826.894 1.106 2.102 1.464 1.25.367 2.806.826 2.806 2.715v1.13a3.398 3.398 0 003.396 3.396zm4.716-14.908a3.547 3.547 0 00-3.585-3.584 3.547 3.547 0 00-3.585 3.584c0 1.58 2.353 5.532 3.585 7.43 1.232-1.898 3.585-5.85 3.585-7.43zM2.754 21.246h8.57a4.153 4.153 0 01-1.768-3.183c-.005-.02-.005-.039-.005-.063v-1.28c0-1.237-.855-1.58-2.266-1.995-1.135-.334-2.425-.715-2.638-2.102-.004-.02-.004-.038-.004-.058v-1.13c0-.937-.764-1.7-1.701-1.7h-.188v11.511zm12.077-16.7a1.792 1.792 0 11.001 3.583 1.792 1.792 0 01-.001-3.583zm0 2.83a1.04 1.04 0 001.039-1.038A1.04 1.04 0 0014.83 5.3c-.574 0-1.038.463-1.038 1.038a1.04 1.04 0 001.039 1.039zm6.415 12.735a.755.755 0 000-1.507.755.755 0 000 1.507z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconLocationMapLight;
