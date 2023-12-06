/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconBlogRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M5.932 7.492h9.563c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56H5.932a.562.562 0 00-.56.56c0 .308.251.56.56.56zm0 3.401h9.563c.308 0 .56-.252.56-.56a.562.562 0 00-.56-.56H5.932a.562.562 0 00-.56.56c0 .308.251.56.56.56z" /><path fill="currentColor" d="M5.876 21.837h9.619c1.213 0 2.162-.353 2.818-1.045.616-.653.93-1.563.93-2.703v-3.107c0-.02-.002-.039-.003-.058 1.044-.93 1.933-1.725 2.064-1.855a1.85 1.85 0 00.577-1.328 1.975 1.975 0 00-.568-1.375c-.512-.51-1.334-.735-2.07-.43v-3.96c0-2.38-1.401-3.803-3.748-3.803h-9.62c-2.347 0-3.747 1.423-3.747 3.804v12.112c0 1.14.313 2.05.93 2.703.655.694 1.605 1.045 2.818 1.045zm12.246-11.03c-.575.517-1.582 1.411-2.66 2.366h-9.53a.562.562 0 00-.56.56c0 .308.251.56.56.56h8.263l-1.3 1.149a.562.562 0 00-.16.24l-.298.891H5.932a.562.562 0 00-.56.56c0 .309.251.56.56.56h6.13l-.287.855a.56.56 0 00.706.711l2.87-.949a.526.526 0 00.197-.112c.25-.221 1.38-1.22 2.574-2.281v2.172c0 1.742-.885 2.627-2.627 2.627h-9.62c-1.742 0-2.627-.885-2.627-2.627V5.977c0-.852.213-1.513.63-1.967.437-.476 1.11-.717 1.998-.717h9.619c.888 0 1.56.241 1.997.717.417.454.63 1.115.63 1.967v4.83zm-4.927 7.038l.557-1.661.148-.13c1.165-1.03 5.208-4.601 5.505-4.895.46-.46.964-.157 1.12 0a.853.853 0 01.241.58c0 .196-.084.375-.243.535-.227.224-3.46 3.09-5.63 5.01l-1.698.561z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBlogRegular;
