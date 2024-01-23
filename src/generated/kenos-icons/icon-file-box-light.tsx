/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconFileBoxLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.825 13.185a.136.136 0 00-.002.02.604.604 0 00.014.075v7.3c0 .695-.563 1.258-1.252 1.258H3.406a1.257 1.257 0 01-1.255-1.258v-7.3c0-.023.003-.047.006-.07l.005-.048a.229.229 0 00-.002-.028c-.002-.016-.004-.031 0-.047l1.638-9.748c-.005-.625.558-1.188 1.247-1.188l13.899.017c.655 0 1.204.499 1.336 1.216l1.53 9.647v.011l.016.115c.002.01 0 .019 0 .028zM4.608 3.406l-1.448 8.65c.078-.017.157-.025.24-.025h6.32c.224 0 .409.185.409.412v.888c0 .969.79 1.759 1.762 1.759h.196c.972 0 1.762-.79 1.762-1.76v-.887c0-.23.182-.412.409-.412h6.316c.065 0 .126.014.186.028l.06.014-1.355-8.552c-.053-.308-.274-.532-.527-.532L5.04 2.972a.434.434 0 00-.431.434zM21.01 20.58h.003v-7.3a.29.29 0 00-.005-.049.549.549 0 01-.003-.02L21 13.176a.429.429 0 00-.42-.325h-5.91v.476c0 1.423-1.16 2.58-2.583 2.58h-.196a2.582 2.582 0 01-2.58-2.58v-.476H3.4a.437.437 0 00-.435.428v7.3a.44.44 0 00.435.437h17.176c.24 0 .434-.196.434-.437z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFileBoxLight;
