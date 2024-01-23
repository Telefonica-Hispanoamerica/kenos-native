import LottieView from 'lottie-react-native';
import React from 'react';
import {useTheme} from '../utils/ThemeContextProvider';
import {SkinName} from '../skins/types';

type IconErrorProps = {
  size?: number | string;
  color?: string;
  skipAnimation?: boolean;
};

type ErrorLogoMap = {
  [key: SkinName]: Element;
};

const IconErrorGlobal = ({size, color, skipAnimation}: IconErrorProps) => {
  return (
    <LottieView
      source={require('./animated/error.json')}
      autoPlay
      loop={false}
      resizeMode="cover"
      autoSize={true}
      style={{width: size, height: size}}
      speed={skipAnimation ? 100 : 1}
      colorFilters={[
        {keypath: 'Capa de formas 4.Relleno 1', color: color || '#e9426d'},
        {keypath: 'Capa de formas 3.Trazo 1', color: color || '#e9426d'},
        {keypath: 'Capa de formas 5.Trazo 1', color: color || '#e9426d'},
      ]}
    />
  );
};

const IconErrorO2 = ({size, color, skipAnimation}: IconErrorProps) => {
  return (
    <LottieView
      source={require('./animated/error-o2.json')}
      autoPlay
      loop={false}
      resizeMode="cover"
      autoSize={true}
      style={{width: size, height: size}}
      speed={skipAnimation ? 100 : 1}
      colorFilters={[
        {keypath: 'Alternative 2.Relleno 1', color: color || '#eb3c7d'},
        {keypath: 'Capa de formas 6.Trazo 1', color: color || '#eb3c7d'},
        {
          keypath: 'Capa de formas 2.Elipse 1.Trazo 1',
          color: color || '#eb3c7d',
        },
      ]}
    />
  );
};

function IconError({size, color, skipAnimation}: IconErrorProps) {
  const {skinName} = useTheme();
  const errorLogo: ErrorLogoMap = {
    Movistar: (
      <IconErrorGlobal
        size={size}
        color={color}
        skipAnimation={skipAnimation}
      />
    ),
    'Movistar-AR': (
      <IconErrorGlobal
        size={size}
        color={color}
        skipAnimation={skipAnimation}
      />
    ),
    Vivo: (
      <IconErrorGlobal
        size={size}
        color={color}
        skipAnimation={skipAnimation}
      />
    ),
    O2: <IconErrorO2 size={size} color={color} skipAnimation={skipAnimation} />,
    Telefonica: (
      <IconErrorGlobal
        size={size}
        color={color}
        skipAnimation={skipAnimation}
      />
    ),
    Blau: (
      <IconErrorGlobal
        size={size}
        color={color}
        skipAnimation={skipAnimation}
      />
    ),
  };
  return <>{errorLogo[skinName] || <IconErrorGlobal />}</>;
}

export default IconError;
