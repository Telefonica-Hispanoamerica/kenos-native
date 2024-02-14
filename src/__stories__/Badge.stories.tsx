import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Badge from '../components/Badge/Badge';
import IconBell from '../icons/icon-bell';
import { View } from 'react-native';

export default {
  title: 'Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Basic: ComponentStory<typeof Badge> = args => (
  <View style={{ gap: 16, margin: 16 }}>
    <Badge right={-18} top={3}>
      <IconBell color="black" size={20} />
    </Badge>
    <Badge right={-16} top={0} value={0}>
      <IconBell color="black" size={20} />
    </Badge>
    <Badge value={1} right={-8} top={8}>
      <IconBell color="black" size={20} />
    </Badge>
    <Badge value={10} right={-8} top={8}>
      <IconBell color="black" size={20} />
    </Badge>
  </View>
);

Basic.args = {
  children: null,
  value: 8,
  right: 0,
  top: 0,
};

Basic.storyName = 'Badge'