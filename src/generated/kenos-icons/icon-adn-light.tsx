/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconAdnLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.853 7.412C14.74 8.5 16.51 9.72 16.51 11.997c0 2.278-1.77 3.497-3.66 4.588 1.887 1.089 3.657 2.308 3.657 4.586 0 .226-.201.412-.45.412-.25 0-.451-.186-.451-.412 0-1.98-1.72-3.03-3.607-4.1-1.885 1.07-3.607 2.12-3.607 4.1 0 .226-.202.412-.451.412-.25 0-.451-.186-.451-.412 0-2.275 1.773-3.497 3.66-4.586-.904-.523-1.773-1.08-2.442-1.765a.421.421 0 01-.17-.19c-.628-.707-1.045-1.544-1.045-2.633 0-2.275 1.772-3.497 3.66-4.585-1.89-1.088-3.66-2.308-3.66-4.585 0-.227.201-.412.45-.412.25 0 .452.185.452.412 0 1.98 1.722 3.03 3.606 4.1 1.885-1.07 3.607-2.12 3.607-4.1 0-.227.202-.412.451-.412.25 0 .451.185.451.412 0 2.275-1.77 3.497-3.657 4.585zm-2.795 1.713h3.881c-.571-.436-1.243-.832-1.94-1.227-.695.392-1.367.788-1.941 1.227zm-.882.824a3.153 3.153 0 00-.74 1.65h7.127a3.122 3.122 0 00-.739-1.65H9.176zm2.823 6.148c.683-.387 1.344-.772 1.91-1.2H10.09c.566.425 1.227.813 1.908 1.2zM9.2 14.073h5.598a3.14 3.14 0 00.759-1.647H8.442a3.13 3.13 0 00.759 1.647z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconAdnLight;