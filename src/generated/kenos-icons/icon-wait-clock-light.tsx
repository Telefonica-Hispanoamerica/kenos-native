/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconWaitClockLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.587 17.962l-2.212.34a10.059 10.059 0 002.176-6.265C21.55 6.489 17.16 2 11.773 2 6.387 2 2 6.489 2 12c0 5.512 4.39 10 9.777 10 .996 0 1.992-.151 2.912-.454a.43.43 0 00.255-.491.417.417 0 00-.48-.262c-.883.262-1.77.417-2.69.417-4.98 0-9.038-4.153-9.038-9.247s4.059-9.247 9.041-9.247c4.983 0 9.038 4.153 9.038 9.247 0 2.19-.74 4.3-2.14 5.962l-.367-2.492c-.036-.188-.22-.34-.408-.303-.184.037-.332.225-.296.417l.516 3.662 3.579-.527c.184-.037.332-.225.296-.418-.04-.188-.228-.343-.408-.302z" /><path fill="currentColor" d="M12.141 11.845V4.827c0-.225-.148-.376-.368-.376s-.368.151-.368.376V12a.33.33 0 00.112.262l3.136 3.208a.387.387 0 00.255.114.38.38 0 00.256-.114.37.37 0 000-.528l-3.023-3.098zm5.157 8.574a.748.748 0 00-.61-.866.749.749 0 00-.851.629c-.067.412.206.8.61.865a.748.748 0 00.851-.628z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconWaitClockLight;
