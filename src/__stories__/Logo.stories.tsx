import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Logo } from '../components/Logo/Logo';

export default {
  title: 'components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Basic: ComponentStory<typeof Logo> = args => <Logo {...args} />;

Basic.args = {
  size: 96,
};

Basic.storyName = 'Logo'
