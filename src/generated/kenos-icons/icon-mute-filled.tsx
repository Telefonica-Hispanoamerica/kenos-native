/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconMuteFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M15.696 14.986l5.666 5.891a.566.566 0 010 .78.516.516 0 01-.75 0L2.627 2.942a.566.566 0 010-.78.514.514 0 01.75 0L7.754 6.72l7.413-4.486a.339.339 0 01.352 0 .374.374 0 01.176.319v12.434zm0 3.021L5.917 7.832l-.365.226H3a.36.36 0 00-.352.366v7.338a.36.36 0 00.352.366h2.55l9.617 5.82a.336.336 0 00.352.005.374.374 0 00.176-.32v-3.626z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMuteFilled;