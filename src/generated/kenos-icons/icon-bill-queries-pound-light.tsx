/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconBillQueriesPoundLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.435 19.407a.74.74 0 11-1.479 0 .74.74 0 011.48 0zm-.369-2.218v-4.447a.37.37 0 00-.74 0v4.447a.37.37 0 00.74 0z" /><path fill="currentColor" d="M19.066 3.854v.018a3.702 3.702 0 01-.375 7.386 3.704 3.704 0 01-3.7-3.702 3.707 3.707 0 013.33-3.684v-.018a1.11 1.11 0 00-1.108-1.11H6.848a1.11 1.11 0 00-1.109 1.11V21.26h12.957a.37.37 0 010 .739H5V3.854C5 2.83 5.834 2 6.852 2h10.361c1.023 0 1.853.834 1.853 1.854zm-3.33 3.707a2.963 2.963 0 002.96 2.962 2.963 2.963 0 000-5.926 2.963 2.963 0 00-2.96 2.964z" /><path fill="currentColor" d="M9.719 18.298a.37.37 0 000 .74h4.628a.37.37 0 000-.74h-3.345c.128-.218.2-.47.2-.74v-1.853h1.852a.37.37 0 000-.74H11.2v-1.668a1.295 1.295 0 012.108-1.005.37.37 0 00.522-.057.37.37 0 00-.057-.522 2.029 2.029 0 00-1.28-.455 2.04 2.04 0 00-2.036 2.039v1.668h-.37a.37.37 0 000 .74h.37v1.853c0 .413-.323.74-.74.74zm9.361-8.765a.37.37 0 11-.74 0 .37.37 0 01.74 0zm-.294-4.381h-.076c-.46 0-.886.247-1.113.645a.37.37 0 00.137.507.369.369 0 00.507-.137.55.55 0 01.474-.275h.076c.194 0 .379.09.497.246.11.143.133.45.01.574l-.408.408c-.34.346-.54.82-.54 1.303a.37.37 0 00.74 0c0-.289.118-.578.321-.782l.408-.408c.422-.421.37-1.142.057-1.55a1.397 1.397 0 00-1.09-.53z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBillQueriesPoundLight;
