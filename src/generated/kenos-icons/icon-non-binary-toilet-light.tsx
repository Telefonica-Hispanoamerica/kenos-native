/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconNonBinaryToiletLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M4.503 9.917c0-.25.166-.417.416-.417h8.334c.25 0 .416.167.416.417 0 .25-.166.417-.416.417H4.919c-.25 0-.416-.167-.416-.417zM18.253 2h-2.917a.836.836 0 00-.833.833v8.334h-10v.417c0 4.541 4.416 5.291 5.833 5.375V22h8.333c.25 0 .417-.166.417-.416 0-.25-.167-.417-.417-.417h-7.5V17h4.584c.25 0 .416-.166.416-.416 0-.25-.166-.417-.416-.417h-5c-.209 0-5.084-.042-5.417-4.167h10V2.833h2.917v13.75c0 .25.166.417.416.417.25 0 .417-.166.417-.416V2.834A.836.836 0 0018.253 2zm1.25 17.084a.836.836 0 00-.834-.834.836.836 0 00-.833.834c0 .458.375.833.833.833a.836.836 0 00.834-.833z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconNonBinaryToiletLight;
