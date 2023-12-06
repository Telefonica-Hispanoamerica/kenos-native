/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconCertificateFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.34 7.914c.03.073.047.154.047.238v12.305c0 .751-.636 1.384-1.386 1.384H6.009c-.737 0-1.386-.647-1.386-1.384l.039-3.297-.04-7.971v-5.65c0-.726.662-1.384 1.387-1.384h7.3c.227 0 .448.092.608.252l5.21 5.123a.826.826 0 01.213.384zm-1.65-.106l-.003-.003h.003v.003zm-.003-.003l-4.05-3.983v1.764c0 .659.212 1.213.613 1.608.406.4.983.61 1.664.61h1.773zm-2.91 5.042c0-1.77-.776-2.56-2.516-2.56s-2.515.79-2.515 2.56c0 1.767.776 2.557 2.515 2.557 1.74 0 2.516-.787 2.516-2.557zm.367 2.008a.11.11 0 00-.013-.019l-.007-.009c.291-.512.45-1.165.45-1.977 0-2.294-1.22-3.37-3.313-3.37-2.092 0-3.31 1.075-3.31 3.37 0 .691.123 1.257.333 1.73l-.015.019a.27.27 0 00-.047.069l-1.538 3.395a.614.614 0 00.079.638c.142.182.375.263.647.196l.935-.35.37 1a.595.595 0 00.53.325h.016a.6.6 0 00.53-.353l1.35-2.983 1.35 2.983c.095.21.3.347.53.353h.016c.221 0 .426-.123.55-.372l.35-.953.982.367a.602.602 0 00.597-.213.614.614 0 00.079-.639l-1.451-3.207zm-4.194-1.014l.076-.465-.32-.327a.68.68 0 01-.153-.684.65.65 0 01.515-.445l.42-.065.19-.409c.213-.462.942-.465 1.16 0l.194.415.42.064a.64.64 0 01.515.443.672.672 0 01-.154.683l-.314.325.076.462a.675.675 0 01-.266.656.634.634 0 01-.675.04l-.37-.208-.373.207a.627.627 0 01-.678-.04.669.669 0 01-.263-.652z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconCertificateFilled;
