/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconFamilyRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.688 10.14c.746-.549 1.907-.865 3.197-.865 2.067 0 3.682.87 4.107 2.215.096.307.38.503.682.503a.734.734 0 00.681-.954c-.407-1.29-1.482-2.276-2.932-2.797a3.658 3.658 0 001.089-2.607C19.512 3.63 17.912 2 15.94 2c-1.971 0-3.572 1.629-3.572 3.635 0 .996.398 1.9 1.034 2.555a5.52 5.52 0 00-1.55.768.732.732 0 00-.156 1.015.69.69 0 00.992.168zm3.243-6.683c1.18 0 2.145.977 2.145 2.183 0 1.205-.96 2.183-2.145 2.183s-2.145-.978-2.145-2.183c0-1.206.965-2.183 2.145-2.183z" /><path fill="currentColor" d="M11.815 12.547a.732.732 0 00-.156-1.015 5.355 5.355 0 00-1.445-.754 3.664 3.664 0 001.07-2.592c0-2.006-1.6-3.635-3.572-3.635-1.97 0-3.572 1.629-3.572 3.635 0 1.01.407 1.922 1.061 2.583C3.258 11.439 2 12.905 2 14.739v6.107c0 .4.32.726.713.726a.72.72 0 00.714-.726v-6.107c0-1.69 1.793-2.918 4.258-2.918 1.253 0 2.364.316 3.133.884.32.238.764.168.997-.158zM7.712 6.003c1.18 0 2.145.977 2.145 2.183 0 1.205-.96 2.183-2.145 2.183-1.18 0-2.145-.978-2.145-2.183 0-1.206.965-2.183 2.145-2.183z" /><path fill="currentColor" d="M14.504 16.005c0 .638-.22 1.229-.585 1.694 1.033.489 1.655 1.369 1.655 2.486v1.089c0 .4-.32.726-.713.726a.72.72 0 01-.714-.726v-1.09c0-1.07-1.24-1.451-2.305-1.451-1.08 0-2.341.377-2.341 1.452v1.089c0 .4-.32.726-.714.726a.72.72 0 01-.713-.726v-1.09c0-1.112.622-1.991 1.66-2.48a2.718 2.718 0 01-.59-1.699c0-1.503 1.203-2.727 2.68-2.727s2.68 1.224 2.68 2.727zM13.072 16a1.26 1.26 0 00-1.248-1.27c-.69 0-1.249.572-1.249 1.27 0 .699.558 1.271 1.249 1.271.686 0 1.248-.572 1.248-1.27zm7.085.084c.375-.47.599-1.066.599-1.717 0-1.504-1.203-2.728-2.68-2.728s-2.68 1.224-2.68 2.728c0 .675.242 1.289.64 1.764a4.02 4.02 0 00-.343.2l-.274.19a.734.734 0 00-.179 1.01c.224.331.673.41.993.182l.256-.181a2.907 2.907 0 011.582-.442c1.404 0 2.502.716 2.502 1.638 0 .4.32.726.713.726a.72.72 0 00.714-.726c.01-1.15-.718-2.113-1.843-2.644zm-3.33-1.717c0-.703.563-1.27 1.249-1.27.686 0 1.248.572 1.248 1.27 0 .698-.558 1.27-1.248 1.27s-1.249-.567-1.249-1.27z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFamilyRegular;
