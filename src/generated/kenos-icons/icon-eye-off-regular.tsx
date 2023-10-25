/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconEyeOffRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M17.649 16.924l3.672 3.856a.719.719 0 01.004 1.004.654.654 0 01-.476.216.785.785 0 01-.476-.18l-3.947-4.144a9.836 9.836 0 01-4.424 1.036c-4.046 0-7.757-2.536-9.418-6.42a.82.82 0 010-.572c.579-1.355 1.394-2.571 2.45-3.535a.64.64 0 01.952.036.717.717 0 01-.034 1 8.421 8.421 0 00-2.008 2.784c1.497 3.211 4.625 5.283 8.062 5.283a8.446 8.446 0 003.402-.716l-.78-.82a4.253 4.253 0 01-2.622.892c-2.45 0-4.423-2.072-4.423-4.643a4.75 4.75 0 01.85-2.752l-5.75-6.036a.717.717 0 010-1 .639.639 0 01.952 0L7.58 6.317a9.944 9.944 0 014.423-1.036c4.08 0 7.757 2.536 9.422 6.428a.82.82 0 010 .572c-.85 1.927-2.14 3.535-3.775 4.643zm-8.71-4.928c0 1.788 1.364 3.216 3.063 3.216a2.83 2.83 0 001.63-.504l-4.217-4.427a3.242 3.242 0 00-.476 1.715zm5.65 1.716a3.24 3.24 0 00.476-1.716c0-1.787-1.364-3.215-3.063-3.215-.613 0-1.158.18-1.634.5l4.221 4.431zm1.837-1.716a4.757 4.757 0 01-.85 2.752l1.12 1.136a9.154 9.154 0 003.368-3.892C18.567 8.781 15.44 6.71 12.002 6.71c-1.192 0-2.313.252-3.402.716l.78.82a4.253 4.253 0 012.622-.892c2.45 0 4.424 2.072 4.424 4.643z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconEyeOffRegular;
