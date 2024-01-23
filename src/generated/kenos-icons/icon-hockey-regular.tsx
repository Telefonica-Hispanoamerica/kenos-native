/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconHockeyRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.155 10.573h-6.461c-.03 0-.061 0-.092.004l-.265-.498 3.335-6.303a.729.729 0 00-.266-.97.658.658 0 00-.923.28l-2.93 5.54-3.37-6.263a.662.662 0 00-.927-.27.732.732 0 00-.257.974l5.956 11.076c.353.64 1.067 1.07 1.78 1.07h4.424c.736 0 1.359-.654 1.359-1.427V12c0-.773-.627-1.426-1.363-1.426zm-6.8 7.852h3.4c.936 0 1.702.8 1.702 1.788 0 .987-.766 1.787-1.702 1.787h-3.4c-.941 0-1.703-.8-1.703-1.787 0-.988.766-1.788 1.702-1.788zm0 2.144h3.4a.35.35 0 00.34-.356.349.349 0 00-.34-.357h-3.4c-.188 0-.34.16-.34.357 0 .196.152.356.34.356zm2.377-6.783a.735.735 0 01-.597-.352L14.365 12h5.79v1.787H15.73zm-4.08-2.048a.665.665 0 00-.932.26l-.396.719H3.828c-.735 0-1.358.653-1.358 1.426v1.604c0 .773.623 1.426 1.358 1.426h4.424c.71 0 1.428-.43 1.78-1.07l1.873-3.391a.737.737 0 00-.253-.974zm-3.4 4.009H3.828v-1.609H9.54l-.687 1.252a.742.742 0 01-.601.357z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconHockeyRegular;
