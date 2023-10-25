/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconTicketsRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M9.1 2L6.508 4.712l.408.464c.148.168.328.452.328.84a1.293 1.293 0 01-2.096 1.008l-.488-.38L2 9.424 14.7 22l2.7-2.672-.384-.472a1.273 1.273 0 01-.292-.8c0-.708.584-1.284 1.3-1.284.368 0 .64.156.808.292l.476.38L22 14.78 9.1 2zM4.848 8.416c.344.156.716.24 1.1.24 1.468 0 2.664-1.184 2.664-2.64 0-.424-.108-.84-.308-1.216l.824-.86 2.9 2.872-5.368 5.312-2.752-2.728.94-.98zm14.312 7.256a2.65 2.65 0 00-1.136-.256c-1.468 0-2.664 1.184-2.664 2.64 0 .392.088.776.26 1.124l-.916.908-7.076-7.008 5.368-5.312 7.076 7.008-.912.896z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTicketsRegular;
