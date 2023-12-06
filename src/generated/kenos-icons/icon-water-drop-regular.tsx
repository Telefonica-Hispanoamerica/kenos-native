/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconWaterDropRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M14.65 17.717c1.117-1.143 1.71-2.643 1.71-4.252 0-1.973-1.352-4.22-2.46-6.061l-.049-.083a603.64 603.64 0 00-2.827-4.964C10.886 2.142 10.676 2 10.43 2a.674.674 0 00-.594.357c-.33.574-.77 1.35-1.203 2.115-.753 1.33-1.49 2.633-1.623 2.813-1.117 1.856-2.51 4.178-2.51 6.18 0 1.61.63 3.14 1.746 4.288a5.816 5.816 0 004.189 1.751 6.149 6.149 0 004.215-1.787zm-1.045-.965a4.425 4.425 0 01-3.175 1.321 4.42 4.42 0 01-3.21-1.358c-.871-.859-1.327-2.034-1.327-3.25 0-1.582 1.247-3.645 2.252-5.308l.053-.086c.174-.284 1.464-2.537 2.232-3.927a198.843 198.843 0 002.233 3.927l.133.224c.99 1.671 2.171 3.665 2.171 5.17a4.737 4.737 0 01-1.362 3.287zm3.98-.105h1.392c.277 0 .523.251.523.535a.545.545 0 01-.523.535h-1.393a.545.545 0 01-.522-.535c0-.284.245-.535.522-.535zm-.84 1.929a.496.496 0 00-.733 0 .525.525 0 000 .75l.943.964a.524.524 0 00.384.142.531.531 0 00.384-.142.525.525 0 000-.75l-.978-.964zm-2.827 1.463c0-.284.246-.535.523-.535a.54.54 0 01.522.535v1.426a.545.545 0 01-.522.535.545.545 0 01-.523-.535V20.04z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconWaterDropRegular;
