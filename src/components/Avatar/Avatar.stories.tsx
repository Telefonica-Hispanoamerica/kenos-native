import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from './Avatar';
import { View } from 'react-native';

export default {
  title: 'components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Basic: ComponentStory<typeof Avatar> = args => (
  <View style={{ padding: 16 }}>
    <Avatar {...args} />
  </View>
);

Basic.args = {
  size: 64,
  src: 'https://www.purina.co.uk/sites/default/files/2020-12/Can%20Cats%20DreamHERO.jpg',
  badge: 51,
};

Basic.storyName = 'Avatar'