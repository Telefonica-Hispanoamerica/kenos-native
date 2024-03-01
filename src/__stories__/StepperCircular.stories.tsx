import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Stepper from '../components/Stepper/Stepper';
import { View } from 'react-native';
import CircularStepper from '../components/Stepper/CircularStepper';

export default {
  title: 'Stepper/CircularStepper',
} as ComponentMeta<typeof Stepper>;

export const Basic: ComponentStory<typeof CircularStepper> = (args) => {
  return <View style={{ flex: 1, padding: 20}}>
    <CircularStepper totalSteps={args.totalSteps} currentStep={args.currentStep}  />
  </View>
}

Basic.storyName = 'Circular';
Basic.args = {
  totalSteps: 4,
  currentStep: 2
};