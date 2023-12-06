/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconArrowDownLeftRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M15.334 22H2V8.603c0-.868.492-1.612 1.288-1.936a2.196 2.196 0 012.371.476l2.768 2.768 7.71-7.704a.722.722 0 011.013 0 .722.722 0 010 1.012l-8.22 8.213c-.504.503-.892.12-1.524-.513l-2.76-2.76a.73.73 0 00-.807-.172.64.64 0 00-.404.616v11.969h11.91c.396 0 .56-.292.608-.42a.794.794 0 00-.16-.86l-3.716-3.716 8.703-8.729a.722.722 0 011.012 0 .722.722 0 010 1.012l-7.71 7.713 2.71 2.712c.633.632.817 1.58.477 2.42-.34.792-1.076 1.296-1.936 1.296z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconArrowDownLeftRegular;
