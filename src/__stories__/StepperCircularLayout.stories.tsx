import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Stepper from '../components/Steppers/Stepper';
import { View } from 'react-native';
import CircleStepperLayout from '../components/Steppers/CircleStepperLayout';

export default {
  title: 'Stepper/CircleStepperLayout',
} as ComponentMeta<typeof Stepper>;

export const Basic: ComponentStory<typeof CircleStepperLayout> = (args) => {
  return <View style={{ flex: 1, padding: 20}}>
    <CircleStepperLayout {...args} />
  </View>
}

Basic.storyName = 'Layout';
Basic.args = {
  title: 'Título texto',
  subtitle: 'Subtítulo texto',
  stepperAttrs: {
    totalSteps: 2,
    currentStep: 1
  }
};