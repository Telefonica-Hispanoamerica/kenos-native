/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconTeamFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M7.556 14.041c0-1.05.569-1.972 1.536-2.58-.356-.585-1-1.037-1.835-1.289A2.604 2.604 0 008.295 8.1c0-1.435-1.161-2.6-2.593-2.6a2.597 2.597 0 00-1.555 4.672C2.844 10.562 2 11.446 2 12.554v5.941h5.556v-4.454zm12.297-3.869A2.604 2.604 0 0020.89 8.1c0-1.435-1.162-2.6-2.593-2.6a2.597 2.597 0 00-1.555 4.672c-.834.252-1.48.704-1.835 1.288.967.609 1.536 1.531 1.536 2.581V18.5H22v-5.941c0-1.113-.844-1.997-2.147-2.387z" /><path fill="currentColor" d="M14.595 9.583c0-1.435-1.161-2.6-2.593-2.6a2.6 2.6 0 00-2.593 2.6c0 .846.413 1.597 1.038 2.072-1.303.39-2.147 1.274-2.147 2.382v4.458h7.405v-4.458c0-1.108-.844-1.992-2.148-2.382a2.59 2.59 0 001.038-2.072z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTeamFilled;
