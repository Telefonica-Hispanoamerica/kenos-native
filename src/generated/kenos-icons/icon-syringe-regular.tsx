/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconSyringeRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.998 2.332l2.658 2.678a.605.605 0 01.003.869.586.586 0 01-.723.1l-2.249 2.266 1.205 1.216a.627.627 0 010 .877.649.649 0 01-.434.182.649.649 0 01-.435-.182l-.179-.182-8.204 8.266a.628.628 0 01-.434.182.65.65 0 01-.438-.182l-.927-.933a.044.044 0 00-.008.013c-.002.004-.004.008-.008.012l-1.06 1.068a.607.607 0 01-.433.182.6.6 0 01-.437-.182l-.32-.323-3.372 3.398a.612.612 0 01-.868 0 .627.627 0 010-.877l3.37-3.389-.247-.25a.612.612 0 010-.876l1.058-1.076.013-.008a.044.044 0 00.013-.008l-.78-.785a.612.612 0 010-.877l8.197-8.266-.157-.156a.627.627 0 010-.877.6.6 0 01.871 0l1.101 1.106 2.25-2.274a.617.617 0 01.106-.712c.246-.24.63-.24.868 0zm-2.356 3.86l1.174 1.182 2.224-2.24-1.174-1.183-2.224 2.241zm-9.574 7.754l3.135 3.165 7.77-7.824-3.143-3.165-.608.62 1.126 1.106a.542.542 0 010 .762.51.51 0 01-.378.156.566.566 0 01-.378-.148l-1.123-1.123-1.272 1.28 2.045 2.059a.53.53 0 010 .759.544.544 0 01-.378.157.576.576 0 01-.378-.157l-2.034-2.059-1.272 1.272 1.207 1.19a.538.538 0 010 .76.518.518 0 01-.378.165.575.575 0 01-.375-.157l-1.207-1.2-.986 1 1.832 1.844a.54.54 0 010 .753.523.523 0 01-.378.157.523.523 0 01-.379-.157l-1.832-1.843-.616.628zm.885 2.694a.045.045 0 01.012-.008.061.061 0 00.016-.011l-.574-.586-.008.013a.044.044 0 01-.009.013l-.624.635.566.572.621-.628z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSyringeRegular;
