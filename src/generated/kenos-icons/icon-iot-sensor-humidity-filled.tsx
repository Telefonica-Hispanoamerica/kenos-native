/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconIotSensorHumidityFilled = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.892 2c1.604 0 2.866 1.31 2.866 2.963v10.23c.724.772 1.145 1.771 1.145 2.77 0 2.23-1.795 4.037-4.01 4.037-2.216 0-4.012-1.806-4.05-4.036 0-1 .454-1.999 1.183-2.772v-2.116c.729-.842 1.071-1.88 1.071-2.998 0-1.191-.499-2.309-1.071-3.308V4.963C10.026 3.31 11.288 2 12.892 2zm-1.721 15.959a1.72 1.72 0 001.721 1.732c.954 0 1.717-.767 1.712-1.727 0-.729-.494-1.384-1.144-1.615V4.89a.591.591 0 00-.573-.575.591.591 0 00-.572.576v11.454a1.716 1.716 0 00-1.144 1.615zm1.721-.571c.318 0 .572.256.572.575a.572.572 0 11-1.144 0 .57.57 0 01.572-.575zM6.548 3.925c.27 0 .538.152.65.384 0 0 2.71 4.696 2.71 5.808 0 .92-.342 1.767-.992 2.422-.65.655-1.492 1-2.407 1a3.338 3.338 0 01-2.406-1 3.373 3.373 0 01-.993-2.422c0-.925.494-1.885.993-2.732L5.898 4.31a.943.943 0 01.269-.271.758.758 0 01.381-.113z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconIotSensorHumidityFilled;
