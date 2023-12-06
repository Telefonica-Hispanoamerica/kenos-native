/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconComputerUserLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M9.932 11.263c-1.418 0-2.535-.383-3.32-1.137C5.794 9.339 5.38 8.19 5.38 6.714S5.794 4.09 6.61 3.3c.784-.762 1.904-1.149 3.322-1.149 1.417 0 2.537.387 3.325 1.143.82.79 1.235 1.941 1.235 3.417 0 1.477-.415 2.625-1.238 3.412-.785.757-1.902 1.14-3.322 1.14zM6.198 6.711c0 1.247.33 2.197.98 2.821.628.605 1.555.91 2.754.91 1.201 0 2.128-.305 2.759-.91.655-.624.986-1.577.986-2.82 0-1.244-.33-2.2-.986-2.827-.63-.608-1.558-.916-2.76-.916-1.198 0-2.125.308-2.753.916-.65.63-.98 1.58-.98 2.826zm15.63 14.737a.408.408 0 00-.39-.428H8.865a.408.408 0 00-.409.409c0 .226.182.409.41.409H21.44a.406.406 0 00.389-.39zM3.04 18.714a.062.062 0 01-.062-.061l.003-1.381c0-1.21.373-2.238 1.076-2.972.767-.801 1.924-1.224 3.347-1.224h1.151c-.061.224-.098.47-.098.747v4.261c0 .213.023.423.067.63H3.041zm7.563-6.196s9.064-.005 9.059-.003c.479 0 .823.104 1.028.314.199.202.3.535.3.992v4.255c0 .459-.101.798-.3 1.005-.208.213-.552.32-1.028.32l-9.065.005c-.476 0-.82-.106-1.025-.32-.199-.206-.3-.543-.3-1.002v-4.26c0-.309.05-.555.14-.748h.02v-.045a.823.823 0 01.14-.2c.207-.206.552-.313 1.03-.313zm-1.76 7.014v-.064c.018.023.034.047.05.07.03.041.058.082.088.117.367.379.91.572 1.616.572l9.065-.006c.708 0 1.252-.193 1.616-.571.35-.364.53-.894.53-1.572v-4.26c0-.675-.177-1.205-.53-1.563-.364-.373-.908-.56-1.613-.56L10.6 11.7c-.706 0-1.25.188-1.613.56H7.399c-1.65 0-3.01.51-3.938 1.477-.849.888-1.3 2.112-1.3 3.537v1.379c0 .484.395.88.883.88h5.8z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconComputerUserLight;
