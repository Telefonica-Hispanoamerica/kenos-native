/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconWorkflowLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.782 4.73h-6.428l-.036 4.361h2.537v5.818H9.14V9.09h2.464L11.64 4h7.854v2.476l.466-.545c.142-.144.357-.181.498-.037.142.107.179.363.037.507l-1.358 1.601-1.32-1.563c-.143-.145-.106-.363.036-.508.141-.144.356-.107.498.038l.43.507V4.73zM10.64 17.6l1.321-1.601 1.358 1.605c.142.144.105.363-.037.507-.141.145-.356.108-.498-.037l-.466-.544V20H4.5v-5.091H2V9.09h5.714v5.818h-2.5v4.365h6.39v-1.745l-.43.507a.322.322 0 01-.283.144c-.073 0-.141 0-.214-.074-.142-.107-.179-.363-.037-.507zm5.646-2.69h2.5v2.182c0 .22.142.363.357.363s.356-.144.356-.363V14.91H22V9.09h-5.714v5.818zm.713-5.092h4.288v4.366h-4.288V9.817zm-14.286 0v4.366h4.288V9.817H2.713zm11.429 4.366V9.817H9.854v4.366h4.288zm4.283 5.087c0-.4.32-.726.713-.726a.72.72 0 01.713.726c0 .4-.32.726-.713.726a.72.72 0 01-.713-.726z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconWorkflowLight;
