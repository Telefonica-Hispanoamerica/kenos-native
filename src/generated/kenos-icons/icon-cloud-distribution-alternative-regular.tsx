/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconCloudDistributionAlternativeRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M14.16 18.887h7.295c.299 0 .545.272.545.568 0 .295-.26.557-.555.557H14.15c-.26.854-1.038 1.488-1.963 1.488-.924 0-1.702-.63-1.962-1.488H6c-.26.854-1.038 1.488-1.963 1.488C2.924 21.5 2 20.57 2 19.45c0-1.12.93-2.05 2.038-2.05.925 0 1.702.629 1.963 1.487h4.224c.185-.672.74-1.23 1.408-1.416v-2.307H7.598c-2.479 0-4.48-2.05-4.48-4.544 0-2.494 2.001-4.506 4.447-4.506A4.465 4.465 0 0111.974 2.5c2.185 0 4 1.569 4.409 3.652 2.44.072 4.517 2.084 4.517 4.506 0 2.455-2.114 4.506-4.631 4.506H12.75v2.307a2.067 2.067 0 011.408 1.416zm-6.557-5.211h3.67v.005h.364v-1.192c-.848-.263-1.479-1.045-1.479-1.974 0-1.12.925-2.05 2.039-2.05s2.038.934 2.038 2.05c0 .93-.626 1.711-1.479 1.974v1.192h3.517c1.702 0 3.148-1.378 3.148-3.018 0-1.602-1.37-2.942-3-3.018l-.01.059a2.768 2.768 0 01-.138.575.742.742 0 01-.701.52c-.076 0-.147 0-.223-.039-.408-.11-.592-.558-.483-.93.07-.262.109-.486.109-.82a2.995 2.995 0 00-3.001-3.018c-1.446 0-2.631.968-2.925 2.346.375.148.744.296 1.076.52.332.224.408.71.185 1.044-.223.334-.706.41-1.038.186a3.116 3.116 0 00-1.669-.486c-1.668 0-3 1.34-3 3.018 0 1.716 1.332 3.056 3 3.056zM4.048 20.38c.521 0 .924-.41.924-.93a.92.92 0 00-.924-.93.92.92 0 00-.925.93c0 .52.408.93.925.93zm7.224-.93c0 .52.408.93.925.93a.92.92 0 00.924-.93.92.92 0 00-.924-.93.92.92 0 00-.925.93z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconCloudDistributionAlternativeRegular;
