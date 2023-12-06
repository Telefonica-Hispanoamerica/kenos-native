/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconCreditCardVisaLight = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M3.789 5h16.406c.989 0 1.789.843 1.805 1.888v9.856c0 1.045-.8 1.888-1.789 1.888a.363.363 0 01-.356-.367c0-.203.16-.368.356-.368.593 0 1.069-.517 1.069-1.153V9.785H2.72v6.963c0 .636.476 1.153 1.069 1.153h12.137c.196 0 .356.165.356.368 0 .202-.16.367-.356.367H3.789C2.8 18.636 2 17.793 2 16.748v-9.86C2 5.843 2.8 5 3.789 5zM2.712 6.884V9.05h18.552V6.884c0-.636-.476-1.153-1.069-1.153H3.781c-.593 0-1.069.517-1.069 1.153z" /><path fill="currentColor" d="M18.77 18.265a.724.724 0 01-.712.735.724.724 0 01-.712-.735c0-.407.319-.736.712-.736.394 0 .713.33.713.736zM4.145 12.868c0-.276.16-.5.356-.5h4.998c.196 0 .356.224.356.5 0 .275-.16.5-.356.5H4.501c-.196 0-.356-.225-.356-.5zm7.135 0c0-.276.16-.5.356-.5h2.5c.197 0 .357.224.357.5 0 .275-.16.5-.356.5h-2.501c-.196 0-.356-.225-.356-.5zm8.203-.5H16.27c-.196 0-.356.224-.356.5 0 .275.16.5.356.5h3.213c.196 0 .356-.225.356-.5 0-.276-.152-.5-.356-.5z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconCreditCardVisaLight;
