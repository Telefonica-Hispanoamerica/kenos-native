/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconInvoicePlanFileLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M5.2 21.284h13.6c.212 0 .348.144.348.36 0 .212-.136.356-.347.356H4.5V7.216L9.594 2h9.554v15.36c0 .212-.136.356-.347.356-.207 0-.348-.14-.348-.356V2.716h-8.371v5H5.199v13.568zM9.382 3.216L5.688 7h3.695V3.216z" /><path fill="currentColor" d="M19.5 19.5a.708.708 0 01-.7.716.707.707 0 01-.698-.716c0-.395.313-.716.699-.716.386 0 .699.32.699.716zm-3.836-6.072H7.988c-.21 0-.347.144-.347.356 0 .216.14.356.347.356h7.672c.211 0 .348-.144.348-.356.004-.212-.137-.356-.344-.356zm0 3.572H7.988c-.21 0-.347.144-.347.356 0 .216.14.356.347.356h7.672c.211 0 .348-.144.348-.356.004-.212-.137-.356-.344-.356z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconInvoicePlanFileLight;
