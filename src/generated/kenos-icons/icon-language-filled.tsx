/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconLanguageFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.925 12.375h1.257c-.104 1.893-.675 3.225-1.257 3.768v-3.768zm-1.164-1.168v-3.76c-.568.574-1.115 1.9-1.204 3.756h1.204v.004zm-1.536-3.564a4.658 4.658 0 00-2.5 3.564h1.664c.064-1.414.364-2.647.836-3.564zm-2.5 4.732a4.672 4.672 0 002.525 3.575c-.479-.914-.79-2.154-.86-3.575H7.724zm4.036 3.718v-3.718h-1.204c.1 1.832.643 3.146 1.204 3.718zm1.164-4.886h1.257c-.093-1.914-.675-3.257-1.257-3.804v3.804zm1.603-3.532c.458.914.758 2.132.822 3.528h1.614a4.67 4.67 0 00-2.435-3.528zm-.017 8.24a4.683 4.683 0 002.457-3.54h-1.614c-.072 1.4-.375 2.628-.843 3.54zM12.357 2.002c-5.318 0-9.643 4.325-9.643 9.643a9.5 9.5 0 00.843 3.943l-1.529 5.507a.714.714 0 00.879.883l5.507-1.533a9.574 9.574 0 003.943.843c5.318 0 9.643-4.325 9.643-9.643 0-5.318-4.325-9.643-9.643-9.643zm-.014 15.611a5.833 5.833 0 01-5.825-5.825c0-3.21 2.614-5.829 5.825-5.829h.025c.014 0 .025.004.035.004a5.824 5.824 0 01-.06 11.65z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconLanguageFilled;
