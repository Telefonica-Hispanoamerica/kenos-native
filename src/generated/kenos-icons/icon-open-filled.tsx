/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconOpenFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.841 19.458l-.02-5.812c.04-.717-.167-1.339-.593-1.796a2.264 2.264 0 00-1.23-.655l-6.297-6.28c.13-.258.207-.543.207-.852a1.913 1.913 0 00-1.91-1.913c-1.053 0-1.91.857-1.91 1.913 0 .309.081.594.21.852l-6.289 6.294a2.361 2.361 0 00-1.854 2.317l.02 5.812c-.04.717.168 1.336.593 1.793.423.45 1.045.703 1.754.708l14.947-.002a2.368 2.368 0 001.678-.698 2.36 2.36 0 00.694-1.68zM11.998 3.355a.71.71 0 11-.002 1.419.71.71 0 01.002-1.42zm-6.227 7.79l12.474-.003-5.393-5.378c-.257.128-.546.21-.854.21-.308 0-.594-.082-.851-.21l-5.376 5.38zm11.956 6.678c0 .22-.18.4-.396.397h-.1a.398.398 0 01-.334-.179l-1.064-1.614v1.393a.4.4 0 01-.4.4h-.124a.4.4 0 01-.4-.4v-2.986a.4.4 0 01.4-.4h.095c.135 0 .258.07.334.178l1.067 1.617v-1.393a.4.4 0 01.4-.4h.12a.4.4 0 01.402.4v2.987zm-3.34-.118v.118c0 .22-.179.4-.4.403h-1.47a.4.4 0 01-.401-.4v-2.987a.4.4 0 01.4-.4h1.426c.123 0 .238.056.314.148a.41.41 0 01.078.34l-.025.117a.404.404 0 01-.392.313h-.871v.49h.66a.4.4 0 01.401.401v.118a.4.4 0 01-.4.4h-.661v.538h.941a.4.4 0 01.4.4zm-3.07-1.028c-.204.235-.504.358-.885.358h-.389v.788a.4.4 0 01-.4.4H9.51a.4.4 0 01-.4-.4v-2.987a.4.4 0 01.4-.4h.829c.428 0 .74.11.952.336.219.23.328.552.328.964 0 .406-.1.711-.302.94zm-2.75-.342c0 1.698-.922 1.95-1.47 1.95-.553 0-1.474-.255-1.474-1.95 0-1.7.921-1.955 1.473-1.955.55 0 1.47.252 1.47 1.955zm-1.47-1.025c.184 0 .529 0 .529 1.022 0 1.014-.33 1.014-.53 1.014-.199 0-.532 0-.532-1.014 0-1.022.333-1.022.532-1.022zm3.503.092s-.053-.047-.277-.047h-.283v.762h.336c.192 0 .216-.028.235-.05.03-.034.065-.093.065-.323 0-.188-.04-.3-.076-.342z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconOpenFilled;
