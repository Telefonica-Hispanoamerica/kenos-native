/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../utils/ThemeContextProvider';

const IconVirusScanRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M21.667 21.66a.604.604 0 000-.857l-5.818-5.77a7.696 7.696 0 001.96-5.126c0-4.283-3.504-7.757-7.823-7.757-4.32 0-7.823 3.474-7.823 7.757 0 4.285 3.501 7.759 7.823 7.759 1.9 0 3.636-.67 4.992-1.782l5.826 5.776a.613.613 0 00.863 0zM16.586 9.91c0 3.61-2.964 6.546-6.603 6.546-3.638 0-6.6-2.936-6.602-6.547 0-3.607 2.964-6.543 6.602-6.543 3.642 0 6.603 2.936 6.603 6.543zM9.983 12.8c1.462 0 1.863-.535 1.863-2.49 0-1.227-.176-1.88-.591-2.19-.269-.2-.683-.297-1.272-.297-.59 0-1.008.098-1.277.302-.409.311-.585.966-.585 2.185 0 1.955.4 2.49 1.862 2.49zM8.74 6.937v.014a3.912 3.912 0 011.243-.182c.488 0 .897.065 1.252.182l.002-.01a.02.02 0 00.001-.006c0-.348 0-.6-1.25-.6-1.248 0-1.248.252-1.248.602zm4.77 2.488c.294 0 .532.235.532.526v.748a.529.529 0 01-.532.527.527.527 0 01-.53-.527v-.221h-.072c-.006.535-.048 1.053-.174 1.518l.686.207c.233.07.39.289.376.53l-.062 1.126a.53.53 0 01-.53.499h-.027a.526.526 0 01-.502-.552l.04-.717-.438-.132c-.428.549-1.134.896-2.294.896-1.162 0-1.868-.35-2.297-.902l-.453.135.039.714a.531.531 0 01-.502.555h-.028a.53.53 0 01-.529-.499l-.062-1.126a.528.528 0 01.376-.532l.703-.213c-.12-.462-.165-.98-.171-1.513h-.073v.222a.528.528 0 01-.53.526.529.529 0 01-.532-.526v-.748a.53.53 0 01.533-.527h.638a4.09 4.09 0 01.283-1.227l-.851-.257a.522.522 0 01-.376-.533l.062-1.126c.017-.291.283-.501.557-.495a.529.529 0 01.502.554l-.04.714.466.14-.008-.07c-.007-.06-.015-.122-.015-.187 0-1.653 1.62-1.653 2.311-1.653.692 0 2.311 0 2.311 1.653 0 .07-.007.137-.014.202l-.006.047.437-.132-.039-.717a.525.525 0 01.502-.551c.288.016.543.207.557.498l.062 1.126a.528.528 0 01-.376.53l-.834.249c.162.378.246.798.285 1.232h.639v.009zm-3.025-.308a.527.527 0 00-.53-.527.525.525 0 00-.53.527v2.8c0 .292.236.527.53.527.292 0 .53-.235.53-.526V9.117z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconVirusScanRegular;
