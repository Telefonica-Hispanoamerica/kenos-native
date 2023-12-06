/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconMapRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M16.841 2.168l4.476.737c.303.05.527.311.527.62v16.954a.63.63 0 01-.221.48.646.646 0 01-.51.14l-4.328-.715-4.596 1.431a.648.648 0 01-.38-.003l-4.405-1.428-4.52.714a.628.628 0 01-.729-.619V3.527a.63.63 0 01.53-.622l4.669-.737a.063.063 0 01.024.002c.007.001.014.003.02.001.007 0 .013-.003.02-.005a.12.12 0 01.034-.006c.03 0 .055.007.081.015l.042.01a.13.13 0 00.033.002.14.14 0 01.04.004l4.356 1.412 4.549-1.415c.012-.005.025-.004.038-.004.01 0 .022 0 .032-.002a.76.76 0 00.034-.008.328.328 0 01.084-.014c.011 0 .022.003.032.006l.024.005c.005 0 .011 0 .017-.002.01 0 .019-.002.027 0zM3.416 4.062v15.686l3.411-.54V3.524l-3.411.538zm17.17 15.678V4.06l-3.218-.53v15.68l3.218.53zM16.11 3.642l-3.482 1.084v15.641l3.482-1.084V3.642zm-8.028.011v15.633l3.291 1.067V4.72l-3.29-1.067z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMapRegular;