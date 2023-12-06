/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconLungsLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.132 8.242c.072.07 2.829 3.123 3.448 6.782.462 2.725.325 4.297-.448 5.086-.076.076-.49.468-1.166.5-.042.002-.086.002-.128.002-.98 0-1.578-.507-1.939-.815l-.084-.07c-.314-.264-.445-.373-.865-.373h-.009c-.44 0-1.493-.095-1.624-.131-.978-.258-1.521-1.045-1.521-2.213-.031-.712-.09-2.163-.118-3.65l-1.754-.885-1.602.806a164.97 164.97 0 01-.117 3.687c0 1.165-.544 1.95-1.527 2.21-.129.036-1.182.131-1.62.131-.42.02-.557.11-.873.373l-.084.07c-.361.308-.958.815-1.939.815-.042 0-.084 0-.128-.003a1.778 1.778 0 01-1.166-.501c-.773-.79-.91-2.361-.448-5.087.622-3.658 3.376-6.711 3.493-6.84.426-.675 1.084-1.034 1.975-1.034 1.042 0 1.77.462 2.048 1.303.064.098.142.308.224.59.072.247.114.707.143 1.272l.347-.176V4.223c0-.463.37-.838.823-.838h1.037a.83.83 0 01.823.838v5.882l.367.185c.026-.555.07-1.006.14-1.25.082-.285.16-.49.255-.66.247-.768.975-1.23 2.017-1.23.888 0 1.55.358 2.02 1.092zm-6.39 3.378a.416.416 0 01.373 0l1.554.79c-.002-.406-.002-.804.003-1.176l-.944-.476a.426.426 0 01-.232-.381V4.228l-1.023.014.014 6.118c0 .162-.09.308-.232.38l-.924.466c.005.356.008.734.005 1.123l1.406-.709zm8.19 8.14a.963.963 0 00.606-.246c.538-.555.61-2.017.21-4.35-.577-3.404-3.252-6.373-3.28-6.404-.359-.551-.75-.762-1.359-.762-1.014 0-1.193.544-1.252.723a2.775 2.775 0 00-.213.558c-.21.74-.16 4.4-.01 7.697 0 1.07.512 1.325.898 1.426.06.008.437.035.811.06l.607.044c.72 0 1.033.26 1.395.561l.005.004.09.076c.339.288.753.641 1.493.613zM9.37 16.968c.145-3.334.199-6.992-.014-7.729a2.446 2.446 0 00-.182-.487c-.135-.381-.376-.793-1.283-.793-.608 0-1 .21-1.317.703a1.776 1.776 0 01-.024.028c-.278.322-2.75 3.181-3.3 6.434-.393 2.328-.32 3.79.218 4.345.008.008.232.23.605.246.734.028 1.133-.31 1.467-.59l.115-.099c.365-.305.678-.565 1.398-.565.404-.017 1.322-.09 1.44-.11.364-.095.877-.35.877-1.383z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconLungsLight;
