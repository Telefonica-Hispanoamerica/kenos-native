/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconBatteryChargingLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.12 16.692a.317.317 0 00.176.048.368.368 0 00.304-.172l2.456-4.212a.351.351 0 00-.304-.528h-2.896l2.148-3.684a.349.349 0 00-.124-.48.349.349 0 00-.48.124L9.944 12a.351.351 0 00.304.528h2.896l-2.148 3.684c-.1.164-.044.38.124.48zm2.628 3.908a.7.7 0 10.002 1.402.7.7 0 00-.002-1.402z" /><path fill="currentColor" d="M17.62 5.512c0-.972-.792-1.756-1.756-1.756h-1.408V2H9.544v1.752H8.136c-.972 0-1.756.792-1.756 1.756v14.388c0 .972.792 1.756 1.756 1.756h3.508c.192 0 .36-.16.36-.356a.353.353 0 00-.352-.352H8.144c-.58 0-1.052-.472-1.052-1.052V5.508c0-.58.472-1.052 1.052-1.052h2.108V2.7h3.508v1.756h2.108c.58 0 1.052.472 1.052 1.052v12.56c-.004.028-.008.048-.008.076V19.9c0 .576-.476 1.048-1.056 1.052a.353.353 0 000 .704 1.763 1.763 0 001.756-1.752v-1.676c.004-.028.008-.048.008-.076V5.512z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBatteryChargingLight;
