import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonRectangle } from '../components/Skeletons/Skeletons';

export default {
  title: 'components/Skeletons/Skeleton Rectangle',
  component: SkeletonRectangle,
} as ComponentMeta<typeof SkeletonRectangle>;

export const Basic: ComponentStory<typeof SkeletonRectangle> = args => (
  <SkeletonRectangle {...args} />
);

Basic.args = {
  width: 100,
  height: 100
};


Basic.storyName = 'Skeleton Rectangle';