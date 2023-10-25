/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconPendriveRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.841 9.689c-.02-.984-.812-1.782-1.764-1.782h-.84v.003h-.679c-.204-.941-1.028-1.65-2.01-1.65H7.471c-3.429.11-5.317 2.146-5.317 5.734 0 3.582 1.888 5.625 5.336 5.75h9.07c.997 0 1.832-.73 2.02-1.694h1.51c.966 0 1.75-.807 1.75-1.796V9.69zm-5.28 6.829h-9.05c-2.754-.098-4.149-1.62-4.149-4.521 0-2.902 1.395-4.42 4.13-4.507h9.055c.47 0 .852.395.852.88v7.07h.014v.198c0 .485-.381.88-.852.88zm4.073-6.813v4.552a.56.56 0 01-.543.569h-1.482V9.139h1.515a.58.58 0 01.51.566zm-13.202 2.4c0-.632-.361-.926-.918-.926-.555 0-.92.294-.92.927 0 .305.085.53.233.683.16.166.398.247.687.247.288 0 .523-.081.686-.247.148-.154.232-.378.232-.683z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPendriveRegular;
