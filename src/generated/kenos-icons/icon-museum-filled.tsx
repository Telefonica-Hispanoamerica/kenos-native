/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconMuseumFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.818 9.392a.61.61 0 01-.585.432V9.82h-1.799v7.852h1.745c.34 0 .614.277.614.616v2.938a.616.616 0 01-.614.616H2.824a.616.616 0 01-.614-.616V18.29c0-.34.275-.616.614-.616h1.778V9.82H2.773a.613.613 0 01-.585-.431.618.618 0 01.235-.69l9.23-6.43a.616.616 0 01.7 0l9.23 6.43a.626.626 0 01.235.692zM8.233 17.675h1.974V9.824H8.233v7.851zm5.599 0h1.975V9.824h-1.975v7.851z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMuseumFilled;
