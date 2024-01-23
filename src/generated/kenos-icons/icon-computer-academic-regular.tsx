/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconComputerAcademicRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M12.617 16.39h8.627c.33 0 .602.272.6.614a.606.606 0 01-.603.608h-8.89a1.208 1.208 0 01-.735.45c-.747.135-1.795.42-2.549 1.02-.5.4-1.215.4-1.72 0-.756-.6-1.803-.885-2.548-1.02a1.22 1.22 0 01-.998-1.204v-2.045l-.963-.437a1.149 1.149 0 01-.678-1.05c0-.46.258-.863.678-1.053l1.678-.757V7.533c0-.919.243-1.639.728-2.137.499-.513 1.232-.776 2.185-.776h11.454c.95 0 1.683.26 2.182.776.481.498.728 1.218.728 2.137v5.434c0 .92-.244 1.645-.726 2.149-.501.524-1.238.79-2.184.79l-6.266.002v.482zm.865-4.115c.417.185.684.597.675 1.054 0 .453-.266.865-.678 1.05l-.73.328 6.13-.003c.614 0 1.062-.143 1.331-.423.26-.272.392-.714.392-1.314V7.53c0-.593-.131-1.03-.389-1.297-.269-.274-.717-.414-1.333-.414l-11.454.005c-.619 0-1.067.14-1.333.415-.258.266-.39.703-.39 1.297v3.448l1.992-.893c.294-.132.633-.132.927 0l4.86 2.184zm-.622 1.05l-4.725-2.122-4.675 2.123 4.725 2.123 4.675-2.123zm-4.767 4.796a.182.182 0 00.23 0c.952-.756 2.201-1.1 3.083-1.26l.003-1.55-2.787 1.253a1.127 1.127 0 01-.927 0l-2.69-1.21v1.501c.886.163 2.135.51 3.088 1.266z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconComputerAcademicRegular;
