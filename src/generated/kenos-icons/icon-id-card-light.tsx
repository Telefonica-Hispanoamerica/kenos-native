/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconIdCardLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.837 5.935c0-.725-.563-1.316-1.254-1.316H3.406c-.692 0-1.255.59-1.255 1.316V18.07c0 .725.563 1.316 1.258 1.316h17.174c.692 0 1.255-.59 1.255-1.316V5.935zm-.82 0V18.07a.446.446 0 01-.434.453H3.406a.444.444 0 01-.434-.453V5.935a.442.442 0 01.434-.453h17.177c.246.005.44.21.434.453zm-10.025 7.46a.42.42 0 01.408.431.42.42 0 01-.408.431H4.328a.422.422 0 01-.412-.43.42.42 0 01.409-.432h6.667zm-7.073-3.017a.42.42 0 00.409.431h4.52a.42.42 0 00.41-.431.42.42 0 00-.41-.431h-4.52a.422.422 0 00-.41.43zm11.952-.995c.154-.156.434-.19.644-.19.21 0 .49.034.647.193.13.13.194.362.194.69 0 .327-.068.557-.194.686-.154.154-.436.187-.647.187-.21 0-.49-.033-.644-.187-.157-.16-.19-.463-.19-.687 0-.227.033-.529.19-.692zm-.571 1.995c.28.286.689.431 1.213.431.523 0 .932-.143 1.215-.431.297-.294.446-.734.446-1.305 0-.572-.152-1.014-.446-1.311-.283-.286-.692-.432-1.215-.432-.521 0-.933.146-1.213.432-.294.297-.443.74-.443 1.31 0 .572.149 1.012.443 1.306zm3.336 3.042h-4.241c.011-.219.067-.49.244-.684.224-.246.594-.3.862-.3h2.023c.269 0 .636.051.865.3.182.196.236.465.247.684zm.344-1.283c-.339-.37-.843-.566-1.456-.566h-2.02c-.613 0-1.117.193-1.456.566-.311.342-.477.812-.477 1.367v.577a.194.194 0 00.188.199h5.513a.194.194 0 00.187-.199v-.577c0-.555-.165-1.025-.479-1.367z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconIdCardLight;
