import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Stepper from '../components/Stepper/Stepper';
import { View } from 'react-native';
import CircularStepper from '../components/Stepper/CircularStepper';

export default {
  title: 'StepperCircular',
  component: CircularStepper,
} as ComponentMeta<typeof Stepper>;

export const Basic: ComponentStory<typeof CircularStepper> = (args) => {
  return <View style={{ flex: 1, padding: 20}}>
    <CircularStepper size={args.size} progress={args.progress}  />
  </View>
}

Basic.storyName = 'StepperCircular';
Basic.args = {
  size: 100,
  progress: 60
};