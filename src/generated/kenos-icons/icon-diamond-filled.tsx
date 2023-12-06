/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconDiamondFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.118 2.155h-5.38L7.37 7.298l3.748-5.143zm7.143 0H12.87l3.75 5.143 1.642-5.143zm.76.697l-1.595 5.003h4.415l-2.82-5.003zM17.126 8.8h4.613l-8.38 11.852L17.126 8.8zm-.975 0H7.847l4.15 13.042L16.153 8.8zm-8.017-.944l3.863-5.305 3.854 5.305H8.135zm-5.98 0l2.823-5.01 1.594 5.01H2.155zm4.714.944H2.26l8.378 11.855L6.869 8.799z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconDiamondFilled;