/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconIotSensorCo2Regular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12 5c2.463 0 4.534 1.76 4.963 4.094 2.784 0 5.037 2.224 5.037 4.953C22 16.777 19.751 19 17 19H7c-2.751 0-5-2.224-5-4.953 0-2.73 2.249-4.953 5-4.953h.073A5.029 5.029 0 0112 5zm-8.57 9.042c0 1.94 1.605 3.52 3.57 3.52h10c1.96 0 3.565-1.58 3.565-3.52 0-1.939-1.604-3.52-3.57-3.52a5.49 5.49 0 01-.178.828c-.068.285-.356.5-.676.5-.073 0-.142 0-.215-.036-.357-.11-.571-.5-.498-.97a2.73 2.73 0 00.141-.932v-.18c-.068-1.87-1.64-3.34-3.569-3.34-1.746 0-3.213 1.255-3.533 2.872a5.25 5.25 0 011.284.611c.32.216.43.685.215 1.006-.215.322-.68.432-1 .216A3.714 3.714 0 007 10.523c-1.96 0-3.57 1.58-3.57 3.52zm8.853-2.33a2.004 2.004 0 00-2.002 2.013 2 2 0 104 0 1.994 1.994 0 00-1.998-2.012zm-.927 2.013c0-.5.43-.932.927-.932a.95.95 0 01.928.932.92.92 0 01-.928.933.95.95 0 01-.927-.933zm5.534 2.15h-.32c.073-.073.105-.105.179-.142.822-.79.713-1.47.57-1.796-.214-.501-.712-.86-1.247-.86a1.36 1.36 0 00-1.357 1.365c0 .285.251.538.534.538a.552.552 0 00.535-.538.28.28 0 01.284-.285c.105 0 .251.074.283.18.037.142-.073.358-.32.61-.43.432-1.142 1.076-1.142 1.076-.179.142-.215.395-.142.61a.535.535 0 00.498.36h1.677a.552.552 0 00.535-.538c.005-.29-.279-.58-.567-.58zm-7.852-2.834a1.007 1.007 0 00-.644-.253.95.95 0 00-.928.937c0 .501.43.933.928.933a.862.862 0 00.644-.253.515.515 0 01.75 0 .521.521 0 010 .754c-.357.358-.86.574-1.394.574a2 2 0 01-2.002-2.008c0-1.116.896-2.012 2.002-2.012.535 0 1 .216 1.394.574a.521.521 0 010 .754.515.515 0 01-.75 0z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconIotSensorCo2Regular;
