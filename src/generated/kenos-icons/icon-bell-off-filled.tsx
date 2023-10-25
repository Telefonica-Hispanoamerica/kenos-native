/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconBellOffFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M4.1 2.355l16.767 18.45a.593.593 0 01-.036.838l-.014.014a.623.623 0 01-.868-.05l-2.42-2.661h-2.424c-.036.543-.193 1.355-.77 1.988-.549.603-1.336.908-2.336.908-1.003 0-1.79-.305-2.339-.907-.577-.633-.731-1.446-.765-1.99H3.593a.615.615 0 01-.58-.4.59.59 0 01.19-.667c2.051-1.641 1.858-5.056 1.855-5.092l-.003-3.835c0-.355.022-.694.059-1.022l.034-.263a3.7 3.7 0 00.011-.103c.006-.051.011-.102.02-.152l.013.017c.084-.541.23-1.07.435-1.578L3.18 3.153a.593.593 0 01.037-.838l.014-.014a.629.629 0 01.868.054zm7.896 18.28c.639 0 1.101-.166 1.412-.502.325-.352.429-.837.46-1.19h-3.74c.028.35.129.837.454 1.19.31.34.773.502 1.414.502zm8.99-2.093a.595.595 0 00-.191-.67c-2.013-1.606-1.863-4.956-1.855-5.123v-3.8c0-2.191-.658-3.9-1.955-5.079-1.933-1.759-4.6-1.697-4.986-1.678-.375-.02-2.885-.073-4.798 1.518l13.658 15.028a.604.604 0 00.126-.196z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBellOffFilled;
