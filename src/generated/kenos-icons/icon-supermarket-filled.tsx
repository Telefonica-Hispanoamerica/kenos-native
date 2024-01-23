/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconSupermarketFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M9.138 2.57a.412.412 0 00.395.428s.17.003.367-.003c.014 0 .073.006.098.098a16.992 16.992 0 01.19.975l.003.014c.09.521.188 1.098.233 1.39.072.51.411 1.058.994 1.058h1.373c.445 0 .8-.316.946-.846.152-.537.432-1.574.432-1.574a.442.442 0 00-.065-.37.39.39 0 00-.319-.168h-2.866a12.78 12.78 0 00-.142-.697c-.112-.431-.46-.72-.869-.72h-.37a.41.41 0 00-.4.415zm2.361 4.33h-.028v-.003h-.008c-.076.003-.364.031-.364.406 0 .379.288.407.367.41h.036c.073 0 .367-.031.367-.407 0-.372-.294-.403-.37-.406zm1.205 0h.028c.075.003.37.034.37.406 0 .376-.295.406-.367.406H12.7c-.078-.002-.367-.03-.367-.409 0-.375.289-.403.364-.406h.006V6.9zm7.935 13.627h-1.986v-7.739h1.986v7.74zm-6.15.014l-4.732.02v-4.196h4.731v4.177zm-3.413-8.383c0-.415.087-.714.258-.888.165-.168.443-.255.824-.255.38 0 .658.087.826.258.17.173.258.47.258.885 0 .414-.087.709-.258.882-.168.171-.445.255-.826.255-.381 0-.659-.084-.824-.255-.17-.173-.258-.468-.258-.882zm-7.717 8.37v-7.74h1.986v7.74H3.36zm18.485-8.373c0-.35-.272-.633-.602-.633v.003H18.65V9.152c0-.619-.603-1.162-1.292-1.162H6.855c-.686 0-1.291.54-1.291 1.16v2.372H2.757c-.333 0-.602.283-.602.633v9.006c0 .35.271.677.602.677h2.462l.37.003h.003l3.493-.014c.01.001.02.004.03.007a.121.121 0 00.037.007h5.936l.201-.003h5.95c.333 0 .605-.327.605-.677v-9.006z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSupermarketFilled;
