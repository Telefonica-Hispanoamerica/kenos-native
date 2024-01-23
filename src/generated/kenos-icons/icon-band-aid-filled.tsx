/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconBandAidFilled = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.122 11.975c2.372 2.532 2.291 5.345-.258 7.89-1.314 1.317-2.697 1.976-4.081 1.976-1.378 0-2.76-.656-4.07-1.97l-.149-.142a5.048 5.048 0 01-.355-.365l-.656-.655a.055.055 0 00-.018-.013.077.077 0 01-.018-.012l-5.364-5.362c-.005-.004-.007-.009-.01-.014a.063.063 0 00-.01-.014l-.552-.551a4.847 4.847 0 01-.327-.322l-.138-.143c-1.274-1.275-1.935-2.62-1.96-3.995-.026-1.428.633-2.829 1.963-4.157 2.585-2.588 5.445-2.63 8.045-.112l1.134 1.135a.027.027 0 00.01.005.027.027 0 01.01.006l5.364 5.361a.03.03 0 01.004.006l.007.011 1.241 1.238.058.06c.046.045.09.09.13.14zM5.25 11.15l.165.17.036.038c.072.075.142.148.219.215l.053.053 5.896-5.894-.577-.577C10.088 4.23 9.147 3.768 8.2 3.768c-.977 0-1.955.496-2.95 1.49-1.01 1.008-1.512 2.017-1.495 2.994.017.947.52 1.922 1.496 2.897zm13.678 1.893a1.108 1.108 0 00-.101-.1l-.093-.09-.627-.625-5.894 5.89.166.163c.094.109.17.181.242.25l.046.044.177.171c1.98 1.975 3.907 1.975 5.888-.008 1.921-1.922 1.985-3.784.196-5.695zm-7.412-.689a.61.61 0 10.863-.863.61.61 0 00-.863.863zm-.54 1.922a.61.61 0 10.863.863.61.61 0 00-.864-.863zm3.391-3.392a.61.61 0 10.864.862.61.61 0 00-.864-.862zm-5.58 1.185a.61.61 0 10.864.862.61.61 0 00-.863-.862zm3.393-2.533a.61.61 0 00.862-.862.61.61 0 00-.863.863z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconBandAidFilled;
