/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconFixedInternetLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.718 21.188H3.29V7.87l8.515-4.933L20.32 7.87v8.838c0 .224.181.407.404.407a.406.406 0 00.405-.407V7.401L11.804 2 2.48 7.401V22h18.243a.406.406 0 10-.005-.813z" /><path fill="currentColor" d="M21.528 19.151a.811.811 0 01-.81.813.811.811 0 01-.81-.813.81.81 0 111.62 0zM11.804 7.354c-3.243 0-5.879 2.646-5.879 5.901s2.636 5.896 5.879 5.896c3.243 0 5.879-2.646 5.879-5.9 0-3.235-2.605-5.866-5.822-5.897h-.057zm-.405.943v4.552H9.73c.077-2.365.85-4.089 1.67-4.552zm0 9.87c-.814-.464-1.582-2.172-1.67-4.51h1.67v4.51zm.81.036v-4.547h1.722c-.088 2.396-.892 4.136-1.722 4.547zm0-9.942c.835.416 1.645 2.171 1.722 4.583H12.21V8.26zm-2.107.208c-.68.99-1.131 2.557-1.188 4.38H6.755a5.081 5.081 0 013.347-4.38zM8.92 13.656c.062 1.834.524 3.412 1.22 4.39a5.075 5.075 0 01-3.384-4.39H8.92zm4.623 4.365c.685-.98 1.136-2.547 1.199-4.365h2.106a5.082 5.082 0 01-3.305 4.365zm1.199-5.177c-.057-1.802-.498-3.36-1.168-4.354a5.09 5.09 0 013.274 4.354h-2.106z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFixedInternetLight;
