/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconDataShieldRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M11.68 11.676a4.04 4.04 0 00-3.004 1.34l1.012.904a2.682 2.682 0 011.992-.888c.76 0 1.484.324 1.992.888l1.012-.904a4.04 4.04 0 00-3.004-1.34z" /><path fill="currentColor" d="M7.704 12.22l-.988-.928A6.776 6.776 0 0111.68 9.16a6.86 6.86 0 014.964 2.132l-.988.928a5.433 5.433 0 00-3.976-1.708c-1.52 0-2.932.608-3.976 1.708z" /><path fill="currentColor" d="M5.036 9.556l.996.92A7.742 7.742 0 0111.68 8.02c2.136 0 4.196.896 5.648 2.456l.996-.92a9.104 9.104 0 00-6.644-2.888 9.11 9.11 0 00-6.644 2.888zm5.444 6.268a1.2 1.2 0 012.4 0 1.2 1.2 0 01-2.4 0z" /><path fill="currentColor" d="M14.508 2H8.852L3 4.916v9.048c0 4.384 8.076 7.784 8.42 7.928l.26.108.26-.108c.344-.144 8.42-3.544 8.42-7.928V4.916L14.508 2zM19 13.964c0 2.78-5.056 5.576-7.32 6.564-2.264-.992-7.32-3.784-7.32-6.564V5.752l4.812-2.396h5.012L19 5.752v8.212z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconDataShieldRegular;
