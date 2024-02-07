import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonRow } from '../components/Skeletons/Skeletons';

export default {
  title: 'components/Skeletons/Skeleton Row',
  component: SkeletonRow,
} as ComponentMeta<typeof SkeletonRow>;

export const Basic: ComponentStory<typeof SkeletonRow> = args => (
  <SkeletonRow {...args} />
);

Basic.args = {
  width: '100%'
};

Basic.storyName = 'Skeleton Row';