/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconRepeaterRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M19.497 4.143A2.143 2.143 0 0017.355 2H6.64a2.143 2.143 0 00-2.143 2.143v15.714A2.143 2.143 0 006.64 22h10.715a2.143 2.143 0 002.142-2.143V4.143zM17.355 20.57H6.64a.714.714 0 01-.714-.714V4.143a.714.714 0 01.714-.714h10.715a.714.714 0 01.714.714v15.714a.714.714 0 01-.714.714z" /><path fill="currentColor" d="M13.069 16h-.536v-.536a.536.536 0 00-1.071 0V16h-.536a.536.536 0 100 1.071h.536v.536a.536.536 0 101.071 0v-.536h.536a.536.536 0 000-1.071zm-1.047-6.19a3.746 3.746 0 00-2.66 1.118.579.579 0 00.396.986h.025a.586.586 0 00.429-.186 2.534 2.534 0 011.785-.771h.018a2.525 2.525 0 011.786.753.564.564 0 00.407.172.714.714 0 00.318-.086l.05-.025.043-.043a.578.578 0 000-.818 3.696 3.696 0 00-2.597-1.1z" /><path fill="currentColor" d="M11.998 7.755A5.503 5.503 0 007.969 9.5a.571.571 0 000 .81c.11.107.255.168.407.172a.572.572 0 00.407-.164 4.446 4.446 0 013.215-1.404 4.371 4.371 0 013.214 1.404.581.581 0 00.825-.818 5.5 5.5 0 00-4.04-1.746z" /><path fill="currentColor" d="M12.576 5.76a7.307 7.307 0 00-5.632 1.825.536.536 0 00-.2.386.571.571 0 00.136.421.625.625 0 00.421.225h.054a.528.528 0 00.385-.167 6.26 6.26 0 014.711-1.547 6.936 6.936 0 013.832 1.525.575.575 0 00.418.143.636.636 0 00.4-.186l.025-.032a.59.59 0 00-.071-.793 8.125 8.125 0 00-4.479-1.8z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconRepeaterRegular;
