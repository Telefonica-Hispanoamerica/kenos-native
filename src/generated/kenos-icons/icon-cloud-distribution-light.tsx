/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconCloudDistributionLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.137 14.86c-.63 0-1.158.457-1.31 1.07h-4.519a1.39 1.39 0 00-.97-1.02v-1.838c0-.215-.136-.357-.34-.357H7.949c-1.702 0-3.095-1.462-3.095-3.25 0-1.787 1.393-3.25 3.095-3.25a2.93 2.93 0 011.702.535c.17.105.375.073.475-.105.1-.179.07-.394-.1-.499a3.705 3.705 0 00-1.158-.535c.17-1.609 1.497-2.893 3.095-2.893 1.702 0 3.095 1.463 3.095 3.25 0 .32-.035.608-.135.891-.07.179.07.394.24.43h.1c.135 0 .27-.105.34-.251.062-.256.093-.515.124-.774l.01-.086h.205c1.733 0 3.23 1.5 3.23 3.25 0 1.788-1.393 3.287-3.095 3.287h-2.381c-.205 0-.34.142-.34.357s.135.357.34.357h2.381c2.076 0 3.774-1.82 3.774-4 0-2.144-1.802-3.964-3.909-3.964h-.205C15.467 3.536 13.865 2 11.963 2s-3.535 1.536-3.74 3.502h-.239c-2.107 0-3.81 1.75-3.81 3.963 0 2.18 1.703 3.964 3.775 3.964h3.71v1.48a1.389 1.389 0 00-.972 1.02H6.17c-.153-.612-.68-1.07-1.31-1.07-.75 0-1.359.64-1.359 1.427 0 .663.435 1.216 1.019 1.376v3.264c0 .196.152.356.34.356.186 0 .339-.16.339-.356v-3.264c.474-.128.849-.521.97-1.02h4.52c.121.499.496.892.97 1.02v3.264a.35.35 0 00.34.356.35.35 0 00.34-.356v-3.264c.474-.128.848-.521.97-1.02h4.523c.122.499.497.892.971 1.02v1.48c0 .197.152.357.34.357a.35.35 0 00.34-.356v-1.481c.583-.16 1.018-.713 1.018-1.376 0-.787-.61-1.427-1.363-1.427zM4.858 17.002c-.374 0-.679-.32-.679-.713 0-.393.305-.713.68-.713.374 0 .678.32.678.713 0 .393-.304.713-.679.713zm6.46-.713c0-.393.305-.713.68-.713.374 0 .679.32.679.713 0 .393-.305.713-.68.713-.374 0-.678-.32-.678-.713zm7.824.713c-.375 0-.68-.32-.68-.713 0-.393.305-.713.68-.713.374 0 .679.32.679.713 0 .393-.305.713-.68.713zm0 4.997c.374 0 .679-.32.679-.713 0-.393-.305-.713-.68-.713-.374 0-.678.32-.678.713 0 .393.304.713.679.713z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconCloudDistributionLight;
