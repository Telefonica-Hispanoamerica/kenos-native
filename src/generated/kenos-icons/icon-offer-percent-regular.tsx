/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconOfferPercentRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.147 12l2.19 2.383a.711.711 0 01.156.706.72.72 0 01-.54.481l-3.17.637.371 3.217a.703.703 0 01-.288.66.722.722 0 01-.718.074L14.21 18.81l-1.587 2.823a.711.711 0 01-1.245 0L9.792 18.81l-2.937 1.348a.721.721 0 01-.718-.074.723.723 0 01-.288-.66l.375-3.217-3.17-.637a.706.706 0 01-.54-.481.724.724 0 01.156-.706L4.86 12 2.67 9.617a.711.711 0 01-.156-.706.72.72 0 01.54-.481l3.17-.637-.375-3.217a.703.703 0 01.288-.66.712.712 0 01.718-.074L9.792 5.19l1.587-2.823a.712.712 0 011.245 0L14.21 5.19l2.937-1.348a.713.713 0 011.006.733l-.37 3.218 3.17.637c.256.05.461.234.54.481a.724.724 0 01-.156.706L19.147 12zm-2.292 2.933l2.57-.513-1.774-1.934a.72.72 0 010-.972l1.775-1.934-2.571-.518a.717.717 0 01-.567-.783l.302-2.608-2.384 1.095a.712.712 0 01-.92-.298l-1.284-2.287-1.286 2.283a.715.715 0 01-.92.298L7.414 5.666l.302 2.608a.71.71 0 01-.567.784l-2.57.518 1.774 1.934a.72.72 0 010 .971l-1.775 1.934 2.571.518a.717.717 0 01.567.784l-.302 2.607 2.384-1.095a.708.708 0 01.92.303l1.285 2.287 1.285-2.292a.715.715 0 01.92-.298l2.383 1.096-.302-2.608a.71.71 0 01.567-.784zm-2.621 1.004a.54.54 0 00.005-1.077h-2.951c.06-.17.091-.348.091-.536V12.71h1.61a.534.534 0 00.536-.536.534.534 0 00-.535-.536h-1.61v-1.43a1.072 1.072 0 011.742-.834.536.536 0 10.677-.834 2.155 2.155 0 00-1.35-.477 2.15 2.15 0 00-2.144 2.15v1.43h-.179a.533.533 0 00-.535.536c0 .298.238.536.535.536h.174v1.613a.528.528 0 01-.535.536.534.534 0 00-.536.536c0 .298.238.537.536.537h4.469z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconOfferPercentRegular;