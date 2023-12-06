/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconHandUpFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.159 9.614c-.283 0-.54.04-.773.118-.238-.857-.941-1.367-1.95-1.367-.283 0-.543.042-.776.118-.24-.85-.94-1.353-1.944-1.353-.246 0-.476.03-.683.09V4.316c0-1.333-.818-2.162-2.135-2.162-1.266 0-2.042.77-2.128 2.118V11.7c-.34-.577-.645-.98-1.009-1.271a1.927 1.927 0 00-1.207-.432c-.403 0-.801.132-1.132.398-.65.52-.81 1.409-.409 2.263a414.96 414.96 0 002.748 5.647 213.96 213.96 0 011.21 2.476c.146.32.49 1.062 1.272 1.062h7.787c.983 0 1.82-.308 2.361-.866.538-.554.81-1.33.81-2.302v-6.997c-.006-1.275-.784-2.065-2.042-2.065z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconHandUpFilled;