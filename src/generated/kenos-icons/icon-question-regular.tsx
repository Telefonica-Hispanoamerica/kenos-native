/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconQuestionRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12 15.214a.716.716 0 01-.714-.714c0-1.179.464-2.286 1.285-3.143l1.036-1.036c.393-.392.322-1.285 0-1.714a1.81 1.81 0 00-1.428-.714H12c-.571 0-1.107.321-1.393.786-.214.357-.643.464-.964.25-.357-.215-.464-.643-.25-.965A3.014 3.014 0 0112 6.464h.179c1 0 1.928.465 2.535 1.25.715.929.822 2.643-.107 3.607l-1.036 1.036c-.535.607-.857 1.357-.857 2.143a.716.716 0 01-.714.714zm0 2.393a.786.786 0 100-1.571.786.786 0 000 1.571z" /><path fill="currentColor" d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2 2 6.5 2 12zm1.429 0c0-4.714 3.857-8.571 8.571-8.571 4.714 0 8.571 3.857 8.571 8.571 0 4.714-3.857 8.571-8.571 8.571-4.714 0-8.571-3.857-8.571-8.571z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconQuestionRegular;
