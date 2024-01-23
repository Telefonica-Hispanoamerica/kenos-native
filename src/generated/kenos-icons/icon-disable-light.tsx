/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconDisableLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M1 12.003C1 4.51 5.048 1 11.997 1 18.947 1 23 4.51 23 12.003 23 19.497 18.946 23 11.997 23 5.047 23 1 19.497 1 12.003zM11.997 1.917C5.307 1.917 1.917 5.31 1.917 12c0 3.137.755 5.54 2.238 7.215l15.06-15.06c-1.674-1.483-4.078-2.238-7.218-2.238zm0 20.166c6.693 0 10.086-3.39 10.086-10.08 0-3.127-.748-5.522-2.22-7.2l-15.06 15.06c1.675 1.472 4.073 2.22 7.194 2.22z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconDisableLight;
