/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconEyeFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M16.455 11.998c0 2.543-2.003 4.605-4.473 4.605-2.47 0-4.473-2.062-4.473-4.605 0-2.543 2.003-4.605 4.473-4.605 2.47 0 4.473 2.062 4.473 4.605z" /><path fill="currentColor" d="M22 12.146c-.036 0-.036.037-.036.037-.02.021-.03.03-.033.041-.003.008-.003.018-.003.033v.037C20.104 16.496 16.383 19 11.982 19c-4.4 0-8.122-2.504-9.946-6.631v-.037c-.02-.022-.03-.03-.033-.042C2 12.283 2 12.274 2 12.258v-.444c.02-.022.03-.03.033-.042.003-.008.003-.017.003-.033v-.037C3.86 7.504 7.581 5 11.982 5c4.4 0 8.122 2.504 9.982 6.664v.037c.02.022.03.03.033.041.003.009.003.018.003.033v.371zm-18.532-.148c1.645 3.46 4.793 5.523 8.514 5.523 3.72 0 6.87-2.06 8.514-5.523-1.645-3.464-4.793-5.523-8.514-5.523-3.72 0-6.87 2.059-8.514 5.523z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconEyeFilled;
