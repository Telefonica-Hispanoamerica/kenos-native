/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconNonBinaryToiletRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M4.6 9.205c0-.44.36-.8.8-.8h7.198c.44 0 .8.36.8.8 0 .44-.36.8-.8.8H5.4c-.44 0-.8-.36-.8-.8zm14.796-5.598v18.394h-9.198v-4.838c-2.279-.24-5.598-1.6-5.598-5.558v-.8h9.597V3.607c0-.88.72-1.6 1.6-1.6h1.999c.88 0 1.6.72 1.6 1.6zm-1.6 0h-2v8.797H6.28c.56 3.16 4.558 3.2 4.718 3.2h4.399c.44 0 .8.36.8.8 0 .439-.36.799-.8.799h-3.6v3.199h5.999V3.607z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconNonBinaryToiletRegular;
