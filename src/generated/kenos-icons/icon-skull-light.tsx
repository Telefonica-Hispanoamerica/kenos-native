/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconSkullLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.021 11.125c0-8.226-6.88-8.924-8.644-8.96-.269-.009-.58-.009-.857-.009-1.812.009-8.546.63-8.546 8.922 0 4.185 1.734 6.428 3.678 7.61v.648c0 .823.24 1.462.722 1.882.454.412 1.118.622 1.967.622h5.341c.846 0 1.502-.21 1.956-.622.473-.418.703-1.059.703-1.88v-.655c1.947-1.193 3.68-3.42 3.68-7.558zm-4.14 6.827s-.411.252-.414.246v1.137c0 .578-.137.995-.42 1.247-.286.26-.748.395-1.367.395H9.344c-.432 0-1.02-.067-1.393-.406-.285-.247-.428-.661-.428-1.233V18.21l-.415-.252c-2.168-1.319-3.266-3.633-3.266-6.88 0-3.215 1.073-5.515 3.188-6.834 1.748-1.09 3.722-1.218 4.493-1.221h.028c.26 0 .546 0 .806.008 1.83.04 7.793.74 7.793 8.098 0 3.196-1.1 5.493-3.269 6.824zm-6.355-6.941a4 4 0 00-.026-.463c-.201-1.747-1.563-2.4-2.773-2.428l-.249-.003c-1.227.011-2.597.675-2.76 2.504-.01.12-.016.244-.016.376 0 2.1 1.443 2.873 2.793 2.893h.24c1.29-.022 2.79-.79 2.79-2.88zm-.869.002c0 1.79-1.353 2.006-1.933 2.017l-.21.003c-.582-.008-1.935-.227-1.935-2.034 0-.106.003-.207.011-.3.137-1.534 1.375-1.71 1.902-1.716l.218.002c.524.012 1.76.2 1.928 1.664.014.112.02.236.02.364zm6.787 2.017l-.215.003c-.583-.008-1.936-.227-1.936-2.034 0-.106.006-.207.014-.3.134-1.534 1.375-1.71 1.9-1.716h.002l.218.002c.524.012 1.76.2 1.928 1.661.014.115.022.238.022.367 0 1.79-1.356 2.006-1.933 2.017zm2.802-2.02c0-.162-.009-.313-.026-.462-.201-1.747-1.563-2.4-2.773-2.428l-.25-.003c-1.226.011-2.596.672-2.758 2.504-.011.12-.017.244-.017.376 0 2.1 1.442 2.873 2.793 2.893h.24c1.29-.022 2.79-.79 2.79-2.88zm-7.9 3.908a.43.43 0 01.233.563l-.364.854a.439.439 0 01-.58.208.432.432 0 01-.221-.54l.364-.855a.437.437 0 01.568-.23zm1.972 1.084l-.364-.854a.443.443 0 00-.569-.235c0 .002-.002.002-.002.002a.432.432 0 00-.23.566l.364.854a.436.436 0 00.569.23h.003a.43.43 0 00.23-.563z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSkullLight;