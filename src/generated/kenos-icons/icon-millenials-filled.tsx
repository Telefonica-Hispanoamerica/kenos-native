/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconMillenialsFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.45 3.829l-8.735 2.435a3.359 3.359 0 01-.04-.532C12.675 3.677 14.299 2 16.29 2c.986 0 1.88.412 2.535 1.071l2.304-.634a.692.692 0 01.846.506.725.725 0 01-.483.874h-.004l-.04.012zm-9.502 4.404c0 1.38-.726 2.579-1.804 3.225 2.335.552 3.896 2.18 3.896 4.264V22H2.619v-6.278c0-2.085 1.56-3.712 3.896-4.268a3.661 3.661 0 01-.46-.334c.085-.523.36-1.14.48-1.367.627-1.211 1.673-2.06 3.082-2.509l2.02-.523c.195.465.311.976.311 1.512z" /><path fill="currentColor" d="M3.649 9.024c.135.04.3.07.49.07.196 0 .416-.033.655-.116.084.416.236.808.44 1.166.15-.434.32-.776.369-.878l.01-.02C6.359 7.8 7.645 6.75 9.329 6.214l1.705-.44A3.523 3.523 0 008.327 4.5c-.43 0-.842.09-1.225.23-.024-1.145-.938-2.072-2.056-2.072-1.134 0-2.056.952-2.056 2.122v2.187H2l.475 1.026c.032.082.387.795 1.174 1.03zm16.259-3.292c0 1.38-.726 2.579-1.804 3.226C20.439 9.51 22 11.137 22 13.22v6.637h-6.918v-4.136c0-1.99-1.126-3.7-2.982-4.676a4.75 4.75 0 00.686-1.42 6.285 6.285 0 011.697-.668 3.722 3.722 0 01-1.469-1.669l6.878-1.92c.008.12.016.244.016.363z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconMillenialsFilled;
