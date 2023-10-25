/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconPersonRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M14.472 6.58A3.39 3.39 0 0116.5 9.676v6.61h-1.438v4.997a.717.717 0 01-.719.713.717.717 0 01-.719-.713v-6.427h1.438v-5.18c0-1.065-.908-1.965-1.981-1.965h-2.162c-1.073 0-1.981.9-1.981 1.965v5.18h1.438v6.432a.717.717 0 01-.72.713.717.717 0 01-.718-.713v-5.001H7.5V9.68c0-1.486.968-2.747 2.309-3.205a2.847 2.847 0 01-.507-1.618C9.302 3.28 10.592 2 12.182 2c1.59 0 2.88 1.28 2.88 2.857 0 .65-.221 1.244-.59 1.724zm-.857-1.727a1.44 1.44 0 00-2.88 0c0 .781.64 1.421 1.433 1.426.802 0 1.447-.64 1.447-1.426z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPersonRegular;
