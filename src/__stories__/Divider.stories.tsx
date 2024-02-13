import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Divider from '../components/Divider/Divider';
import {View} from 'react-native';

export default {
  title: 'Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Basic: ComponentStory<typeof Divider> = () => (
  <View style={{marginTop: 16}}>
    <Divider />
  </View>
);

Basic.storyName = 'Divider';
