/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconBoxLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.038 16.387L12.19 20.95v-8.737l7.67-4.29v4.443c0 .199.165.36.366.36a.363.363 0 00.364-.36V7.095l-4.39-2.55a.084.084 0 00-.025-.015l-.007-.003L11.825 2 3.06 7.095v9.81L11.825 22l8.583-4.988a.36.36 0 00.13-.496.369.369 0 00-.5-.13zm-.546-9.093l-7.667 4.29-3.51-1.967 7.657-4.373 3.52 2.05zM7.576 9.205L4.159 7.294l7.666-4.456 3.422 1.99-7.671 4.377zM3.789 7.919l3.576 1.999a.253.253 0 00.061.032l4.034 2.258v8.737l-7.67-4.452V7.92z" /><path fill="currentColor" d="M20.226 15.253a.726.726 0 00.729-.722.726.726 0 00-.73-.722.726.726 0 00-.729.722c0 .399.327.722.73.722z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBoxLight;
