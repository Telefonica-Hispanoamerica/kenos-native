import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Stepper from '../components/Stepper/Stepper';
import { Button } from '../components/Button/Button';
import { View } from 'react-native';

export default {
  title: 'components/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

export const Basic: ComponentStory<typeof Stepper> = (args) => {
  const [index, setIndex] = useState(0);
  return <View style={{ flex: 1, justifyContent: 'center', marginTop: 4 }}>
    <Stepper currentIndex={index} steps={args.steps} />
    <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', gap: 16, margin: 16 }}>
      <Button type='secondary' onPress={() => setIndex(index > 0 ? index - 1 : 0)}>Anterior</Button>
      <Button type='primary' onPress={() => setIndex(index < args.steps.length - 1 ? index + 1 : args.steps.length - 1)}>Siguiente</Button >
    </View >
  </View>
}

Basic.storyName = 'Stepper';

Basic.args = {
  steps: ['Basic Details', 'Company Details', 'Subscription Plan', 'Payment Details', 'Confirmation']
};

