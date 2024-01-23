/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconSearchMoneyRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M9.797 13.88c0 .208.168.379.378.379a.38.38 0 00.381-.379v-.547c.558-.07 1.026-.26 1.367-.556.44-.381.672-.919.672-1.552 0-.778-.356-1.748-2.039-1.993V7.214c.276.054.548.155.83.308l.008.003c.095.05.198.081.305.084.283 0 .512-.23.512-.513 0-.112-.039-.322-.302-.484a3.31 3.31 0 00-1.353-.445v-.275a.38.38 0 00-.381-.381.38.38 0 00-.378.38v.263c-1.228.109-2.006.9-2.006 2.074 0 .764.351 1.721 2.006 1.965v2.13c-.43-.056-.862-.228-1.291-.513a.641.641 0 00-.342-.109.526.526 0 00-.532.521c0 .19.084.348.252.465a3.833 3.833 0 001.913.669v.524zm.759-1.578v-1.997c.86.186.989.568.989.956 0 .546-.37.922-.989 1.041zm-.76-3.185c-.83-.187-.951-.573-.951-.934 0-.555.35-.914.952-.996v1.93z" /><path fill="currentColor" d="M2.175 9.984a7.846 7.846 0 007.846 7.846 7.792 7.792 0 005.138-1.918l5.697 5.697a.55.55 0 00.395.165.561.561 0 00.398-.958l-5.704-5.704A7.848 7.848 0 004.472 4.435a7.854 7.854 0 00-2.297 5.55zm1.12 0a6.726 6.726 0 016.726-6.725 6.672 6.672 0 014.756 1.972 6.724 6.724 0 010 9.473 6.728 6.728 0 01-9.512.036 6.732 6.732 0 01-1.97-4.756z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSearchMoneyRegular;
