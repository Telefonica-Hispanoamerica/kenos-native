/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconChipDeviceRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M10.568 17.463c-.577 0-.956.305-.956.958 0 .314.087.546.241.706.168.17.412.252.715.252.302 0 .546-.081.714-.252.154-.157.24-.392.24-.706-.002-.655-.377-.958-.954-.958zm7.972-3.013h-3.376a.28.28 0 01-.28-.281v-3.543a.28.28 0 01.28-.28h3.376a.28.28 0 01.28.28v3.543a.28.28 0 01-.28.28zm-.28-1.124h-.57v.563h.57v-.563zm0-.56v-.737h-2.815l.001.737h2.813zm0-1.297v-.563h-.57v.563h.57zm-1.13 0v-.563h-.562v.563h.563zm-1.123 0v-.563h-.563v.563h.563zm-.56 1.857v.563h.56v-.563h-.56zm1.12 0v.563h.564v-.563h-.563z" /><path fill="currentColor" d="M14.17 21.847H6.985c-2.188 0-3.25-1.076-3.25-3.291V5.446c0-2.185 1.093-3.291 3.25-3.291h7.185c1.106 0 1.91.272 2.454.832.535.549.795 1.353.795 2.46v1.22h1.706c.695 0 1.143.449 1.143 1.143v7.017c-.003.692-.451 1.14-1.143 1.14H17.42v2.589c0 2.215-1.064 3.29-3.25 3.29zm2.129-16.4c0-.799-.157-1.35-.476-1.679-.32-.327-.863-.493-1.653-.493H6.985c-1.532 0-2.129.608-2.129 2.171v13.11c0 .806.157 1.358.48 1.686.321.328.86.484 1.649.484h7.185c.79 0 1.328-.16 1.65-.484.322-.325.479-.88.479-1.686v-2.589h-1.74c-.694 0-1.143-.448-1.143-1.143V8.722c0-.132.062-.258.168-.336l2.185-1.633a.433.433 0 01.252-.084h.278V5.446zm-2.042 9.378c0 .235.067.302.302.302h4.566c.235 0 .303-.067.303-.303V7.81c0-.235-.068-.302-.303-.302h-2.963L14.257 8.93v5.894z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconChipDeviceRegular;
