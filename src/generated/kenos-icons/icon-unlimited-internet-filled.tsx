/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconUnlimitedInternetFilled = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M5.952 10.01a2.672 2.672 0 00-1.93-.826c-.055 0-.115.005-.17.01C4.91 5.65 7.895 2.975 11.54 2.5c-1.751.802-3.123 3.354-3.617 6.703-.604.061-1.19.33-1.651.806l-.16.165-.16-.165zm7.308-6.585v8.018h3.384c-.118-4.051-1.577-7.448-3.384-8.018zM11.545 21.5c-3.65-.476-6.636-3.15-7.693-6.693.055.004.115.009.17.009.7 0 1.399-.274 1.93-.825l.16-.165.164.17a2.667 2.667 0 001.651.806c.499 3.344 1.866 5.9 3.618 6.698zm6.174-10.052H22c-.256-4.618-3.7-8.373-8.095-8.948 2.131.967 3.695 4.524 3.814 8.948zm-4.454 1.104h3.384c-.123 4.057-1.582 7.453-3.384 8.019v-8.019zm.64 8.948c4.395-.575 7.839-4.33 8.095-8.948h-4.28c-.12 4.425-1.684 7.981-3.815 8.948zm-4.903-6.807a2.68 2.68 0 001.139-.702c.393-.406.64-.91.745-1.434h1.304v8.019c-1.473-.468-2.717-2.826-3.188-5.883zm0-5.386c.416.127.81.363 1.139.702.393.406.645.91.745 1.44h1.304v-8.02c-1.477.463-2.717 2.821-3.188 5.878zm-.796 4.773a1.98 1.98 0 001.427-.608 2.126 2.126 0 00-.004-2.944 1.972 1.972 0 00-2.85 0l-.667.69-.668-.69a1.976 1.976 0 00-2.854 0A2.11 2.11 0 002 12c0 .557.21 1.08.59 1.472a1.98 1.98 0 002.854 0l.668-.689.667.689c.394.405.91.608 1.427.608zM5.357 12l-.672.689a.925.925 0 01-1.336 0A.983.983 0 013.075 12c0-.26.1-.505.279-.689a.923.923 0 01.667-.283c.252 0 .49.1.668.283l.668.689zm2.186-.689a.93.93 0 011.336 0c.365.382.365.996 0 1.378a.93.93 0 01-1.336 0L6.875 12l.668-.689z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconUnlimitedInternetFilled;
