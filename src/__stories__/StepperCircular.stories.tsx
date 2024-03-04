import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Stepper from '../components/Steppers/Stepper';
import { View } from 'react-native';
import CircleStepper from '../components/Steppers/CircleStepper';

export default {
  title: 'Stepper/CircleStepper',
} as ComponentMeta<typeof Stepper>;

export const Basic: ComponentStory<typeof CircleStepper> = (args) => {
  return <View style={{ flex: 1, padding: 20}}>
    <CircleStepper totalSteps={args.totalSteps} currentStep={args.currentStep}  />
  </View>
}

Basic.storyName = 'Circle';
Basic.args = {
  totalSteps: 4,
  currentStep: 2
};