/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconCreditBalancePoundRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M17.88 7.828c0 3.216-2.496 5.827-5.571 5.827-3.075 0-5.57-2.61-5.57-5.827S9.233 2 12.308 2s5.57 2.61 5.57 5.828zm3.132 8.13c-.227-.727-.87-1.212-1.596-1.212-.298 0-.592.084-.842.238l-2.192 1.338c-.24-.704-.878-1.212-1.636-1.212H9.715l-.713-.448a1.982 1.982 0 00-1.043-.28H3.605c-.383 0-.695.327-.695.728 0 .4.312.727.695.727h2.09v3.64c0 .402-.312.728-.695.728H3.605c-.383 0-.695.326-.695.727 0 .401.312.728.695.728h1.39c.616 0 1.173-.285 1.551-.728h2.197l3.837.998a2.002 2.002 0 001.565-.224l6.078-3.669a1.82 1.82 0 00.789-2.079zm-1.489.82l-6.074 3.67a.681.681 0 01-.53.074l-4.006-1.04H7.086v-3.64h.869c.138 0 .254.027.338.079l1.034.648h5.415c.191 0 .347.163.347.363 0 .2-.156.364-.347.364h-3.828c-.384 0-.695.326-.695.727 0 .401.311.727.695.727h3.828a1.68 1.68 0 001.087-.41l3.445-2.102a.246.246 0 01.138-.038c.094 0 .223.056.272.215.044.126-.031.284-.16.364zM12.31 3.456c-2.304 0-4.18 1.962-4.18 4.372s1.876 4.373 4.18 4.373 4.18-1.962 4.18-4.373c0-2.41-1.877-4.372-4.18-4.372zm-1.395 6.009a.532.532 0 00-.522.545c0 .303.237.55.522.546h2.959c.29 0 .521-.243.521-.546a.532.532 0 00-.521-.545H12.12a1.25 1.25 0 00.014-.182v-.909h.869a.53.53 0 00.521-.545.532.532 0 00-.521-.546h-.87v-.909c0-.298.232-.546.522-.546.143 0 .28.061.379.173.2.22.53.228.74.023a.569.569 0 00.022-.774 1.526 1.526 0 00-1.14-.517c-.865 0-1.57.737-1.57 1.641v.909a.532.532 0 00-.52.545c0 .304.23.546.52.546v.91a.175.175 0 01-.173.18z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconCreditBalancePoundRegular;
