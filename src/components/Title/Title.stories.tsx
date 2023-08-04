import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Title1, Title2} from './Title';
import {View} from 'react-native';

export default {
  title: 'components/Title',
  component: Title1,
} as ComponentMeta<typeof Title1>;

export const Basic: ComponentStory<typeof Title1> = args => (
  <View style={{padding: 16, gap: 8}}>
    <Title1>Title1</Title1>
    <Title2>Title2</Title2>
  </View>
);

Basic.args = {};

Basic.storyName = 'Title';
