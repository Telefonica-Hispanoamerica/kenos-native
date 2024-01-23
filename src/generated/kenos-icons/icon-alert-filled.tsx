/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconAlertFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.892 19.877L12.656 3.375A.804.804 0 0012 3c-.256 0-.545.149-.656.374L2.108 19.877a.702.702 0 000 .75c.145.225.363.374.62.374h18.545a.702.702 0 00.619-.375c.144-.22.144-.484 0-.748zM11.455 9.226c0-.297.256-.561.545-.561.289 0 .545.264.545.561v5.776c0 .298-.256.562-.545.562-.289 0-.545-.264-.545-.562V9.227zm-.363 8.44c0-.522.4-.935.908-.935.507 0 .908.413.908.936 0 .523-.4.936-.908.936-.507 0-.908-.413-.908-.936z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconAlertFilled;
