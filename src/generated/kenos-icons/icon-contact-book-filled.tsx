/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconContactBookFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M16.442 21.813h-8.7c-.309 0-.606-.048-.885-.137a2.704 2.704 0 01-1.892-1.894 2.903 2.903 0 01-.137-.883V4.825c0-.337.063-.664.182-.968a2.458 2.458 0 011.43-1.473 2.64 2.64 0 011.031-.207h8.97a2.74 2.74 0 012.736 2.737v14.165a2.738 2.738 0 01-2.736 2.734zm1.596-13.306V4.914c0-.428-.168-.816-.442-1.102v4.695h.442zm-.442 5.835h.442V9.65h-.442v4.692zm0 1.143v4.695c.274-.286.442-.674.442-1.101v-3.594h-.442zm-6.34-8.412c-1.54 0-2.425.89-2.425 2.434s.88 2.426 2.426 2.426c1.546 0 2.434-.88 2.434-2.426 0-1.546-.888-2.434-2.434-2.434zm3.068 9.457c.26 0 .473-.247.473-.55l-.003-.89c0-.728-.204-1.353-.593-1.807-.418-.487-1.026-.745-1.76-.745h-2.364c-.733 0-1.341.258-1.759.745-.386.457-.594 1.082-.594 1.807v.89c0 .303.213.55.474.55h6.126z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconContactBookFilled;
