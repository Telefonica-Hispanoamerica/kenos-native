/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconFootballBallRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2 12C2 6.488 6.488 2 12 2s10 4.488 10 10-4.488 10-10 10S2 17.512 2 12zm17.67 1.147l.557 1.243c.2-.69.315-1.412.338-2.166l-.896.923zm.813-2.372a8.568 8.568 0 00-2.55-4.95l-2.414.48-.928 1.824 2.02 3.949 2.263.356 1.609-1.659zm-14.25 4.721l-.275 2.574a8.549 8.549 0 004.968 2.43l1.499-1.676-.197-2.386-3.93-1.997-2.066 1.055zM3.91 14.83a8.71 8.71 0 001.093 2.107l.16-1.5-1.253-.607zm10.6 5.366l-1.34-.599-.86.964a8.51 8.51 0 002.2-.365zm-1.875-4.758l2.962-2.975-1.91-3.739-4.15.663-.65 4.15 3.748 1.9zm4.223-10.494a8.4 8.4 0 00-1.974-1.014l.68 1.275 1.294-.26zm-3.39-1.384a8.134 8.134 0 00-1.463-.124 8.536 8.536 0 00-4 .992l-.31 2.363 1.563 1.558 4.378-.704.983-1.937-1.152-2.148zM6.643 6.551l.178-1.376a8.834 8.834 0 00-1.696 1.71l1.518-.334zm-2.3 1.609A8.413 8.413 0 003.436 12c0 .503.046.992.128 1.467l2.203 1.07 2.052-1.052.686-4.378L6.973 7.58l-2.628.58zm9.141 10.402l2.4 1.07a8.64 8.64 0 003.802-3.844l-1.042-2.308-2.198-.348-3.149 3.159.187 2.271z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFootballBallRegular;
