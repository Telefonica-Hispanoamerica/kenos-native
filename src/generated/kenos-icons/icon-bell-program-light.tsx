/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconBellProgramLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.69 18.154c.174.14.202.398.062.572a.404.404 0 01-.314.15h-5.479c-.008.51-.115 1.42-.72 2.104-.507.575-1.244.86-2.174.86-.932 0-1.67-.285-2.176-.86-.614-.689-.712-1.602-.712-2.1H4.698a.406.406 0 01-.254-.723c.442-.37.817-.855 1.112-1.437-2.171-.642-3.401-2.367-3.401-5.308 0-3.496 1.737-5.286 4.728-5.558 1.513-3.826 5.813-3.708 6.18-3.692.255-.016 2.91-.131 4.832 1.659 1.243 1.168 1.88 2.865 1.88 5.042v3.885c-.006.062-.197 3.667 1.915 5.406zm-16.011-.098h14.773c-1.675-2.095-1.504-5.19-1.496-5.336V8.86c0-1.938-.546-3.431-1.619-4.434-1.709-1.6-4.218-1.451-4.244-1.443-.004 0-.008-.002-.012-.004s-.009-.004-.013-.004c-.01 0-.017.003-.022.005l-.011.003c-.166-.017-3.78-.213-5.241 2.832 3.473.025 5.51 1.807 5.51 5.6 0 3.812-2.06 5.593-5.575 5.593-.482 0-.933-.033-1.358-.106-.194.423-.42.818-.692 1.154zm8.947 2.38c.434-.484.507-1.173.515-1.556h-4.146c0 .386.073 1.075.507 1.557.345.386.874.583 1.563.583.692 0 1.216-.197 1.56-.583zm-6.894-4.254c3.199 0 4.76-1.56 4.76-4.77 0-3.216-1.564-4.776-4.76-4.776-3.196 0-4.759 1.557-4.759 4.776 0 3.21 1.56 4.77 4.76 4.77zm1.717-2.485a.397.397 0 00.286-.123.391.391 0 000-.571L8.14 11.4V9.232c0-.23-.18-.409-.409-.409-.23 0-.409.18-.409.41v2.333a.42.42 0 00.123.294l1.709 1.714a.418.418 0 00.294.123z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBellProgramLight;
