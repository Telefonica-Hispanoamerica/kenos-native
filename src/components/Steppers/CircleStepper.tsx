import React from 'react';
import {View} from 'react-native';
import Svg, {Path, Circle} from 'react-native-svg';
import {Text2} from '../Text/Text';
import {useTheme} from '../../utils/ThemeContextProvider';
import {CircleStepperProps} from './Steppers.Types';

const size = 48;
const CircleStepper = ({totalSteps, currentStep}: CircleStepperProps) => {
  const progress = (currentStep / totalSteps) * 100;
  const circumference = 2 * Math.PI * 19.5;
  const progressValue = (circumference * (100 - progress)) / 100;

  const {skin} = useTheme();
  const {textSecondary, border, borderSelected} = skin.colors;

  return (
    <View style={{width: size, height: size}}>
      {totalSteps > 0 && (
        <Svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${size} ${size}`}
          fill="none">
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <Text2 medium color={textSecondary}>
              {currentStep}/{totalSteps}
            </Text2>
          </View>
          <Circle cx={24} cy={24} r="19.5" stroke={border} strokeWidth="5.5" />
          <Path
            stroke={borderSelected}
            strokeWidth="5.5"
            fill="none"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={progressValue}
            d="M24 4.5
             a 19.5 19.5 0 0 1 0 39
             a 19.5 19.5 0 0 1 0 -39"
          />
        </Svg>
      )}
    </View>
  );
};

export default CircleStepper;
