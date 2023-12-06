/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconRatingLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //const {skinName} = useTheme();
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.5 18.786V5.214c0-1.774-1.456-3.219-3.25-3.214h-6.5C6.956 2 5.5 3.44 5.5 5.214v13.572C5.5 20.56 6.956 22 8.75 22h6.5c1.794 0 3.25-1.44 3.25-3.214zm-2.524-.004c.397 0 .721-.32.721-.713a.718.718 0 00-.721-.714.718.718 0 00-.721.714c0 .393.323.713.72.713zM6.22 5.214c0-1.38 1.133-2.5 2.529-2.5h6.5c1.396 0 2.529 1.12 2.529 2.5v.356H6.22v-.356zm11.558 1.07v12.498c0 1.38-1.133 2.5-2.529 2.5h-6.5c-1.396 0-2.529-1.12-2.529-2.5v-.357h7.587c.198 0 .36-.16.36-.356a.36.36 0 00-.36-.357H6.22V6.283h11.56zm-1.3 4.895l-2.07 1.802.564 2.788a.357.357 0 01-.144.361.368.368 0 01-.388.023L12 14.782l-2.446 1.367a.362.362 0 01-.531-.384l.564-2.789-2.071-1.801a.358.358 0 01-.107-.375.351.351 0 01.305-.247l2.83-.292 1.118-2.538a.366.366 0 01.666 0l1.119 2.538 2.83.292a.35.35 0 01.304.247.34.34 0 01-.101.38zm-3.314-.228a.361.361 0 01-.291-.21L12 8.757l-.874 1.979a.344.344 0 01-.291.21l-2.22.229 1.61 1.399a.36.36 0 01.115.338l-.453 2.222 1.937-1.084a.354.354 0 01.356 0l1.933 1.084-.453-2.222a.36.36 0 01.115-.338l1.61-1.395-2.22-.228z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconRatingLight;