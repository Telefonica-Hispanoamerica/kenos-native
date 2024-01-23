/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconImportLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.82 19.555L6.108 13.74c-.4-.408-.509-1-.292-1.519a1.17 1.17 0 011.09-.78h2.549V2.372c0-.22.144-.371.365-.371.216 0 .364.147.364.371v9.813H6.91a.406.406 0 00-.401.298c-.072.22-.072.518.108.738l5.203 5.298 5.198-5.293a.638.638 0 00.108-.74.41.41 0 00-.4-.297H13.45V2.37c0-.22.144-.371.365-.371.216 0 .364.147.364.371v9.074h2.546c.472 0 .873.298 1.09.78.216.518.108 1.146-.293 1.518l-5.703 5.812zM22 12.371a.732.732 0 01-.726.74c-.4 0-.725-.332-.725-.74s.325-.738.726-.738c.4 0 .725.33.725.738z" /><path fill="currentColor" d="M3.82 22h16c1.018 0 1.815-.816 1.82-1.853v-5.555c0-.225-.149-.372-.366-.372-.22 0-.364.151-.364.372v5.555c0 .629-.473 1.11-1.09 1.11h-16c-.618 0-1.09-.482-1.09-1.11V12c0-.225-.145-.371-.365-.371S2 11.779 2 12v8.147C2 21.184 2.802 22 3.82 22z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconImportLight;
