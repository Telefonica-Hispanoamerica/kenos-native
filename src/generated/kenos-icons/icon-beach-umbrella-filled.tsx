/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconBeachUmbrellaFilled = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.429 5.678a.378.378 0 00-.101-.291c-1.454-1.569-3.084-2.577-4.846-3-1.555-.373-3.21-.294-4.941.221 2.218.263 5.134 1.305 7.994 4.356l1.698-1.003a.391.391 0 00.196-.283zM18.306 7.69l-5.169 3.053L9.08 3.975c1.647-.221 5.462-.18 9.226 3.714zM7.921 4.79c-.939 1.485-2.42 4.849-.583 9.378l4.583-2.706-4-6.672zm-1.81 10.101c-1.655-3.888-1.12-7.059-.269-9.134-1.641 1.406-2.683 2.988-3.084 4.73-.397 1.693-.185 3.536.636 5.477a.4.4 0 00.252.216c.198.053.257.018.335-.03l.021-.012 2.11-1.247zm1.7-10.244l-.372-.622a.668.668 0 01.266-.93.735.735 0 01.975.255l.35.586-1.218.711zm11.356 16.174l-6.025-10.053-1.218.714 6.005 10.017a.72.72 0 00.62.342c.12 0 .24-.031.352-.09a.666.666 0 00.266-.93z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBeachUmbrellaFilled;
