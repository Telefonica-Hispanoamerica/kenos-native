/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconComputerUserFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M10.474 11.354c-1.406 0-2.518-.39-3.305-1.154-.818-.798-1.235-1.955-1.235-3.437 0-1.482.414-2.639 1.232-3.443.787-.77 1.9-1.162 3.306-1.162 1.406 0 2.52.39 3.31 1.16.824.803 1.241 1.96 1.241 3.442 0 1.482-.417 2.639-1.24 3.44-.788.764-1.902 1.154-3.309 1.154zm11.367 2.54c0-.652-.176-1.162-.53-1.51-.36-.358-.904-.54-1.613-.543l-9.036.006c-.703 0-1.244.182-1.608.54-.35.35-.53.858-.53 1.513v4.115c0 .658.18 1.168.53 1.521.367.367.908.552 1.61.552l9.037-.006c.706 0 1.247-.185 1.61-.552.354-.353.53-.865.53-1.52v-4.116zm-.092 7.356a.601.601 0 00-.61-.594H9.336a.603.603 0 00-.61.594.6.6 0 00.61.594h11.801c.336 0 .61-.266.61-.594zM8.29 12.23l.004-.005v.006H8.29zm-.472 1.707c0-.681.161-1.25.472-1.706h-.707c-1.703 0-3.112.512-4.073 1.487-.888.896-1.356 2.126-1.356 3.555v1.33c0 .577.485 1.048 1.081 1.048h4.98c-.26-.443-.397-.975-.397-1.6v-4.114z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconComputerUserFilled;
