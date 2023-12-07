import LottieView from 'lottie-react-native';
import React from 'react';
import {useTheme} from '../../hooks/ThemeContextProvider';
import {SkinName} from '../skins/types';

type IconSucessProps = {
  size?: number | string;
  color?: string;
  skipAnimation?: boolean;
};

type SuccessLogoMap = {
  [key: SkinName]: JSX.Element;
};

const IconSuccessGlobal = ({size, color, skipAnimation}: IconSucessProps) => {
  return (
    <LottieView
      source={require('./animated/success.json')}
      autoPlay
      loop={false}
      resizeMode="cover"
      autoSize={true}
      style={{width: size, height: size}}
      speed={skipAnimation ? 100 : 1}
      colorFilters={[
        {keypath: 'Capa de formas 3.Trazo 1', color: color || 'white'},
        {keypath: 'Capa de formas 1.Trazo 1', color: color || 'white'},
      ]}
    />
  );
};

const IconSuccessO2 = ({size, color, skipAnimation}: IconSucessProps) => {
  return (
    <LottieView
      source={require('./animated/success-o2.json')}
      autoPlay
      loop={false}
      resizeMode="cover"
      autoSize={true}
      style={{width: size, height: size}}
      speed={skipAnimation ? 100 : 1}
      colorFilters={[
        {keypath: 'Capa de formas 4.Trazo 1', color: color || 'white'},
        {keypath: 'Capa de formas 2.Trazo 1', color: color || 'white'},
        {keypath: 'Capa de formas 5.Trazo 1', color: color || 'white'},
      ]}
    />
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
  return <>{successLogo[skinName] || <IconSuccessGlobal />}</>;
}

export default IconSuccess;
