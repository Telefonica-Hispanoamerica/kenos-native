/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconAppsBusinessFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.262 9.044V6.376c0-1.21-.905-2.196-2.049-2.278C9.04 2.912 8.05 2 6.864 2c-1.186 0-2.171.912-2.35 2.098C3.376 4.18 2.47 5.166 2.47 6.376v2.668c0 1.263.99 2.288 2.2 2.288h4.393c1.215 0 2.2-1.03 2.2-2.288zm10.256-4.576v4.576c0 1.258-.985 2.288-2.2 2.288H14.92c-1.21 0-2.2-1.025-2.2-2.288V4.468c0-1.258.986-2.288 2.2-2.288h4.399c1.214.005 2.199 1.03 2.199 2.288zM9.063 12.854H4.67c-1.21 0-2.199 1.024-2.199 2.287v4.571c0 1.259.985 2.288 2.2 2.288h4.398c1.21 0 2.2-1.024 2.2-2.288v-4.575c-.006-1.259-.995-2.283-2.205-2.283zM5.706 3.902a1.282 1.282 0 011.158-.76c.511 0 .952.312 1.158.76H5.706zm9.214 8.952h4.399c1.214 0 2.199 1.024 2.199 2.283v4.575c0 1.264-.99 2.288-2.2 2.288H14.92c-1.214 0-2.2-1.03-2.2-2.288v-4.57c0-1.264.99-2.288 2.2-2.288z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconAppsBusinessFilled;
