/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconHandUpRegular = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M17.389 9.732c.232-.078.49-.118.773-.118 1.255 0 2.036.79 2.039 2.062v6.997c0 .972-.272 1.745-.81 2.303-.54.557-1.378.865-2.36.865H9.242c-.782 0-1.126-.742-1.272-1.059a179.32 179.32 0 00-1.17-2.396l-.04-.08a415.578 415.578 0 01-2.748-5.647c-.4-.854-.24-1.742.41-2.263.33-.266.728-.398 1.13-.398.421 0 .85.146 1.208.432.367.29.672.694 1.011 1.271-.002-1.896 0-5.739 0-6.99v-.438c.087-1.348.863-2.118 2.13-2.118 1.316 0 2.134.83 2.134 2.162V7.22c.207-.058.437-.09.683-.09 1.003 0 1.703.502 1.944 1.354.23-.079.493-.118.776-.118 1.009 0 1.712.51 1.95 1.367zm1.128 10.381c.311-.322.463-.793.463-1.44h.008v-7.005c0-.589-.238-.83-.818-.83-.148 0-.28.02-.39.057a1.21 1.21 0 01-.957-.085 1.221 1.221 0 01-.602-.753c-.043-.154-.132-.468-.774-.468-.15 0-.282.02-.394.056a1.209 1.209 0 01-.956-.081 1.228 1.228 0 01-.602-.748c-.04-.137-.132-.462-.77-.462-.135 0-.252.017-.356.045a1.209 1.209 0 01-1.067-.202 1.24 1.24 0 01-.485-.983V4.312c0-.653-.274-.93-.916-.93-.526 0-.86.16-.91.963v7.35a1.231 1.231 0 01-1.219 1.233 1.22 1.22 0 01-1.05-.602c-.283-.482-.499-.762-.717-.936a.728.728 0 00-.451-.165.586.586 0 00-.373.129c-.28.224-.137.613-.064.77.667 1.426 1.798 3.726 2.709 5.574l.028.056a222.41 222.41 0 011.22 2.505c.032.07.124.271.2.347h7.753c.645 0 1.185-.18 1.49-.493z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconHandUpRegular;
