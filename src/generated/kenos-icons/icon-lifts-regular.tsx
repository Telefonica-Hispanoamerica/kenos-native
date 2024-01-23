/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconLiftsRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M15.257 4.144V22H2.91V4.144C2.91 2.964 3.832 2 4.97 2h8.232c1.133 0 2.055.965 2.055 2.144zm1.23 5.568a.736.736 0 000 1.01.673.673 0 00.975 0l1.23-1.28 1.229 1.28a.662.662 0 00.966 0 .736.736 0 000-1.01l-2.2-2.29-2.2 2.29zm2.204 4.85l1.23-1.28a.667.667 0 01.97 0 .735.735 0 010 1.01l-2.2 2.29-2.2-2.29a.736.736 0 010-1.01.667.667 0 01.97 0l1.23 1.28zM13.202 3.431H4.97c-.377 0-.685.32-.685.713v16.43h9.608V4.144h-.005c0-.393-.307-.713-.685-.713zm-.86 6.962v4.823h-1.028v3.927a.522.522 0 01-.513.535.523.523 0 01-.514-.535v-4.997h1.027v-3.748c0-.773-.628-1.427-1.37-1.427H8.227c-.742 0-1.37.654-1.37 1.427v3.748h1.028v5.001a.522.522 0 01-.514.535.522.522 0 01-.514-.535v-3.926H5.83v-4.828A2.54 2.54 0 017.34 8.08a2.362 2.362 0 01-.483-1.435c0-1.28 1.002-2.323 2.231-2.323 1.23 0 2.23 1.043 2.23 2.323 0 .544-.18 1.042-.482 1.435a2.54 2.54 0 011.506 2.313zm-3.263-2.5c.668 0 1.203-.563 1.203-1.248 0-.686-.54-1.248-1.198-1.248-.659 0-1.199.557-1.199 1.248 0 .685.536 1.248 1.194 1.248z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconLiftsRegular;
