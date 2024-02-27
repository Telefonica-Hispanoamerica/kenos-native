// crea el story para el componente Callout

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Alert, View } from 'react-native';
import { Callout } from '../components/Callout/index';
import { UrgencyType } from '../components/Callout/Callout.Types';

const calloutTypes: Array<UrgencyType> = [
  'general',
  'info',
  'warning',
  'success',
  'danger',
];

const onPress = () => Alert.alert('Clicked!', 'Clicked successfully!');

export default {
  title: 'Callout',
  component: Callout,
  argTypes: {
    type: {
      options: calloutTypes,
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['large','small'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Callout>;

export const Basic: ComponentStory<typeof Callout> = args => {
  return (
    <View style={{flex: 1, padding: 10}}>
      <Callout {...args} />
    </View>
  );
};

Basic.args = {
  title: 'This is the title',
  text: 'This is the description',
  type: 'info',
  inverse: false,
  dismissable: true,
  size: 'large',
  icon: true,
  linkText: 'Button link',
  linkAction: onPress
};

Basic.storyName = 'Callout';