/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconGarajeLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.416 10.714l-8.272-8.107c-.621-.608-1.672-.608-2.29 0L2.58 10.714c-.409.4-.535.969-.325 1.481.233.566.807.933 1.468.933h.63v7.275c0 .79.704 1.434 1.57 1.434h1.472c.003 0 .005 0 .007-.002l.007-.001.012.003h9.106c.004 0 .008 0 .011-.002l.011-.001c.005 0 .008.001.012.003l.01.003h1.385c.865 0 1.568-.645 1.568-1.435v-7.277h.745c.662 0 1.239-.367 1.471-.933.21-.512.084-1.078-.325-1.481zm-.434 1.17c-.081.194-.314.423-.712.423h-1.156a.408.408 0 00-.41.41V20.4c0 .339-.335.616-.747.616h-.975v-8.213a.41.41 0 00-.41-.409H7.397a.41.41 0 00-.408.41v8.212H5.926c-.412 0-.748-.274-.748-.613v-7.684a.41.41 0 00-.409-.409H3.724c-.395 0-.63-.23-.708-.423-.05-.117-.096-.356.137-.582l8.274-8.112c.3-.295.846-.295 1.146 0l8.272 8.106c.232.23.187.465.137.585zm-4.82 3.39H7.804v-2.062h8.356v2.062zm0 5.74H7.804v-2.051h8.356v2.05zm-8.357-2.87v-2.05h8.356v2.05H7.805z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconGarajeLight;