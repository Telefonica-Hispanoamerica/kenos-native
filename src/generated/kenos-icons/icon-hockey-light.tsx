/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconHockeyLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M13.431 18.636h3.571a1.43 1.43 0 011.427 1.432c0 .79-.64 1.432-1.427 1.432h-3.57a1.431 1.431 0 01-1.427-1.432c0-.79.64-1.432 1.426-1.432zm0 2.152h3.571a.716.716 0 000-1.432h-3.57a.716.716 0 000 1.432zm5.354-6.454a.716.716 0 000 1.432.716.716 0 000-1.432z" /><path fill="currentColor" d="M20.93 11.465h-7.142a.374.374 0 01-.32-.179c0-.004-.005-.004-.005-.004l-.635-1.102 4.128-7.138a.358.358 0 10-.617-.363l-3.927 6.78-3.896-6.78a.362.362 0 00-.49-.133.365.365 0 00-.132.491l6.598 11.476c.32.551.91.896 1.546.896h.603a.358.358 0 000-.717h-.603a1.08 1.08 0 01-.929-.537l-1.134-1.974h6.955c.197 0 .357.161.357.359v1.794c0 .198-.16.358-.357.358a.358.358 0 000 .716c.59 0 1.07-.481 1.07-1.074V12.54a1.07 1.07 0 00-1.07-1.075zm-9.67-.005c.1-.174.32-.233.489-.132a.37.37 0 01.132.495l-.283.496-2.09 3.631c-.316.551-.91.895-1.545.895H3.07c-.59 0-1.07-.482-1.07-1.074v-1.795c0-.592.48-1.074 1.07-1.074h7.156a.36.36 0 00.31-.179l.014-.027.426-.74.283-.495zm-3.302 4.665c.38 0 .736-.207.928-.537l1.134-1.974H3.065a.358.358 0 00-.356.358v1.795c0 .197.16.358.356.358h4.893z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconHockeyLight;
