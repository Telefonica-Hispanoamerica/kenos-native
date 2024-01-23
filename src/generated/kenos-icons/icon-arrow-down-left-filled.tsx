/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconArrowDownLeftFilled = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M14.144 15.572L22 7.708 16.284 2 8.428 9.856c-.916-.916-2.86-2.852-2.86-2.852-.624-.632-1.464-.672-2.284-.332C2.492 6.996 2 7.74 2 8.608V22h13.336c.86 0 1.596-.504 1.928-1.304.348-.836.188-1.812-.444-2.444l-2.676-2.68z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconArrowDownLeftFilled;
