/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconChatRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12 14.512l-.4-.296C7.38 11.12 7.344 8.728 7.372 8.284a2.656 2.656 0 012.652-2.616c.828 0 1.524.448 1.972.836.448-.388 1.144-.836 1.972-.836a2.65 2.65 0 012.652 2.616c.036.448 0 2.84-4.22 5.932l-.4.296zm-1.972-7.488c-.712 0-1.292.58-1.292 1.292l-.004.084S8.648 10.22 12 12.816c3.313-2.566 3.27-4.373 3.268-4.435V8.38l-.004-.068c0-.712-.58-1.292-1.292-1.292-.616 0-1.26.644-1.436.868L12 8.572l-.536-.68c-.188-.24-.824-.868-1.436-.868z" /><path fill="currentColor" d="M2.68 3h18.64a.68.68 0 01.68.68v12.644a.68.68 0 01-.68.68H10.528L6.512 21.44a.686.686 0 01-.748.18.675.675 0 01-.436-.632v-3.98H2.68a.68.68 0 01-.68-.68V3.68A.68.68 0 012.68 3zm7.548 12.652H20.64V4.36H3.36v11.288h2.648a.68.68 0 01.68.68v2.9l3.036-3.352a.673.673 0 01.504-.224z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconChatRegular;
