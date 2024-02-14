import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonText } from '../components/Skeletons/Skeletons';

export default {
  title: 'Skeletons/Skeleton Text',
  component: SkeletonText,
} as ComponentMeta<typeof SkeletonText>;

export const Basic: ComponentStory<typeof SkeletonText> = () => (
  <SkeletonText />
);

Basic.storyName = 'Skeleton Text';

