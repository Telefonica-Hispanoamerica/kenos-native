/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconTechServiceLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M8.113 20.084a.334.334 0 00.482.004l3.366-3.524c2.602.968 5.51.292 7.47-1.76 2.014-2.107 2.64-5.263 1.601-8.039l-.19-.508-4.65 4.86a.99.99 0 01-1.45 0l-1.929-2.02a1.113 1.113 0 010-1.516l4.654-4.864-.485-.2c-2.656-1.087-5.67-.428-7.68 1.676-1.96 2.052-2.61 5.096-1.682 7.82l-5.04 5.271a.367.367 0 000 .504.33.33 0 00.482 0l5.353-5.6-.08-.215c-.94-2.516-.375-5.368 1.448-7.276 1.693-1.772 4.173-2.408 6.446-1.696l-3.897 4.08a1.846 1.846 0 000 2.524l1.93 2.02a1.65 1.65 0 002.414 0l3.898-4.076c.68 2.376.072 4.972-1.624 6.748-1.823 1.903-4.547 2.5-6.95 1.515l-.207-.083-3.68 3.851a.367.367 0 000 .504zM6.853 22c.378 0 .683-.324.683-.716 0-.392-.305-.716-.684-.716-.378 0-.684.32-.684.716 0 .396.306.716.684.716z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconTechServiceLight;
