/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTelephoneIpLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.509 17c0-.215.135-.357.34-.357.204 0 .339.142.343.357v1.07c0 1-.748 1.787-1.702 1.787H9.964V22H4.522v-2.143H2.48V4.144h2.042V2h5.442v2.144h9.522c.953 0 1.702.786 1.702 1.787v6.782c0 .215-.135.357-.34.357-.204 0-.34-.142-.34-.357V5.931c0-.604-.439-1.07-1.018-1.07H9.964V19.14h9.526c.575 0 1.019-.462 1.019-1.07V17zM3.164 4.861v14.282h1.358V4.861H3.164zm2.041 16.421H9.29V2.718H5.205v18.564zm5.782-13.926c0-.214.135-.356.34-.356h7.484c.204 0 .34.142.34.356v3.213c0 .215-.136.357-.34.357h-7.484c-.205 0-.34-.142-.34-.357V7.356zm7.48 2.857v-2.5h-6.8v2.5h6.8zm1.702 4.644c0-.393.305-.713.68-.713.374 0 .679.32.679.713 0 .393-.305.713-.68.713-.374 0-.679-.32-.679-.713z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTelephoneIpLight;
