/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconPillsRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M18.89 4.006c2.263 2.269 2.44 4.756.526 7.058 1.639.91 2.426 2.636 2.429 5.017 0 3.636-1.832 5.762-5.748 5.762-2.493 0-4.138-.863-5.006-2.426-1.059.908-2.162 1.367-3.272 1.367-1.294 0-2.59-.616-3.82-1.851-1.247-1.25-1.866-2.558-1.844-3.888.023-1.28.64-2.54 1.838-3.74l.137-.14c.112-.117.224-.235.342-.336l6.359-6.378c.072-.087.184-.196.302-.308l.143-.137c2.454-2.463 5.16-2.46 7.613 0zm-6.935 1.072c-.074.072-.147.142-.214.219L9.226 7.818c-.002.007-.002.014-.002.021l-.001.021c-.34 1.092.255 2.417 1.767 3.933.13.13.258.245.386.36l.062.057c.93-1.224 2.468-1.888 4.659-1.888.778 0 1.47.087 2.086.25 1.79-1.91 1.74-3.774-.17-5.687-1.97-1.975-3.886-1.977-5.858 0l-.2.193zm-1.413 13.169a.254.254 0 00.056-.062 8.13 8.13 0 01-.255-2.1c0-1.051.157-1.97.468-2.754a14.65 14.65 0 01-.706-.656c-1.25-1.255-1.964-2.448-2.157-3.574l-2.636 2.641a3.543 3.543 0 00-.237.233l-.048.05-.157.163c-1.967 1.972-1.967 3.893.005 5.868 1.914 1.913 3.765 1.978 5.667.19zm5.552 2.352c2.851 0 4.274-1.252 4.468-3.893h-8.933c.19 2.639 1.613 3.893 4.465 3.893zm4.468-5.137c-.194-2.641-1.617-3.893-4.468-3.893-2.849 0-4.272 1.254-4.465 3.893h8.933z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconPillsRegular;
