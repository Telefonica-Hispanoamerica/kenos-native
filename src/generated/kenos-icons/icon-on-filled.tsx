/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconOnFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.402 2.164c1.574.037 9.44.69 9.44 9.86 0 9.177-7.835 9.784-9.404 9.812-.17.003-.364.006-.563.006-.104 0-.213 0-.314-.003-8.952-.129-9.406-8.246-9.406-9.871s.451-9.737 9.339-9.812c.3-.003.63.003.908.008zM11.348 12.31c0-3.233-1.532-3.91-2.818-3.91-1.29 0-2.829.677-2.829 3.91 0 3.221 1.538 3.899 2.83 3.899 1.285 0 2.817-.675 2.817-3.9zm6.11-3.373a.41.41 0 00-.41-.409h-.274a.41.41 0 00-.409.41v4.772l-3.314-5a.41.41 0 00-.341-.185h-.219a.411.411 0 00-.409.41v6.722a.41.41 0 00.41.41h.274a.41.41 0 00.409-.41v-4.765l3.3 4.995a.41.41 0 00.341.185h.227c.23 0 .415-.185.415-.412V8.937zm-7.244 3.373c0-2.476-.9-2.796-1.684-2.796-.837 0-1.694.33-1.694 2.796 0 2.445.857 2.776 1.694 2.776.832 0 1.684-.33 1.684-2.776z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconOnFilled;