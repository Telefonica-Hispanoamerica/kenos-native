/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconMobileUserFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M5.349 5.388C5.443 3.504 6.975 2 8.849 2h6.316c1.873 0 3.405 1.504 3.5 3.388H5.348zm0 13.224C5.443 20.496 6.975 22 8.849 22h6.316c1.873 0 3.405-1.504 3.5-3.388H5.348zm5.076-8.395c0-.887.71-1.61 1.582-1.61.871 0 1.58.723 1.58 1.61 0 .887-.709 1.61-1.58 1.61-.872 0-1.582-.723-1.582-1.61zm8.248-3.759v11.084H5.34V6.458h13.333zm-4.852 5.688a2.7 2.7 0 00.813-1.934c0-1.477-1.18-2.68-2.632-2.68-1.451 0-2.633 1.203-2.633 2.68 0 .76.315 1.445.814 1.934-1.15.462-1.87 1.377-1.87 2.534v1.07c0 .297.234.534.526.534a.528.528 0 00.526-.534v-1.07c0-1.052 1.083-1.788 2.633-1.788s2.632.736 2.632 1.788v1.07c0 .297.234.534.526.534a.536.536 0 00.534-.534v-1.07c0-1.157-.714-2.072-1.869-2.534z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMobileUserFilled;
