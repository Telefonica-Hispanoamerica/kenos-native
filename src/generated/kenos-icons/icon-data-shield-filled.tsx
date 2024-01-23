/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconDataShieldFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.119 10.93a.71.71 0 00.704.713c.388 0 .709-.32.704-.713C21.527 6 17.578 2 12.708 2a.71.71 0 00-.704.713.71.71 0 00.704.714c4.096 0 7.41 3.36 7.41 7.503zm-3.527 0a.71.71 0 00.704.713c.389 0 .705-.32.71-.708 0-2.968-2.367-5.36-5.293-5.36a.71.71 0 00-.705.714.71.71 0 00.705.713c2.15 0 3.879 1.747 3.879 3.928zm-3.423-1.788c-2.102 0-3.789-1.329-4.16-1.621a.618.618 0 00-.076-.057l-.668-.608-.46.393-.177.179c-.004 0-.03.02-.075.057-.37.299-2.055 1.657-4.16 1.657H2.48v7.216c0 3.324 3.035 4.75 5.329 5.5L8.3 22l.492-.142c2.294-.713 5.329-2.144 5.329-5.464V9.142h-.953zm-6.458 8.61l-2.15-2.18a.521.521 0 010-.75.506.506 0 01.741 0l1.378 1.394 4.2-4.253a.506.506 0 01.74 0 .574.574 0 01.068.787L6.71 17.752z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconDataShieldFilled;
