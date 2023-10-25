/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconChemistryFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M15.821 12.273l5.804 7.658c.27.414.286.88.067 1.274-.218.398-.65.639-1.111.639H3.328c-.42 0-.818-.224-1.02-.588a1.12 1.12 0 01.018-1.16l5.837-7.832.81-1.075v-7.79h-.757a.632.632 0 01-.633-.622c0-.34.289-.622.633-.622h7.572c.355 0 .633.283.633.622a.626.626 0 01-.633.622h-.784v7.79l.817 1.084zm-5.708-.513l-.34.457c1.365.215 3.057.215 4.44.008l-.344-.465a.587.587 0 01-.126-.373V3.4h-3.504v7.988a.605.605 0 01-.126.373zm4.075 7.84h.126c.723-.017 1.566-.448 1.566-1.622 0-1.165-.84-1.605-1.566-1.621h-.134c-.726 0-1.569.431-1.569 1.613 0 .597.21.992.516 1.25.302.257.7.372 1.061.38zm-4.23-2.557c.53-.008 1.062-.347 1.062-1.084 0-.737-.532-1.076-1.061-1.084h-.076c-.524 0-1.053.339-1.053 1.075 0 .746.532 1.085 1.053 1.093h.076z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconChemistryFilled;
