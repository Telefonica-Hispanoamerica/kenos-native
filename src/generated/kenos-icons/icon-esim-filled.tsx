/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconEsimFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.01 12.536c-.726 0-1.344.5-1.517 1.18h2.998c-.173-.716-.725-1.18-1.482-1.18z" /><path fill="currentColor" d="M15.077 2.68l3.616 3.64c.413.428.726 1.144.722 1.752V22H4.635L4.6 4.32C4.6 3 5.5 2 6.668 2h6.893c.586 0 1.103.248 1.516.68zm-8.235 17h10.342v-9.464c0-.68-.552-1.252-1.208-1.252H8.05c-.656 0-1.208.572-1.208 1.252v9.464z" /><path fill="currentColor" d="M8.046 10.036h7.927c.104 0 .17.072.17.18v8.392h-8.27v-8.392c0-.108.069-.18.173-.18zm2.481 4.748h3.55c.275 0 .518-.248.525-.54 0-1.64-1.068-2.784-2.585-2.784-1.412 0-2.586 1.18-2.586 2.644v.216c0 .392.07.716.174 1.036.066.216.17.464.309.644a2.639 2.639 0 001.93 1.144h.273c.726 0 1.447-.284 1.965-.82a.53.53 0 000-.752.487.487 0 00-.726 0c-.343.356-.895.536-1.412.5a1.563 1.563 0 01-1.174-.68 1.08 1.08 0 01-.173-.356.525.525 0 01-.035-.126.475.475 0 00-.035-.126z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconEsimFilled;
