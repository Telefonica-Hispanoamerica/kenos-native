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
  title: 'components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Basic: ComponentStory<typeof Text> = args => (
  <ScrollView>
    <View style={{ flexDirection: 'column', gap: 8 }}>
      <Text10>Text10 48</Text10>
      <Text9>Text9 40</Text9>
      <Text8>Text8 32</Text8>
      <Text7>Text7 28</Text7>
      <Text6>Text6 24</Text6>
      <Text5>Text5 20</Text5>
      <Text4 medium>Text4 Medium 18</Text4>
      <Text4>Text4 Regular 18</Text4>
      <Text4 light>Text4 Light 18</Text4>
      <Text3 medium>Text3 Medium 16</Text3>
      <Text3>Text3 Regular 16</Text3>
      <Text3 light>Text3 Light 16</Text3>
      <Text2 medium>Text2 Medium 14</Text2>
      <Text2>Text2 Regular 14</Text2>
      <Text1 medium>Text1 Medium 12</Text1>
      <Text1>Text1 Regular 12</Text1>
    </View>
  </ScrollView>
);

Basic.storyName = 'Text';
