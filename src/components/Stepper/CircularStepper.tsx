import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../../utils/ThemeContextProvider';
import { Text4 } from '../Text/Text';

interface CircularProgressProps {
  progress?: number;
  size?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  progress = 30,
  size = 50,
}) => {
  const animatedProgress = useRef(new Animated.Value(0)).current;

  const {skin} = useTheme();
  const { border, borderSelected } = skin.colors;
  
  const CircleBase = styled(Animated.View)<{ size: number }>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: ${(props) => props.size / 2}px;
    border-width: ${(props) => props.size / 10}px;
  `;

  const EmptyCircle = styled(CircleBase)`
    border-color: ${border};
    justify-content: center;
    align-items: center;
    transform: rotate(-45deg);
  `;

  const Indicator = styled(CircleBase)`
    position: absolute;
    border-left-color: ${borderSelected};
    border-top-color: ${borderSelected};
    border-right-color: transparent;
    border-bottom-color: transparent;
  `;

  const CoverIndicator = styled(CircleBase)`
    position: absolute;
    border-left-color: ${border};
    border-top-color: ${border};
    border-right-color: transparent;
    border-bottom-color: transparent;
  `;

  const animateProgress = useRef((toValue: number) => {
    Animated.spring(animatedProgress, {
      toValue,
      useNativeDriver: true,
    }).start();
  }).current;

  useEffect(() => {
    animateProgress(progress);
    console.log("progress: ",animateProgress)
  }, [animateProgress, progress]);

  const firstIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '180deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorVisibility = animatedProgress.interpolate({
    inputRange: [0, 49, 50, 100],
    outputRange: [0, 0, 1, 1],
    extrapolate: 'clamp',
  });

  return (
    <EmptyCircle size={size}>
      <Text4>{JSON.stringify(firstIndicatorRotate)}</Text4>
      <Indicator
        style={{ transform: [{ rotate: firstIndicatorRotate }] }}
        size={size}
      />
      <CoverIndicator size={size} />
      <Indicator
        size={size}
        style={{
          transform: [{ rotate: secondIndicatorRotate }],
          opacity: secondIndicatorVisibility,
          flex: 1
        }}
      />
    </EmptyCircle>
  );
};

export default CircularProgress;
