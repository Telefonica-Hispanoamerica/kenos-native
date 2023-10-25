/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTowTruckRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M17.707 6.243c.437.605 2.997 3.992 3.333 4.426l.013.017c.28.368.788 1.034.788 1.812v3.336c0 .575-.252 1.154-.695 1.594-.442.44-1.025.692-1.599.692h-.224c-.454 1.053-1.445 1.672-2.82 1.672-1.376 0-2.368-.619-2.821-1.672H9.819c-.454 1.053-1.446 1.672-2.82 1.672-1.393 0-2.396-.633-2.841-1.709-.504-.08-.95-.3-1.306-.652-.442-.44-.694-1.02-.694-1.594v-4.4a.6.6 0 01.602-.6h4.151L5.147 7.285l-.003 1.692c.005.028.042.69-.4 1.165-.186.2-.522.44-1.076.443h-.014c-.583 0-.928-.25-1.115-.457-.451-.501-.384-1.201-.376-1.283a.604.604 0 011.2.14c-.01.096.01.272.075.342.026.028.065.032.112.037.033.003.07.007.11.02.097-.004.164-.02.198-.057.073-.081.087-.269.084-.31l.006-4.197a.592.592 0 01.353-.538.432.432 0 01.131-.033.719.719 0 00.05-.016.325.325 0 01.107-.023h.006l1.442.01c.2 0 .381.099.493.261l4.2 6.079V5.798a.6.6 0 01.601-.6h4.303c.801 0 1.613.41 2.073 1.045zM5.712 5.42l-.15-.003 2.685 5.409 1.2.003-3.735-5.41zm14.925 10.42v-3.345c0-.378-.345-.826-.552-1.095a485.392 485.392 0 01-3.361-4.454c-.233-.322-.684-.546-1.096-.546h-3.7v5.04a.6.6 0 01-.602.599h-7.97v3.798c0 .258.124.53.342.745a.547.547 0 00.127.087c.023.013.045.025.067.04v-.006c0-1.905 1.19-3.09 3.103-3.09 1.913 0 3.104 1.182 3.104 3.09 0 .042-.005.082-.009.123-.003.031-.007.063-.008.095h3.33a1.365 1.365 0 00-.007-.094c-.005-.04-.01-.08-.01-.124 0-1.905 1.191-3.09 3.105-3.09 1.913 0 3.103 1.182 3.103 3.09a.927.927 0 01-.009.12l-.008.095c.247-.01.502-.129.709-.333.218-.216.342-.488.342-.745zm-4.135 2.756c1.258 0 1.9-.636 1.9-1.89 0-1.255-.642-1.891-1.9-1.891-1.257 0-1.896.636-1.896 1.89 0 1.255.639 1.891 1.896 1.891zm-11.4-1.89c0 1.254.638 1.89 1.896 1.89 1.26 0 1.9-.636 1.896-1.89 0-1.255-.638-1.891-1.896-1.891s-1.896.636-1.896 1.89z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTowTruckRegular;
