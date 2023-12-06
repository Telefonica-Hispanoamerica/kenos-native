/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconRecordingRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2 12c0 5.517 4.488 10 10 10s10-4.488 10-10S17.512 2 12 2 2 6.484 2 12zm1.43 0c0-4.726 3.844-8.57 8.57-8.57 4.726 0 8.57 3.844 8.57 8.57 0 4.726-3.844 8.57-8.57 8.57-4.726 0-8.57-3.844-8.57-8.57zM12 17.357A5.364 5.364 0 016.644 12 5.364 5.364 0 0112 6.644 5.364 5.364 0 0117.357 12 5.364 5.364 0 0112 17.357zM8.074 12A3.934 3.934 0 0012 15.926 3.934 3.934 0 0015.926 12 3.931 3.931 0 0012 8.074 3.931 3.931 0 008.074 12z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconRecordingRegular;