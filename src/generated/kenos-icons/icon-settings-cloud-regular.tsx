/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconSettingsCloudRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.83 13.798c0-3.434-2.325-4.852-4.647-5.064-1.244-3.507-5.278-3.69-6.101-3.69-1.06 0-6.264.283-6.457 5.762-1.07.42-2.45 1.44-2.45 3.905 0 3.137 2.24 4.255 4.338 4.255l10.059-.056c2.426 0 5.258-1.339 5.258-5.112zm-1.205 0c0 3.641-3.1 3.924-4.056 3.924l-10.059.053c-.941 0-3.129-.3-3.129-3.067 0-1.554.678-2.532 2.014-2.907a.593.593 0 00.44-.583l-.005-.095c0-4.535 4.022-4.888 5.257-4.888.698 0 4.227.154 5.062 3.221.07.252.3.432.566.44 1.176.034 3.91.479 3.91 3.902zm-8.622-.283c-.72 0-1.056-.33-1.056-1.04 0-.708.336-1.038 1.056-1.038.723 0 1.056.33 1.056 1.039 0 .708-.336 1.039-1.056 1.039zm1.941-1.04c0-1.195-.725-1.91-1.94-1.91-1.216 0-1.94.715-1.94 1.91 0 1.197.723 1.911 1.94 1.911 1.215 0 1.94-.714 1.94-1.91zm1.4.189h-.618a.484.484 0 00-.476.4c-.042.252-.11.468-.21.675a.47.47 0 00.092.543l.465.46-.291.286-.465-.46a.491.491 0 00-.558-.09 2.355 2.355 0 01-.683.208.48.48 0 00-.406.47v.611h-.384v-.61a.476.476 0 00-.406-.471 2.46 2.46 0 01-.68-.207.495.495 0 00-.558.09l-.465.459-.292-.286.465-.46a.47.47 0 00.093-.543 2.341 2.341 0 01-.21-.675.48.48 0 00-.476-.4h-.62v-.379h.62c.235 0 .436-.17.476-.4.039-.252.109-.476.207-.672a.47.47 0 00-.09-.547l-.465-.46.292-.285.465.457a.48.48 0 00.577.078c.129-.073.403-.154.66-.193a.48.48 0 00.407-.47v-.611h.384v.61c0 .236.17.432.406.47.258.043.53.121.66.194a.48.48 0 00.578-.078l.465-.457.291.286-.465.46a.468.468 0 00-.09.546c.096.193.169.42.21.675.04.23.242.397.477.397h.619v.379zm.964-.477a.857.857 0 00-.862-.851v-.003h-.325a4.301 4.301 0 00-.073-.224l.303-.297a.838.838 0 00.254-.605c0-.23-.09-.443-.255-.605l-.425-.42a.903.903 0 00-1.23 0l-.302.297a5.058 5.058 0 00-.23-.068v-.327a.857.857 0 00-.863-.852h-.585a.857.857 0 00-.863.852v.327a3.91 3.91 0 00-.23.068l-.302-.297a.903.903 0 00-1.23 0l-.429.42a.834.834 0 00-.254.605c0 .23.09.445.252.605l.305.3c-.028.075-.05.148-.073.224h-.333a.857.857 0 00-.863.851v.577c0 .47.387.852.863.852h.333c.023.078.048.151.073.224l-.303.3a.847.847 0 000 1.21l.429.42a.903.903 0 001.23 0l.302-.3c.073.025.149.048.227.07v.328c0 .47.387.851.863.851h.585c.476 0 .863-.38.863-.851v-.328c.079-.02.154-.045.227-.07l.305.3a.903.903 0 001.23 0l.426-.42a.847.847 0 000-1.21l-.306-.3c.028-.073.05-.149.073-.224h.33a.857.857 0 00.863-.852v-.577z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSettingsCloudRegular;
