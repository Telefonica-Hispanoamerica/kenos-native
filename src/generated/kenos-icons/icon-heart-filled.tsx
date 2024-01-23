/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconHeartFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M17.252 2c-2.02 0-3.372.769-5.256 3.08C10.14 2.824 8.656 2 6.58 2 3.572 2 2 4.354 2 6.685c0 4.764 6.404 11.52 9.48 14.767L12 22l.52-.549c.88-.925 1.904-2.018 2.96-3.21l2.66-3.232C20.736 11.582 22 8.859 22 6.685 22 4.355 20.368 2 17.252 2z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconHeartFilled;
