/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconSupermarketRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M9.527 2.998a.412.412 0 01-.395-.428.41.41 0 01.4-.415h.37c.41 0 .757.289.869.72.036.143.087.398.143.695h2.868a.39.39 0 01.32.168c.075.106.1.24.064.37 0 0-.28 1.033-.434 1.574-.146.529-.502.848-.944.848h-1.373c-.582 0-.921-.551-.991-1.058l-.022-.131c-.05-.313-.13-.805-.21-1.259l-.004-.014a16.764 16.764 0 00-.19-.972c-.025-.092-.084-.098-.098-.098-.199.003-.373 0-.373 0zm1.535 1.418c.082.481.149.89.154.927.009.061.079.347.202.347h1.373c.09 0 .143-.132.176-.244.076-.28.19-.697.283-1.03h-2.188zm1.076 9.722c-.594 0-1.062-.162-1.381-.49-.333-.336-.501-.838-.501-1.49 0-.65.168-1.154.501-1.49.32-.328.787-.493 1.381-.493s1.059.165 1.38.493c.337.339.505.84.505 1.49 0 .652-.17 1.154-.504 1.49-.322.325-.787.49-1.381.49zm-.546-2.566c-.087.087-.135.3-.135.583s.048.493.135.583c.084.084.283.134.546.134.263 0 .462-.05.549-.137.087-.087.134-.297.134-.58s-.05-.493-.137-.58c-.087-.09-.285-.137-.546-.137-.26 0-.462.047-.546.134zM11.499 6.9h-.028v-.003h-.005c-.076.003-.364.031-.364.406 0 .379.288.407.367.41h.033c.073 0 .367-.031.367-.407 0-.372-.294-.403-.37-.406zm1.205 0h.028c.075.003.37.034.37.406 0 .376-.295.406-.367.406h-.037c-.078-.002-.367-.03-.367-.409 0-.375.289-.403.367-.406h.006V6.9zm7.935 13.628h-1.988v-7.74h1.988v7.74zm-10.885.03v-4.196h4.734v4.18l-4.734.016zm-2.989.012V9.275a.222.222 0 01.09-.022h10.507c.03 0 .065.011.09.022V20.53l-1.762.006v-4.807c0-.35-.272-.633-.602-.633H9.152c-.333 0-.602.283-.602.633v4.835l-1.785.006zm-3.409-.042v-7.74h1.99v7.74h-1.99zm18.485-8.373c0-.35-.269-.633-.602-.633v.003h-2.586V9.152c0-.619-.602-1.162-1.291-1.162H6.855c-.686 0-1.291.54-1.291 1.16v2.372H2.757c-.333 0-.602.283-.602.633v9.006c0 .347.274.68.605.68h18.476c.33 0 .605-.333.605-.68v-9.006z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconSupermarketRegular;
