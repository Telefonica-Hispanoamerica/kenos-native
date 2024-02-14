import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  Text,
  Text1,
  Text2,
  Text3,
  Text4,
  Text5,
  Text6,
  Text7,
  Text8,
  Text9,
  Text10,
} from '../components/Text/Text';
import { ScrollView, View } from 'react-native';

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Basic: ComponentStory<typeof Text> = args => (
  <ScrollView>
    <View style={{ flexDirection: 'column', gap: 8 }}>
      <Text10>48/56 regular</Text10>
      <Text10 bold>48/56 bold</Text10>
      <Text9>40/48 regular</Text9>
      <Text9 bold>40/48 bold</Text9>
      <Text8>32/40 regular</Text8>
      <Text8 bold>32/40 bold</Text8>
      <Text7>28/32 regular</Text7>
      <Text7 bold>28/32 bold</Text7>
      <Text6>24/32 regular</Text6>
      <Text6 bold>24/32 bold</Text6>
      <Text5>22/24 regular</Text5>
      <Text5 bold>22/24 bold</Text5>
      <Text4 light>18/24 light</Text4>
      <Text4>18/24 regular</Text4>
      <Text4 medium>18/24 medium</Text4>
      <Text3 light>16/24 light</Text3>
      <Text3>16/24 regular</Text3>
      <Text3 medium>16/24 medium</Text3>
      <Text2>14/20 regular</Text2>
      <Text2 medium>14/20 medium</Text2>
      <Text1>12/16 regular</Text1>
      <Text1 medium>12/16 medium</Text1>
    </View>
  </ScrollView>
);

Basic.storyName = 'Text';
