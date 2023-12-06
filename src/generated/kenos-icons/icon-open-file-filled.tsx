/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconOpenFileFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.687 8.677h.807c.742 0 1.347.605 1.35 1.353a.547.547 0 01-.011.115l-1.448 7.946a1.353 1.353 0 01-1.345 1.289H4.27c-.742 0-1.347-.61-1.347-1.356L2.924 18l.001-.02-.77-11.95v-.025a1.402 1.402 0 011.415-1.39h6.128c.782 0 1.418.616 1.418 1.376v.4h7.1c.782 0 1.418.616 1.418 1.375l.064.813c.002.02-.002.04-.005.06a.38.38 0 00-.006.038zM9.698 5.865H3.57c-.107 0-.177.067-.177.123l.451 6.994.558-3.02a1.35 1.35 0 011.344-1.288h12.717v-.003l-.064-.86c0-.106-.073-.17-.18-.17h-7.722a.622.622 0 01-.62-.625V5.988c0-.06-.072-.123-.179-.123z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconOpenFileFilled;
