/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconRenovateDeviceChangeMobileRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.203 17.377a.7.7 0 01.789.615.728.728 0 01-.588.828l-3.723.559-.535-3.887c-.058-.396.21-.769.589-.824a.7.7 0 01.789.614l.214 1.55A8.746 8.746 0 0020.178 12c0-4.711-3.674-8.547-8.185-8.547a7.797 7.797 0 00-3.5.819.683.683 0 01-.927-.345.74.74 0 01.33-.968A9.153 9.153 0 0111.993 2c5.278 0 9.575 4.483 9.575 10 0 2.011-.566 3.934-1.618 5.568l1.253-.19zm-5.064 3.64a.746.746 0 00.325-.972.687.687 0 00-.932-.34 7.86 7.86 0 01-3.54.838c-4.51 0-8.184-3.836-8.184-8.548 0-1.745.513-3.426 1.449-4.841l.223 1.56a.705.705 0 00.686.623c.028 0 .056-.004.086-.008l.012-.001c.38-.056.642-.429.589-.824l-.535-3.888-3.723.559c-.379.056-.642.428-.588.824.053.396.41.675.789.615l1.253-.191A10.28 10.28 0 002.42 12c0 5.512 4.294 10 9.576 10a9.15 9.15 0 004.142-.982zM7.985 16.06V7.93c0-1.243.972-2.258 2.162-2.258h3.687c1.19 0 2.162 1.015 2.162 2.258v8.133c0 1.243-.972 2.258-2.162 2.258h-3.687c-1.19-.005-2.162-1.015-2.162-2.262zm1.048-.973h5.92V8.899h-5.92v6.188zm5.907 1.094H9.042c.058.586.53 1.047 1.105 1.047h3.687c.58 0 1.048-.46 1.106-1.047zm0-8.37c-.058-.588-.531-1.048-1.106-1.048h-3.687c-.575 0-1.047.46-1.105 1.047h5.898z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconRenovateDeviceChangeMobileRegular;
