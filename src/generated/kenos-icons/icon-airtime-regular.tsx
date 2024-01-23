/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconAirtimeRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M17.857 3.713A3.49 3.49 0 0014.853 2H8.517C6.577 2 5 3.6 5 5.569V18.43C5 20.401 6.576 22 8.517 22h6.332c1.94 0 3.517-1.6 3.517-3.569v-6.858A4.115 4.115 0 0021 7.743v-.031a4.092 4.092 0 00-3.143-3.998zm-9.34-.283h6.332c.396 0 .774.11 1.094.311a4.073 4.073 0 00-2.207 1.476H6.441C6.608 4.202 7.477 3.43 8.517 3.43zm0 17.135c-1.045 0-1.91-.772-2.08-1.786h10.492c-.167 1.014-1.036 1.786-2.076 1.786H8.517zm8.444-3.212H6.41V6.643h6.633a4.12 4.12 0 00.162 2.66l-.802 3.037 2.995-.818c.495.21 1.018.316 1.554.316h.009v5.515zm-.01-6.59c-.445 0-.878-.1-1.287-.291l-.176-.083-1.594.434.428-1.617-.081-.178a3.039 3.039 0 01-.289-1.307c0-1.677 1.347-3.043 3.013-3.043 1.64 0 2.977 1.347 2.99 3.006v.069h-.004c-.018 1.663-1.356 3.01-3 3.01z" /><path fill="currentColor" d="M16.96 5.395a.529.529 0 00-.526.535v1.247h-.878a.529.529 0 00-.527.535c0 .297.234.534.527.534h1.405a.529.529 0 00.527-.534V5.925a.528.528 0 00-.527-.53z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconAirtimeRegular;
