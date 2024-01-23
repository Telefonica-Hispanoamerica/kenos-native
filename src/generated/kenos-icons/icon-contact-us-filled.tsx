/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconContactUsFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.038 5.114a5.71 5.71 0 014.236-1.609c3.02.105 5.522 2.662 5.518 5.707v.35c0 .88-.799 1.65-1.734 1.65h-4.164a.537.537 0 01-.52-.524c0-.278.244-.524.52-.524h4.164c.348 0 .695-.283.695-.597v-.351c0-2.488-2.05-4.594-4.515-4.662-1.287-.036-2.538.42-3.473 1.33a4.386 4.386 0 00-1.354 3.19.537.537 0 01-.52.525.537.537 0 01-.52-.524 5.49 5.49 0 011.667-3.96zm-.38 8.38c0-2.104-1.702-3.786-3.752-3.786s-3.752 1.714-3.72 3.783c0 1.121.487 2.101 1.25 2.803C3.32 16.959 2 18.572 2 20.5h11.844c0-1.924-1.35-3.537-3.436-4.202a3.759 3.759 0 001.25-2.803z" /><path fill="currentColor" d="M18.527 11.914H15.89c-.66 0-1.215-.56-1.215-1.226 0-.665.556-1.226 1.215-1.226h3.888v-.178c0-2.068-1.666-3.786-3.752-3.786s-3.68 1.722-3.68 3.79c0 1.122.483 2.106 1.25 2.803a5.163 5.163 0 00-1.007.42c.068.314.104.629.104.984 0 .843-.207 1.682-.623 2.383l.623.42H22c-.036-1.932-1.355-3.719-3.473-4.384z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconContactUsFilled;
