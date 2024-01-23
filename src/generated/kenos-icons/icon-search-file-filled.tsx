/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconSearchFileFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.817 8.199V8.19c0-.014 0-.025-.003-.039v-.014l-.009-.05a.236.236 0 00-.005-.024.238.238 0 01-.006-.024.017.017 0 00-.003-.01l-.002-.004a.168.168 0 00-.01-.025l-.004-.011-.006-.012c-.005-.016-.014-.03-.022-.044l-.026-.042-.008-.012-.011-.015-.007-.01a.214.214 0 00-.004-.005l-.009-.012c-.01-.014-.022-.025-.033-.036l-5.463-5.462a.43.43 0 00-.018-.017l-.018-.017-.011-.008-.016-.011a.784.784 0 01-.015-.012l-.011-.008-.042-.025-.023-.011a.223.223 0 01-.022-.012l-.011-.005-.021-.009-.016-.005h-.01a.197.197 0 00-.048-.011l-.05-.009h-.015l-.02-.001-.02-.002h-.008c-2.193-.002-4.612 0-5.823 0h-.686c-.712 0-1.152.44-1.152 1.149v2.28a5.803 5.803 0 00-2.537 9.168l-3.264 3.386a.562.562 0 00.807.78l3.25-3.376a5.776 5.776 0 001.747.989v4.114c0 .715.443 1.16 1.154 1.16h11.398c.684 0 1.129-.445 1.129-1.132.003-.442.003-8.235.003-12.495zm-1.913-.56h-1.379c-.652 0-1.198-.205-1.582-.589-.384-.384-.586-.933-.586-1.585V4.087L18.13 5.86l1.774 1.778zm-6.533.128a4.68 4.68 0 11-6.619 6.62 4.68 4.68 0 016.62-6.62z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSearchFileFilled;
