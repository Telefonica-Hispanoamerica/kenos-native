import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonCircle } from '../components/Skeletons/Skeletons';

export default {
  title: 'components/Skeletons/Skeleton Circle',
  component: SkeletonCircle,
} as ComponentMeta<typeof SkeletonCircle>;

export const Basic: ComponentStory<typeof SkeletonCircle> = args => (
  <SkeletonCircle {...args} />
);

Basic.args = {
  size: 48
};

Basic.storyName = 'Skeleton Circle';
