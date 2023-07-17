import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressBar from './ProgressBar';

export default {
  title: 'components/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

export const Basic: ComponentStory<typeof ProgressBar> = args => (
  <ProgressBar {...args} />
);

Basic.args = {
  progressPercent: 30,
};

Basic.storyName = 'ProgressBar';
