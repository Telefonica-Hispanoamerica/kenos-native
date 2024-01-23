/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconFileCssRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M4.923 13.215c0 .635.134 1.112.445 1.445.274.288.68.442 1.33.442.3 0 .704-.047.922-.111l-.087-.611a4.103 4.103 0 01-.675.075c-.412 0-.644-.08-.804-.263-.182-.201-.263-.566-.263-1 0-.728.182-1.246.969-1.246.23 0 .504.047.787.129l.107-.611a2.952 2.952 0 00-.958-.165c-1.255 0-1.773.77-1.773 1.916zm3.307 1.064l-.128.636c.37.129.748.188 1.213.193.523 0 .87-.106 1.129-.347.193-.182.305-.443.305-.77 0-.839-.64-1.017-1.172-1.165-.376-.104-.697-.194-.697-.491 0-.233.143-.392.594-.392.258 0 .58.048.88.129l.129-.622a3.333 3.333 0 00-1.023-.151c-.781 0-1.364.325-1.364 1.07 0 .851.654 1.025 1.188 1.166.369.098.68.18.68.461 0 .336-.23.465-.722.465-.266 0-.69-.07-1.011-.182zm3.031.636l.13-.636c.321.112.744.182 1.01.182.494 0 .723-.129.723-.465 0-.28-.312-.363-.68-.46-.534-.142-1.188-.316-1.188-1.167 0-.745.582-1.07 1.364-1.07.353 0 .74.053 1.022.15l-.128.623a3.554 3.554 0 00-.88-.13c-.451 0-.594.16-.594.393 0 .297.321.387.697.491.53.148 1.171.326 1.171 1.165 0 .327-.112.588-.305.77-.258.24-.605.347-1.129.347a3.71 3.71 0 01-1.213-.193z" /><path fill="currentColor" d="M21.794 7.912c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.25c-.75 0-1.409-.647-1.409-1.383l.034-2.774h-2.3a2.427 2.427 0 01-2.42-2.425V11.16a2.427 2.427 0 012.42-2.425h2.266V3.534c0-.726.673-1.384 1.41-1.384h7.414a.86.86 0 01.613.25l5.297 5.126a.876.876 0 01.219.386zm-1.362 12.712c.098 0 .194-.096.194-.168V9.02h-2.314c-1.014 0-1.89-.33-2.535-.952-.65-.628-.992-1.485-.992-2.482V3.37H8.25c-.073 0-.187.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.095a2.427 2.427 0 01-2.42 2.426h-6.33l-.034 2.779c0 .05.1.16.193.16h12.182zM3.368 15.258c0 .667.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.095c0-.666-.54-1.21-1.207-1.21H4.575a1.21 1.21 0 00-1.207 1.21v4.095zM16 3.822v1.765c0 .658.216 1.213.622 1.608.414.4.997.61 1.692.61h1.8L16 3.822z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFileCssRegular;
