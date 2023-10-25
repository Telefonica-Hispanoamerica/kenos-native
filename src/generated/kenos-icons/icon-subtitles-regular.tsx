/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconSubtitlesRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M6.43 20.291l3.008-3.042h8.992c1.97 0 3.57-1.62 3.57-3.617V7.117C22 5.12 20.4 3.5 18.43 3.5H5.57C3.6 3.5 2 5.12 2 7.117v6.51c0 1.871 1.413 3.418 3.214 3.599v2.551a.722.722 0 00.713.723.679.679 0 00.503-.209zm-.86-8.65h13.212a.54.54 0 00.54-.542.536.536 0 00-.536-.542H5.57a.536.536 0 00-.535.542c0 .301.238.542.535.542zm13.216 1.45a.542.542 0 010 1.084H5.57a.536.536 0 01-.535-.543c0-.3.238-.541.535-.541h13.216zm1.783-5.97v6.511c0 1.195-.96 2.172-2.144 2.172H9.141a.694.694 0 00-.503.213l-1.998 2.02v-1.51a.719.719 0 00-.713-.723H5.57c-1.18 0-2.144-.972-2.144-2.172V7.117c0-1.195.96-2.172 2.144-2.172h12.855v.004c1.18 0 2.144.973 2.144 2.172z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSubtitlesRegular;
