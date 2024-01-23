import LottieView from 'lottie-react-native';
import React from 'react';
import {useTheme} from '../utils/ThemeContextProvider';
import {SkinName} from '../skins/types';
import Svg, {Path} from 'react-native-svg';

type IconSucessProps = {
  size?: number | string;
  color?: string;
  skipAnimation?: boolean;
};

type SuccessLogoMap = {
  [key: SkinName]: Element;
};

const IconSuccessO2 = ({size, color}: IconSucessProps) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        fill={color || '#003'}
        d="M10.633 14.164l6.317-6.15a.726.726 0 011.03 0 .704.704 0 010 1.023l-7.38 7.247-3.593-3.721a.7.7 0 01.027-1.023.724.724 0 011.032.029l2.567 2.595z"
      />
      <Path
        fill={color || '#003'}
        d="M12 2C6.484 2 2 6.484 2 12s4.484 10 10 10 10-4.484 10-10S17.516 2 12 2zm0 18.576c-4.728 0-8.576-3.848-8.576-8.576 0-4.728 3.848-8.576 8.576-8.576 4.728 0 8.576 3.848 8.576 8.576 0 4.728-3.848 8.576-8.576 8.576z"
      />
    </Svg>
  );
};

const IconSuccessGlobal = ({size, color}: IconSucessProps) => {
  return (
    <svg role="presentation" width={size} height={size} viewBox="0 0 64 64">
      <g stroke={color} strokeWidth={2}>
        <path
          vectorEffect="non-scaling-stroke"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
          d="M61.4,32c0,19.5-10,29.4-29.4,29.4C12.5,61.4,2.6,51.5,2.6,32S12.5,2.6,32,2.6S61.4,12.5,61.4,32z"
          transform="rotate(90 32 32)"
          strokeDasharray="202"
          strokeDashoffset="202">
          <animate
            attributeName="stroke-dashoffset"
            from="202"
            to="0"
            dur="0.7"
            repeatCount="1"
            begin="0.2s"
            fill="freeze"
            keyTimes="0;1"
            calcMode="spline"
            keySplines="0.75 0 0.25 1"></animate>
        </path>
        <polyline
          vectorEffect="non-scaling-stroke"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="20,34.9 27.4,44.3 45.6,21"
          strokeDasharray="44"
          strokeDashoffset="44">
          <animate
            attributeName="stroke-dashoffset"
            from="44"
            to="0"
            dur="0.7"
            repeatCount="1"
            begin="0.6s"
            fill="freeze"
            keyTimes="0;1"
            calcMode="spline"
            keySplines="0.75 0 0.25 1"></animate>
          <animate
            from="2.5"
            to="2"
            dur="0.7s"
            begin="0.6s"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
            keySplines="0.75 0 0.25 1"></animate>
          <animateTransform
            attributeName="transform"
            type="translate"
            from="-0.5 1"
            to="0 0"
            dur="0.7s"
            begin="0.6s"
            keyTimes="0;1"
            calcMode="spline"
            fill="freeze"
            keySplines="0.75 0 0.25 1"></animateTransform>
        </polyline>
      </g>
    </svg>
  );
};

function IconSuccess({size, color, skipAnimation}: IconSucessProps) {
  const {skinName} = useTheme();
  const successLogo: SuccessLogoMap = {
    Movistar: (
      <IconSuccessGlobal
        size={size}
        color={color}
        skipAnimation={skipAnimation}
      />
    ),
    'Movistar-AR': (
      <IconSuccessGlobal
        size={size}
        color={color}
        skipAnimation={skipAnimation}
      />
    ),
    Vivo: (
      <IconSuccessGlobal
        size={size}
        color={color}
        skipAnimation={skipAnimation}
      />
    ),
    O2: (
      <IconSuccessO2 size={size} color={color} skipAnimation={skipAnimation} />
    ),
    Telefonica: (
      <IconSuccessGlobal
        size={size}
        color={color}
        skipAnimation={skipAnimation}
      />
    ),
    Blau: (
      <IconSuccessGlobal
        size={size}
        color={color}
        skipAnimation={skipAnimation}
      />
    ),
  };
  return <>{successLogo[skinName]}</>;
}

export default IconSuccess;
