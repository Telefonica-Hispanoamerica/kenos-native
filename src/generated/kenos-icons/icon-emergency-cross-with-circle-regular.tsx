/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconEmergencyCrossWithCircleRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.846 12.026c0-9.053-7.504-9.815-9.431-9.86-.23-.005-.499-.011-.754-.011l-.09.001-.086.002c-1.975.017-9.322.695-9.322 9.81 0 9.128 7.414 9.842 9.392 9.87.103.003.213.003.32.003.2 0 .402 0 .579-.005 1.88-.034 9.392-.74 9.392-9.81zm-1.233 0c0 7.608-5.722 8.535-8.184 8.58a33.58 33.58 0 01-.558.006c-.1 0-.204 0-.302-.003-2.46-.034-8.18-.947-8.18-8.642 0-7.678 5.667-8.56 8.101-8.58l.168-.002c.247 0 .505.005.726.01 2.473.06 8.23 1.02 8.23 8.631zm-3.344 1.41v.005h-3.221a.615.615 0 00-.616.616l.008 3.218c0 .152-.104.25-.137.258h-2.575c-.036-.006-.14-.106-.14-.258v-3.22a.616.616 0 00-.616-.617H6.751c-.157 0-.258-.104-.26-.137v-2.566c.008-.037.109-.14.26-.14h3.221a.616.616 0 00.616-.616V6.757c0-.14.101-.255.138-.266l2.557-.003c.045.014.149.13.149.27V9.97c0 .342.277.616.616.616h3.221c.135 0 .25.098.266.146l.003 2.555c-.014.044-.129.148-.269.148zm1.499-2.712c0-.729-.7-1.367-1.499-1.367h-2.608V6.76c0-.795-.638-1.496-1.367-1.496h-2.568c-.74 0-1.367.684-1.367 1.496v2.605H6.754c-.81 0-1.49.628-1.49 1.367v2.569c0 .742.68 1.367 1.49 1.367h2.605v2.605c0 .806.624 1.487 1.367 1.487h2.577c.74 0 1.367-.68 1.367-1.49l-.006-2.602h2.605c.798 0 1.499-.639 1.499-1.367v-2.577z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconEmergencyCrossWithCircleRegular;
