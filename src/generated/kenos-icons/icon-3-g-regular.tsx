/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const Icon3GRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2 7.55c.492.569 1.401.995 2.613.995 1.571 0 2.613-.768 2.613-1.878 0-.91-.814-1.432-1.487-1.499.748-.123 1.383-.683 1.383-1.423 0-1.043-.9-1.736-2.51-1.736-1.164 0-1.997.427-2.527 1.025l.767.996c.445-.389 1.013-.626 1.59-.626.606 0 1.06.209 1.06.607 0 .351-.368.54-1.022.54-.236 0-.729 0-.852-.009v1.404c.095-.01.578-.019.852-.019.862 0 1.127.209 1.127.579s-.36.654-1.06.654c-.55 0-1.269-.237-1.723-.683L2 7.55zm5.79-2.277c0 2.01 1.533 3.272 3.417 3.272 1.193 0 2.111-.483 2.793-1.233V4.836h-3.048v1.357H12.4v.531c-.255.209-.7.38-1.193.38-1.032 0-1.76-.797-1.76-1.831 0-1.034.728-1.831 1.76-1.831.597 0 1.08.332 1.335.75l1.363-.722C13.441 2.683 12.59 2 11.207 2 9.323 2 7.79 3.262 7.79 5.273zM2.4 18A1.6 1.6 0 014 16.4h1A1.6 1.6 0 016.6 18v2A1.6 1.6 0 015 21.6H4A1.6 1.6 0 012.4 20v-2zm1.6-.4a.4.4 0 00-.4.4v2c0 .22.18.4.4.4h1a.4.4 0 00.4-.4v-2a.4.4 0 00-.4-.4H4zM7.4 14A1.6 1.6 0 019 12.4h1a1.6 1.6 0 011.6 1.6v6a1.6 1.6 0 01-1.6 1.6H9A1.6 1.6 0 017.4 20v-6zm1.6-.4a.4.4 0 00-.4.4v6c0 .22.18.4.4.4h1a.4.4 0 00.4-.4v-6a.4.4 0 00-.4-.4H9zm3.4-2.6A1.6 1.6 0 0114 9.4h1a1.6 1.6 0 011.6 1.6v9a1.6 1.6 0 01-1.6 1.6h-1a1.6 1.6 0 01-1.6-1.6v-9zm1.6-.4a.4.4 0 00-.4.4v9c0 .22.18.4.4.4h1a.4.4 0 00.4-.4v-9a.4.4 0 00-.4-.4h-1zM17.4 6A1.6 1.6 0 0119 4.4h1A1.6 1.6 0 0121.6 6v14a1.6 1.6 0 01-1.6 1.6h-1a1.6 1.6 0 01-1.6-1.6V6zm1.6-.4a.4.4 0 00-.4.4v14c0 .22.18.4.4.4h1a.4.4 0 00.4-.4V6a.4.4 0 00-.4-.4h-1z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default Icon3GRegular;
