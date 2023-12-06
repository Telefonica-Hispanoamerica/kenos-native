/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconPodiumFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M8.819 6.051l.683.695-.157.997a1.276 1.276 0 00.516 1.252 1.242 1.242 0 001.305.076l.605-.333.21-.115.21.115.608.333a1.24 1.24 0 001.572-.333c.215-.275.31-.63.252-.995l-.163-.991.684-.698c.339-.344.454-.843.302-1.308a1.255 1.255 0 00-1-.849l-.921-.137-.42-.885a1.235 1.235 0 00-1.124-.72 1.24 1.24 0 00-1.126.72l-.417.882-.922.14c-.462.07-.846.395-.994.846-.157.462-.042.961.297 1.308zm2.075-1.123a.638.638 0 00.516-.361l.585-1.168.558 1.179a.64.64 0 00.47.344l1.244.267-.877.89a.675.675 0 00-.193.575l.196 1.333c-.003.003-.006.003-.006.003l-.002-.003-1.084-.594a.62.62 0 00-.622-.014l-1.129.557.21-1.282a.669.669 0 00-.174-.558l-.888-.986 1.197-.182zm4.796 6.882c0-.549-.501-1.028-1.073-1.028v.006H9.382c-.572 0-1.073.479-1.073 1.025v10.028h7.381v-10.03zM2.155 14.715c0-.554.557-.899 1.073-.899h3.851v8.02H3.228c-.591 0-1.073-.423-1.073-.92v-6.2zm18.613 1.48c.622 0 1.073.335 1.073.797v4.023c0 .47-.442.82-1.075.82h-3.852v-5.64h3.854z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPodiumFilled;