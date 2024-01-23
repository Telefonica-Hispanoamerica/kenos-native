/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconQueueRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M8.643 9.89c.214-.322.143-.786-.179-1a2.277 2.277 0 00-.5-.286c.5-.5.786-1.214.786-1.964a2.866 2.866 0 00-2.857-2.857A2.866 2.866 0 003.036 6.64c0 .75.285 1.428.75 1.928C2.714 9.14 2 10.104 2 11.283v5.357c0 .392.321.714.714.714a.716.716 0 00.715-.714v-5.357c0-.858.964-1.786 2.5-1.786.75 0 1.357.321 1.75.571.321.25.75.143.964-.178zM4.5 6.64c0-.786.643-1.429 1.429-1.429.785 0 1.428.643 1.428 1.429 0 .785-.643 1.428-1.428 1.428A1.433 1.433 0 014.5 6.64zm10.214 4.678c.215-.321.143-.785-.178-1a2.276 2.276 0 00-.5-.285c.5-.5.785-1.215.785-1.965a2.866 2.866 0 00-2.857-2.857 2.866 2.866 0 00-2.857 2.857c0 .75.286 1.429.75 1.929-1.071.571-1.786 1.536-1.786 2.714v5.357c0 .393.322.714.715.714a.716.716 0 00.714-.714v-5.357c0-.857.964-1.786 2.5-1.786.75 0 1.357.322 1.75.572.321.25.75.143.964-.179zM12 6.64c.786 0 1.429.643 1.429 1.428 0 .786-.643 1.429-1.429 1.429a1.433 1.433 0 01-1.429-1.429c0-.785.643-1.428 1.429-1.428zm8.179 4.785c.464-.5.75-1.178.75-1.928A2.866 2.866 0 0018.07 6.64a2.866 2.866 0 00-2.857 2.857c0 .75.286 1.428.75 1.928-1.107.572-1.821 1.536-1.821 2.715v5.357c0 .393.321.714.714.714a.716.716 0 00.714-.714V14.14c0-.857.965-1.786 2.5-1.786 1.536 0 2.5.929 2.5 1.786v5.357c0 .393.322.714.715.714a.716.716 0 00.714-.714V14.14c0-1.179-.714-2.143-1.821-2.715zM18.07 8.068c.786 0 1.429.643 1.429 1.429s-.643 1.428-1.429 1.428a1.433 1.433 0 01-1.428-1.428c0-.786.643-1.429 1.428-1.429z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconQueueRegular;
