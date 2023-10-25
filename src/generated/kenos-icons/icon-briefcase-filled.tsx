/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconBriefcaseFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M22 11.407V8.04c0-1.305-1.04-2.375-2.308-2.375h-3.884C15.576 3.883 13.964 2.5 12 2.5c-1.964 0-3.616 1.387-3.808 3.165H4.308C3.04 5.665 2 6.735 2 8.04v3.363l20 .004zM2 12.593v6.532C2 20.43 3.04 21.5 4.308 21.5h15.384C20.96 21.5 22 20.43 22 19.125v-6.532H2zm12.268-6.924h-4.54C9.96 4.76 10.884 4.085 12 4.085c1.112 0 2.04.675 2.268 1.584z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBriefcaseFilled;
