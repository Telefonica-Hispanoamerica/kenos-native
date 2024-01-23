/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconMultisimFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.443 7.062l-4.37-4.49A1.868 1.868 0 0013.725 2H8.343c-.865 0-1.601.597-1.83 1.418h5.838a2.9 2.9 0 012.083.885l3.323 3.416c.557.573.86 1.333.86 2.146V20.21H20V8.444a2 2 0 00-.557-1.382z" /><path fill="currentColor" d="M13.702 5.064l3.322 3.416c.355.364.553.86.553 1.381V22H4V6.45c0-1.078.853-1.959 1.905-1.959h6.45c.51 0 .989.204 1.347.573zM6.61 19.333h8.346v-7.08c0-.641-.502-1.158-1.125-1.158H7.735c-.623 0-1.125.517-1.125 1.157v7.08z" /><path fill="currentColor" d="M13.83 12.164H7.736a.083.083 0 00-.082.084v6.008h6.26v-6.008a.086.086 0 00-.082-.084z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMultisimFilled;
