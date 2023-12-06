/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconStethoscopeMedicoRegular = ({
  color,
  size = 24,
}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M20.3 11.438c.805.218 1.541.849 1.541 2.12 0 1.603-1.16 2.194-2.154 2.21h-.168c-.994-.014-2.154-.605-2.154-2.218 0-1.378.84-2.003 1.703-2.163V9.651c0-1.639-1.16-1.91-1.851-1.927l-.222-.003c-.678.005-1.812.263-1.812 1.916l.003.075v7.995c0 2.994-2.16 4.098-4.011 4.131l-.112.002-.13.001h-.106c-1.94-.028-4.014-1.134-4.014-4.154V16.33h-.26c-.404 0-.734-.353-.734-.79v-1.236C3.444 13.73 2.155 11.76 2.155 8.61c0-.336.277-.61.616-.61h.182V4.815c-.002-.115-.025-1.316.67-2.022.31-.32.72-.488 1.185-.496a.88.88 0 01.473-.143h.076c.16.003.776.067.776.804 0 .74-.62.795-.773.798h-.073c-.101 0-.376-.025-.569-.218a.378.378 0 00-.21.106c-.263.266-.328.891-.322 1.151V8h.238c.342 0 .616.274.616.61 0 1.928.793 2.905 2.353 2.905s2.353-.977 2.353-2.904c0-.337.277-.611.616-.611h.255V4.816c.006-.227-.042-.89-.322-1.174a.412.412 0 00-.302-.12c-.194.207-.477.235-.58.235H9.34c-.154-.003-.77-.061-.77-.798 0-.737.616-.798.773-.801h.075c.087 0 .303.022.485.154.01-.001.019-.004.028-.007a.124.124 0 01.036-.007c.476 0 .9.17 1.219.498.692.706.672 1.908.666 2.042v3.163h.163c.342 0 .616.274.616.61 0 3.113-1.255 5.076-3.577 5.676v1.255c0 .437-.328.79-.734.79h-.277v1.352c0 2.614 1.958 2.922 2.798 2.936.104.003.216 0 .308-.003.84-.017 2.799-.33 2.799-2.913V9.648c0-2.305 1.636-3.134 3.033-3.148.084 0 .182 0 .264.002 1.409.034 3.056.877 3.056 3.149v1.787zm-12.904 1.83c2.513 0 3.818-1.326 3.986-4.049h-.426c-.196 2.213-1.498 3.513-3.56 3.513-2.065 0-3.364-1.3-3.563-3.513h-.426c.165 2.723 1.474 4.048 3.989 4.048zm12.269 1.282c.625-.011.941-.345.941-.989 0-.647-.32-.983-.952-.994l-.138-.003c-.921.011-.921.745-.921.989 0 .655.316.989.938 1 .003-.003.132-.003.132-.003zM7.14 14.48a11.56 11.56 0 00-.089-.006v.636h.768v-.638a6.85 6.85 0 01-.426.016c-.087 0-.17-.004-.253-.009zm12.94-.96c0-.387-.323-.421-.407-.424l-.045.003c-.084 0-.4.028-.4.417 0 .393.32.423.406.423h.04c.08-.002.405-.033.405-.42z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconStethoscopeMedicoRegular;
