import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tag from './Tag';
import IconCamera from '../../icons/icon-camera';
import { View } from 'react-native';
import { Text4 } from '../Text/Text';

export default {
  title: 'components/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Basic: ComponentStory<typeof Tag> = args => (
  <View style={{ flexDirection: 'row', gap: 64 }}>
    <View style={{ gap: 16, padding: 16, flexDirection: 'column' }}>
      <Text4 medium>Example</Text4>
      <Tag children='Promo' Icon={IconCamera} type='promo' />
      <Tag children='Active' Icon={IconCamera} type='active' />
      <Tag children='Inactive' Icon={IconCamera} type='inactive' />
      <Tag children='Success' Icon={IconCamera} type='success' />
      <Tag children='Warning' Icon={IconCamera} type='warning' />
      <Tag children='Error' Icon={IconCamera} type='error' />
    </View>
    <View style={{ gap: 16, padding: 16, flexDirection: 'column' }}>
      <Text4 medium>Without icon</Text4>
      <Tag children='Promo' type='promo' />
      <Tag children='Active' type='active' />
      <Tag children='Inactive' type='inactive' />
      <Tag children='Success' type='success' />
      <Tag children='Warning' type='warning' />
      <Tag children='Error' type='error' />
    </View>
  </View>

);

Basic.args = {

};

Basic.storyName = 'Tag';