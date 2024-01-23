/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconWinnerEuroRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M8.176 10.288h.213c.319 1.838 1.916 3.24 3.833 3.24.672 0 1.35-.18 1.951-.539.354-.216.46-.647.248-.975-.212-.36-.637-.468-.96-.252-.39.216-.815.324-1.243.324-1.138 0-2.058-.755-2.377-1.802h2.377c.39 0 .708-.324.708-.72a.716.716 0 00-.708-.719H9.84c.106-.395.319-.755.637-1.083a2.45 2.45 0 011.74-.719c.425 0 .85.108 1.243.324a.686.686 0 00.96-.252.708.708 0 00-.248-.975 3.866 3.866 0 00-4.722.615 3.953 3.953 0 00-1.066 2.09h-.213a.716.716 0 00-.708.72.723.723 0 00.712.723z" /><path fill="currentColor" d="M17.864 14.687l2.058 3.6c.11.216.11.432-.047.652a.5.5 0 01-.566.18l-3.085-.935-.921 3.42c-.036.216-.213.36-.425.396h-.071a.514.514 0 01-.46-.252l-2.377-4.252-2.377 4.216a.552.552 0 01-.46.288h-.071a.58.58 0 01-.46-.396l-.922-3.42-3.014.935a.5.5 0 01-.566-.18c-.107-.184-.142-.436-.036-.615l1.987-3.677a7.782 7.782 0 01-1.704-4.899C4.347 5.461 7.751 2 11.974 2c4.222 0 7.63 3.46 7.63 7.748 0 1.878-.642 3.605-1.74 4.94zm.32-4.939c0-3.46-2.803-6.305-6.21-6.305-3.404 0-6.206 2.849-6.206 6.305 0 3.457 2.798 6.302 6.206 6.302 3.407 0 6.21-2.841 6.21-6.302zm-8.87 10.306l1.456-2.63a7.598 7.598 0 01-3.94-1.945l-1.204 2.197 2.306-.683a.584.584 0 01.425.036c.107.072.213.18.248.324l.709 2.7zm6.28-3.029a.584.584 0 01.425-.036l2.278.683-1.243-2.197a7.297 7.297 0 01-4.01 1.946l1.558 2.665.744-2.737a.464.464 0 01.248-.324z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconWinnerEuroRegular;
