/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconLoudspeakerRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M15.99 18.573a.952.952 0 01-.264-.04L10.27 16.89l-.199.632a.801.801 0 01-.403.482.782.782 0 01-.625.056l-2.269-.711a.822.822 0 01-.538-1.028l.186-.59-3.21-.966a.535.535 0 01-1.056-.122V9.36a.535.535 0 011.055-.122l12.515-3.769a.894.894 0 01.802.143.98.98 0 01.392.79v11.201a.98.98 0 01-.39.788.904.904 0 01-.54.182zm-12.731-4.91l12.59 3.792V6.55L3.26 10.34v3.322zm4.103 2.728l1.748.549.07-.224-1.748-.55-.07.225zm11.687-8.185a.545.545 0 01-.387-.933l1.546-1.546a.548.548 0 01.773.773l-1.546 1.546a.545.545 0 01-.386.16zm.067 4.109a.545.545 0 110-1.092H21.3a.545.545 0 110 1.092h-2.185zm1.084 5.431a.545.545 0 00.773 0 .548.548 0 000-.773l-1.507-1.507a.548.548 0 00-.773.773l1.507 1.507z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconLoudspeakerRegular;
