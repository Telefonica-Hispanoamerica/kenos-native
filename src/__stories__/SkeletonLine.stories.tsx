import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonLine } from '../components/Skeletons/Skeletons';

export default {
  title: 'components/Skeletons/Skeleton Line',
  component: SkeletonLine,
} as ComponentMeta<typeof SkeletonLine>;

export const Basic: ComponentStory<typeof SkeletonLine> = args => (
  <SkeletonLine {...args} />
);

Basic.args = {
  width: '100%'
};

Basic.storyName = 'Skeleton Line';