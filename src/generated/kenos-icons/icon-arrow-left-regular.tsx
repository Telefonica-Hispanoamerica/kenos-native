/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconArrowLeftRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.034 22c-.536 0-1.036-.224-1.428-.594L2 11.994l8.606-9.375c.608-.631 1.464-.78 2.252-.444.824.37 1.284 1.15 1.284 2.038v3.89h7.142c.396 0 .712.337.712.74 0 .402-.324.739-.712.739h-8.57V4.209c0-.37-.18-.594-.396-.668a.553.553 0 00-.68.112l-7.674 8.341 7.678 8.374c.252.262.572.15.68.112.216-.112.396-.336.396-.705v-5.373h8.57c.396 0 .712.336.712.74 0 .406-.324.738-.712.738h-7.146v3.89c0 .889-.428 1.703-1.284 2.039-.256.116-.54.191-.824.191z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconArrowLeftRegular;
