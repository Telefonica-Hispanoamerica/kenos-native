/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconPayInvoiceLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.152 21.643a.353.353 0 01-.349.357H4.5V3.787C4.5 2.805 5.281 2 6.246 2H17.41c.96 0 1.746.8 1.746 1.787V17.36a.353.353 0 01-.348.357.353.353 0 01-.349-.357V3.787c0-.59-.468-1.07-1.044-1.07H6.25c-.577 0-1.045.48-1.045 1.07v17.5h13.606c.188 0 .34.16.34.356zm-.349-2.857a.706.706 0 00-.696.713c0 .394.312.714.696.714.384 0 .697-.32.697-.714a.7.7 0 00-.697-.713zM7.988 17.003h7.676c.192 0 .348.16.348.357a.353.353 0 01-.348.357H7.988a.353.353 0 01-.349-.357c0-.197.157-.357.349-.357zm7.676-3.574H7.988a.353.353 0 00-.349.356c0 .197.157.357.349.357h7.676c.192 0 .348-.16.348-.357a.353.353 0 00-.348-.356zm.255-7.968a2.03 2.03 0 00-.952-.243c-.772 0-1.447.43-1.808 1.08h1.808c.192 0 .349.16.349.356a.353.353 0 01-.349.356h-2.063a2.295 2.295 0 00-.031.357c0 .123.013.242.031.356h2.063c.192 0 .349.16.349.357a.353.353 0 01-.349.357H13.16a2.079 2.079 0 001.808 1.07c.326 0 .648-.083.951-.243a.35.35 0 01.47.155.366.366 0 01-.152.48c-.402.21-.831.32-1.269.32-1.17 0-2.17-.74-2.585-1.787h-.554a.353.353 0 01-.348-.357c0-.196.156-.356.348-.356h.375a3.184 3.184 0 01-.022-.357c0-.119.009-.237.022-.356h-.375a.353.353 0 01-.348-.357c0-.196.156-.356.348-.356h.554c.415-1.047 1.415-1.788 2.585-1.788.438 0 .867.11 1.269.32a.358.358 0 01.151.48.34.34 0 01-.469.156z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPayInvoiceLight;
