/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconVoicemailFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.352 8.964c-1.447 0-2.648 1.212-2.648 2.68 0 .608.213 1.144.53 1.608h-1.942c.32-.464.53-1 .53-1.608 0-1.464-1.197-2.68-2.648-2.68-1.45 0-2.648 1.212-2.648 2.68 0 1.468 1.197 2.68 2.648 2.68h6.178c1.446 0 2.648-1.212 2.648-2.68 0-1.468-1.202-2.68-2.648-2.68z" /><path fill="currentColor" d="M18.704 5.392v-.18C18.704 3.428 17.292 2 15.53 2H9.178C7.41 2 6 3.428 6 5.212v.18h12.704zM6 18.608v.18C6 20.572 7.411 22 9.174 22h6.352c1.762 0 3.174-1.428 3.174-3.212v-.18H6zm9.277-8.288c-.526-1.216-1.728-2.072-3.103-2.072-1.834 0-3.352 1.54-3.352 3.396 0 1.856 1.518 3.392 3.352 3.392h6.178c.05 0 .111-.009.172-.018.063-.009.126-.018.18-.018v2.532H6V6.46h12.731v1.824c-.103-.036-.245-.036-.352-.036-1.41 0-2.608.86-3.102 2.072z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconVoicemailFilled;
