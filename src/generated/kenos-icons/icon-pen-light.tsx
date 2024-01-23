/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconPenLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M15.96 3.001a3.157 3.157 0 014.614 0c1.271 1.336 1.271 3.509 0 4.844l-9.116 9.572a.348.348 0 01-.245.104.332.332 0 01-.244-.104.373.373 0 010-.51l8.188-8.589-3.643-3.825L4.82 15.721l3.887 4.078a.385.385 0 01.088.349.36.36 0 01-.244.256l-5.64 1.584a.335.335 0 01-.332-.092.385.385 0 01-.089-.35l1.512-5.922v-.004a.289.289 0 01.008-.02.283.283 0 00.008-.02v-.004a.145.145 0 01.015-.036s.004-.004.004-.008a.075.075 0 00.01-.014.042.042 0 01.009-.014l.007-.008c.008-.012.016-.02.027-.032L15.96 3.001zM4.511 16.418L3.308 21.13l4.488-1.263-3.285-3.449zM20.09 7.336c1.004-1.055 1.004-2.77 0-3.825a2.493 2.493 0 00-3.643 0l-.444.465L19.647 7.8l.443-.465z" /><path fill="currentColor" d="M9.839 19.33c.38 0 .687-.324.687-.722 0-.399-.308-.722-.687-.722-.38 0-.688.323-.688.722 0 .398.308.721.688.721z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPenLight;
