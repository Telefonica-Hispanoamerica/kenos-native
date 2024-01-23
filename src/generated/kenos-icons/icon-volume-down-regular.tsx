/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconVolumeDownRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M15.333 22a.734.734 0 01-.37-.1l-9.459-5.452H2.74a.74.74 0 01-.74-.74V8.297a.74.74 0 01.74-.74h2.764l9.46-5.457a.74.74 0 011.11.64v18.52a.74.74 0 01-.74.74zM3.48 14.964h2.224a.73.73 0 01.37.1l8.52 4.916V4.02l-8.52 4.917a.734.734 0 01-.37.1H3.48v5.927zm17.78-3.704a.74.74 0 010 1.48h-3.703a.74.74 0 010-1.48h3.703z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconVolumeDownRegular;
