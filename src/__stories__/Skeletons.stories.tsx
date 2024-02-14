import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SkeletonCircle, QuantityListSkeleton, SkeletonLine } from '../components/Skeletons/Skeletons';
import { View } from 'react-native';

export default {
  title: 'Skeletons',
  component: QuantityListSkeleton,
} as ComponentMeta<typeof QuantityListSkeleton>;

export const Basic: ComponentStory<typeof QuantityListSkeleton> = args => (
  <View style={{ width: '100%', alignItems: 'center' }}>
    <View style={{ flexDirection: 'row', gap: 128 }}>
      <SkeletonCircle size={150} />
      <View style={{ alignItems: 'center' }}>
        <SkeletonCircle size={150} />
        <View style={{ alignItems: 'center', gap: 16, marginTop: 32, width: '100%' }}>
          <SkeletonLine width={120} />
          <SkeletonLine width={150} />

        </View>
      </View>
      <SkeletonCircle size={150} />
    </View>

    <View style={{ width: '80%', marginTop: 16 }}>
      <QuantityListSkeleton {...args} />
    </View>
  </View>
);

Basic.args = {
  count: 5
};

Basic.storyName = 'Skeletons';
