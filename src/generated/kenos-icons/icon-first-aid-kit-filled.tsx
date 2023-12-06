/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconFirstAidKitFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.385 6.253c.804 0 1.456.645 1.456 1.44v11.485c0 .793-.652 1.437-1.456 1.437H3.612a1.448 1.448 0 01-1.457-1.437V7.693c0-.793.653-1.44 1.457-1.44h3.644v-1.66c0-.673.639-1.202 1.456-1.202h6.566c.818 0 1.46.53 1.46 1.201v1.661h3.647zM8.488 4.657v1.596h7.023V4.657a.437.437 0 00-.227-.053H8.718a.415.415 0 00-.23.053zm5.37 6.938V9.802c0-.551-.45-1.036-.963-1.036h-1.802c-.512 0-.96.485-.96 1.036v1.796H8.315c-.572 0-1.05.434-1.05.95v1.775c0 .516.481.95 1.052.95h1.821v1.793c0 .563.44 1.036.961 1.036h1.804c.52 0 .96-.476.96-1.04v-1.795h1.819c.56 0 1.05-.442 1.05-.95v-1.775c0-.504-.493-.947-1.053-.947h-1.82z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconFirstAidKitFilled;