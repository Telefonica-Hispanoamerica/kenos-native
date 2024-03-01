import React from 'react';
import {View} from 'react-native';
import {styles} from './index.css';
import CircleStepper from '../CircleStepper';
import {Text5, Text2} from '../../Text/Text';
import {useTheme} from '../../../utils/ThemeContextProvider';
import {StepperCircularLayoutProps} from './index.Type';

const CircleStepperLayout = ({
  title,
  subtitle,
  stepperAttrs,
}: StepperCircularLayoutProps) => {
  const {currentStep, totalSteps} = stepperAttrs;

  const {skin} = useTheme();
  const {textSecondary} = skin.colors;

  return (
    <View style={styles.container}>
      <View>
        <Text5>{title}</Text5>
        <Text2 color={textSecondary}>{subtitle}</Text2>
      </View>
      <CircleStepper totalSteps={totalSteps} currentStep={currentStep} />
    </View>
  );
};

export default CircleStepperLayout;
