/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconBalanceLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M7.896 19.345c0 .154.126.28.28.28a.28.28 0 00.28-.28V7.639a.28.28 0 00-.28-.28.28.28 0 00-.28.28v11.706zm6.812 0c0 .154.126.28.28.28a.28.28 0 00.28-.28v-.372c.97-.1 1.56-.674 1.566-1.547 0-1.045-.849-1.37-1.56-1.46h-.006v-1.665c.249.035.49.12.742.257l.003.002a.462.462 0 00.202.057c.18 0 .322-.146.322-.323 0-.12-.07-.232-.199-.31a2.461 2.461 0 00-1.07-.336v-.368a.281.281 0 00-.28-.28.281.281 0 00-.28.28v.373c-.854.103-1.39.67-1.39 1.501 0 .544.247 1.22 1.39 1.416v1.75a2.402 2.402 0 01-.95-.393.427.427 0 00-.224-.072.334.334 0 00-.336.33c0 .126.053.224.163.3.4.278.864.445 1.347.491v.369zm.56-1.017v-1.68c.782.146.894.488.894.809 0 .478-.336.797-.894.871zm-.56-2.452c-.627-.161-.717-.485-.717-.76 0-.433.268-.728.717-.811v1.57zm-3.773 3.763a.281.281 0 01-.28-.28v-7.336a.28.28 0 01.28-.28.28.28 0 01.28.28v7.336a.28.28 0 01-.28.28z" /><path fill="currentColor" d="M5.716 21.838H18.28a.85.85 0 00.827-.826V7.903a.279.279 0 00-.082-.2l-5.462-5.462a.302.302 0 00-.092-.06.278.278 0 00-.107-.021H5.716c-.417 0-.826.409-.826.826v18.026c0 .43.395.826.826.826zM13.083 2.72v2.451c0 .883.286 1.636.832 2.18.546.543 1.3.831 2.18.831h2.45v12.83c0 .128-.137.266-.266.266H5.716c-.12 0-.266-.146-.266-.266V2.986c0-.106.16-.266.266-.266h7.367zm.56.398l4.507 4.504h-2.055c-1.488 0-2.451-.963-2.451-2.45V3.117z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBalanceLight;
