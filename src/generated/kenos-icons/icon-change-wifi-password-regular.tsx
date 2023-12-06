/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconChangeWifiPasswordRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.001 18.175c-.406 0-.67.21-.67.663 0 .219.062.381.169.49.117.118.288.177.501.177.213 0 .384-.056.501-.176.11-.11.168-.272.168-.49 0-.454-.263-.664-.669-.664zm-4.714-3.112a.519.519 0 00.89.358c.83-.863 2.118-1.3 3.827-1.3 1.703 0 2.989.435 3.82 1.292a.52.52 0 00.734.01.52.52 0 00.012-.733c-1.034-1.064-2.569-1.605-4.563-1.605-2 0-3.541.543-4.575 1.616a.528.528 0 00-.145.362zm1.431 2.257a.519.519 0 00.89.359c.513-.532 1.323-.801 2.396-.801s1.877.269 2.39.798a.52.52 0 00.733.011.52.52 0 00.011-.734c-.717-.736-1.77-1.112-3.134-1.112-1.367 0-2.423.378-3.14 1.12a.516.516 0 00-.146.36z" /><path fill="currentColor" d="M7.242 9.37c-.59.123-1.078.369-1.457.735-.59.568-.89 1.403-.89 2.481v.066c0 .035.002.096.002.203l-.002 5.65c0 1.076.3 1.913.89 2.482.569.549 1.384.826 2.418.826h7.574c1.034 0 1.846-.277 2.417-.826.591-.566.897-1.4.91-2.476v-5.933c-.01-1.076-.319-1.908-.91-2.476-.571-.546-1.383-.824-2.417-.824H8.278V6.645c0-1.888 1.63-3.426 3.63-3.426h.185c2.003 0 3.63 1.538 3.63 3.426v.034a.52.52 0 001.037-.034c0-2.462-2.092-4.465-4.667-4.465h-.184c-2.575 0-4.667 2.003-4.667 4.465V9.37zm-1.308 3.247v-.053c.005-1.535.725-2.25 2.269-2.252h7.577c1.543 0 2.271.723 2.291 2.274V18.5c-.02 1.551-.748 2.274-2.291 2.274H8.203c-1.55 0-2.27-.72-2.27-2.269l.004-5.658c-.003-.123-.003-.19-.003-.23z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconChangeWifiPasswordRegular;
