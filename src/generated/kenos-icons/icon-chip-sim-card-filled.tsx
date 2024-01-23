/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconChipSimCardFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M8.546 10.78h6.877c.071 0 .14.108.14.144v7.026H8.401v-7.026c0-.036.108-.143.144-.143z" /><path fill="currentColor" d="M18.929 6.338l-3.686-3.69A2.226 2.226 0 0013.7 2H6.433C5.359 2 4.5 2.932 4.5 4.115V22h15V7.734c-.032-.572-.212-1.04-.571-1.396zM7.33 19.025v-8.1c0-.644.572-1.22 1.219-1.22h6.909c.642 0 1.218.572 1.218 1.22v8.1H7.33z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconChipSimCardFilled;
