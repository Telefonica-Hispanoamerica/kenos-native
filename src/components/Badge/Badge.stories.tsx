import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Badge from './Badge';

export default {
  title: 'components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Basic: ComponentStory<typeof Badge> = args => <Badge {...args} />;

Basic.args = {
  children: null,
  value: 8,
  right: 0,
  top: 0,
};
