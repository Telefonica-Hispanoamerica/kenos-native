/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconDataAlertLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.837 5.058c0-1.047-.845-1.837-2.52-2.344-1.202-.362-2.78-.558-4.44-.558-1.65 0-3.227.196-4.429.555-1.395.426-2.218 1.05-2.456 1.854v.009c-.04.156-.065.313-.065.484v4.538a.536.536 0 00-.165.213L2.24 20.677a.75.75 0 00.143.897c.145.14.327.212.524.212l10.969.037h.025c.025.008.056.008.081.008.165.009.731.009.896.009 1.65 0 3.23-.196 4.438-.558 1.675-.498 2.52-1.285 2.52-2.336V5.058zM10.69 3.501c1.123-.336 2.61-.524 4.188-.524 1.585 0 3.073.188 4.196.524 1.117.333 1.75.77 1.905 1.302a.057.057 0 01-.007.006c-.006.004-.01.007-.01.02-.188.481-.835.901-1.88 1.212-1.126.345-2.61.524-4.188.524-1.577 0-3.072-.18-4.198-.524-1.068-.319-1.717-.753-1.888-1.255l-.004-.008a.03.03 0 01-.005-.014c.166-.501.815-.935 1.891-1.263zm10.328 6.134c-.207.395-.815.905-1.933 1.241-1.12.336-2.613.524-4.19.524-1.578 0-3.073-.188-4.19-.524a5.443 5.443 0 01-1.34-.582l-.238-.477a.721.721 0 00-.378-.361V6.011c.42.327.986.599 1.709.82 1.207.362 2.775.558 4.436.558 1.662 0 3.23-.196 4.43-.558.716-.213 1.282-.484 1.694-.812v3.616zm-12.62 3.656a.412.412 0 00-.411.412v3.971a.412.412 0 00.824 0v-3.971a.412.412 0 00-.412-.412zm.401 5.683a.398.398 0 10-.795 0 .398.398 0 00.795 0zm12.219-8.14v3.658c-.207.387-.815.902-1.933 1.238-1.118.337-2.613.524-4.19.524-.93 0-1.824-.064-2.656-.187L9.955 11.49c.171.061.34.117.51.173 1.199.362 2.768.558 4.428.558 1.662 0 3.23-.196 4.43-.558.683-.204 1.26-.493 1.694-.829zm0 8.112c0 .642-.65 1.165-1.933 1.55-1.143.335-2.63.526-4.207.526h-.238a.61.61 0 00-.073-.294l-1.883-3.782a16.98 16.98 0 002.21.132c1.662 0 3.23-.205 4.43-.558.683-.204 1.26-.493 1.694-.829v3.255zm-7.233 2.059l-10.77-.04 5.431-10.68 5.34 10.72z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconDataAlertLight;
