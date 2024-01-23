/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconBillInvoicePoundLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.07 21.643a.35.35 0 01-.343.357H4.6V3.787C4.6 2.805 5.372 2 6.324 2h11.027c.948 0 1.724.8 1.724 1.787V17.36a.35.35 0 01-.344.357.35.35 0 01-.344-.357V3.787c0-.59-.463-1.07-1.032-1.07H6.33c-.57 0-1.032.48-1.032 1.07v17.5h13.438c.186 0 .336.16.336.356zm-.343-2.857c-.38 0-.688.32-.688.713 0 .394.308.714.688.714.379 0 .688-.32.688-.714a.696.696 0 00-.688-.713zM8.045 17.003h7.581c.19 0 .344.16.344.357a.35.35 0 01-.344.357H8.045a.35.35 0 01-.344-.357.35.35 0 01.344-.357zm7.581-3.574H8.045a.35.35 0 00-.344.356.35.35 0 00.344.357h7.581a.35.35 0 00.344-.357.35.35 0 00-.344-.356zm-1.954-4.284h1.954c.19 0 .34.16.34.357a.351.351 0 01-.344.356h-2.929a.35.35 0 01-.344-.356.35.35 0 01.344-.357.345.345 0 00.344-.356v-1.07h-.172a.35.35 0 01-.344-.357.35.35 0 01.344-.356h.172v-1.07c0-.786.618-1.426 1.376-1.426.38 0 .746.16 1.006.448a.364.364 0 01-.013.503.33.33 0 01-.486-.014.666.666 0 00-.502-.224c-.38 0-.688.32-.688.713v1.07h1.032c.19 0 .344.16.344.356a.35.35 0 01-.344.357H13.73v1.07c0 .123-.018.246-.058.356z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBillInvoicePoundLight;
